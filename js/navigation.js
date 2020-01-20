const navSlide = () => {
	const burger = document.querySelector(".burger");
	const navigationElementHeight = document.querySelector("#navigation-bar")
		.offsetHeight;
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links a");
	const pageContent = document.querySelector(".content");

	window.addEventListener("resize", () => {
		if (window.innerWidth > 576) {
			nav.classList.remove("nav-active");
			burger.classList.remove("toggle");
			pageContent.style.animation = "";
			navLinks.forEach((link, index) => {
				if (link.style.animation) {
					link.style.animation = "";
				}
			});
		}
	});

	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");
		nav.style.top = `${navigationElementHeight}px`;

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
				if (!Object.is(pageContent, null)) {
					pageContent.style.animation =
						"movePageContentLeft 0.5s ease forwards";
				}
			} else {
				link.style.animation = `navLinkFadeIn 0.3s ease forwards ${index / 7 +
					0.5}s`;
				if (!Object.is(pageContent, null)) {
					pageContent.style.animation =
						"movePageContentRight 0.5s ease forwards";
				}
			}
		});

		burger.classList.toggle("toggle");
	});
};

navSlide();
