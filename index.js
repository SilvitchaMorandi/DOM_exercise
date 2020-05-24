// To verify if Javascript is working
//alert("it is working!");

var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}
/* DETECTING KEYBOARD PRESS */
document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

/* makeSound function */
function makeSound(key) {

  switch (key) {
    case "s":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "i":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "l":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "v":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;

    case "y":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case "a":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    default:
      console.log(key);
  }

}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 200);
}
