import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
// import Stats from './Stats';

export default class Experience {
	constructor(canvas) {
		window.experience = this;

		this.canvas = canvas;

		this.scene = new THREE.Scene();

		const rgbeLoader = new RGBELoader();
		rgbeLoader.load('/webgl/env.hdr', (environmentMap) => {
			environmentMap.mapping = THREE.EquirectangularReflectionMapping;
			this.scene.environment = environmentMap;
		});

		this.setMesh();
		this.setPhysics();
		this.setCamera();
		this.setLights();
		this.raycast();
		this.events();
		this.setRenderer();
		this.update();
	}

	setMesh() {
		this.sphere = new THREE.Mesh(
			new THREE.SphereGeometry(1, 32, 32),
			new THREE.MeshStandardMaterial({
				map: new THREE.TextureLoader().load('/webgl/cross.jpg'),
				metalness: 0.1,
				roughness: 0.2,
				envMapIntensity: 2
			})
		);
		this.sphere.castShadow = true;
		this.sphere.receiveShadow = true;

		this.mouseSphere = new THREE.Mesh(
			new THREE.SphereGeometry(3, 32, 32),
			new THREE.MeshStandardMaterial({ color: 'red', visible: false })
		);

		this.scene.add(this.mouseSphere);
	}

	setPhysics() {
		this.world = new CANNON.World({
			gravity: new CANNON.Vec3(0, 5, 0) // m/s²
		});

		this.objectsToUpdate = [];

		const defaultContactMaterial = new CANNON.ContactMaterial(
			new CANNON.Material('default'),
			new CANNON.Material('default'),
			{ friction: 1, restitution: 0.0 }
		);

		this.world.defaultContactMaterial = defaultContactMaterial;

		for (let i = 0; i < 20; i++) {
			this.createSphere(1, {
				x: (Math.random() - 0.5) * 20,
				y: -15 - Math.random() * 10,
				z: (Math.random() - 0.5) * 10
			});
		}

		// mouse
		this.mouseBody = new CANNON.Body({
			shape: new CANNON.Sphere(3),
			type: CANNON.Body.STATIC
		});
		this.world.addBody(this.mouseBody);
	}

	updatePhysics() {
		this.world.fixedStep();

		this.objectsToUpdate.forEach((obj) => {
			obj.mesh.position.copy(obj.body.position);
			obj.mesh.quaternion.copy(obj.body.quaternion);

			obj.body.applyForce(
				new CANNON.Vec3(-obj.mesh.position.x, -obj.mesh.position.y - 1, -obj.mesh.position.z)
			);
		});

		// mouse
		if (this.raycastPoint.x === 0 && this.raycastPoint.y === 0) {
			this.mouseBody.position.copy({ x: 10000, y: 1000, z: 0 });
			this.mouseSphere.position.copy(this.mouseBody.position);
		} else {
			this.mouseBody.position.copy(this.raycastPoint);
			this.mouseSphere.position.copy(this.mouseBody.position);
		}
	}

	createSphere(radius, position) {
		const mesh = this.sphere.clone();
		mesh.scale.set(radius, radius, radius);
		mesh.position.copy(position);

		this.scene.add(mesh);

		const body = new CANNON.Body({
			mass: 0.8,
			shape: new CANNON.Sphere(radius),
			position: position,
			linearDamping: 0.65, // important
			angularDamping: 0.1 // important
		});

		this.world.addBody(body);

		// update array
		this.objectsToUpdate.push({
			mesh: mesh,
			body: body
		});
	}

	setCamera() {
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
		this.camera.position.set(0, 0, 10);
		this.camera.lookAt(0, 0, 0);

		// this.controls = new OrbitControls(this.camera, this.canvas);
	}

	setLights() {
		const directional = new THREE.DirectionalLight('white', 1);
		directional.castShadow = true;
		directional.position.set(10, 10, 10);

		const ambiant = new THREE.AmbientLight('white', 1);

		this.pointLight = new THREE.PointLight('white', 55, 10, 0.1);
		this.pointHelper = new THREE.PointLightHelper(this.pointLight, 1, new THREE.Color('red'));

		this.pointLight.position.x = -10;
		this.pointLight.position.y = -1.5;

		this.scene.add(directional, ambiant, this.pointLight);
	}

	events() {
		this.resizeEvent = this.resize.bind(this);
		window.addEventListener('resize', this.resizeEvent);

		this.pointermoveEvent = this.pointerMove.bind(this);
		window.addEventListener('pointermove', this.pointermoveEvent);
		window.addEventListener('touchmove', this.pointermoveEvent);
	}

	pointerMove(e) {
		this.pointer.x = ((e.clientX || e.touches[0].clientX) / window.innerWidth) * 2 - 1;
		this.pointer.y = -((e.clientY || e.touches[0].clientY) / window.innerHeight) * 2 + 1;
	}

	raycast() {
		this.pointer = new THREE.Vector2();
		this.raycaster = new THREE.Raycaster();
		this.raycastPoint = new THREE.Vector3();

		this.raycastMesh = new THREE.Mesh(
			new THREE.PlaneGeometry(30, 30),
			new THREE.MeshBasicMaterial({ color: 'red', visible: false })
		);

		this.scene.add(this.raycastMesh);
	}

	updateRaycast() {
		this.raycaster.setFromCamera(this.pointer, this.camera);

		this.instersect = this.raycaster.intersectObjects([this.raycastMesh]);

		if (this.instersect.length > 0) {
			this.raycastPoint.copy(this.instersect[0].point);
		}
	}

	resize() {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();

		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}

	setRenderer() {
		this.renderer = new THREE.WebGLRenderer({
			canvas: this.canvas,
			antialias: true
		});
		this.renderer.setClearColor('white');
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
		this.renderer.toneMappingExposure = 1.5;
		this.renderer.shadowMap.enabled = true;
	}

	update() {
		/**
		 * Stats
		 */
		// this.stats = new Stats();
		// this.stats.showPanel(0);
		// document.body.appendChild(this.stats.dom);

		/**
		 * RAF
		 */
		this.previousTime = 0;

		this.myReq = requestAnimationFrame(() => this.tick());
	}

	tick(t) {
		// this.stats.begin();

		this.elapsedTime = t / 1000;
		this.deltaTime = this.elapsedTime - this.previousTime;
		this.previousTime = this.elapsedTime;

		this.renderer.render(this.scene, this.camera);

		this.updateRaycast();
		this.updatePhysics();

		// this.stats.end();
		this.myReq = requestAnimationFrame(() => this.tick());
	}

	destroy() {
		window.removeEventListener('resize', this.resizeEvent);
		window.removeEventListener('pointermove', this.pointermoveEvent);
		window.removeEventListener('touchmove', this.pointermoveEvent);

		cancelAnimationFrame(this.myReq);

		this.renderer.dispose();
	}
}
