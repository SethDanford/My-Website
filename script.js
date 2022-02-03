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
const panelText1 = document.getElementById("pan1");
const panelText2 = document.getElementById("pan2");
const panelText3 = document.getElementById("pan3");
const panelText4 = document.getElementById("pan4");


function fade(target) {
  console.log("TARGET AQUIRED!")
  console.log(target.style.opacity)

  if (target.style.opacity == '1') {
    target.style.opacity = '0';
    console.log(target.style.opacity)
  } else if (target.style.opacity == '0') {
    target.style.opacity = '1';
    console.log(target.style.opacity)
  } else {
    target.style.opacity = '0';
    console.log(target.style.opacity)
  }
}

panels[0].addEventListener('click', () => fade(panelText1));
panels[1].addEventListener('click', () => fade(panelText2));
panels[2].addEventListener('click', () => fade(panelText3));
panels[3].addEventListener('click', () => fade(panelText4));

    

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
