

///////
/// MY ALERT AND TIMING IS OFF FOR TESTING
///////
// ADD THE SPECIAL PROPERTIES TO THE NOTEBOOK IF ACTIVE

// inventory.hasOwnProperty("magnifyingGlass")

//          THE GLOBAL VARIABLES
let inventory = {};
let health = 100;
let currentText = '';
//          THE DOM ELEMENTS
//  THE START BUTTON
const startButton = document.querySelector('#startButton');
//          THE EVENT LISTENERS
//  THE START BUTTON
startButton.addEventListener('click', (event) => {
    chapterOne();
});

//  THE BOOK
let currentChapter = 1;


//  THE TASK BAR
const inventoryDiv = document.querySelector('.inventoryDropBox');
const leftHandDiv = document.querySelector('.leftHandDropBox');
const rightHandDiv = document.querySelector('.rightHandDropBox');

//  THE GAME BOARD
const board4Img = document.querySelector('.boardForImg');
const board4Drops = document.querySelector('.boardForDrops');
const allItems = document.querySelectorAll('.items');

//  THE OFFICE ITEMS
const magnifyingGlass = document.querySelector('#magGlass');
const notebook = document.querySelector('#notebook');
const lighter = document.querySelector('#lighter');
const luckyCoin = document.querySelector('#luckyCoin');
const gun = document.querySelector('#gun');
const glasses = document.querySelector('#glasses');
const apple = document.querySelector('#apple');
let office = {magnifyingGlass, notebook, lighter, luckyCoin, gun, glasses, apple};

//  THE CAVE ITEMS
const torch = document.querySelector('#torch');
const shinyRock = document.querySelector('#rock');
let caveItems = {torch: torch, rock: shinyRock};

//  THE CHARACTERS
const scientist = document.querySelector('#scientist');
const mercenary = document.querySelector('#mercenary');
let people = {scientist, mercenary};
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
            // alert("Look for all messages to appear in the 'Dialog' box at the bottom of the screen");
            dialogBoxDiv.innerText = '\nLook for all messages to appear in the THIS box at the bottom of the screen.';
            setTimeout(() => {
                let currentText = dialogBoxDiv.innerText;
                dialogBoxDiv.innerText = currentText + "\n\nGood Morning, Today is like no other and you are about to find out why!";
                dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
            }, 100);
            setTimeout(() => {
                currentText = dialogBoxDiv.innerText;
                dialogBoxDiv.innerText = currentText + "\n\nThis dialog box is essential to the process of the game, so will be the buttons to the left of this box.";
                dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
            }, 600);
            setTimeout(() => {
                currentText = dialogBoxDiv.innerText;
                dialogBoxDiv.innerText = currentText + "\n\nClick the Page: 2 button to procede with the intro.";
                dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                pageButtonsDiv.appendChild(pageTwoBtn);
            }, 1000);
        }, 300);
        dialogBoxDiv.innerText = '';
    }
    pageOne();
    const pageThreeBtn = document.createElement('button');
    pageThreeBtn.setAttribute('class', 'buttons');
    pageThreeBtn.innerText = "Page: 3";
    pageThreeBtn.addEventListener('click', pageThree);
    function pageTwo () {
        pageTwoBtn.removeEventListener('click', pageTwo);
        board4Img.style.backgroundImage = "url('./assets/imgs/old-letter.jpg')";
        setTimeout(() => {
            dialogBoxDiv.innerText = "\nYou're ego decides for you that you must go to this new mysterious island";    
        }, 800);
        setTimeout(() => {
            let currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerText = currentText + "\n\nYou are now going to your office and can only bring three of these items with you on the trip. Flip to Page: 3";
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
            pageButtonsDiv.appendChild(pageThreeBtn);
        }, 1000);
        dialogBoxDiv.innerText = '';
    }
    const chapterTwoBtn = document.createElement('button');
    chapterTwoBtn.setAttribute('class', 'buttons');
    chapterTwoBtn.setAttribute('id', 'chapterTwo');
    chapterTwoBtn.innerText = "Chapter: 2";
    chapterTwoBtn.addEventListener('click', chapterTwo);
    function pageThree() {
        pageThreeBtn.removeEventListener('click', pageThree);
        let currentText = dialogBoxDiv.innerText;
        board4Img.style.backgroundImage = "url('./assets/imgs/the-office.jpeg')";
        dialogBoxDiv.innerText = "\nONLY three items from this office can be put into your inventory box. You will never have access to the items left behind again!";
        for (let item in office) {
            // console.log(office[item]);
            office[item].style.display = "inline-block";
            office[item].addEventListener('click', function(e) {
                //  TRY TO PREVENT DOUBLE CLICKS ON THIS FUNCTION
                if (e.detail === 1) {
                    if (office[item] === magnifyingGlass) {
                        dialogBoxDiv.innerText = currentText + "\nMagnifying Glass: This will inspect every page of the story and give you clues. Much like this click now.";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                        return;
                    } else if (office[item] === notebook) {
                        currentText = dialogBoxDiv.innerText;
                        dialogBoxDiv.innerText = currentText + "\nNotebook: This will give you access to a textbox next to the dialog. You may even find old note?";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                        return;
                    } else if (office[item] === luckyCoin) {
                        currentText = dialogBoxDiv.innerText;
                        dialogBoxDiv.innerText = currentText + "\nLucky Coin: This has always been my lucky coin.";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                        return;
                    } else if (office[item] === lighter) {
                        currentText = dialogBoxDiv.innerText;
                        dialogBoxDiv.innerText = currentText + "\nLighter: This can sure serve a purpose.";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                        return;
                    } else if (office[item] === glasses) {
                        currentText = dialogBoxDiv.innerText;
                        dialogBoxDiv.innerText = currentText + "\nGlasses: These serve more as hind-sight rather than needed to see.";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                        return;
                    } else if (office[item] === apple) {
                        currentText = dialogBoxDiv.innerText;
                        dialogBoxDiv.innerText = currentText + "\nApple: This will provide a small boost to health.";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                        return;
                    } else if (office[item] === gun) {
                        currentText = dialogBoxDiv.innerText;
                        dialogBoxDiv.innerText = currentText + "\nGun: It's a gun.";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                        return;
                    } else {
                        return;
                    }
                } else if (e.detail === 2) {
                    if (Object.keys(inventory).length < 3) {
                        office[item].style.position = "static";
                        inventory[item] = office[item];
                        office[item] = null;
                        inventoryDiv.appendChild(inventory[item]);
                        // console.log(office);
                        return;
                    } else {
                        currentText = dialogBoxDiv.innerText;
                        dialogBoxDiv.innerText = currentText + "\n\nYour Inventory is full. Try pressing 'q' to return the items from your Inventory to the office.\n You may also go to the next Chapter now.";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                        return;
                    }
                } else {
                    return;
                }
            });
        };
        document.addEventListener('keydown', officeInvent);
        setTimeout(() => {
            let currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerText = currentText + "\n\nHint: Click on an item to check it's usefulness.\n Double click an item to place it into your inventory.\n";
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        }, 300);
        setTimeout(() => {
            let currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerText = currentText + "\n\nThe Helicopter is leaving! You need to pick three NOW.";
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
            setTimeout(() => {
                pageButtonsDiv.appendChild(chapterTwoBtn);
                // document.removeEventListener('keydown');
            })
        }, 800)
    }
    return office;
}

