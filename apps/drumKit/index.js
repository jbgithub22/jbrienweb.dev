// function handleClick(key) {
//     switch (key) {
//         case "w":
//             var audio = new Audio("sounds/tom-1.mp3");
//             audio.play();
//             break;

//         case "a":
//             var audio = new Audio("sounds/tom-2.mp3");
//             audio.play();
//             break;

//         case "s":
//             var audio = new Audio("sounds/tom-3.mp3");
//             audio.play();
//             break;

//         case "d":
//             var audio = new Audio("sounds/tom-4.mp3");
//             audio.play();
//             break;

//         case "j":
//             var audio = new Audio("sounds/snare.mp3");
//             audio.play();
//             break;

//         case "k":
//             var audio = new Audio("sounds/crash.mp3");
//             audio.play();
//             break;

//         case "l":
//             var audio = new Audio("sounds/kick-bass.mp3");
//             audio.play();
//             break;

//         default:
//             console.log()
//             break;
//     }
// }

function handleClick(key) {
    let audio = {
        "w" : new Audio("sounds/tom-1.mp3"),
        "a" : new Audio("sounds/tom-2.mp3"),
        "s" : new Audio("sounds/tom-3.mp3"),
        "d" : new Audio("sounds/tom-4.mp3"),
        "j" : new Audio("sounds/snare.mp3"),
        "k" : new Audio("sounds/crash.mp3"),
        "l" : new Audio("sounds/kick-bass.mp3")
    }
    if (audio.hasOwnProperty(key)) {
        audio[key].play();
    }
}

// function buttonAnimation(currentKey) {
//     var activeButton = document.querySelector("." + currentKey)
//     activeButton.classList.add("pressed");
//     setTimeout(function() {
//         activeButton.classList.remove("pressed")
//     }, 100);
// }


function buttonAnimation(currentKey) {
    var activeButton = $("." + currentKey);
    activeButton.addClass("pressed");
    setTimeout(function() {
        activeButton.removeClass("pressed")
    }, 100);
}

// var drumButtons = $(".drum")
// var numberOfDrums = drumButtons.length

// for (var i = 0; i < numberOfDrums; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//         var buttonInnerHTML = this.innerHTML;
//         handleClick(buttonInnerHTML);
//         buttonAnimation(buttonInnerHTML);
//     } );
// }

$("button").click(function() {
    var buttonInnerHTML = this.innerHTML;
    handleClick(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
})

// document.addEventListener("keydown", function(event) {
//     handleClick(event.key);
//     buttonAnimation(event.key);
// })

$(document).keydown(function(event) {
    handleClick(event.key);
    buttonAnimation(event.key);
})