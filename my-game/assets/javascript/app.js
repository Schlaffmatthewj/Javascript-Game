

//          THE GLOBAL VARIABLES
let inventory = [];
let leftHand = [];
let rightHand = [];
let health = 100;

//          THE DOM ELEMENTS
//  THE START BUTTON
const startButton = document.querySelector('#startButton');

//  THE TASK BAR
const inventoryDiv = document.querySelector('.inventoryDropBox');
const leftHandDiv = document.querySelector('.leftHandDropBox');
const rightHandDiv = document.querySelector('.rightHandDropBox');

//  THE GAME BOARD
const board4Img = document.querySelector('.boardForImg');
const board4Drops = document.querySelector('boardForDrops');

//  THE BOTTOM TASK BAR
const pageButtonsDiv = document.querySelector('.pageButtons');
const dialogBoxDiv = document.querySelector('.dialogBox');
const notebookDiv = document.querySelector('.notebook');

//          CHAPTERS
//  CHAPTER ONE
function chapterOne() {
    board4Img.style.backgroundImage = "url('./assets/imgs/first-morning.jpeg')";
    let currentText = dialogBoxDiv.innerText;
    setTimeout(() => {
        alert("Look for all messages to appear in the 'Dialog' box at the bottom of the screen");
        dialogBoxDiv.innerText = 'Look for all messages to appear in the THIS box at the bottom of the screen.';
        setTimeout(() => {
            currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerHTML = currentText + '<br><br>' + "Good Morning, Today is like no other and you are about to find out why!";
        }, 2000);
        setTimeout(() => {
            currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerHTML = currentText + '<br><br>' + "This dialog box is essential to the process of the game, so will be the buttons to the left of this box.";
        }, 8000);
        setTimeout(() => {
            currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerHTML = currentText + '<br><br>' + "Click the Next button to procede with the intro.";
            const nextButton = document.createElement('button');
            nextButton.setAttribute('id', 'nextButton');
            nextButton.innerText = "Next";
            pageButtonsDiv.appendChild(nextButton);
        }, 12000);
    }, 2000);
    const nextButton = document.querySelector('#nextButton');
    nextButton.addEventListener('click', (event) => {
        
    })
    
    // office inventory selection scene
    // board4Img.style.backgroundImage = "url('./assets/imgs/the-office.jpeg')";
}



console.log(board4Img)
//          THE EVENT LISTENERS
//  THE START BUTTON
startButton.addEventListener('click', (event) => {
    chapterOne();
});

// const chapterOne = {
    // NOT MANY STATES BUT I NEED METHODS
// }



//          DRAG AND DROP FUNCTIONS CROSS YOUR FINGERS
function allowDrop(ev) {
    ev.preventDefault();
};

function dropItem(ev) {
    ev.dataTransfer.setData('img', ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('img');
    ev.target.appendChild(document.getElementById(img));
}