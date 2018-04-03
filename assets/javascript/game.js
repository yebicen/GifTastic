$(document).ready(function() {
   //initial array
   var topics = ["Harry Porter", "Snow White", "Lion King", "Panda"];

// displayGif function 
      function displayGif() {
       $("#gifs-appear-here").empty();
      var person = $(this).attr("data-name");
      var number = 10;
      
       console.log(number);
      console.log(person);

    //   $("#addTen").on("click", function(){
    //     number = 20;
    //     console.log(number);
    
    //    });

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=" + number;

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .then(function(response) {
            console.log(response);
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");
           //
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
          //
            var link = $("<a>").html(downloadbutton);
            link.attr("href", results[i].images.fixed_height.url);
            link.attr("download", "Download")
            var downloadbutton = $("<button>")
            downloadbutton.addClass("download");
            downloadbutton.text("download");
          //
            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);
            personImage.attr("data-still", results[i].images.fixed_height_still.url);
            personImage.attr("data-animate", results[i].images.fixed_height.url);
            personImage.attr("src", results[i].images.fixed_height_still.url);
            personImage.attr("data-state", "still");
            personImage.attr("class", "gif");
            
          //
            gifDiv.prepend(link);
            gifDiv.prepend(personImage);
            gifDiv.prepend(p);
            
            $("#gifs-appear-here").prepend(gifDiv);
          //end of for loop
          }


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
//end of the gif still/animate function
    });

    //    $("#addTen").on("click", function(){
    //     number = 20;
    //     console.log(number);
    
    //    });

//end of AJAX call
    });

 //end of displaygif function   
    }

// Function for displaying data
function renderButtons() {
$("#buttons").empty();
// Looping through the array
for (var i = 0; i < topics.length; i++) {

  var a = $("<button>");
  // Adding a class to our button
  a.addClass("character-btn");
  a.addClass("btn btn-info");
 
  // Adding a data-attribute
  a.attr("data-name", topics[i]);
  // Providing the initial button text
  a.text(topics[i]);
  // Adding the button to the buttons-view div
  $("#buttons").append(a);
}
}


// This function handles events where a submit new character button is clicked
$("#submit").on("click", function(event) {
    console.log("------")
event.preventDefault();
// This line grabs the input from the textbox
var character = $("#character-input").val().trim();

// Adding character from the textbox to our array
topics.push(character);
console.log(character);
console.log(topics);

// Calling renderButtons which handles the processing of our character array
renderButtons();
});

// Adding click event listeners 
$(document).on("click", ".character-btn", displayGif);


 // Calling the renderButtons function to display the intial buttons
 renderButtons();

//end of document ready
})
