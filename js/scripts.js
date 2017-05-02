$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var vowels = ["a", "e", "i", "o", "u"]
    var inputString = $("#string-in").val();
    var inputSliced = inputString.slice("");
    alert(inputSliced);
  });
});
