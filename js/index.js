import { CountUp } from "./countUp.js";

const firstStamp = new CircleType(document.querySelector(".first-stamp"));
// firstStamp.radius(1);

const secondStamp = new CircleType(document.querySelector(".second-stamp"));
// secondStamp.radius(1);

const tappable = document.querySelector(".tappable");
const bankDeets = document.querySelector(".bank");
const infos = document.querySelector(".infos");
const tooltip = document.querySelector(".tooltip");
const taptocopy = document.querySelector(".taptocopy");

const button = document.querySelector(".button");
if (document.defaultView.innerWidth < 480) {
  button.innerHTML = "Tap to Donate 🐶";
  taptocopy.innerHTML = "Or tap to copy our bank details:";
}

const progressBar = document.querySelector(".progressbar");
const bodyTag = document.querySelector("body");

document.addEventListener("scroll", () => {
  const pixels = window.pageYOffset;
  const pageHeight = bodyTag.getBoundingClientRect().height;
  const totalScroll = pageHeight - window.innerHeight;

  const percentage = pixels / totalScroll;
  progressBar.style.width = `${percentage * 100}%`;

  if (percentage * 100 > 50) {
    progressBar.style.backgroundColor = "#4959df";
  } else {
    progressBar.style.backgroundColor = "#fe9f99";
  }
});

const firstPics = document.querySelector(".first-pics");
const firstImgs = firstPics.querySelectorAll("img");

const secondPics = document.querySelector(".second-pics");
const secondImgs = secondPics.querySelectorAll("img");

let current = 0;
let z = 1;

firstPics.addEventListener("click", () => {
  current++; // this is like a loop, everytime we click it adds one, and we use this number as the array index
  if (current > firstImgs.length - 1) {
    current = 0;
  } // has to go right after we add one to current

  firstImgs.forEach((image) => {
    image.style.animation = "";
  });

  z++; // we bring it to the front adding +1 to the highest current zindex
  firstImgs[current].style.zIndex = z;
  firstImgs[current].style.animation = "fade 0.2s ease";
});

secondPics.addEventListener("click", () => {
  current++; // this is like a loop, everytime we click it adds one, and we use this number as the array index
  if (current > secondImgs.length - 1) {
    current = 0;
  } // has to go right after we add one to current

  secondImgs.forEach((image) => {
    image.style.animation = "";
  });

  z++; // we bring it to the front adding +1 to the highest current zindex
  secondImgs[current].style.zIndex = z;
  secondImgs[current].style.animation = "fade 0.2s ease";
});

firstPics.addEventListener("mouseover", () => {
  firstImgs.forEach((image) => {
    const x = 25 * Math.floor(Math.random() * 5) - 50;
    const y = 25 * Math.floor(Math.random() * 5) - 50;
    image.style.transform = `translate(${x / 3}px, ${y / 3}px)`;
  });
});

firstPics.addEventListener("mouseout", () => {
  firstImgs.forEach((image) => {
    const integer = Math.round(Math.random()) * 2 - 1;
    const degrees = Math.floor(Math.random() * 10) - 3;
    image.style.transform = `translate(0px, 0px) rotate(${
      integer * degrees
    }deg)`;
  });
});

secondPics.addEventListener("mouseover", () => {
  secondImgs.forEach((image) => {
    const x = 25 * Math.floor(Math.random() * 5) - 50;
    const y = 25 * Math.floor(Math.random() * 5) - 50;
    image.style.transform = `translate(${x / 3}px, ${y / 3}px)`;
  });
});

secondPics.addEventListener("mouseout", () => {
  secondImgs.forEach((image) => {
    const integer = Math.round(Math.random()) * 2 - 1;
    const degrees = Math.floor(Math.random() * 10 - 3);
    image.style.transform = `translate(0px, 0px) rotate(${
      integer * degrees
    }deg)`;
  });
});

const copy = () => {
  const range = document.createRange();
  range.selectNode(infos);
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect

  tooltip.style.animation = "copy 1s ease";

  setTimeout(function () {
    tooltip.style.animation = "";
  }, 1000);
};

