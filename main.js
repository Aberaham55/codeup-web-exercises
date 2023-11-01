const changeHeaderBtn = document.querySelector("#change-heading");
const changedHeader = document.querySelector("#main-heading");
changeHeaderBtn.addEventListener("click", function () {
    changedHeader.innerHTML ="I control the DOM";
} )

const userInputBtn = document.querySelector("#getInput");
const userInput = document.querySelector("#userInput");
const showInput = document.querySelector("#showInput");
userInputBtn.addEventListener("click", function (){
    showInput.innerText = userInput.value;
})

const changes = document.querySelector("#changes");
changes.addEventListener("mouseenter", function (){
    changes.style.color = "pink";
})

const section = document.querySelector("#serifChanger");
section.addEventListener("mouseenter", function (){
    section.classList.add("sans-serif");
})

const morePar = document.querySelector("#moreParagraphs");
const newParagraph = document.createElement("p");
morePar.appendChild(newParagraph);
const newParBtn = document.querySelector("#newParagraph");
newParBtn.addEventListener("click", function (){
    newParagraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda enim hic illum impedit ipsa iure mollitia nam possimus quae qui? Atque dolores laudantium, minus officiis pariatur quo repellendus soluta ullam.";
})

const bigSmallSection = document.querySelector("#big-and-small");
bigSmallSection.addEventListener("mouseenter", function () {
    bigSmallSection.classList.toggle("go-big");
})

const myTimeOut = setTimeout(displayNewContent, 3000);
const domContent = document.createElement("p");
changeHeaderBtn.appendChild(domContent);
function displayNewContent () {
    domContent.innerText = "Document Object Model";
}
// console.log(myTimeOut);


const image = document.querySelector("img")
image.addEventListener("mouseenter", function (){
    image.src = "img/OfficialCodeupLogo.png";
})

//
// const clickButton = document.querySelector("ul").lastElementChild;
// clickButton.addEventListener("click", removeAndReinsertH2Elements);
//
// let h2Info = [];
//
// function removeAndReinsertH2Elements() {
//     const h2Elements = Array.from(document.querySelectorAll('h2'));
//     h2Info = h2Elements.map(element => ({element: element, nextSibling: element.nextSibling, parent: element.parentNode}));
//     h2Elements.forEach(element => element.remove());
//
//     setTimeout(() => {
//         h2Info.forEach(info => {
//             info.parent.insertBefore(info.element, info.nextSibling);
//         });
//     }, 1000);
// }
const clickButton = document.querySelector("ul").lastElementChild;
let intervalId = null;
clickButton.addEventListener("click", () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    } else {
        intervalId = setInterval(removeAndReinsertH2Elements, 1000);
    }
});

let h2Info = [];

function removeAndReinsertH2Elements() {
    if (h2Info.length === 0) {
        const h2Elements = Array.from(document.querySelectorAll('h2'));
        h2Info = h2Elements.map(element => ({element: element, nextSibling: element.nextSibling, parent: element.parentNode}));
        h2Elements.forEach(element => element.remove());
    } else {
        h2Info.forEach(info => {
            info.parent.insertBefore(info.element, info.nextSibling);
        });
        h2Info = [];
    }
}
// const clickMeBtn = document.querySelector('ul');
let buttons = document.querySelectorAll('li button');
let paragraphs = document.querySelectorAll('li p')

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        paragraphs[index].textContent = 'You changed me!';
    });
});



