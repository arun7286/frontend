const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const winner = document.getElementById("winner");
let chance = "X";
let bgColor = 'white';
let color = 'black';
changeChance = function() {
    if (chance === 'X') {

        chance = 'O';
        bgColor = 'black';
        color = 'white';
    }
    else {

        chance = 'X';
        bgColor = 'white';
        color = 'black';
    }
};

function checkWinner() {
    if ((btn1.innerText === btn2.innerText) && (btn1.innerText === btn3.innerText) && (btn1.innerText !== "")) {
        winner.textContent = `${btn1.innerText} Wins!`;
    }
    else if ((btn4.innerText === btn5.innerText) && (btn4.innerText === btn6.innerText) &&  btn4.innerText !== "") {
        winner.textContent = `${btn5.innerText} Wins!`;
    }
    else if ((btn7.innerText === btn8.innerText) && (btn7.innerText === btn9.innerText) &&  btn7.innerText !== "") {
        winner.textContent = `${btn7.innerText} Wins!`;
    }
    else if ((btn1.innerText === btn4.innerText) && (btn1.innerText === btn7.innerText) && (btn1.innerText !== "")) {
        winner.textContent = `${btn5.innerText} Wins!`;
    }
    else if ((btn2.innerText === btn5.innerText) && (btn2.innerText === btn8.innerText) && (btn2.innerText !== "")) {
        winner.textContent = `${btn5.innerText} Wins!`;
    }
    else if ((btn3.innerText === btn6.innerText) && (btn3.innerText === btn9.innerText) && (btn3.innerText !== "")) {
        winner.textContent = `${btn3.innerText} Wins!`;
    }
    else if ((btn1.innerText === btn5.innerText) && (btn1.innerText === btn9.innerText) && (btn1.innerText !== "")) {
        winner.textContent = `${btn5.innerText} Wins!`;
    }
    else if ((btn3.innerText === btn5.innerText) && (btn3.innerText === btn7.innerText) && (btn3.innerText !== "")) {
        winner.textContent = `${btn5.innerText} Wins!`;
    }
};
btn1.onclick = function(){
    btn1.textContent = chance;
    btn1.style.backgroundColor = bgColor;
    btn1.style.color = color;
    checkWinner();
    changeChance();
}
btn2.onclick = function(){
    btn2.textContent = chance;
    btn2.style.backgroundColor = bgColor;
    btn2.style.color = color;
    checkWinner();
    changeChance();

}
btn3.onclick = function(){
    btn3.textContent = chance;
    btn3.style.backgroundColor = bgColor;
    btn3.style.color = color;
    checkWinner();
    changeChance();
}
btn4.onclick = function(){
    btn4.textContent = chance;
    btn4.style.backgroundColor = bgColor;
    btn4.style.color = color;
    checkWinner();
    changeChance();
}
btn5.onclick = function(){
    btn5.textContent = chance;
    btn5.style.backgroundColor = bgColor;
    btn5.style.color = color;
    checkWinner();
    changeChance();
}
btn6.onclick = function(){
    btn6.textContent = chance;
    btn6.style.backgroundColor = bgColor;
    btn6.style.color = color;
    checkWinner();
    changeChance();
}
btn7.onclick = function(){
    btn7.textContent = chance;
    btn7.style.backgroundColor = bgColor;
    btn7.style.color = color;
    checkWinner();
    changeChance();

}
btn8.onclick = function(){
    btn8.textContent = chance;
    btn8.style.backgroundColor = bgColor;
    btn8.style.color = color;
    checkWinner();
    changeChance();
}
btn9.onclick = function(){
    btn9.textContent = chance;
    btn9.style.backgroundColor = bgColor;
    btn9.style.color = color;
    checkWinner();
    changeChance();
}



