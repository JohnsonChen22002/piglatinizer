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
    
    
    //var messageSlice = wordToPigLatin(message)
    
    
    
    
    var playerMessage = player(messageSplit);
    
    $("#output").text(playerMessage);

    function player(words) {
      var pigLatinSentence = "";
      for (var i = 0; i < words.length; i++) {
        
        wordToPigLatin(words[i]);
        pigLatinSentence = pigLatinSentence + words[i] + "ay ";
      }
      return pigLatinSentence;
    }
  });
});



function sentencetoPigLatin(sentence) {
  var word = sentence.split(' ');
  return word;
}

function wordToPigLatin(word) {
  var FirstLetter = word.slice(0, 1);
  isVowel(FirstLetter);
  
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
