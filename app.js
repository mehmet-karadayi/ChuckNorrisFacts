var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
		"x-rapidapi-key": "0c03a9cd66mshaa052d94f80d3b1p170a78jsnd80b6acdf76d",
		"accept": "application/json"
	}
}

var pics =[
    "Imgs/Chuck1.jpg",
    "Imgs/Chuck2.jpg",
    "Imgs/Chuck3.jpg",
    "Imgs/Chuck4.jpg",
    "Imgs/Chuck5.jpg",
    "Imgs/Chuck6.jpg"
]

var btn = document.querySelector("button");
var img = document.querySelector("img");

var counter = 1;

$.ajax(settings).done(function (response) {
    
    var content = response.value;
    $("#value").append(content);

});

btn.addEventListener("click", function(){
    if (counter === 6){
        counter = 0;
    }
    
    img.src = pics[counter];
    counter++;
    

    $.ajax(settings).done(function (response) {
        $("#value").empty();
        content = response.value;
        $("#value").append(content);

    });
    })

