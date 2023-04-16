document.getElementById("wikipedia-search").addEventListener("input", (e)=>{
    document.getElementById("wikipedia-autocomplete-container").innerHTML = ''
    fetch(`/wikipedia/autocomplete?query=${document.getElementById("wikipedia-search").value}`).then((data)=>{return data.json()}).then((suggesionData)=>{
        console.log(suggesionData);
        document.getElementById("wikipedia-autocomplete-container").innerHTML = suggesionData.data
    })

})


// var socket = io()