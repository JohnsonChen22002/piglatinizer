$(document).ready(function() {
  $("button").click(function() {
    var message = $("input").val();



    var messageSplit = sentencetoword(message);


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



function sentencetoword(sentence) {
  var word = sentence.split(' ');
  return word;
}

function wordToPigLatin(word) {
  var FirstLetter = word.slice(0, 1);
  isVowel(FirstLetter);
  if (isVowel(FirstLetter)){
    return word + "way";
  } else {
    for (var i = 0; i < word.length; i++){
      
      if (isVowel(word[i])) {
      word.slice(0, )
      } 
    }
  }
  //console.log(FirstLetter);

}


function isVowel(letter) {
  if (letter == "a" || letter == "e" || letter == "i" ||
    letter == "o" || letter == "u") {
    return true;
  }
  else {
    return false;
  }
}

