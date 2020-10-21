const firstStamp = new CircleType(document.querySelector(".first-stamp"));
firstStamp.radius(1);

const secondStamp = new CircleType(document.querySelector(".second-stamp"));
secondStamp.radius(1);

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

const bankDeets = document.querySelector(".bank");
const infos = document.querySelector(".infos");
const tooltip = document.querySelector(".tooltip");


bankDeets.addEventListener("click", () => {

    const range = document.createRange();
    range.selectNode(infos);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

    tooltip.style.animation = "copy 1s ease"

    setTimeout(function(){ tooltip.style.animation = "" }, 1000);

  console.log("test")
});



const copytext = () => {
   
}

console.log("🐶 🐶 🐶 SAVE BUDDY 🐶 🐶 🐶 hehe.");
