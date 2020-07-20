

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
const nextButton = document.createElement('button');
nextButton.setAttribute('id', 'nextButton');
nextButton.innerText = "Next";

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
        }, 6000);
        setTimeout(() => {
            currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerHTML = currentText + '<br><br>' + "Click the Next button to procede with the intro.";
            pageButtonsDiv.appendChild(nextButton);
        }, 10000);
    }, 2000);
    nextButton.addEventListener('click', (event) => {
        function pageOne () {
            board4Img.style.backgroundImage = "url('./assets/imgs/old-letter.jpg')";
            setTimeout(() => {
                let response = window.confirm();
                if (response) {
                    currentText = dialogBoxDiv.innerText;
                        dialogBoxDiv.innerHTML = currentText + '<br><br>' + "We'd pack carefully, We can only take so many things";
                } else {
                    let response = window.confirm();
                    if (response) {
                        currentText = dialogBoxDiv.innerText;
                        dialogBoxDiv.innerHTML = currentText + '<br><br>' + "That is more like it! Lets pack for the trip.";
                    } else {
                        currentText = dialogBoxDiv.innerText;
                        dialogBoxDiv.innerHTML = currentText + '<br><br>' + "You don't actually have a choice in the matter. Why did you even click play? Press Next";
                    }
                }
            }, 5000)
            currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerHTML = currentText + '<br><br>' + "You are now going to your office and can only bring three of these items with you on the trip.";
        }
        pageOne();
        
        function pageTwo() {
            board4Img.style.backgroundImage = "url('./assets/imgs/the-office.jpeg')";
            currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerHTML = currentText + '<br><br>' + "Drag ONLY three items from this office into your inventory box. You will never have access to the items left behind again!";
        }
        pageTwo();
    });
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