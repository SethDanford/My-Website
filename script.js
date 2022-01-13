function playAudio() {
    var audio2 = new Audio('sounds/Startup1.wav');
    audio2.play();
    console.log("Defenitly");
}

const allButtons = document.querySelectorAll('.btn');
allButtons.forEach(btn => btn.addEventListener('click', playAudio));


// The following code is for the Corner Clock only.

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  if (secondsDegrees == 359) {
    secondHand.style.visibility = "hidden";
  } else if (secondsDegrees == 1) {
    secondHand.style.visibility = "visible";
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();

// The following code is for my project flex panels.

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  fader();
  console.log('Hello');
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


// For fading in and out text. ----------------------------------- NOT WORKING!!!!!
const target = document.getElementById("pan1");

var toggler = true;
function fader() {
  console.log("CALLED");
  if (toggler == true) {
    target.style.opacity = '0';
    toggler = false;
  } else {
    toggler = true;
    target.style.opacity = '1';
  }
}

target.addEventListener('click', () => target.style.opacity = '0');

    

//-----------------------------------------------------------------------------
  /**
   * The following code is meant to blur the whole page into existance.
   * 
   * This function kinda sux because it sleeps the entire tab, redering it
   * unresponsive.
   */ 
//   function sleep(miliseconds, suffix) {
//     var currentTime = new Date().getTime();
 
//     while (currentTime + miliseconds >= new Date().getTime()) {
//       document.documentElement.style.setProperty(`--${'blur'}`, suffix);
//     }
//  }

//   var completed;
//   if (completed != true) {
//     var suffix = 100;
//     while(suffix != 0) {
//       console.log("LOOPING");
//       sleep(1, suffix);
//       suffix -= 1;
//     }
//     completed = true;
//   }
//-----------------------------------------------------------------------------