tappable.addEventListener("click", () => {
  copy();
});

const options = {
  decimalPlaces: 2,
  duration: 1.5,
  separator: ".",
  decimal: ",",
};
let firstnr = new CountUp("firstnumber", 2255.17, options);
let secondnr = new CountUp("secondnumber", 1500.0, options);
let thirdnr = new CountUp("thirdnumber", 4000.0, options);
let fourthnr = new CountUp("fourthnumber", 1800.0, options);

console.log("🐶 🐶 🐶 SAVE BUDDY 🐶 🐶 🐶 hehe.");

const revealpink = document.querySelector(".revealpink");
const revealpurple = document.querySelector(".revealpurple");
const revealwhite = document.querySelector(".revealwhite");

const title = document.querySelector(".title");
const intro = document.querySelectorAll("div.firstcontainer > p");
const firststamp = document.querySelector(".first-stamp");
const firstpics = document.querySelector(".first-pics");
const languages = document.querySelector(".languages");
const purpletext = document.querySelectorAll("div.purple-section > .container");
const pinktext = document.querySelectorAll("div.pink-section > .container");
const bank = document.querySelectorAll("div.pink-section > span");

const firstTL = gsap.timeline();
const secondTL = gsap.timeline();
const thirdTL = gsap.timeline();

if (window.pageYOffset !== 0) {
  revealpink.style.width = 0;
  revealpurple.style.width = 0;
}

firstTL
  .to([revealpink, revealpurple], {
    duration: 1.2,
    width: 0,
    // skewX: 4,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  })
  .add(function () {
    document.querySelector("body").classList.remove("no-scroll");
  })
  .from(title, {
    delay: -0.5,
    y: 25,
    opacity: 0,
    duration: 0.6,
    ease: "power3.inOut",
  })
  .from(languages, {
    delay: -0.3,
    y: 25,
    opacity: 0,
    duration: 0.6,
    ease: "power3.inOut",
  })
  .from(intro, {
    delay: -0.5,
    y: 25,
    opacity: 0,
    duration: 0.6,
    ease: "power3.inOut",
  })
  .from(firststamp, {
    delay: -0.5,
    x: -25,
    opacity: 0,
    duration: 0.6,
    ease: "power3.inOut",
  })
  .from(firstpics, {
    delay: -0.5,
    opacity: 0,
    duration: 0.6,
    ease: "power3.inOut",
  });

secondTL.from(purpletext, {
  delay: -0.5,
  y: 225,
  opacity: 0,
  duration: 2.6,
  ease: "power3.inOut",
});

thirdTL
  .from(pinktext, {
    delay: -0.5,
    y: 220,
    opacity: 0,
    duration: 1,
    ease: "power3.inOut",
  })
  .from(button, {
    delay: -0.5,
    x: 2220,
    opacity: 0,
    duration: 1,
    ease: "power3.inOut",
  })
  .from(bank, {
    delay: -0.5,
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "power3.inOut",
  });

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: "#firsttrigger",
  triggerHook: 0,
  reverse: false,
})
  .addIndicators()
  .setTween(secondTL)
  .addTo(controller);

var secscene = new ScrollMagic.Scene({
  triggerElement: "#secondtrigger",
})
  .on("start", function () {
    firstnr.start();
    setTimeout(function () {
      secondnr.start();
    }, 200);
    setTimeout(function () {
      thirdnr.start();
    }, 400);
    setTimeout(function () {
      fourthnr.start();
    }, 600);
  })
  .addIndicators()
  .addTo(controller);

  const thiscene = new ScrollMagic.Scene({
    triggerElement: "#thirdtrigger",
    triggerHook: 0,
    reverse: false,
  })
    .addIndicators()
    .setTween(thirdTL)
    .addTo(controller);

// const banner = document.querySelector("#bannerBg");
// const bannerAddition = document.querySelector("#bannerBgAddition");
