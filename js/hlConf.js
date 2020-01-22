hljs.configure({
	tabReplace: "  "
});
document.addEventListener("DOMContentLoaded", event => {
	document.querySelectorAll("div code").forEach(block => {
		hljs.highlightBlock(block);
	});
});
