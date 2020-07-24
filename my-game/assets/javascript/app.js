

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
let people = {scientist: scientist, mercenary: mercenary};

//  THE UNLIT TORCHES
const unLit1 = document.querySelector('#torch1');
const unLit2 = document.querySelector('#torch2');
const unLit3 = document.querySelector('#torch3');
const bats = document.querySelector('.bats');
const reDo1 = document.querySelector('#reDo1');
const reDo2 = document.querySelector('#reDo2');
const reDo3 = document.querySelector('#reDo3');
let dark = {torch1: unLit1, torch2: unLit2, torch3: unLit3};
let dark2 = {reDoTorch1: reDo1, reDoTorch2: reDo2, reDoTorch3: reDo3};

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
            dialogConvo.log1();
            setTimeout(() => {
                dialogConvo.log2();
            }, 100);
            setTimeout(() => {
                dialogConvo.log3();
            }, 600);
            setTimeout(() => {
                dialogConvo.log4();
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
            dialogConvo.log5();
        }, 800);
        setTimeout(() => {
            dialogConvo.log6();
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
        board4Img.style.backgroundImage = "url('./assets/imgs/the-office.jpeg')";
        dialogConvo.log7();
        for (let item in office) {
            // console.log(office[item]);
            office[item].style.display = "inline-block";
            office[item].addEventListener('click', function(e) {
                //  TRY TO PREVENT DOUBLE CLICKS ON THIS FUNCTION
                if (e.detail === 1) {
                    if (office[item] === magnifyingGlass) {
                        return dialogConvo.log8();
                    } else if (office[item] === notebook) {
                        return dialogConvo.log9();
                    } else if (office[item] === luckyCoin) {
                        return dialogConvo.log10();
                    } else if (office[item] === lighter) {
                        return dialogConvo.log11();
                    } else if (office[item] === glasses) {
                        return dialogConvo.log12();
                    } else if (office[item] === apple) {
                        return dialogConvo.log13();
                    } else if (office[item] === gun) {
                        return dialogConvo.log14();
                    } else {
                        return;
                    }
                } else if (e.detail === 2) {
                    if (Object.keys(inventory).length < 3) {
                        office[item].style.position = "static";
                        inventory[item] = office[item];
                        office[item] = null;
                        inventoryDiv.appendChild(inventory[item]);
                        return;
                    } else {
                        return dialogConvo.log15();
                    }
                } else {
                    return;
                }
            });
        };
        document.addEventListener('keydown', officeInvent);
        setTimeout(() => {
            dialogConvo.log16();
        }, 300);
        setTimeout(() => {
            dialogConvo.log17();
            setTimeout(() => {
                pageButtonsDiv.appendChild(chapterTwoBtn);
            })
        }, 800)
    }
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
    dialogConvo.log18();
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
            dialogConvo.log19();
            notebookConvo.note1();
            notebookConvo.note2();
        }
        /////////  NEED TO ADJUST TIMING OF THIS FOR COVERSATIONS TO HAPPEN
        /////////  MAYBE AFTER A NEW BUTTON?
        setTimeout(() => {
            if (inventory.hasOwnProperty("rock")) {
                dialogConvo.log24();
            }
        }, 1000);
        setTimeout(() => {
            if (inventory.hasOwnProperty("glasses") && inventory.hasOwnProperty("rock")) {
                dialogConvo.log25();
                notebookConvo.note3();
            } else if (inventory.hasOwnProperty("glasses")) {
                dialogConvo.log26();
                notebookConvo.note3();
            }
            pageButtonsDiv.appendChild(twoPageTwo);
        }, 2000);
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
        if (inventory.hasOwnProperty('torch')) {
            for (let person in people) {
                people[person].style.display = "none";
                people[person].removeEventListener('click', caveConvo);
            }
        } else {
            mercenary.style.display = "none";
            mercenary.removeEventListener('click', caveConvo);
            inventory.torch = caveItems.torch;
            setTimeout(() => {
                scientist.style.display = "none";
                scientist.removeEventListener('click', caveConvo);
                frontDoor();
            }, 5000);
        }
        function frontDoor() {
            setTimeout(() => {
                dialogConvo.log27();
                setTimeout(() => {
                    setTimeout(() => {
                        if (inventory.hasOwnProperty("magnifyingGlass") || inventory.hasOwnProperty("luckyCoin")) {
                            dialogConvo.log28();
                            notebookConvo.note4();
                        }
                    }, 500);
                    setTimeout(() => {
                        entranceRiddle();
                    }, 1000);
                }, 1000);
            },700);
        }
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
    chapterTwo.twoPageFour = twoPageFour;
    function twoPageFour() {
        pageButtonsDiv.innerHTML = '';
        dialogBoxDiv.innerText = '';
        board4Img.style.backgroundImage = "url('./assets/imgs/first-middle.jpeg')";
        pageButtonsDiv.appendChild(middleRoom);
        pageButtonsDiv.appendChild(leftRoom);
        pageButtonsDiv.appendChild(rightRoom);
        board4Drops.appendChild(water);
        water.addEventListener('click', grabWater);
        board4Drops.appendChild(emptyWater);
        emptyWater.addEventListener('click', placeWater);
        dialogConvo.log30();
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            return notebookConvo.note6();
        }
    }
}

