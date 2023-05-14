window.addEventListener("DOMContentLoaded", () => {
	const hamburger = document.querySelector(".hamburder");
	const menu = document.querySelector(".menu");
	const close = document.querySelector(".menu__close");
	const menuLinks = document.querySelectorAll(".menu__link");
	const closeMenu = () => {
		menu.classList.remove("active");
	};

	hamburger.addEventListener("click", () => {
		menu.classList.add("active");
	});

	menuLinks.forEach(item => {
		item.addEventListener("click", () => {
			closeMenu();
		});
	});
	
	close.addEventListener("click", () => {
		closeMenu();
	});

	window.addEventListener("keydown", (e) => {
		if (e.key == 'Escape') {
			closeMenu();
		};
	});

	new WOW().init();
})