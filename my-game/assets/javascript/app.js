

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
const board4Drops = document.querySelector('.boardForDrops');
const allItems = document.querySelectorAll('.items');

//  THE DROPPABLE ITEMS
const magnifyingGlass = document.querySelector('#magGlass');
const notebook = document.querySelector('#notebook');
const lighter = document.querySelector('#lighter');
const luckyCoin = document.querySelector('#luckyCoin');
const gun = document.querySelector('#gun');
const glasses = document.querySelector('#glasses');
const apple = document.querySelector('#apple');


//  THE BOTTOM TASK BAR
const pageButtonsDiv = document.querySelector('.pageButtons');
const dialogBoxDiv = document.querySelector('.dialogBox');
const notebookDiv = document.querySelector('.notebook');

//          CHAPTERS
//  CHAPTER ONE
function chapterOne() {
    const pageTwoBtn = document.createElement('button');
    pageTwoBtn.setAttribute('class', 'buttons');
    pageTwoBtn.innerText = "Page: 2";
    pageTwoBtn.addEventListener('click', pageTwo);
    function pageOne() {
        board4Img.style.backgroundImage = "url('./assets/imgs/first-morning.jpeg')";
        setTimeout(() => {
            alert("Look for all messages to appear in the 'Dialog' box at the bottom of the screen");
            dialogBoxDiv.innerText = 'Look for all messages to appear in the THIS box at the bottom of the screen.';
            setTimeout(() => {
                let currentText = dialogBoxDiv.innerText;
                dialogBoxDiv.innerHTML = currentText + '<br><br>' + "Good Morning, Today is like no other and you are about to find out why!";
            }, 10);
            setTimeout(() => {
                currentText = dialogBoxDiv.innerText;
                dialogBoxDiv.innerHTML = currentText + '<br><br>' + "This dialog box is essential to the process of the game, so will be the buttons to the left of this box.";
            }, 600);
            setTimeout(() => {
                currentText = dialogBoxDiv.innerText;
                dialogBoxDiv.innerHTML = currentText + '<br><br>' + "Click the Page: 2 button to procede with the intro.";
                dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                pageButtonsDiv.appendChild(pageTwoBtn);
            }, 1000);
        }, 2000);
        dialogBoxDiv.innerText = '';
    }
    pageOne();
    const pageThreeBtn = document.createElement('button');
    pageThreeBtn.setAttribute('class', 'buttons');
    pageThreeBtn.innerText = "Page: 3";
    pageThreeBtn.addEventListener('click', pageThree);
    function pageTwo () {
        board4Img.style.backgroundImage = "url('./assets/imgs/old-letter.jpg')";
        setTimeout(() => {
            dialogBoxDiv.innerHTML = "You're ego decides for you that you must go to this new mysterious island";    
        }, 800);
        setTimeout(() => {
            let currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerHTML = currentText + '<br><br>' + "You are now going to your office and can only bring three of these items with you on the trip. Flip to Page: 3";
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
            pageButtonsDiv.appendChild(pageThreeBtn);
        }, 1000);
        dialogBoxDiv.innerText = '';
    }
    function pageThree() {
        let currentText = dialogBoxDiv.innerText;
        board4Img.style.backgroundImage = "url('./assets/imgs/the-office.jpeg')";
        dialogBoxDiv.innerHTML = "Drag ONLY three items from this office into your inventory box. You will never have access to the items left behind again!";
        allItems.forEach((item) => {
            item.style.display = "inline-block";
            item.addEventListener('click', function(e) {
                //  TRY TO PREVENT DOUBLE CLICKS ON THIS FUNCTION
                if (e.detail === 1) {
                    if (this === magnifyingGlass) {
                        dialogBoxDiv.innerHTML = currentText + '<br><br>' + "Magnifying Glass: This will inspect every page of the story and give you clues. Much like this click now.";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                        return;
                    } else if (this === notebook) {
                        currentText = dialogBoxDiv.innerText;
                        dialogBoxDiv.innerHTML = currentText + '<br><br>' + "Notebook: This will give you access to a textbox next to the dialog. You may even find old note?";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                        return;
                    } else if (this === luckyCoin) {
                        currentText = dialogBoxDiv.innerText;
                        dialogBoxDiv.innerHTML = currentText + '<br><br>' + "Lucky Coin: This has always been my lucky coin.";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                        return;
                    } else if (this === lighter) {
                        currentText = dialogBoxDiv.innerText;
                        dialogBoxDiv.innerHTML = currentText + '<br><br>' + "Lighter: This can sure serve a purpose.";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                        return;
                    } else if (this === glasses) {
                        currentText = dialogBoxDiv.innerText;
                        dialogBoxDiv.innerHTML = currentText + '<br><br>' + "Glasses: These serve more as hind-sight rather than needed to see.";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                        return;
                    } else if (this === apple) {
                        currentText = dialogBoxDiv.innerText;
                        dialogBoxDiv.innerHTML = currentText + '<br><br>' + "Apple: This will provide a small boost to health.";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                        return;
                    } else if (this === gun) {
                        currentText = dialogBoxDiv.innerText;
                        dialogBoxDiv.innerHTML = currentText + '<br><br>' + "Gun: It's a gun.";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                        return;
                    } else {
                        return;
                    }
                } else if (e.detail === 2) {
                    item.style.right = 0;
                    item.style.left = 0;
                    item.style.bottom = 0;
                    item.style.top = 0;
                    item.style.position = "relative";
                    inventoryDiv.appendChild(item);
                }
            });
        });
        setTimeout(() => {
            let currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerHTML = currentText + '<br><br>' + "Hint: Click on an item to check it's usefulness.";
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        }, 5000);
        // MAX OUT THE INVENTORY WITH THREE ITEMS !!!!
    }
    // IF STATEMENT WITH CONFIRM OR RESET PAGE 
}



//          THE EVENT LISTENERS
//  THE START BUTTON
startButton.addEventListener('click', (event) => {
    chapterOne();
});

// const chapterOne = {
    // NOT MANY STATES BUT I NEED METHODS
// }



//          DRAG AND DROP FUNCTIONS CROSS YOUR FINGERS
var dragged;

  /* events fired on the draggable target */
  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {
      // store a ref. on the dragged elem
      dragged = event.target;
      // make it half transparent
      event.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function( event ) {
      // reset the transparency
      event.target.style.opacity = "";
  }, false);

  /* events fired on the drop targets */
  document.addEventListener("dragover", function( event ) {
      // prevent default to allow drop
      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "purple";
      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
      }

  }, false);

  document.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }
    
  }, false);