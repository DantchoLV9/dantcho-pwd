const elementCollapse = () => {
	const posts = document.querySelectorAll(".post-item");

	posts.forEach(post => {
		post.firstElementChild.addEventListener("click", () => {
			console.log(post);
			post.classList.toggle("active");
		});
	});
};

elementCollapse();
