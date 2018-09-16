# GifTastic
BASIC:
- In the js code, I made a AJAX call from gipjhy website, and append related response info using for loop.

- I render the button on top of the page, in some topic I am interested in by renderbutton function on line 89. Then from the input field, capture the content user typed in, and call the renderbutton function again.

- When dynamically creating <img> elements, I set both still image and animate gifs, line 45-51:
var personImage = $("<img>");
personImage.attr("src", results[i].images.fixed_height.url);
personImage.attr("data-still", results[i].images.fixed_height_still.url);
personImage.attr("data-animate", results[i].images.fixed_height.url);
personImage.attr("src", results[i].images.fixed_height_still.url);
personImage.attr("data-state", "still");
personImage.attr("class", "gif");

- When click on the image, it will switch from still to animate by code line 64:
// onclick event to control the gif to be still or animate
$(".gif").on("click", function() {
var state = $(this).attr("data-state");
if (state === "still") {
$(this).attr("src", $(this).attr("data-animate"));
$(this).attr("data-state", "animate");
} else {
$(this).attr("src", $(this).attr("data-still"));
$(this).attr("data-state", "still");
}

BONUS:
- I created a dowload button for each image, and append to the same image div, code line 38-43: The download function works well on mac Chrome.
var link = $("<a>").html(downloadbutton);
link.attr("href", results[i].images.fixed_height.url);
link.attr("download", "Download")
var downloadbutton = $("<button>")
downloadbutton.addClass("download");
downloadbutton.text("download");

- In the AJAX call there are two variables, one is the name, the other is the display number, and number is preset as 10:(LIne 9, LIne 20)
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
person + "&api_key=dc6zaTOxFJmzC&limit=" + number;

I am trying to created the onlick event of the "addten" button so everytime user clicked it, it will load ten more new images, but it is not working properly so I commented it out at line 14-18

