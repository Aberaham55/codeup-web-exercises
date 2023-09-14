
function showMultiplicationTable (x) {
    for (let i = 1; i < 10; i++) {
        let result = x * i;
        let outputString = x + "x" + i + " = " + result ;
        console.log(outputString)
    }

}
showMultiplicationTable(7);
showMultiplicationTable(5);

