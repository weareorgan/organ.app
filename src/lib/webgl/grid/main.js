import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import vertex from './shaders/vertex.glsl?raw';
import fragment from './shaders/fragment.glsl?raw';
// import Stats from 'stats.js';

export default class Experience {
	constructor(canvas) {
		window.experience = this;

		this.canvas = canvas;

		this.scene = new THREE.Scene();

		this.setRenderer();
		this.setCamera();
		this.setMesh();
		this.setEvents();
		this.setTick();
	}

	setMesh() {
		this.mesh = new THREE.Mesh(
			new THREE.BoxGeometry(1, 2, 1),
			new THREE.ShaderMaterial({
				vertexShader: vertex,
				fragmentShader: fragment,
				uniforms: {
					uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
					uTime: { value: 0 }
				}
			})
		);

		this.mesh.scale.set(this.viewportWidth, this.viewportHeight, 0);

		this.scene.add(this.mesh);
	}

	setCamera() {
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
		this.camera.position.set(0, 0, 3);

		this.cameraUtils = () => {
			this.vFov = THREE.MathUtils.degToRad(this.camera.fov);
			this.viewportHeight = 2 * Math.tan(this.vFov / 2) * this.camera.position.z;
			this.viewportWidth = this.viewportHeight * this.camera.aspect;
		};
		this.cameraUtils();
	}

	setEvents() {
		this.resize = this.resize.bind(this);
		window.addEventListener('resize', this.resize);
	}

	resize() {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();

		this.renderer.setSize(window.innerWidth, window.innerHeight);

		this.cameraUtils();
		this.mesh.scale.set(this.viewportWidth, this.viewportHeight, 0);

		console.log('RESIZEEE');

		this.mesh.material.uniforms.uResolution.value = new THREE.Vector2(
			window.innerWidth,
			window.innerHeight
		);
	}

	setRenderer() {
		this.renderer = new THREE.WebGLRenderer({
			canvas: this.canvas,
			antialias: true
		});
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.setClearColor('white');
	}

	setTick() {
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

		this.tick = this.tick.bind(this);
		this.myReq = requestAnimationFrame(this.tick);
	}

	tick(t) {
		// this.stats.begin();

		this.elapsedTime = t / 1000;
		this.deltaTime = this.elapsedTime - this.previousTime;
		this.previousTime = this.elapsedTime;

		this.renderer.render(this.scene, this.camera);

		this.mesh.material.uniforms.uTime.value = this.elapsedTime;

		// this.stats.end();
		this.myReq = requestAnimationFrame(this.tick);
	}

	destroy() {
		window.removeEventListener('resize', this.resize);

		cancelAnimationFrame(this.myReq);
		this.renderer.dispose();
	}
}
