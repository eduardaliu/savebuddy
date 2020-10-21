
const firstStamp = new CircleType(document.querySelector('.first-stamp'));
firstStamp.radius(1);

const secondStamp = new CircleType(document.querySelector('.second-stamp'));
secondStamp.radius(1);

const firstPics = document.querySelector('.first-pics');
const firstImgs = firstPics.querySelectorAll('img')

const secondPics = document.querySelector('.second-pics');
const secondImgs = secondPics.querySelectorAll('img')

let current = 0;
let z = 1;

firstPics.addEventListener('click', () => {
    current++; // this is like a loop, everytime we click it adds one, and we use this number as the array index
    if (current > firstImgs.length - 1) {
        current = 0;
    }; // has to go right after we add one to current

    firstImgs.forEach(image => {
        image.style.animation = ''
    })

    z++; // we bring it to the front adding +1 to the highest current zindex
    firstImgs[current].style.zIndex = z
    firstImgs[current].style.animation = 'fade 0.2s ease'
})

secondPics.addEventListener('click', () => {
    current++; // this is like a loop, everytime we click it adds one, and we use this number as the array index
    if (current > secondImgs.length - 1) {
        current = 0;
    }; // has to go right after we add one to current

    secondImgs.forEach(image => {
        image.style.animation = ''
    })

    z++; // we bring it to the front adding +1 to the highest current zindex
    secondImgs[current].style.zIndex = z
    secondImgs[current].style.animation = 'fade 0.2s ease'
})


console.log("TESTTTT");
