document.getElementById("wikipedia-search").addEventListener("input", (e) => {
    document.getElementById("wikipedia-autocomplete-container").innerHTML = ''
    fetch(`/wikipedia/autocomplete?query=${document.getElementById("wikipedia-search").value}`).then((data) => { return data.json() }).then((suggesionData) => {
        setTimeout(() => {
        document.getElementById("wikipedia-autocomplete-container").innerHTML = suggesionData.data
        }, 400);
    })

})

function selectWikipediaSearchSuggestion(wikipediaSearchSuggestion) {
    document.getElementById("wikipedia-search").value = wikipediaSearchSuggestion
}

function searchWikipedia() {
    if (document.getElementById("wikipedia-search").value) {
        window.location = window.location + "wikipedia/?search=" + document.getElementById("wikipedia-search").value
    }
}

// var socket = io()