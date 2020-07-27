const toggleNav = () => {
	const navToggler = document.querySelector(".nav-toggler");
	const navHeight = document.querySelector("nav").offsetHeight;
	const navLinksContainer = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-link");
	const mainContainer = document.querySelector("main");

	navToggler.addEventListener("click", () => {
		navLinksContainer.classList.toggle("nav-toggled");
		navLinksContainer.style.top = `${navHeight}px`;
		navToggler.classList.toggle("toggle");
		navLinks.forEach((navLink, index) => {
			if (navLink.style.animation) {
				navLink.style.animation = "";
				if (!Object.is(mainContainer, null)) {
					mainContainer.style.animation =
						"movePageContentLeft 0.5s ease forwards";
				}
			} else {
				navLink.style.animation = `navLinkFadeIn 0.3s ease forwards ${
					index / 7 + 0.5
				}s`;
				if (!Object.is(mainContainer, null)) {
					mainContainer.style.animation =
						"movePageContentRight 0.5s ease forwards";
				}
			}
		});
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth > 576) {
			if (navLinksContainer.classList.contains("nav-toggled")) {
				navToggler.click();
			}
		}
	});
};

toggleNav();
