<nav>
	<a href="/">Home</a>
	<a href="/buildinpublic">Build in public</a>
	<a href="/blog">Blog</a>
	<a href="/contact">Contact</a>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		gap: 70px;
		height: 50px;
		align-items: center;
		background: rgba(255, 255, 255, 0.75);
		backdrop-filter: blur(10px);
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999;

		& a {
			transition: color 0.3s;
			&:hover {
				color: var(--grey2);
			}
		}
	}
</style>
