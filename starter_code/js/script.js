// ==========================
//
//         Soundmood
//
// ==========================


// ==============================
//
//   Initialize Soundcloud API
//
// ==============================

//
// # Initialize the Soundcloud API client with our client ID
//
SC.initialize({
  client_id: '5aa8e389ba4e24b6106af5159ab3e344'
});


// ===========================
//
//        Document ready
//
// ===========================
//
// # Document ready
//
// $(document).ready() runs once the page DOM is ready for JavaScript
// to execute. A page can't be manipulated safely until the document is ready.
//
$(document).ready(function() {
  // Add click handlers to 'go' and 'random' buttons here.
  $("#go").click(goClicked);
  $("#random").click(randomClicked);
  
});
  


// ===========================
//
//        Play a song
//
// ===========================
//
// # Play a track
//
// Play a track using the Souncdloud Javascript SDK
//
function playOneTrack() {
  // TODO: fill this out
  SC.stream('/tracks/').then(function(player) {
    player.play();
  });


}


// ======================================
//
//    Play a song for the user's mood
//
// ======================================

// The song that is currently playing
var currentSong;

//
// # 'Go' button click handler

//
// 1. Get the user's mood from the form
// 2. Search Souncloud for a song for the mood

// 3. Update jumbotron #moodstatus to dipsplay the mood
//
function goClicked() {
  // TODO: fill this out
  var mood = $("#mood").val();
  searchTracks(mood);
  changeColor(mood);
}

//
// # Search soundcloud tracks

//
// 1. Search soundcloud using the Soundcloud API to find a song that
// matches the user's mood.
// 2. Play the song
// 3. Update jumbotron #songtitle to display the song title
//
// * **mood**, the user's mood.
//
function searchTracks(mood) {
  // TODO: fill this out
  SC.get('/tracks', {
  q: mood , license: 'cc-by-sa'
}).then(function(tracks) {
  var id = tracks[0].id;
  playTrack(id);
});
}

//
// # Play a track
//
// Play a Soundcloud track.
// If there is already a song playing, stop that song first.
//
// Use 'currentSong' to keep track of the song that is playing.
//
// * **trackid**, the ID of the track to play.
//
function playTrack(trackid) {
  // TODO: fill this out
  SC.stream('/tracks/' + trackid).then(function(player) {
    player.play();
  });
}
//its playing the same track for different moods
//
// # Update Jumbotron
//
// Updates the header text to show the user's mood.
// (Optional: change the jumbotron's color)
//
// * **mood**, the user's mood
//
function updateJumboTron(mood) {
  $('#moodstatus').text('It sounds like you are in a ' + randomMood() + ' mood!!');
}


// =======================
//
//      Randomization
//
// =======================

// List of moods
var moodList = ["happy","sad","angry","tired","excited","bored","heartbroken","relaxed","lonely","guilty","scared"];

//
// # 'Random' button click handler
//
// Pick a mood at random from moodList and find a track for that mood.
//
function randomClicked() {
  // TODO: fill this out
  var moodR = randomMood();
  searchTracks(moodR);
  updateJumboTron();
  
}

//
// # Random Mood
//
// Returns a random mood from moodList.
//
function randomMood() {
  // TODO: fill this out
  var pickMood = moodList[Math.floor((Math.random() * 10) + 1)];
  return pickMood;
}



// ========================
//
//     BONUS CHALLENGES
//
// ========================

//
// 1. Change the color of the jumbotron to fit the given mood.
//
// 2. Add a typeahead to the input field that shows the moods in our mood array.
//

//
// 1. Change jumbotron color!
//
//
// # Change the color of the jumbotron
//
// Update the background-color of the jumbotron using jQuery
//
// * **color**, the color to change to
//
function changeColor(mood) {
  // TODO: fill this out
  if (mood == "happy") {
    var color = "pink" ;
    $(".jumbotron").css("background-color", color);
  }
   if (mood == "sad") {
    var color = "blue" ;
    $(".jumbotron").css("background-color", color);
  }
   if (mood == "angry") {
    var color = "red" ;
    $(".jumbotron").css("background-color", color);
  }
   if (mood == "tired") {
    var color = "grey" ;
    $(".jumbotron").css("background-color", color);
  }
   if (mood == "excited") {
    var color = "yellow" ;
    $(".jumbotron").css("background-color", color);
  }
   if (mood == "bored") {
    var color = "purple" ;
    $(".jumbotron").css("background-color", color);
  }
   if (mood == "heartbroken") {
    var color = "black" ;
    $(".jumbotron").css("background-color", color);
  }
  
}

//
// # Get the mood color
//
// 1. Choose a color for the given mood and return it
// ex. If 'happy', then return '#fffff' (white)
// 2. Make sure to return a default color
//
// * **mood**, the user's mood
//
// * returns a color's hex code
//
function getColor(mood) {
  // TODO: fill this out
}


//
// 2. Typeahead
//
// Add a typeahead to the mood input field using the moodList as a source.
//