//  CHAPTER TWO

function chapterTwo() {
    document.removeEventListener('keydown', officeInvent);
    let currentText = dialogBoxDiv.innerText;
    for (let item in office) {
        if (office[item]) {
            office[item].style.display = "none";
        }
    }
    for (let items in inventory) {
        if (inventory[items] === notebook) {
            // console.log('YOU HAVE A NOTEBOOK');
            notebookDiv.style.display = "inline-block";
        }
        if (inventory[items] === magnifyingGlass) {
            currentText = dialogBoxDiv.innerText
            dialogBoxDiv.innerText = currentText + "\n\nMagnifying Glass: Try talking to these two people, one of them has an offer for you.";
        }
    }
    const chapterTwoBtn = document.querySelector('#chapterTwo');
    chapterTwoBtn.removeEventListener('click', chapterTwo);
    dialogBoxDiv.innerText = '';
    pageButtonsDiv.innerHTML = '';
    board4Img.style.backgroundImage = "url('./assets/imgs/traveling.jpeg')";
    dialogBoxDiv.innerText = "\nWow! Antartica has really been melting a lot. There must be more than just this new discovery here.";
    currentText = dialogBoxDiv.innerText;
    setTimeout(() => {
        twoPageOne();
    }, 600);
    function twoPageOne() {
        board4Img.style.backgroundImage = "url('./assets/imgs/cave-morning.jpeg')";
        for (let person in people) {
            people[person].style.display = "inline-block";
            people[person].addEventListener('click', caveConvo);
        }
        function returnFromConvo() {
            let currentText = dialogBoxDiv.innerText
            // console.log(inventory.hasOwnProperty("rock"));
            setTimeout(() => {
                if (inventory.hasOwnProperty("rock")) {
                    currentText = dialogBoxDiv.innerText
                    dialogBoxDiv.innerText = currentText + "\n\nHmmmm... This rock is rather interesting. It seems to have special properties to it.";
                    dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                }
            }, 1000);
        }
        chapterTwo.returnFromConvo = returnFromConvo;
        setTimeout(() => {
            for (let items in inventory) {
                if (inventory[items] === glasses && shinyRock) {
                    currentText = dialogBoxDiv.innerText
                    dialogBoxDiv.innerText = currentText + "\nGlasses: I defintely made the right choice. It seems to be missing a piece though. \nGlasses: I wonder where Dr. otherGuy was?";
                    dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                } else if (inventory[items] === glasses) {
                    currentText = dialogBoxDiv.innerText
                    dialogBoxDiv.innerText = currentText + "\nGlasses: I wonder where Dr. otherGuy was?";
                    dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                }
            }
            const twoPageTwo = document.createElement('button');
            twoPageTwo.setAttribute('class', 'buttons');
            twoPageTwo.setAttribute('id', 'buttonTwo');
            twoPageTwo.innerText = 'Page: 2';
            twoPageTwo.addEventListener('click', twoPageThree);
            pageButtonsDiv.appendChild(twoPageTwo);
        }, 10000);
    }
    function twoPageThree() {
        board4Img.style.backgroundImage = "url('./assets/imgs/the-entrance.jpeg')";
        let twoPageTwo = document.querySelector('#buttonTwo');
        twoPageTwo.removeEventListener('click', twoPageThree);
        for (let person in people) {
            people[person].style.display = "none";
            people[person].removeEventListener('click', caveConvo);
        }
        setTimeout(() => {

        })
    }
}

