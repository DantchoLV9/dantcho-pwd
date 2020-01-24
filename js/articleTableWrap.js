const tableWrap = () => {
	const tables = document.querySelectorAll("table");

	tables.forEach(table => {
		let wrapper = document.createElement("div");
		table.parentNode.insertBefore(wrapper, table);
		wrapper.classList.add("table");
		wrapper.appendChild(table);
	});
};

tableWrap();
