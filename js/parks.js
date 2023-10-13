const button1 = document.querySelector(".bt-1");
let ulChildren = document.querySelector("#national-parks").children;

function changeColor () {
    for (let i = 0; i < ulChildren.length; i++) {
        ulChildren[3].style.color = "red";
    }
}
button1.addEventListener("click", changeColor);

const parentHeaders = document.querySelectorAll("h3");

console.log(parentHeaders);

for (let i = 0; i < parentHeaders.length; i++) {
    console.log(parentHeaders[i].nextElementSibling);
    parentHeaders[i].addEventListener("click", function () {
         parentHeaders[i].nextElementSibling.style.fontWeight = "bold";
    })}
const lis = document.querySelectorAll("ul");
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function () {
        this.firstElementChild.style.color = "blue";
    })
}

const clickButtonLeft = document.querySelector("#tech-1 button");
const alexImage = document.querySelector("#tech-1 img");
const juniorImage = document.querySelector("#tech-2 img");
const engineerImage = document.querySelector("#tech-3 img");
function imageAlex () {
    alexImage.src ="img/alex.jpg";
}
function imageJunior () {
    juniorImage.src = "img/junior.jpg";
}
function imageEngineer () {
    engineerImage.src="img/engineer.jpg";
}
    clickButtonLeft.addEventListener("click", function () {
    alexImage.src = "img/engineer.jpg";})

    clickButtonLeft.addEventListener("click",function () {
        juniorImage.src="img/alex.jpg";
    })





