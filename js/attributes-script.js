
function changeProfilePic () {
    let img = document.querySelector("#profile-pic");
    img.src = "img/pic1.jpg";
}
// setTimeout(changeProfilePic, 2000);

function changeProfileName () {
   let name = document.getElementById("profile-name");
    name.innerHTML = "Abraham Garcia";
}
// setTimeout(changeProfileName, 4000);

function profileDescription () {
    let profile = document.querySelector("#profile-desc");
    profile.style.color = "red"; font = "monospace";
}
// setInterval(profileDescription, 6000);

function toggleFoggle () {
    let profileCardT = document.querySelector("#profile-card");
    profileCardT.classList.toggle("profile-card");
}
// setInterval(toggleFoggle, 2000);

let count = 0;
let arrayColors = ["saddlebrown", "firebrick", "pink", "cyan"];

function doEvents () {
    count++

    if (count = 1) {
        changeProfilePic();
    } else if (count = 2) {
        changeProfileName();
    } else if (count = 3); {
        profileDescription();
    }
    toggleFoggle();
}
window.setInterval(doEvents, 2000);