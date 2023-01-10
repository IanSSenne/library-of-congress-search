function gotoSearchUrl(keyword, category) {
	if (keyword.trim().length === 0) return; // expect the keyword to have meaningful content (not whitespace)
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
