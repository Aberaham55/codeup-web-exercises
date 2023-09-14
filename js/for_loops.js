
//function showMultiplicationTable (x) {
//     for (let i = 1; i < 10; i++) {
//         let result = x * i;
//         let outputString = x + "x" + i + " = " + result ;
//         console.log(outputString)
//     }
//
// }
// showMultiplicationTable(7);
// showMultiplicationTable(5);

for (let i = 1 ; i <= 10; i++) {
    //generate a random number between 20 and 200
    // print out odd or even
let max = 200;
let min = 20;
let random =Math.trunc( Math.random() * (max - min) + min);
    if (random % 2 === 0) {
    console.log(random + " is Even");}
    if (random %2 !== 0) {
        console.log(random + " is Odd");
    }
}
