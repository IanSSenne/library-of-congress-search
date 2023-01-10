function gotoSearchUrl(keyword, category) {
	if (!category) return; // there is no category selected
	console.log("Hello");
	window.location.assign(
		`./search-results.html?format=${category}&q=${keyword}`
	);
}

document.querySelector("#submitButton").addEventListener("click", (e) => {
	e.preventDefault();
	gotoSearchUrl(
		document.querySelector("#searchKeyWord").value,
		document.querySelector("#format").value
	);
});