//  CHAPTER THREE
function chapterThree() {
    const removeThreeBtn = document.querySelector('#chapThreeBtn');
    removeThreeBtn.removeEventListener('click', chapterThree);
    pageButtonsDiv.removeChild(removeThreeBtn);
    board4Img.style.backgroundImage = "url('./assets/imgs/secondFloor.jpeg')";
    dialogConvo.log31();
    notebookConvo.note9();
    const torchRoom = document.createElement('button');
    torchRoom.setAttribute('class', 'buttons');
    torchRoom.setAttribute('id', 'torchRoomBtn');
    torchRoom.innerText = "Page: 2"
    torchRoom.addEventListener('click', inTorchRoom);
    pageButtonsDiv.appendChild(torchRoom);
    function threePageThree() {
        // DIALOG AND SPECIALS
        setTimeout(() => {
            bats.style.display = "inline-block"
            // pageButtonsDiv.removeChild(torchRoom);
            setTimeout(() => {
                // DIALOG AND SPECIALS
                if (inventory.hasOwnProperty('gun')) {
                    let which = window.prompt("What should you do? Which should you use?", "'gun' or 'torch' or 'run'");
                    if (which === 'gun') {
                        // DO BAD DAMAGE 
                        // DIALOG IT
                        // RE-TORCHES W/O BATS
                        reDoTorches();
                    } else if (which === 'torch') {
                        // DO SMALL DAMAGE 
                        // CHECK FOR LIGHTER AND MOVE ON
                        if (inventory.hasOwnProperty('lighter')) {
                            // DIALOG AND NOTES
                            threePageFour();
                        } else {
                            reDoTorches();
                        }
                        // RE-LIGHT TORCHES W/O BATS
                    } else if (which === 'run') {
                        // DIALOG
                        // DO SMALL DAMAGE 
                        // RE-LIGHT TORCHES W/O BATS
                        reDoTorches();
                    } else {
                        // DO BAD DAMAGE 
                        // RE-TORCHES W/O BATS
                        reDoTorches();
                    }
                } else {
                    let which = window.prompt("What should you do?", "use 'torch' or 'run'");
                    if (which === 'torch') {
                        if (inventory.hasOwnProperty('lighter')) {
                            // DIALOG AND NOTES
                            threePageFour();
                        } else {
                            reDoTorches();
                        }
                        // DO SMALL DAMAGE 
                        // CHECK FOR LIGHTER AND MOVE ON
                    } else if (which === 'run') {
                        // DO SMALL DAMAGE 
                        // DIALOG
                        // RE-LIGHT TORCHES W/O BATS
                        reDoTorches();
                    } else {
                        // DO BAD DAMAGE
                        // RE-DO TORCHES W/O BATS
                        reDoTorches();
                    }
                }
                
            }, 1000);
        }, 1000);
    }
    chapterThree.threePageThree = threePageThree;
    function reDoTorches() {
        // DIALOG AND SPECIALS
        board4Img.style.backgroundImage = "url('./assets/imgs/secondFloor.jpeg')"
        // RESET BUTTON FOR SAME ROOM WITH OUT BATS
        const newButton = document.createElement('button');
        newButton.addEventListener('click', inTorchRoomAgain);
        newButton.setAttribute('class', 'buttons');
        newButton.setAttribute('id', 'reDo');
        newButton.innerText = "Try Again";
        pageButtonsDiv.appendChild(newButton);
        function inTorchRoomAgain() {
            board4Drops.removeChild(bats);
            pageButtonsDiv.removeChild(newButton);
            board4Img.style.backgroundImage = "url('./assets/imgs/un-lit.png')";
            for (let toRches2 in dark2) {
                dark2[toRches2].style.display = "inline-block";
                dark2[toRches2].addEventListener('click', (event) => countTorches2(event, toRches2));
            }
            dialogConvo.log32();
            notebookConvo.note10();
            function countTorches2(event, toRches2) {
                if (event.detail === 1) {
                    if (toRches2 === "reDoTorch1") {
                        board4Drops.removeChild(reDo1);
                        delete dark2.reDoTorch1;
                        //  ADD DIALOG
                        if (Object.keys(dark2).length === 0) {
                            board4Img.style.backgroundImage = "url('./assets/imgs/lit.png')"
                            threePageFour();
                        }
                    }
                    if (toRches2 === "reDoTorch2") {
                        board4Drops.removeChild(reDo2);
                        delete dark2.reDoTorch2;
                        //  ADD DIALOG
                        if (Object.keys(dark2).length === 0) {
                            board4Img.style.backgroundImage = "url('./assets/imgs/lit.png')"
                            threePageFour();
                        }
                    }
                    if (toRches2 === "reDoTorch3") {
                        board4Drops.removeChild(reDo3);
                        delete dark2.reDoTorch3;
                        //  ADD DIALOG
                        if (Object.keys(dark2).length === 0) {
                            board4Img.style.backgroundImage = "url('./assets/imgs/lit.png')"
                            threePageFour();
                        }
                    }
                }
            }
        }
    }
    function threePageFour() {
        bats.style.display = 'none';
        board4Img.style.backgroundImage = "url('./assets/imgs/second-final.jpeg')"
        const fourth = document.createElement('button');
        fourth.setAttribute('class', 'buttons');
        fourth.setAttribute('id', 'fourth');
        fourth.addEventListener('click', chapterFour);
        fourth.innerText = "Chapter: 4";
        pageButtonsDiv.appendChild(fourth);
        // DIALOG AND SPECIALS
    }
}

