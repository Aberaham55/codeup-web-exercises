import randomNum from "./number-utils.js";

let randomNumber = 5;

export function rollD6(){
    const d6 = randomNum(1, 6);
    document.querySelector("#my-D6").innerText = "You rolled a " + d6;
    return d6;
}

export function rollD20(){
    return randomNum(1, 20);
}

