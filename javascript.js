let screen = document.getElementById("screen");
let smallScreen = document.getElementById("smallScreen");
screen.textContent = "";
smallScreen.textContent = "";
let equated = false;
let decimalAdded = false;

let numbers = document.querySelectorAll(".num");
let seven = document.getElementById("7")
seven.setAttribute("onclick",`addNum(7)`)
let eight = document.getElementById("8")
eight.setAttribute("onclick",`addNum(8)`)
let nine = document.getElementById("9")
nine.setAttribute("onclick",`addNum(9)`)
let four = document.getElementById("4")
four.setAttribute("onclick",`addNum(4)`)
let five = document.getElementById("5")
five.setAttribute("onclick",`addNum(5)`)
let six = document.getElementById("6")
six.setAttribute("onclick",`addNum(6)`)
let one = document.getElementById("1")
one.setAttribute("onclick",`addNum(1)`)
let two = document.getElementById("2")
two.setAttribute("onclick",`addNum(2)`)
let three = document.getElementById("3")
three.setAttribute("onclick",`addNum(3)`)
let zero = document.getElementById("0")
zero.setAttribute("onclick",`addNum(0)`)
let plus = document.getElementById("plus")
plus.setAttribute("onclick",`add()`)
let minus = document.getElementById("subtract")
minus.setAttribute("onclick",`subtract()`)
let division = document.getElementById("divide")
division.setAttribute("onclick",`divide()`)
let multiplication = document.getElementById("multiply")
multiplication.setAttribute("onclick",`multiply()`)
let equal = document.getElementById("equal")
equal.setAttribute("onclick","equate(smallScreen.textContent)")
let clear = document.getElementById("ac");
clear.setAttribute("onclick",`wipe()`);
let decimal = document.getElementById("deci");
decimal.setAttribute("onclick",`addDec()`);

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

function addNum(num) {
    if (screen.textContent === "" && equated === false) {
        screen.textContent=`${num}`;    
    } else if (screen.textContent !== "" && equated == false) {
        screen.textContent = screen.textContent + `${num}`;
    } else if (screen.textContent !== "" && equated == true) {
        screen.textContent=`${num}`;
        smallScreen.textContent = "";
        equated = false;
    }    
}

function add() {
    //checks if there's nothing, so it can do nothing
    if (screen.textContent === ""){
        screen.textContent;
    }
    //checks if there is something on big screen, but small screen is empty
    else if (screen.textContent !== "" && smallScreen.textContent === "" && equated === false) {
        let firstInt = Number(screen.textContent);
        smallScreen.textContent = firstInt + " + "
        screen.textContent = "";
        decimalAdded = false;
    }
    //newer addition, similar to the above but checks if there has been an equation already
    else if (screen.textContent !== "" && smallScreen.textContent !== "" && equated === true ) {
        smallScreen.textContent = "";
        smallScreen.textContent += screen.textContent + " + "; 
        screen.textContent = "";
        equated = false;
        decimalAdded = false;
    }
    //checks if there is content in both small and big screen and adds the plus
    else if (screen.textContent !== "" && smallScreen.textContent !== "") {
        smallScreen.textContent += screen.textContent + " + "; 
        screen.textContent = "";
        decimalAdded = false;
    }
}

function subtract() {
    //checks if there's nothing, so it can do nothing
    if (screen.textContent === ""){
        screen.textContent;
    }
    //checks if there is something on big screen, but small screen is empty
    else if (screen.textContent !== "" && smallScreen.textContent === "") {
        let firstInt = Number(screen.textContent);
        smallScreen.textContent = firstInt + " - ";
        screen.textContent = "";
        decimalAdded = false;
    }
    //newer addition, similar to the above but checks if there has been an equation already
    else if (screen.textContent !== "" && smallScreen.textContent !== "" && equated === true ) {
        smallScreen.textContent = "";
        smallScreen.textContent += screen.textContent + " - "; 
        screen.textContent = "";
        equated = false;
        decimalAdded = false;
    }
    //checks if there is content in both small and big screen and adds the plus
    else if (screen.textContent !== "" && smallScreen.textContent !== "") {
        smallScreen.textContent += screen.textContent + " - "; 
        screen.textContent = "";
        decimalAdded = false;
    }
}

function divide() {
    //checks if there's nothing, so it can do nothing
    if (screen.textContent === ""){
        screen.textContent;
    }
    //checks if there is something on big screen, but small screen is empty
    else if (screen.textContent !== "" && smallScreen.textContent === "") {
        let firstInt = Number(screen.textContent);
        smallScreen.textContent = firstInt + " / ";
        screen.textContent = "";
        decimalAdded = false;
    }
    //newer addition, similar to the above but checks if there has been an equation already
    else if (screen.textContent !== "" && smallScreen.textContent !== "" && equated === true ) {
        smallScreen.textContent = "";
        smallScreen.textContent += screen.textContent + " / "; 
        screen.textContent = "";
        equated = false;
        decimalAdded = false;
    }
    //checks if there is content in both small and big screen and adds the plus
    else if (screen.textContent !== "" && smallScreen.textContent !== "") {
        smallScreen.textContent += screen.textContent + " / "; 
        screen.textContent = "";
        decimalAdded = false;
    }
}

function multiply() {
    //checks if there's nothing, so it can do nothing
    if (screen.textContent === ""){
        screen.textContent;
    }
    //checks if there is something on big screen, but small screen is empty
    else if (screen.textContent !== "" && smallScreen.textContent === "") {
        let firstInt = Number(screen.textContent);
        smallScreen.textContent = firstInt + " * ";
        screen.textContent = "";
        decimalAdded = false;
    }
    //newer addition, similar to the above but checks if there has been an equation already
    else if (screen.textContent !== "" && smallScreen.textContent !== "" && equated === true ) {
        smallScreen.textContent = "";
        smallScreen.textContent += screen.textContent + " * "; 
        screen.textContent = "";
        equated = false;
        decimalAdded = false;
    }
    //checks if there is content in both small and big screen and adds the plus
    else if (screen.textContent !== "" && smallScreen.textContent !== "") {
        smallScreen.textContent += screen.textContent + " * "; 
        screen.textContent = "";
        decimalAdded = false;
    }
}

function equate(string) {
    if (screen.textContent === ""){
        screen.textContent;
    }
    else if (screen.textContent !== "" && smallScreen.textContent === "") {
        screen.textContent;       
    }
    else if (screen.textContent !== "" && smallScreen.textContent !== "") {
        let addArray = string.split(" ");
        let secondToLast = addArray[addArray.length - 2];
        if ((secondToLast === "+" || secondToLast === "-" || secondToLast === "/" || secondToLast === "*") && (equated == false)) {
            addArray.pop();
            addArray.push(screen.textContent)
            let result = roundToTwo(eval(addArray.join(' ')));
            screen.textContent = result;
            smallScreen.textContent = addArray.join(' ');
            equated = true;
            decimalAdded = true;
        }
    }
}

function wipe() {
    screen.textContent = "";
    smallScreen.textContent = "";
    equated = false;
    decimalAdded = false;
}

function addDec() {
    if (screen.textContent === "") {
        screen.textContent = "0.";
    }
    else if (screen.textContent !== "" && decimalAdded === false) {
        screen.textContent += ".";
        decimalAdded = true;
    }
}