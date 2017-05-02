//Business Logic

var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

//User Interface Logic


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var letters = $("#string-in").val().split("");

    for (index = 0; index < letters.length; index += 1) {
      if (vowels.includes(letters[index])) {
        letters[index] = "-";
      }
    }

    letters = letters.join("");
    $(".output").text(letters);
  });
});
    // var letters = [];
    // letters.push(inputSliced);
    // console.log(inputSliced);
// });