//          CHAPTER ONE FUNCTION
function officeInvent(e) {
    if (e.keyCode == 113 || e.keyCode == 81) {
        for (let item in inventory) {
            goBackToOffice(item);
        }
        inventory = {};
    }
}

function goBackToOffice (item) {
    office[item] = inventory[item];
    office[item].style.position = "absolute";
    board4Drops.appendChild(office[item]);
}

//          CHAPTER TWO FUNCTIONS
function caveConvo(event) {
    let currentText = dialogBoxDiv.innerText
    if (event.detail === 1) {
        if (event.target === scientist) {
            dialogBoxDiv.innerText = currentText + "\n\nSCIENTIST: Hello Dr. SoAndSo, my name is Dr. notImportant and we've been expecting you. Here I believe you will need this if you can make it past the entrance.\nThe scientist has given you a Torch!";
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
            for (let item in caveItems) {
                if (caveItems[item] === torch) {
                    caveItems[item].style.display = "inline-block";
                    caveItems[item].style.position = "static";
                    inventory[item] = caveItems[item];
                    caveItems[item] = null;
                    inventoryDiv.appendChild(torch);
                } else {
                }
            }
        } else if (event.target === mercenary) {
            currentText = dialogBoxDiv.innerText
            dialogBoxDiv.innerText = currentText + "\n\nMERCENARY: Dr. otherGuy said you'd be showing up today.\n Don't worry about me, I'm just the hired help.";
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
            if (inventory.hasOwnProperty("gun")) {
                currentText = dialogBoxDiv.innerText
                dialogBoxDiv.innerText = currentText + "\n\nMERCENARY: HEY!! Is that an old revolver? Would you like to trade for this shiny rock?";
                dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                setTimeout(() => {
                    let confirm = window.confirm("TRADE: Gun for a shiny rock?");
                    if (confirm) {
                        shinyRock.style.display = "inline-block";
                        shinyRock.style.position = "static";
                        inventory.rock = shinyRock;
                        inventoryDiv.appendChild(shinyRock);
                        inventoryDiv.removeChild(gun);
                        delete inventory.gun;
                    } else {
                        currentText = dialogBoxDiv.innerText
                        dialogBoxDiv.innerText = currentText + "\n\nMERCENARY: Whatever. Your loss anyways.";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                    }
                }, 500);
            }
        }
    }
            ////   HAVING TROUBLE ADDING TWO BUTTONS
    ///    THIS IS MY PROBLEM \/\/\/\/\/
    setTimeout(() => {
        return currentText, chapterTwo.returnFromConvo();
    }, 10000);
}



//          HIDDEN ABILITIES
//  NOTEBOOK
function secretCounter(obj) {
    if (obj.value.length === 30 || obj.value.length === 31 || obj.value.length === 32) {
        let oldText = obj.value;
        obj.value = oldText +" \nOLD NOTES!!\nHINT: You shouldn't have brought the gun.";
    }
}

