var vowels = ["a", "e", "i", "o", "u"];
var ending = "ay";

var translate = function(latin) {
for (var i=0; i <= latin.length; i+=1 ) {
 if (latin[0] === vowels[i]) {
   var result = latin.concat(ending)
    }
  }
}




$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
     event.preventDefault();
     var latin = $("input#latin").val();
     var result = translate(latin);
     $("#result").text();
      alert("hey")
   });
});
