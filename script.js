
let gameboard = document.getElementById('gameboard');
 var path = "";
 
function getRandomnumber () {
    return Math.floor(Math.random() * 6)+1;
    
}

function diceImg(randomNum){

    switch (randomNum) {
        case 1:
           path = "https://cdn-icons-png.flaticon.com/512/7262/7262391.png";
            break;
        case 2:
           path = "https://cdn-icons-png.flaticon.com/512/0/2.png";
            break;
        case 3:
           path = "https://cdn-icons-png.flaticon.com/512/7262/7262393.png";
            break;
        case 4:
           path = "https://cdn-icons-png.flaticon.com/512/0/963.png";
            break;
        case 5:
           path = "https://cdn-icons-png.flaticon.com/512/565/565745.png";
            break;
        case 6:
           path = "https://cdn-icons-png.flaticon.com/512/0/165.png";
            break;
    }
}


function rollingDice(randomNum ) {
    var dice = document.querySelector('#dice');
    dice.setAttribute("src", path);
  }
  
  function rollDice() {
    var randomNum = getRandomnumber();

    diceImg(randomNum);
    rollingDice(randomNum);
  console.log('random num:',randomNum,path)
  
    return false;   
  }
// creating box elements by for-loop
// for (let i = 100; i >= 1; i--) {
//     const box = document.createElement('div');
//     box.classList.add('box');
//     box.textContent = `${i}`;
//     gameboard.body.appendChild(box);
// }
