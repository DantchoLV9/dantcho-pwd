const elementCollapse = () => {
	const posts = document.querySelectorAll(".post-item");

	posts.forEach(post => {
		post.firstElementChild.addEventListener("click", () => {
			currentPostElement = post;
			posts.forEach(notCurentPostElement => {
				if (notCurentPostElement !== currentPostElement) {
					notCurentPostElement.classList.remove("active");
				}
			});
			post.classList.toggle("active");
		});
	});
};

elementCollapse();
