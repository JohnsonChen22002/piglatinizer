// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {
  $("button").click(function() {
    var message = $("input").val();
    var messageSplit = sentencetoPigLatin(message);
    
    
    
    
    
    
    
    
    var playerMessage = player(message);
    $("#output").text(playerMessage);

    function player(word) {
      for (var i = 0; i < 1; i++) {
        $("#output").append(word + "ay");
      }
    }
  });
});



function sentencetoPigLatin(sentence) {
  var words = sentence.split(' ');
  return words;
}

function wordToPigLatin(word) {
  var FirstLetter = word.slice(0, 1);
  
}
// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 



function isVowel(letter) {
  if (letter == "a" || letter == "e" || letter == "i" ||
    letter == "o" || letter == "u") {
    return true;
  }
  else {
    return false;
  }
}



// Create the sentenceToPigLatin function that takes a sentence as a parameter
//Loops through all the words in the sentence and transforms each word
//It should return a transfromed sentance
