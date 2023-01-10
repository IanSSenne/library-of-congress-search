function gotoSearchUrl(keyword, category) {
	if (!category) return; // there is no category selected

	// redirect to the search results including the category and keyword
	window.location.assign(
		`./search-results.html?format=${category}&q=${keyword}`
	);
}

document.querySelector("#submitButton").addEventListener("click", (e) => {
	// prevent the form from submitting
	e.preventDefault();
	// get the values from the form inputs and try to go to the search results page
	gotoSearchUrl(
		document.querySelector("#searchKeyWord").value,
		document.querySelector("#format").value
	);
});
