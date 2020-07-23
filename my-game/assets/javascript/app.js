

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
const notebookDiv = document.querySelector('.notebook');
const notebookText = document.querySelector('.notebookBox');

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
let office = {magnifyingGlass: magnifyingGlass, notebook: notebook, lighter: lighter, luckyCoin: luckyCoin, gun: gun, glasses: glasses, apple: apple};

//  THE CAVE ITEMS
const torch = document.querySelector('#torch');
const shinyRock = document.querySelector('#rock');
let caveItems = {torch: torch, rock: shinyRock};

//  FIRST FLOOR ITEM AND EMPTY DIV
const water = document.querySelector('#water');
const emptyWater = document.querySelector('#emptyWater');
let firstFloorItems = {water: water, emptyWater: emptyWater};

//  THE CHARACTERS
const scientist = document.querySelector('#scientist');
const mercenary = document.querySelector('#mercenary');
let people = {scientist, mercenary};

//  THE BOTTOM TASK BAR
const pageButtonsDiv = document.querySelector('.pageButtons');
const dialogBoxDiv = document.querySelector('.dialogBox');

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
            currentText = dialogBoxDiv.innerText;
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
        currentText = dialogBoxDiv.innerText;
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
            currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerText = currentText + "\n\nHint: Click on an item to check it's usefulness.\n Double click an item to place it into your inventory.\n";
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        }, 300);
        setTimeout(() => {
            currentText = dialogBoxDiv.innerText;
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
    for (let item in office) {
        if (office[item]) {
            office[item].style.display = "none";
        }
    }
    for (let items in inventory) {
        if (inventory[items] === notebook) {
            notebookConvo.activate();
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
    const twoPageTwo = document.createElement('button');
    twoPageTwo.setAttribute('class', 'buttons');
    twoPageTwo.setAttribute('id', 'buttonTwo');
    twoPageTwo.innerText = 'Page: 2';
    twoPageTwo.addEventListener('click', twoPageThree);
    function twoPageOne() {
        board4Img.style.backgroundImage = "url('./assets/imgs/cave-morning.jpeg')";
        for (let person in people) {
            people[person].style.display = "inline-block";
            people[person].addEventListener('click', (event) => caveConvo(event, person));
        }
        if (inventory.hasOwnProperty("magnifyingGlass")) {
            currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerText = currentText + "\n\nMagnifying Glass: Try talking to these two people, one of them has an offer for you.";
            // notebookText.innerText = "\\\nMagnifying Glass: Try talking to these two people, one of them has an offer for you.";
            // notebookText.scrollTop = notebookText.scrollHeight;
            // currentNotes = notebookText.innerText;
            notebookConvo.note1();
            notebookConvo.note2();
        }
        //  I LOSE MY NOTES INSIDE THIS FUNCTION \/\/\/
        function returnFromConvo() {
            console.log(dialogBoxDiv.innerText);
            console.log(notebookText.innerText);
        }
        //  I LOSE MY NOTES INSIDE THIS FUNCTION ^^^
        chapterTwo.returnFromConvo = returnFromConvo;
        currentText = dialogBoxDiv.innerText;
        setTimeout(() => {
            if (inventory.hasOwnProperty("rock")) {
                dialogBoxDiv.innerText = currentText + "\n\nHmmmm... This rock is rather interesting. It seems to have special properties to it.";
                dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
            }
        }, 1000);
        setTimeout(() => {
            if (inventory.hasOwnProperty("glasses") && inventory.hasOwnProperty("rock")) {
                currentText = dialogBoxDiv.innerText;
                // currentNotes = notebookText.innerText;
                dialogBoxDiv.innerText = currentText + "\nGlasses: I definitely made the right choice. It seems to be missing a piece though. \nGlasses: I wonder where Dr. otherGuy was?";
                dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                //////
                /////
                notebookConvo.note3();
                // notebookText.innerText = "\\\nGlasses: I definitely made the right choice. It seems to be missing a piece though. \\\nGlasses: I wonder where Dr. otherGuy was?";
                // console.log(currentNotes);
                // console.log(notebookText.innerText);
                ///////
                notebookText.scrollTop = notebookText.scrollHeight;
            } else if (inventory.hasOwnProperty("glasses")) {
                notebookConvo.note3();
                currentText = dialogBoxDiv.innerText;
                // currentNotes = notebookText.innerText;
                dialogBoxDiv.innerText = currentText + "\nGlasses: I wonder where Dr. otherGuy was?";
                dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                // notebookText.innerText = currentNotes + "\\\nGlasses: I wonder where Dr. otherGuy was?";
                // notebookText.scrollTop = notebookText.scrollHeight;
                // currentNotes = notebookText.innerText;
                // console.log(currentNotes);
                // console.log(notebookText.innerText);
            }
            pageButtonsDiv.appendChild(twoPageTwo);
        }, 8000);
    }
    const twoPageFourBtn = document.createElement('button');
    twoPageFourBtn.setAttribute('class', 'buttons');
    twoPageFourBtn.setAttribute('id', 'buttonThree');
    twoPageFourBtn.innerText = 'Page: 3';
    twoPageFourBtn.addEventListener('click', twoPageFour);
    function twoPageThree() {
        dialogBoxDiv.innerText = '';
        board4Img.style.backgroundImage = "url('./assets/imgs/the-entrance.jpeg')";
        let twoPageTwo = document.querySelector('#buttonTwo');
        twoPageTwo.removeEventListener('click', twoPageThree);
        for (let person in people) {
            people[person].style.display = "none";
            people[person].removeEventListener('click', caveConvo);
        }
        setTimeout(() => {
            dialogBoxDiv.innerText = "\nHmm.. There appears to be an ancient language written on the door.";
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
            setTimeout(() => {
                setTimeout(() => {
                    
                    if (inventory.hasOwnProperty("magnifyingGlass") || inventory.hasOwnProperty("luckyCoin")) {
                        currentText = dialogBoxDiv.innerText;
                        // currentNotes = notebookText.innerText;
                        dialogBoxDiv.innerText = currentText + "\nMagnifying Glass: I believe that J.R.R. Tolkien likes this riddle.";
                        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
                        notebookConvo.note4();
                        // notebookText.innerText = currentNotes + "\\\nMagnifying Glass: I believe that J.R.R. Tolkien likes this riddle.";
                        // notebookText.scrollTop = notebookText.scrollHeight;
                        // currentNotes = notebookText.innerText;
                        return;
                    } else {
                        return;
                    }
                }, 500);
                setTimeout(() => {
                    entranceRiddle();
                }, 5000);
            }, 1000);
        },700);
    }
    const leftRoom = document.createElement('button');
    leftRoom.setAttribute('class', 'buttons');
    leftRoom.setAttribute('id', 'leftroom');
    leftRoom.innerText = 'Left Room';
    leftRoom.addEventListener('click', roomOnTheLeft);
    const rightRoom = document.createElement('button');
    rightRoom.setAttribute('class', 'buttons');
    rightRoom.setAttribute('id', 'rightroom');
    rightRoom.innerText = 'Right Room';
    rightRoom.addEventListener('click', roomOnTheRight);
    const middleRoom = document.createElement('button');
    middleRoom.setAttribute('class', 'buttons');
    middleRoom.setAttribute('id', 'mainroom');
    middleRoom.innerText = 'Main Room';
    middleRoom.addEventListener('click', roomInTheMiddle);
    /// NEED A CHAPTER THREE BUTTON
    chapterTwo.twoPageFour = twoPageFour;
    function twoPageFour() {
        pageButtonsDiv.innerHTML = '';
        dialogBoxDiv.innerText = '';
        board4Img.style.backgroundImage = "url('./assets/imgs/first-middle.jpeg')";
        /// MAGNIFYING GLASS CLUES IN EACH ROOM
        pageButtonsDiv.appendChild(middleRoom);
        pageButtonsDiv.appendChild(leftRoom);
        pageButtonsDiv.appendChild(rightRoom);
        board4Drops.appendChild(water);
        water.addEventListener('click', grabWater);
        board4Drops.appendChild(emptyWater);
        emptyWater.addEventListener('click', placeWater);
        dialogBoxDiv.innerText = "\nThe next door will not open either. It looks like there is a room on my right and one more on my left.";
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            // currentNotes = notebookText.innerText;
            // notebookText.innerText = currentNotes + "\\\nThis door reads 'What is it that mankind reveres the most?"
            // notebookText.scrollTop = notebookText.scrollHeight;
            notebookConvo.note6();
        }
    }
}

//  CHAPTER THREE
function chapterThree() {
    pageButtonsDiv.innerHTML = '';
    board4Img.style.backgroundImage = "url('./assets/imgs/secondFloor.jpeg')";
    notebookConvo.note9();
    //  DIALOGS AND GLASSES BEHIND AND MAGNIFY AHEAD

    //  CREATE THE BUTTON FOR THE NEXT PAGE UN-LIT & LIT
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
function caveConvo(event, person) {
    currentText = dialogBoxDiv.innerText;
    if (event.detail === 1) {
        if (person === "scientist") {
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
        } else if (person === "mercenary") {
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
            ////   HAVING TROUBLE, IT IS ADDING TWO BITS OF CONVERSATION
    ///    THIS IS MY PROBLEM \/\/\/\/\/
    setTimeout(() => {
        return currentText, chapterTwo.returnFromConvo();
    }, 10000);
}

function entranceRiddle() {
    if (inventory.hasOwnProperty("luckyCoin") && inventory.hasOwnProperty("glasses")) {
        let repsonse = window.prompt("Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.", "Ask Bilbo Baggins");
        if (repsonse.match(/\b(\w*wind\w*)\b/gi)) {
            currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerText = currentText + "\nI got it! Now the door is opening!";
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
            chapterTwo.twoPageFour();
        } else {
            //  DO DAMAGE
            notebookConvo.note5();
            entranceRiddle();
        }
    } else if (inventory.hasOwnProperty("luckyCoin")) {
        let repsonse = window.prompt("Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.", "Ask Bilbo Baggins");
        if (repsonse.match(/\b(\w*wind\w*)\b/gi)) {
            currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerText = currentText + "\nI got it! Now the door is opening!";
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
            chapterTwo.twoPageFour();
        } else {
            // DO DAMAGE
            entranceRiddle();
        } 
    } else if (inventory.hasOwnProperty("glasses")) {
        // FULL QUESTION WITH NO COIN
        let repsonse = window.prompt("Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.");
        if (repsonse.match(/\b(\w*wind\w*)\b/gi)) {
            currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerText = currentText + "\nI got it! Now the door is opening!";
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
            chapterTwo.twoPageFour();
        } else {
            //  DO DAMAGE
            notebookConvo.note5();
            entranceRiddle();
        }
    } else {
        // FULL QUESTION WITH NO COIN
        let repsonse = window.prompt("Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.");
        if (repsonse.match(/\b(\w*wind\w*)\b/gi)) {
            currentText = dialogBoxDiv.innerText;
            dialogBoxDiv.innerText = currentText + "\nI got it! Now the door is opening!";
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
            chapterTwo.twoPageFour();
        } else {
            // DO DAMAGE
            entranceRiddle();
        }
    }
}

function roomInTheMiddle() {
    /// DONT NEED ITEM VISIBLE OR THE EMPTY DIV
    for (let items in firstFloorItems) {
        firstFloorItems[items].style.display = "none";
    }
    board4Img.style.backgroundImage = "url('./assets/imgs/first-middle.jpeg')";
    if (inventory.hasOwnProperty('magnifyingGlass')) {
        // currentNotes = notebookText.innerText;
        // notebookText.innerText = currentNotes + "\\\nThis door reads 'What is it that mankind reveres the most?"
        // notebookText.scrollTop = notebookText.scrollHeight;
        notebookConvo.note6();
    } else if (inventory.hasOwnProperty('emptyWater')) {
        delete inventory.emptyWater;
        return notebookText.innerText, chapterThree();
    }
}

function roomOnTheLeft() {
    //// NEED TO HAVE AN ADDABLE ITEM AND REMOVE THE EMPTY DIV
    if (firstFloorItems.hasOwnProperty('water')) {
        water.style.display = "inline-block";
    }
    if (firstFloorItems.hasOwnProperty('emptyWater')) {
        emptyWater.style.display = "none";
    }
    board4Img.style.backgroundImage = "url('./assets/imgs/first-left.jpeg')";
    if (inventory.hasOwnProperty('magnifyingGlass')) {
        // currentNotes = notebookText.innerText;
        // notebookText.innerText = currentNotes + "\\\nThere is a small stream of water at this alter."
        // notebookText.scrollTop = notebookText.scrollHeight;
        notebookConvo.note7();
        return notebookText.innerText;
    }
}

function roomOnTheRight() {
    if (firstFloorItems.hasOwnProperty('water')) {
        water.style.display = "none";
    }
    if (firstFloorItems.hasOwnProperty('emptyWater')) {
        emptyWater.style.display = "inline-block";
    }
    board4Img.style.backgroundImage = "url('./assets/imgs/first-right.jpeg')";
    if (inventory.hasOwnProperty('magnifyingGlass')) {
        // currentNotes = notebookText.innerText;
        // notebookText.innerText = currentNotes + "\\\nThere is an empty pedastal in this room."
        // notebookText.scrollTop = notebookText.scrollHeight;
        notebookConvo.note8();
        return notebookText.innerText;
    }
}

function grabWater() {
    for (let item in firstFloorItems) {
        if (firstFloorItems[item] === water) {
            firstFloorItems[item].style.position = "static";
        }
    }
    inventoryDiv.appendChild(water);
    water.removeEventListener('click', grabWater);
    inventory.water = water;
    if (inventory.hasOwnProperty('water')) {
        const rmvBtnLeft = document.querySelector('#leftroom');
        rmvBtnLeft.removeEventListener('click', roomOnTheLeft);
    }
    delete firstFloorItems.water;
    roomInTheMiddle();
}

function placeWater() {
    if (inventory.hasOwnProperty('water')) {
        const rmvBtnLeft = document.querySelector('#rightroom');
        rmvBtnLeft.removeEventListener('click', roomOnTheRight);
        emptyWater.appendChild(water);
        inventory.emptyWater = emptyWater;
        delete inventory.water;
        pageButtonsDiv.innerHTML = '';
        roomInTheMiddle();
    } else {
        roomInTheMiddle();
    }
}

//          CHAPTER THREE FUNCTIONS


//          HIDDEN ABILITIES
//  NOTEBOOK
function secretCounter(obj) {
    if (obj.value.length > 30 && obj.value.length < 40) {
        let oldText = obj.value;
        obj.value = oldText +" \nOLD NOTES!!\nHINT: You shouldn't have brought the gun.";
    }
}



//          NOTEBOOK METHOD HOPEFULLY

const notebookConvo = {
    oldNotes: notebookText.innerText,
    activate() {
        notebookDiv.style.display = "flex";
        notebookDiv.appendChild(notebookText);
    },
    note1() {
        notebookText.innerText = "Notebook: You've brought the 'Notebook'. You will not regret this. Feel free to add your own notes as well.";
        notebookText.scrollTop = notebookText.scrollHeight;
        return this.oldNotes;
    },
    note2() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.innerText = this.oldNotes + "Magnifying Glass: Try talking to these two. One of them may have a trade for you.";
            notebookText.scrollTop = notebookText.scrollHeight;
            return this.oldNotes;
        } else {
            return;
        }
    },
    note3() {
        if (inventory.hasOwnProperty('rock') && inventory.hasOwnProperty('glasses')) {
            notebookText.innerText = this.oldNotes + "Glasses: I wonder where Dr. OtherGuy was? Glasses: I have a good feeling about this trade.";
            notebookText.scrollTop = notebookText.scrollHeight;
            return this.oldNotes;
        } else if (inventory.hasOwnProperty('glasses')) {
            notebookText.innerText = this.oldNotes + "Glasses: I wonder where Dr. OtherGuy was?";
            notebookText.scrollTop = notebookText.scrollHeight;
            return this.oldNotes;
        } else {
            return;
        }
    },
    note4() {
        if (inventory.hasOwnProperty('magnifyingGlass') && inventory.hasOwnProperty('luckyCoin')) {
            notebookText.innerText = this.oldNotes + "Magnifying Glass: I believe I've seen a movie with a similar riddle likes this. Lucky Coin: This reminded you of a movie you watched with a similar riddle!";
            notebookText.scrollTop = notebookText.scrollHeight;
            return this.oldNotes;
        } else if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.innerText = this.oldNotes + "Magnifying Glass: I believe I've seen a movie with a similar riddle likes this.";
            notebookText.scrollTop = notebookText.scrollHeight;
            return this.oldNotes;
        } else {
            return;
        }
    },
    note5() {
        /// COULD WORK FOR ALL GLASSES PREVENTS
        if (inventory.hasOwnProperty('glasses')) {
            notebookText.innerText = this.oldNotes + "Glasses: Prevented the damage, try again.";
            notebookText.scrollTop = notebookText.scrollHeight;
            return this.oldNotes;
        } else {
            return;
        }
    },
    note6() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.innerText = this.oldNotes + "Magnifying Glass: The door reads 'What does mankind covete the most?'.";
            notebookText.scrollTop = notebookText.scrollHeight;
            return this.oldNotes;
        } else {
            return;
        }
    },
    note7() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.innerText = this.oldNotes + "Magnifying Glass: This room is centered on this water fountain.";
            notebookText.scrollTop = notebookText.scrollHeight;
            return this.oldNotes;
        } else {
            return;
        }
    },
    note8() {
        if (inventory.hasOwnProperty('magnifyingGlass') && inventory.hasOwnProperty('water')) {
            notebookText.innerText = this.oldNotes + "Magnifying Glass: This empty pedestal is begging for the water.";
            notebookText.scrollTop = notebookText.scrollHeight;
            return this.oldNotes;
        } else if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.innerText = this.oldNotes + "Magnifying Glass: This empty pedestal is missing something.";
            notebookText.scrollTop = notebookText.scrollHeight;
            return this.oldNotes;
        } else {
            return;
        }
    },
    note9() {
        if (inventory.hasOwnProperty('magnifyingGlass') && inventory.hasOwnProperty('glasses')) {
            notebookText.innerText = this.oldNotes + "Glasses: First wind, then water, this is interesting. Magnifying Glass: I'm glad I was given this torch, it is getting really dark.";
            notebookText.scrollTop = notebookText.scrollHeight;
            return this.oldNotes;
        } else if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.innerText = this.oldNotes + "Magnifying Glass: I'm glad I was given this torch, it is getting really dark.";
            notebookText.scrollTop = notebookText.scrollHeight;
            return this.oldNotes;
        } else if (inventory.hasOwnProperty('glasses')) {
            notebookText.innerText = this.oldNotes + "Glasses: First wind, then water, this is interesting.";
            notebookText.scrollTop = notebookText.scrollHeight;
            return this.oldNotes;
        } else {
            return;
        }
    },
    note10() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.innerText = this.oldNotes + "Magnifying Glass: Extremely happy I have the torch, Lets light these three torches.";
            notebookText.scrollTop = notebookText.scrollHeight;
            return this.oldNotes;
        } else {
            return;
        }
    },
    note11() {
        if (inventory.hasOwnProperty('glasses')) {
            notebookText.innerText = this.oldNotes + "Glasses: first wind, second water, now fire...";
            notebookText.scrollTop = notebookText.scrollHeight;
            return this.oldNotes;
        } else {
            return;
        }
    },
}


///// CHAPTER THREE HAS STOPPED WORKING AND NOTEBOOK CONTINUES TO OVERWRITE!!