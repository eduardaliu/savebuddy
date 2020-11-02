import { CountUp } from "./countUp.js";

console.log("🐶 🐶 🐶 Help us save Buddy! 🐶 🐶 🐶");

const firstStamp = new CircleType(document.querySelector(".first-stamp"));
const secondStamp = new CircleType(document.querySelector(".second-stamp"));

document.querySelector("body").classList.add(".no-scroll");

const tappable = document.querySelector(".tappable");
const bankDeets = document.querySelector(".bank");
const infos = document.querySelector(".infos");
const tooltip = document.querySelector(".tooltip");
const taptocopy = document.querySelector(".taptocopy");

const expanders = document.querySelectorAll(".expander");

for (let i = 0; i < expanders.length; i++) {
  expanders[i].addEventListener("click", (e) => {
    let question = e.target;
    let answer = expanders[i].querySelector(".answer");
    let arrow = expanders[i].querySelector("img");
    // console.log(e.target);
    // console.log(question);
    // console.log(answer);
    if (!question.classList.contains("closed")) {
      gsap.to(answer, {
        height: 0,
        opacity: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.to(arrow, {
        rotate: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });
      question.classList.add("closed");
    } else {
      gsap.set(answer, {
        height: "auto",
        opacity: 1,
        ease: "power3.inOut",
      });
      gsap.from(answer, {
        height: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.to(arrow, {
        rotate: 90,
        duration: 0.6,
        ease: "power3.inOut",
      });
      question.classList.remove("closed");
    }
  });
}

const button = document.querySelector(".button");
const buttonDE = document.querySelector(".button.de");
const buttonPT = document.querySelector(".button.pt");
const taptocopyDE = document.querySelector(".taptocopy.de");
const taptocopyPT = document.querySelector(".taptocopy.pt");

if (document.defaultView.innerWidth < 480) {
  button.innerHTML = "Tap to Donate 🐶";
  taptocopy.innerHTML = "Or tap to copy our bank details:";
}
if (buttonPT && document.defaultView.innerWidth < 480) {
  buttonPT.innerHTML = "Doe pelo Transferwise 🐶";
  taptocopyPT.innerHTML = "Toque para copiar nossos dados bancários:";
}
if (buttonDE && document.defaultView.innerWidth < 480) {
  buttonDE.innerHTML = "Hier spenden 🐶";
  taptocopyDE.innerHTML = "Oder hier tippen um unsere Bankinfos zu kopieren:";
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
  current++;
  if (current > firstImgs.length - 1) {
    current = 0;
  }

  firstImgs.forEach((image) => {
    image.style.animation = "";
  });

  z++;
  firstImgs[current].style.zIndex = z;
  firstImgs[current].style.animation = "fade 0.2s ease";
});

secondPics.addEventListener("click", () => {
  current++;
  if (current > secondImgs.length - 1) {
    current = 0;
  }

  secondImgs.forEach((image) => {
    image.style.animation = "";
  });

  z++;
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
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

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

let firstnrRS = new CountUp("firstnumberRS", 15053.67, options);
let secondnrRS = new CountUp("secondnumberRS", 10000.0, options);
let thirdnrRS = new CountUp("thirdnumberRS", 26700.0, options);
let fourthnrRS = new CountUp("fourthnumberRS", 12000.0, options);

const revealpink = document.querySelector(".revealpink");
const revealpurple = document.querySelector(".revealpurple");

const title = document.querySelector(".title");
const intro = document.querySelectorAll("div.firstcontainer > p");
const firststamp = document.querySelector(".first-stamp");
const firstpics = document.querySelector(".first-pics");
const languages = document.querySelector(".languages");
const purpletext = document.querySelectorAll("div.purple-section > .container");
const pinktext = document.querySelectorAll("div.pink-section > .container");
const bank = document.querySelectorAll("div.pink-section > span");
const paypal = document.querySelector(".paypal");
const svg = document.querySelector(".svg");

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
    document.querySelector("body").classList.add(".no-scroll");
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
  y: 200,
  opacity: 0,
  duration: 1,
  ease: "power3.inOut",
});

thirdTL
  .from(pinktext, {
    delay: -0.5,
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "power3.inOut",
  })
  .from(button, {
    delay: -0.5,
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "power3.inOut",
  })
  .from(paypal, {
    delay: -0.5,
    y: 20,
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
  })
  .from(svg, {
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
  //   .addIndicators()
  .setTween(secondTL)
  .addTo(controller);

const secscene = new ScrollMagic.Scene({
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
    firstnrRS.start();
    setTimeout(function () {
      secondnrRS.start();
    }, 200);
    setTimeout(function () {
      thirdnrRS.start();
    }, 400);
    setTimeout(function () {
      fourthnrRS.start();
    }, 600);
  })
  //   .addIndicators()
  .addTo(controller);

const thiscene = new ScrollMagic.Scene({
  triggerElement: "#thirdtrigger",
  triggerHook: 0,
  reverse: false,
})
  //   .addIndicators()
  .setTween(thirdTL)
  .addTo(controller);

const imprint = document.querySelector(".imprint");
const imprintPop = document.querySelector(".imprintpop");

imprint.addEventListener("click", () => {
  if (imprintPop.style.height == "0px") {
    imprintPop.style.opacity = "1";
    imprintPop.style.height = "70px";
  } else {
    imprintPop.style.opacity = "0";
    imprintPop.style.height = "0px";
  }
});

const textPath = document.querySelector("#pathselect");
const textPathPT = document.querySelector("#pathselectpt");
const textPathDE = document.querySelector("#pathselectde");

const donors = [
  "Orlando",
  "Liu",
  "Rafael",
  "Joyce",
  "Anita",
  "Roni",
  "Mei Ling",
  "Annemie",
  "Caro",
  "Jeanette",
  "Kers",
  "Tadas",
  "Greta",
  "Carrie",
  "Niels",
  "Negin",
  "Kristina",
  "John",
  "Karolina",
  "Stefana",
  "Jessy",
  "Fabian",
  "Camis",
  "Farahnaz",
  "Katarina",
  "Joana",
  "Joey",
  "Sofi",
  "Francesco",
  "Leon",
  "Carolas",
  "Jannes",
  "Mimi",
  "Frankie",
  "Constanze",
  "Nadine",
  "Toby",
  "Claudia",
  "Tim",
  "Jenny",
  "Svea",
  "Tobi"
];

const shuffled = (array) => {
  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
};

shuffled(donors)


const donations = donors.join(" 💕 Thank you ");
const donationsPT = donors.join(" 💕 Obrigada ");
const donationsDE = donors.join(" 💕 Danke ");

const repeatedText = new Array(50).fill(donations).join("");
const repeatedTextPT = new Array(50).fill(donationsPT).join("");
const repeatedTextDE = new Array(50).fill(donationsDE).join("");

if (textPath) {
  textPath.innerHTML =
    repeatedText +
    ` <animate attributeName="startOffset" from="10%" to ="-500%" begin="0s" dur="50s" repeatCount="indefinite"/>`;
}
if (textPathPT) {
  textPathPT.innerHTML =
    repeatedTextPT +
    ` <animate attributeName="startOffset" from="10%" to ="-500%" begin="0s" dur="50s" repeatCount="indefinite"/>`;
}
if (textPathDE) {
  textPathDE.innerHTML =
    repeatedTextDE +
    ` <animate attributeName="startOffset" from="10%" to ="-500%" begin="0s" dur="50s" repeatCount="indefinite"/>`;
}
