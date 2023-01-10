function gotoSearchUrl(keyword, category) {
	if (keyword.trim().length === 0) return; // expect the keyword to have meaningful content (not whitespace)
	// redirect to the search results including the category and keyword
	window.location.assign(
		`./search-results.html?format=${category}&q=${keyword}`
	);
}

function getApiResult(arg1, arg2){
    var requestUrl = 'https://www.loc.gov/search/?q='+arg1+'&'+arg2+'&fo=json'
    // requesting api result
    fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
}


document.querySelector("#submitButton").addEventListener("click", (e) => {
	// prevent the form from submitting
	e.preventDefault();
	// get the values from the form inputs and try to go to the search results page
    getApiResult(
        document.querySelector("#searchKeyWord").value,
		document.querySelector("#format").value
    );
    gotoSearchUrl(
		document.querySelector("#searchKeyWord").value,
		document.querySelector("#format").value
	);
});