//  CHAPTER FOUR
function chapterFour(){
    pageButtonsDiv.innerHTML = '';
    dialogBoxDiv.innerText = '';
    board4Img.style.backgroundImage = "url('./assets/imgs/third-first.png')";
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

let sci = 0;
let mer = 0;
//          CHAPTER TWO FUNCTIONS
function caveConvo(event, person) {
    if (sci < 1) {
        if (event.detail === 1) {
            if (person === "scientist") {
                sci += 1;
                dialogConvo.log20();
                for (let item in caveItems) {
                    if (caveItems[item] === torch) {
                        caveItems[item].style.display = "inline-block";
                        caveItems[item].style.position = "static";
                        inventory[item] = caveItems[item];
                        caveItems[item] = null;
                        inventoryDiv.appendChild(torch);
                    }
                }
            }
        } else if (event.detail > 1) {
            return;
        }
    }
    if (mer < 1) {
        if (event.detail === 1) {
            if (person === "mercenary") {
                mer += 1;
                dialogConvo.log21();
                if (inventory.hasOwnProperty("gun")) {
                    dialogConvo.log22();
                    setTimeout(() => {
                        let confirm = window.confirm("TRADE: Gun for a shiny rock?");
                        if (confirm) {
                            shinyRock.style.display = "inline-block";
                            shinyRock.style.position = "static";
                            inventory.rock = shinyRock;
                            inventoryDiv.appendChild(shinyRock);
                            inventoryDiv.removeChild(gun);
                            delete inventory.gun;
                            console.log(people)
                        } else {
                            dialogConvo.log23();
                        }
                    }, 500);
                }
            }
        } else if (event.detail > 1) {
            return;
        }
    }
}

function entranceRiddle() {
    if (inventory.hasOwnProperty("luckyCoin") && inventory.hasOwnProperty("glasses")) {
        let repsonse = window.prompt("Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.", "Ask Bilbo Baggins");
        if (repsonse.match(/\b(\w*wind\w*)\b/gi)) {
            dialogConvo.log29();
            chapterTwo.twoPageFour();
        } else {
            //  DO DAMAGE
            notebookConvo.note5();
            entranceRiddle();
        }
    } else if (inventory.hasOwnProperty("luckyCoin")) {
        let repsonse = window.prompt("Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.", "Ask Bilbo Baggins");
        if (repsonse.match(/\b(\w*wind\w*)\b/gi)) {
            dialogConvo.log29();
            chapterTwo.twoPageFour();
        } else {
            // DO DAMAGE
            entranceRiddle();
        } 
    } else if (inventory.hasOwnProperty("glasses")) {
        let repsonse = window.prompt("Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.");
        if (repsonse.match(/\b(\w*wind\w*)\b/gi)) {
            dialogConvo.log29();
            chapterTwo.twoPageFour();
        } else {
            //  DO DAMAGE
            notebookConvo.note5();
            entranceRiddle();
        }
    } else {
        let repsonse = window.prompt("Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.");
        if (repsonse.match(/\b(\w*wind\w*)\b/gi)) {
            dialogConvo.log29();
            chapterTwo.twoPageFour();
        } else {
            // DO DAMAGE
            entranceRiddle();
        }
    }
}
const chapterThreeBtn = document.createElement('button');
chapterThreeBtn.setAttribute('class', 'buttons');
chapterThreeBtn.setAttribute('id', 'chapThreeBtn');
chapterThreeBtn.innerText = 'Chapter: 3';
chapterThreeBtn.addEventListener('click', chapterThree);

function roomInTheMiddle() {
    for (let items in firstFloorItems) {
        firstFloorItems[items].style.display = "none";
    }
    board4Img.style.backgroundImage = "url('./assets/imgs/first-middle.jpeg')";
    if (inventory.hasOwnProperty('magnifyingGlass')) {
        notebookConvo.note6();
    }
    if (inventory.hasOwnProperty('emptyWater')) {
        while (pageButtonsDiv.firstChild) {
            pageButtonsDiv.removeChild(pageButtonsDiv.lastChild);
        };
        delete inventory.emptyWater;
        board4Drops.removeChild(emptyWater);
        pageButtonsDiv.appendChild(chapterThreeBtn);
    }
}

function roomOnTheLeft() {
    if (firstFloorItems.hasOwnProperty('water')) {
        water.style.display = "inline-block";
    }
    if (firstFloorItems.hasOwnProperty('emptyWater')) {
        emptyWater.style.display = "none";
    }
    board4Img.style.backgroundImage = "url('./assets/imgs/first-left.jpeg')";
    if (inventory.hasOwnProperty('magnifyingGlass')) {
        return notebookConvo.note7();
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
        return notebookConvo.note8();
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
        roomInTheMiddle();
    } else {
        roomInTheMiddle();
    }
}

//          CHAPTER THREE FUNCTIONS

function inTorchRoom() {
    board4Img.style.backgroundImage = "url('./assets/imgs/un-lit.png')";
    const unclickBtn = document.querySelector('#torchRoomBtn');
    unclickBtn.removeEventListener('click', inTorchRoom);
    pageButtonsDiv.removeChild(unclickBtn);
    for (let toRches in dark) {
        dark[toRches].style.display = "inline-block";
        dark[toRches].addEventListener('click', (event) => countTorches(event, toRches));
    }
    dialogConvo.log32();
    notebookConvo.note10();
    function countTorches(event, toRches) {
        if (event.detail === 1) {
            if (toRches === "torch1") {
                board4Drops.removeChild(unLit1);        
                delete dark.torch1;
                //  ADD DIALOG
                if (Object.keys(dark).length === 0) {
                    board4Img.style.backgroundImage = "url('./assets/imgs/lit.png')"
                    chapterThree.threePageThree();
                }
            }
            if (toRches === "torch2") {
                board4Drops.removeChild(unLit2);
                delete dark.torch2;
                //  ADD DIALOG
                if (Object.keys(dark).length === 0) {
                    board4Img.style.backgroundImage = "url('./assets/imgs/lit.png')"
                    chapterThree.threePageThree();
                }
            }
            if (toRches === "torch3") {
                board4Drops.removeChild(unLit3);
                delete dark.torch3;
                //  ADD DIALOG
                if (Object.keys(dark).length === 0) {
                    board4Img.style.backgroundImage = "url('./assets/imgs/lit.png')"
                    chapterThree.threePageThree();
                }
            }
        }
    }
}


//////////
//////
// IF's FOR THE TORCHES THROUGHOUT
// DO ONE ALERT AND FORCE GIVE FROM SCIENTIST
//////
//////////





//          HIDDEN ABILITIES
//  NOTEBOOK
// function secretCounter(obj) {
//     if (obj.value.length > 30 && obj.value.length < 40) {
//         let oldText = obj.value;
//         obj.value = oldText +" \nOLD NOTES!!\nHINT: You shouldn't have brought the gun.";
//     }
// }



//////////// ^^^^^^^REWRITE THIS FOR INNERTEXT COUNTER^^^^^^^^ ////////////


//          DIALOG METHODS
const dialogConvo = {
    log1() {
        dialogBoxDiv.appendChild(lineBreak('Look for all messages to appear in the THIS box at the bottom of the screen.'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log2() {
        dialogBoxDiv.appendChild(lineBreak('Good Morning, Today is like no other and you are about to find out why!'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log3() {
        dialogBoxDiv.appendChild(lineBreak('This dialog box is essential to the process of the game, so will be the buttons to the left of this box.'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log4() {
        dialogBoxDiv.appendChild(lineBreak('Click the Page: 2 button to procede with the intro.'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log5() {
        dialogBoxDiv.appendChild(lineBreak("You're ego decides for you that you must go to this new mysterious island"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log6() {
        dialogBoxDiv.appendChild(lineBreak('You are now going to your office and can only bring three of these items with you on the trip. Flip to Page: 3'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log7() {
        dialogBoxDiv.appendChild(lineBreak('ONLY three items from this office can be put into your inventory box. You will never have access to the items left behind again!'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log8() {
        dialogBoxDiv.appendChild(lineBreak('Magnifying Glass: This will inspect every page of the story and give you clues. Much like this click now.'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log9() {
        dialogBoxDiv.appendChild(lineBreak('Notebook: This will give you access to a textbox next to the dialog. You may even find old note?'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log10() {
        dialogBoxDiv.appendChild(lineBreak('Lucky Coin: This has always been my lucky coin.'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log11() {
        dialogBoxDiv.appendChild(lineBreak('Lighter: This can sure serve a purpose.'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log12() {
        dialogBoxDiv.appendChild(lineBreak('Glasses: These serve more as hind-sight rather than needed to see.'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log13() {
        dialogBoxDiv.appendChild(lineBreak('Apple: This will provide a small boost to health.'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log14() {
        dialogBoxDiv.appendChild(lineBreak("Gun: It's a gun."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log15() {
        dialogBoxDiv.appendChild(lineBreak("Your Inventory is full. Try pressing 'q' to return the items from your Inventory to the office.\n You may also go to the next Chapter now."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log16() {
        dialogBoxDiv.appendChild(lineBreak("Hint: Click on an item to check it's usefulness.\n Double click an item to place it into your inventory."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log17() {
        dialogBoxDiv.appendChild(lineBreak("The Helicopter is leaving! You need to pick three NOW."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log18() {
        dialogBoxDiv.appendChild(lineBreak("Wow! Antartica has really been melting a lot. There must be more than just this new discovery here."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log19() {
        // IF
        dialogBoxDiv.appendChild(lineBreak("Magnifying Glass: Try talking to these two people, one of them has an offer for you."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log20() {
        dialogBoxDiv.appendChild(lineBreak("SCIENTIST: Hello Dr. SoAndSo, my name is Dr. notImportant and we've been expecting you. Here I believe you will need this if you can make it past the entrance.\nThe scientist has given you a Torch!"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log21() {
        dialogBoxDiv.appendChild(lineBreak("MERCENARY: Dr. otherGuy said you'd be showing up today.\n Don't worry about me, I'm just the hired help."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log22() {
        dialogBoxDiv.appendChild(lineBreak("MERCENARY: HEY!! Is that an old revolver? Would you like to trade for this shiny rock?"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log23() {
        dialogBoxDiv.appendChild(lineBreak("MERCENARY: Whatever. Your loss anyways."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log24() {
        // IF
        dialogBoxDiv.appendChild(lineBreak("Hmmmm... This rock is rather interesting. It seems to have special properties to it."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log25() {
        // IF
        dialogBoxDiv.appendChild(lineBreak("Glasses: I definitely made the right choice. It seems to be missing a piece though. \nGlasses: I wonder where Dr. otherGuy was?"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log26() {
        // IF
        dialogBoxDiv.appendChild(lineBreak("Glasses: I wonder where Dr. otherGuy was?"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log27() {
        dialogBoxDiv.appendChild(lineBreak("Hmm.. There appears to be an ancient language written on the door."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log28() {
        if (inventory.hasOwnProperty('magnifyingGlass') && inventory.hasOwnProperty('luckyCoin')) {
            dialogBoxDiv.appendChild(lineBreak("Magnifying Glass: I believe I've seen a movie with a similar riddle likes this.\nLucky Coin: This reminded you of a movie you watched with a similar riddle!"));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        } else if (inventory.hasOwnProperty('magnifyingGlass')) {
            dialogBoxDiv.appendChild(lineBreak("Magnifying Glass: I believe I've seen a movie with a similar riddle likes this."));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        }
    },
    log29() {
        dialogBoxDiv.appendChild(lineBreak("I got it! Now the door is opening!"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log30() {
        dialogBoxDiv.appendChild(lineBreak("The next door will not open either. It looks like there is a room on my right and one more on my left."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log31() {
        if (inventory.hasOwnProperty('magnifyingGlass') && inventory.hasOwnProperty('glasses')) {
            dialogBoxDiv.appendChild(lineBreak("Glasses: First wind, then water, this is interesting. Magnifying Glass: I'm glad I was given this torch, it is getting really dark."));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        } else if (inventory.hasOwnProperty('magnifyingGlass')) {
            dialogBoxDiv.appendChild(lineBreak("Magnifying Glass: I'm glad I was given this torch, it is getting really dark."));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        } else if (inventory.hasOwnProperty('glasses')) {
            dialogBoxDiv.appendChild(lineBreak("Glasses: First wind, then water, this is interesting."));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        }
    },
    log32() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            dialogBoxDiv.appendChild(lineBreak("Magnifying Glass: Extremely happy I have the torch, Lets light these three torches."));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        }
    },
    log33() {
        dialogBoxDiv.appendChild(lineBreak(""));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log34() {
        dialogBoxDiv.appendChild(lineBreak(""));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log35() {
        dialogBoxDiv.appendChild(lineBreak(""));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log36() {
        dialogBoxDiv.appendChild(lineBreak(""));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log37() {
        dialogBoxDiv.appendChild(lineBreak(""));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
}

//          NOTEBOOK METHODS
const notebookConvo = {
    activate() {
        notebookDiv.style.display = "flex";
        notebookDiv.appendChild(notebookText);
    },
    note1() {
        notebookText.appendChild(lineBreak("Notebook: You've brought the 'Notebook'. You will not regret this. Feel free to add your own notes as well."));
        notebookText.scrollTop = notebookText.scrollHeight;
    },
    note2() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("Magnifying Glass: Try talking to these two. One of them may have a trade for you."));
            notebookText.scrollTop = notebookText.scrollHeight;
        }
    },
    note3() {
        if (inventory.hasOwnProperty('rock') && inventory.hasOwnProperty('glasses')) {
            notebookText.appendChild(lineBreak("Glasses: I wonder where Dr. OtherGuy was? Glasses: I have a good feeling about this trade."));
            notebookText.scrollTop = notebookText.scrollHeight;
        } else if (inventory.hasOwnProperty('glasses')) {
            notebookText.appendChild(lineBreak("Glasses: I wonder where Dr. OtherGuy was?"));
            notebookText.scrollTop = notebookText.scrollHeight;
        } 
    },
    note4() {
        if (inventory.hasOwnProperty('magnifyingGlass') && inventory.hasOwnProperty('luckyCoin')) {
            notebookText.appendChild(lineBreak("Magnifying Glass: I believe I've seen a movie with a similar riddle likes this.\nLucky Coin: This reminded you of a movie you watched with a similar riddle!"));
            notebookText.scrollTop = notebookText.scrollHeight;
        } else if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("Magnifying Glass: I believe I've seen a movie with a similar riddle likes this."));
            notebookText.scrollTop = notebookText.scrollHeight;
        }
    },
    note5() {
        /// COULD WORK FOR ALL GLASSES PREVENTS
        if (inventory.hasOwnProperty('glasses')) {
            notebookText.appendChild(lineBreak("Glasses: Prevented the damage, try again."));
            notebookText.scrollTop = notebookText.scrollHeight;
        } 
    },
    note6() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("Magnifying Glass: The door reads 'What does mankind covete the most?'."));
            notebookText.scrollTop = notebookText.scrollHeight;
        }
    },
    note7() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("Magnifying Glass: This room is centered on this water fountain."));
            notebookText.scrollTop = notebookText.scrollHeight;
        }
    },
    note8() {
        if (inventory.hasOwnProperty('magnifyingGlass') && inventory.hasOwnProperty('water')) {
            notebookText.appendChild(lineBreak("Magnifying Glass: This empty pedestal is begging for the water."));
            notebookText.scrollTop = notebookText.scrollHeight;
        } else if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("Magnifying Glass: This empty pedestal is missing something."));
            notebookText.scrollTop = notebookText.scrollHeight;
        }
    },
    note9() {
        if (inventory.hasOwnProperty('magnifyingGlass') && inventory.hasOwnProperty('glasses')) {
            notebookText.appendChild(lineBreak("Glasses: First wind, then water, this is interesting.\nMagnifying Glass: I'm glad I was given this torch, it is getting really dark."));
            notebookText.scrollTop = notebookText.scrollHeight;
        } else if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("Magnifying Glass: I'm glad I was given this torch, it is getting really dark."));
            notebookText.scrollTop = notebookText.scrollHeight;
        } else if (inventory.hasOwnProperty('glasses')) {
            notebookText.appendChild(lineBreak("Glasses: First wind, then water, this is interesting."));
            notebookText.scrollTop = notebookText.scrollHeight;
        }
    },
    note10() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("Magnifying Glass: Extremely happy I have the torch, Lets light these three torches."));
            notebookText.scrollTop = notebookText.scrollHeight;
        }
    },
    note11() {
        if (inventory.hasOwnProperty('glasses')) {
            notebookText.appendChild(lineBreak("Glasses: first wind, second water, now fire..."));
            notebookText.scrollTop = notebookText.scrollHeight;
        }
    },
}



function lineBreak(string) {
    let p = document.createElement('p');
    p.innerText = string;
    return p;
}

///// CHAPTER THREE HAS STOPPED WORKING AND NOTEBOOK CONTINUES TO OVERWRITE!!