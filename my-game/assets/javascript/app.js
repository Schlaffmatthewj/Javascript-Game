

//          THE DOM ELEMENTS
//          THE GLOBAL VARIABLES

//  THE START BUTTON
const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', (event) => {
    if (forReset) {
        location.reload();
    }
    chapterOne();
});

let inventory = {};
let elementDropCount = 0;

//  THE BOOK
let forReset = false;

//  THE PROGRESS BAR
let health = 100;
let eatApple = -25;
let lightDam = 5;
let medDam = 15;
let dam = 25;
let ouch = 30;
const healthBarDiv = document.querySelector('#healthDiv');
const healthBar = document.querySelector('progress');
healthBar.setAttribute('value', health);


//  THE TASK BAR
const inventoryDiv = document.querySelector('.inventoryDropBox');
const notebookDiv = document.querySelector('.notebook');
const notebookText = document.querySelector('.notebookBox');

//  THE BOTTOM TASK BAR
const pageButtonsDiv = document.querySelector('.pageButtons');
const dialogBoxDiv = document.querySelector('.dialogBox');

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
officeCounter = 0;

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
let sci = false;
let mer = false;

//  THE FINAL CHARACTERS
const scientist2 = document.querySelector('#scientist2');
const mercenary2 = document.querySelector('#mercenary2');
const drOther2 = document.querySelector('#drOther');
let lastPeople = {scientist2: scientist2, mercenary2: mercenary2, drOther2: drOther2};
let sciFinal = false;
let merFinal = false;
let drFinal = false;

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

// NOT FINAL CHAPTER
const elementRoom = document.createElement('button');
elementRoom.setAttribute('class', 'buttons');
elementRoom.setAttribute('id', 'eleRoom');
elementRoom.innerText = 'Corridor';
elementRoom.addEventListener('click', corridor);
const fire = document.createElement('button');
fire.setAttribute('class', 'buttons');
fire.setAttribute('id', 'firePath');
fire.innerText = 'Fire';
fire.addEventListener('click', wayOfFire);
const waterWay = document.createElement('button');
waterWay.setAttribute('class', 'buttons');
waterWay.setAttribute('id', 'waterPath');
waterWay.innerText = 'Water';
waterWay.addEventListener('click', wayOfWater);
const earth = document.createElement('button');
earth.setAttribute('class', 'buttons');
earth.setAttribute('id', 'earthPath');
earth.innerText = 'Earth';
earth.addEventListener('click', wayOfEarth);
const air = document.createElement('button');
air.setAttribute('class', 'buttons');
air.setAttribute('id', 'airPath');
air.innerText = 'Air';
air.addEventListener('click', wayOfAir);
const final = document.createElement('button');
final.setAttribute('class', 'buttons');
final.setAttribute('id', 'finalPath');
final.innerText = 'Final Path';
final.addEventListener('click', finalWay);

// FINAL PATHS
const fireFinal = document.createElement('button');
fireFinal.setAttribute('class', 'buttons');
fireFinal.setAttribute('id', 'fireFinalPath');
fireFinal.innerText = 'Fire Room';
fireFinal.addEventListener('click', fireFinalWay);
const waterFinal = document.createElement('button');
waterFinal.setAttribute('class', 'buttons');
waterFinal.setAttribute('id', 'waterFinalPath');
waterFinal.innerText = 'Water Room';
waterFinal.addEventListener('click', waterFinalWay);
const airFinal = document.createElement('button');
airFinal.setAttribute('class', 'buttons');
airFinal.setAttribute('id', 'airFinalPath');
airFinal.innerText = 'Air Room';
airFinal.addEventListener('click', airFinalWay);
const earthFinal = document.createElement('button');
earthFinal.setAttribute('class', 'buttons');
earthFinal.setAttribute('id', 'earthFinalPath');
earthFinal.innerText = 'Earth Room';
earthFinal.addEventListener('click', earthFinalWay);
const lastDoor = document.createElement('button');
lastDoor.setAttribute('class', 'buttons');
lastDoor.setAttribute('id', 'lastDoorPath');
lastDoor.innerText = 'Final Door';
lastDoor.addEventListener('click', finalDoor);

// FINAL ELEMENTS
const eleWater = document.querySelector('#waterId');
eleWater.addEventListener('click', addToInvent);
const eleFire = document.querySelector('#fireId');
eleFire.addEventListener('click', addToInvent);
const eleEarth = document.querySelector('#earthId');
eleEarth.addEventListener('click', addToInvent);
const eleWind = document.querySelector('#windId');
eleWind.addEventListener('click', addToInvent);
const eleKey = document.querySelector('#key');
eleKey.addEventListener('click', addToInvent);
const allElements = document.querySelectorAll('.elements');
let elemental = {theWater: eleWater, theWind: eleWind, theEarth: eleEarth, theFire: eleFire, theKey: eleKey};

// FINAL DROPS
const eleWaterDrop = document.querySelector('#waterDrop');
eleWaterDrop.addEventListener('click', getKey);
const eleFireDrop = document.querySelector('#fireDrop');
eleFireDrop.addEventListener('click', getKey);
const eleEarthDrop = document.querySelector('#earthDrop');
eleEarthDrop.addEventListener('click', getKey);
const eleWindDrop = document.querySelector('#windDrop');
eleWindDrop.addEventListener('click', getKey);
const eleKeyDrop = document.querySelector('#keyDrop');
eleKeyDrop.addEventListener('click', openDoor);
const allDrops = document.querySelectorAll('.elementsDrop');

//  ACTUAL LAST CHAPTER
const finalChapter = document.createElement('button');
finalChapter.setAttribute('class', 'buttons');
finalChapter.setAttribute('id', 'finalChapterBtn');
finalChapter.innerText = 'Final Chapter';
finalChapter.addEventListener('click', lastChapter);

//  LAST CONVO
const iHave = document.createElement('button');
iHave.setAttribute('class', 'buttons');
iHave.setAttribute('id', 'iHaveBtn');
iHave.innerText = 'Use the Gun';
iHave.addEventListener('click', iUseGun);
const finEle = document.createElement('button');
finEle.setAttribute('class', 'buttons');
finEle.setAttribute('id', 'finEleBtn');
finEle.innerText = 'Use the Elemental Key';
finEle.addEventListener('click', iUseEle);
const finEleSci = document.createElement('button');
finEleSci.setAttribute('class', 'buttons');
finEleSci.setAttribute('id', 'finEleSciBtn');
finEleSci.innerText = 'Scientist uses the Elemental Key';
finEleSci.addEventListener('click', iUseEleSci);
const appCoin = document.createElement('button');
appCoin.setAttribute('class', 'buttons');
appCoin.setAttribute('id', 'appCoinBtn');
appCoin.innerText = 'Trick with Apple';
appCoin.addEventListener('click', iUseAppCoin);
const run50 = document.createElement('button');
run50.setAttribute('class', 'buttons');
run50.setAttribute('id', 'run50Btn');
run50.innerText = 'Try to run';
run50.addEventListener('click', iRun);

// HE HAS GUN
const finEleGun = document.createElement('button');
finEleGun.setAttribute('class', 'buttons');
finEleGun.setAttribute('id', 'finEleGunBtn');
finEleGun.innerText = 'Use the Elemental Key';
finEleGun.addEventListener('click', iUseEleGun);
const finEleSciGun = document.createElement('button');
finEleSciGun.setAttribute('class', 'buttons');
finEleSciGun.setAttribute('id', 'finEleSciGunBtn');
finEleSciGun.innerText = 'Scientist uses the Elemental Key';
finEleSciGun.addEventListener('click', iUseEleSciGun);
const appCoinGun = document.createElement('button');
appCoinGun.setAttribute('class', 'buttons');
appCoinGun.setAttribute('id', 'appCoinGunBtn');
appCoinGun.innerText = 'Trick with Apple';
appCoinGun.addEventListener('click', iUseAppCoinGun);
const run50Gun = document.createElement('button');
run50Gun.setAttribute('class', 'buttons');
run50Gun.setAttribute('id', 'run50GunBtn');
run50Gun.innerText = 'Try to run';
run50Gun.addEventListener('click', iRunGun);


//          CHAPTERS
//  CHAPTER ONE
function chapterOne() {
    forReset = true;
    startButton.innerText = 'Reset';
    const pageTwoBtn = document.createElement('button');
    pageTwoBtn.setAttribute('class', 'buttons');
    pageTwoBtn.innerText = "Page: 2";
    pageTwoBtn.addEventListener('click', pageTwo);
    function pageOne() {
        board4Img.style.backgroundImage = "url('./assets/imgs/first-morning.jpeg')";
        setTimeout(() => {
            alert("Look for all messages to appear in the 'Dialog' box at the bottom of the screen");
            dialogConvo.log1();
            setTimeout(() => {
                dialogConvo.log2();
            }, 1000);
            setTimeout(() => {
                dialogConvo.log3();
            }, 6000);
            setTimeout(() => {
                dialogConvo.log4();
                pageButtonsDiv.appendChild(pageTwoBtn);
            }, 10000);
        }, 3000);
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
        }, 8000);
        setTimeout(() => {
            dialogConvo.log6();
            pageButtonsDiv.appendChild(pageThreeBtn);
        }, 10000);
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
        document.addEventListener('keydown', officeInvent);
        for (let item in office) {
            office[item].style.display = "inline-block";
            office[item].addEventListener('click', function(e) {
                if (e.detail === 1) {
                    if (office[item] === magnifyingGlass) {
                        dialogConvo.log8();
                    } else if (office[item] === notebook) {
                        dialogConvo.log9();
                    } else if (office[item] === luckyCoin) {
                        dialogConvo.log10();
                    } else if (office[item] === lighter) {
                        dialogConvo.log11();
                    } else if (office[item] === glasses) {
                        dialogConvo.log12();
                    } else if (office[item] === apple) {
                        dialogConvo.log13();
                    } else if (office[item] === gun) {
                        dialogConvo.log14();
                    }
                } else if (e.detail === 2) {
                    if (Object.keys(inventory).length < 3) {
                        officeCounter += 1;
                        office[item].style.position = "static";
                        inventory[item] = office[item];
                        office[item] = null;
                        inventoryDiv.appendChild(inventory[item]);
                        if (officeCounter === 3) {
                            pageButtonsDiv.appendChild(chapterTwoBtn);
                        }
                    } else {
                        dialogConvo.log15();
                    }
                } 
            });
        };
        setTimeout(() => {
            dialogConvo.log16();
        }, 3000);
        setTimeout(() => {
            dialogConvo.log17();
        }, 10000)
    }
}

//  CHAPTER TWO
function chapterTwo() {
    healthBarDiv.style.display = 'block';
    document.removeEventListener('keydown', officeInvent);
    for (let item in office) {
        if (office[item]) {
            office[item].style.display = "none";
        }
    }
    for (let items in inventory) {
        if (inventory[items] === notebook) {
            notebookConvo.activate();
            notebookConvo.note1();
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
    }, 6000);
    const twoPageTwo = document.createElement('button');
    twoPageTwo.setAttribute('class', 'buttons');
    twoPageTwo.setAttribute('id', 'buttonTwo');
    twoPageTwo.innerText = 'Page: 2';
    twoPageTwo.addEventListener('click', twoPageThree);
    apple.addEventListener('click', eatingApple)
    function twoPageOne() {
        board4Img.style.backgroundImage = "url('./assets/imgs/cave-morning.jpeg')";
        if (inventory.hasOwnProperty("magnifyingGlass")) {
            dialogConvo.log19();
            notebookConvo.note2();
        }
        for (let person in people) {
            people[person].style.display = "inline-block";
            people[person].addEventListener('click', (event) => caveConvo(event, person));
        }
        function returnToChapter() {
            setTimeout(() => {
                if (inventory.hasOwnProperty("rock")) {
                    dialogConvo.log24();
                    notebookConvo.note12();
                }
            }, 5000);
            setTimeout(() => {
                if (inventory.hasOwnProperty("glasses") && inventory.hasOwnProperty("rock")) {
                    dialogConvo.log25();
                    notebookConvo.note3();
                } else if (inventory.hasOwnProperty("glasses")) {
                    dialogConvo.log26();
                    notebookConvo.note3();
                }
                pageButtonsDiv.appendChild(twoPageTwo);
            }, 6000);
        }
        chapterTwo.returnToChapter = returnToChapter;
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
            dialogConvo.log27();
            setTimeout(() => {
                setTimeout(() => {
                    if (inventory.hasOwnProperty("magnifyingGlass") || inventory.hasOwnProperty("luckyCoin")) {
                        dialogConvo.log28();
                        notebookConvo.note4();
                    }
                }, 2000);
                setTimeout(() => {
                    entranceRiddle();
                }, 4000);
            }, 2000);
        },5000);
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
            notebookConvo.note6();
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
        dialogConvo.log39();
        setTimeout(() => {
            bats.style.display = "inline-block"
            dialogConvo.log40();
            setTimeout(() => {
                if (inventory.hasOwnProperty('gun')) {
                    let which = window.prompt("What should you do? Which should you use?", "'gun' or 'torch' or 'run'");
                    setTimeout(() => {
                        if (which === 'gun') {
                            newHealth(ouch);
                            dialogConvo.log41();
                            notebookConvo.note13();
                            reDoTorches();
                        } else if (which === 'torch') {
                            if (inventory.hasOwnProperty('glasses')) {
                                dialogConvo.log33();
                                notebookConvo.note5();
                            } else {
                                newHealth(lightDam);
                            }
                            if (inventory.hasOwnProperty('lighter')) {
                                notebookConvo.note14();
                                dialogConvo.log42();
                                threePageFour();
                            } else {
                                dialogConvo.log43();
                                reDoTorches();
                            }
                        } else if (which === 'run') {
                            dialogConvo.log44();
                            if (inventory.hasOwnProperty('glasses')) {
                                dialogConvo.log33();
                                notebookConvo.note5();
                            } else {
                                newHealth(medDam);
                            }
                            reDoTorches();
                        } else if (which === null) {
                            dialogConvo.log45();
                            newHealth(dam);
                            reDoTorches();
                        } else {
                            dialogConvo.log45();
                            newHealth(dam);
                            reDoTorches();
                        }
                    }, 3000);
                } else {
                    let which = window.prompt("What should you do?", "use 'torch' or 'run'");
                    setTimeout(() => {
                        if (which === 'torch') {
                            if (inventory.hasOwnProperty('glasses')) {
                                dialogConvo.log33();
                                notebookConvo.note5();
                            } else {
                                newHealth(lightDam);
                            }
                            if (inventory.hasOwnProperty('lighter')) {
                                notebookConvo.note14();
                                dialogConvo.log42();
                                threePageFour();
                            } else {
                                dialogConvo.log43();
                                reDoTorches();
                            }
                        } else if (which === 'run') {
                            dialogConvo.log44();
                            if (inventory.hasOwnProperty('glasses')) {
                                dialogConvo.log33();
                                notebookConvo.note5();
                            } else {
                                newHealth(medDam);
                            }
                            reDoTorches();
                        } else if (which === null) {
                            dialogConvo.log45();
                            newHealth(dam);
                            reDoTorches();
                        } else {
                            dialogConvo.log45();
                            newHealth(dam);
                            reDoTorches();
                        }
                    }, 3000);
                }
            }, 3000);
        }, 6000);
    }
    chapterThree.threePageThree = threePageThree;
    function reDoTorches() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookConvo.note15();
            dialogConvo.log46();
        }
        board4Img.style.backgroundImage = "url('./assets/imgs/secondFloor.jpeg')"
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
            function countTorches2(event, toRches2) {
                if (event.detail === 1) {
                    if (toRches2 === "reDoTorch1") {
                        board4Drops.removeChild(reDo1);
                        delete dark2.reDoTorch1;
                        if (Object.keys(dark2).length === 0) {
                            board4Img.style.backgroundImage = "url('./assets/imgs/lit.png')"
                            setTimeout(() => {
                                threePageFour();
                            }, 2000);
                        }
                    }
                    if (toRches2 === "reDoTorch2") {
                        board4Drops.removeChild(reDo2);
                        delete dark2.reDoTorch2;
                        if (Object.keys(dark2).length === 0) {
                            board4Img.style.backgroundImage = "url('./assets/imgs/lit.png')"
                            setTimeout(() => {
                                threePageFour();
                            }, 2000);
                        }
                    }
                    if (toRches2 === "reDoTorch3") {
                        board4Drops.removeChild(reDo3);
                        delete dark2.reDoTorch3;
                        if (Object.keys(dark2).length === 0) {
                            board4Img.style.backgroundImage = "url('./assets/imgs/lit.png')"
                            setTimeout(() => {
                                threePageFour();
                            }, 2000);
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
        dialogConvo.log50();
        notebookConvo.note11();
        dialogConvo.log47();
    }
}

//  CHAPTER FOUR
function chapterFour(){
    pageButtonsDiv.innerHTML = '';
    dialogBoxDiv.innerText = '';
    board4Img.style.backgroundImage = "url('./assets/imgs/third-first.png')";
    dialogConvo.log49();
    setTimeout(() => {
        dialogConvo.log48();
        notebookConvo.note16();
        dialogConvo.log67();
        board4Img.style.backgroundImage = "url('./assets/imgs/corridor.jpeg')";
        setTimeout(() => {
            pageButtonsDiv.appendChild(fire);
            pageButtonsDiv.appendChild(waterWay);
            pageButtonsDiv.appendChild(earth);
            pageButtonsDiv.appendChild(air);
            pageButtonsDiv.appendChild(final);
        }, 3000);
    }, 5000);
}

//  FINAL CHAPTER
function lastChapter() {
    board4Img.style.backgroundImage = 'url("./assets/imgs/final-tree.jpeg")';
    pageButtonsDiv.innerHTML = '';
    dialogConvo.innerText = '';
    setTimeout(() => {
        for (let person2 in lastPeople) {
            lastPeople[person2].addEventListener('click', (event) => finalConvo(event, person2));
            drOther2.style.display = 'inline-block';
        }
    }, 3000);
    function finalConvo(event, person2) {
        if (!drFinal) {
            if (event.detail === 1) {
                if (person2 === "drOther2") {
                    drFinal = true;
                    dialogConvo.log71();
                }
            } else if (event.detail > 1) {
                return;
            }
        }
        if (!sciFinal) {
            if (event.detail === 1) {
                if (person2 === "scientist2") {
                    sciFinal = true;
                    dialogConvo.log74();
                    pageButtonsDiv.appendChild(run50);
                    if (inventory.hasOwnProperty("gun")) {
                        notebookConvo.note24();
                        dialogConvo.log70();
                        pageButtonsDiv.appendChild(iHave);
                    } else if (lastPeople.hasOwnProperty('gun')) {
                        pageButtonsDiv.appendChild(run50Gun);
                        pageButtonsDiv.removeChild(run50);
                        if (inventory.hasOwnProperty('theKey')) {
                            pageButtonsDiv.appendChild(finEleGun);
                        } else if (lastPeople.hasOwnProperty('theKey')) {
                            pageButtonsDiv.appendChild(finEleSciGun);
                        }
                        if (inventory.hasOwnProperty('luckyCoin') && inventory.hasOwnProperty('apple')) {
                            pageButtonsDiv.appendChild(appCoinGun);
                        }
                    }
                    if (inventory.hasOwnProperty('theKey')) {
                        pageButtonsDiv.appendChild(finEle);
                    } else if (lastPeople.hasOwnProperty('theKey')) {
                        pageButtonsDiv.appendChild(finEleSci);
                    }
                    if (inventory.hasOwnProperty('luckyCoin') && inventory.hasOwnProperty('apple')) {
                        pageButtonsDiv.appendChild(appCoin);
                    }
                }
            } else if (event.detail > 1) {
                return;
            }
        }
        if (!merFinal) {
            if (event.detail === 1) {
                if (person2 === "mercenary2") {
                    merFinal = true;
                    dialogConvo.log72();
                }
            } else if (event.detail > 1) {
                return;
            }
        }
        if (drFinal) {
            mercenary2.style.display = 'inline-block';
        }
        if (drFinal && merFinal) {
            scientist2.style.display = 'inline-block';
        }
    }
}








//          CHAPTER ONE FUNCTIONs
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
    if (!sci) {
        if (event.detail === 1) {
            if (person === "scientist") {
                sci = true;
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
    if (!mer) {
        if (event.detail === 1) {
            if (person === "mercenary") {
                mer = true;
                dialogConvo.log21();
                if (inventory.hasOwnProperty("gun")) {
                    dialogConvo.log22();
                    setTimeout(() => {
                        let confirm = window.confirm("TRADE: Gun for a shiny rock?");
                        if (confirm) {
                            shinyRock.style.display = "inline-block";
                            shinyRock.style.position = "static";
                            inventory.rock = shinyRock;
                            lastPeople.gun = gun;
                            inventoryDiv.appendChild(shinyRock);
                            inventoryDiv.removeChild(gun);
                            delete inventory.gun;
                        } else {
                            dialogConvo.log23();
                        }
                    }, 3000);
                }
            }
        } else if (event.detail > 1) {
            return;
        }
    }
    if (sci && mer) {
        chapterTwo.returnToChapter();
    }
}

function entranceRiddle() {
    if (inventory.hasOwnProperty("luckyCoin") && inventory.hasOwnProperty("glasses")) {
        let repsonse = window.prompt("Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.", "Ask Bilbo Baggins");
        if (repsonse.match(/\b(\w*wind\w*)\b/gi)) {
            dialogConvo.log29();
            setTimeout(() => {
                chapterTwo.twoPageFour();
            }, 4000);
        } else if (repsonse === null) {
            notebookConvo.note5();
            dialogConvo.log33();
            setTimeout(() => {
                entranceRiddle();
            }, 4000);
        } else {
            notebookConvo.note5();
            dialogConvo.log33();
            setTimeout(() => {
                entranceRiddle();
            }, 4000);
        }
    } else if (inventory.hasOwnProperty("luckyCoin")) {
        let repsonse = window.prompt("Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.", "Ask Bilbo Baggins");
        if (repsonse.match(/\b(\w*wind\w*)\b/gi)) {
            dialogConvo.log29();
            setTimeout(() => {
                chapterTwo.twoPageFour();
            }, 4000);
        } else if (repsonse === null) {
            dialogConvo.log34();
            newHealth(lightDam);
            setTimeout(() => {
                entranceRiddle();
            }, 4000);
        } else {
            dialogConvo.log34();
            newHealth(lightDam);
            setTimeout(() => {
                entranceRiddle();
            }, 4000);
        } 
    } else if (inventory.hasOwnProperty("glasses")) {
        let repsonse = window.prompt("Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.");
        if (repsonse.match(/\b(\w*wind\w*)\b/gi)) {
            dialogConvo.log29();
            setTimeout(() => {
                chapterTwo.twoPageFour();
            }, 4000);
        } else if (repsonse === null) {
            notebookConvo.note5();
            dialogConvo.log33();
            setTimeout(() => {
                entranceRiddle();
            }, 4000);
        } else {
            notebookConvo.note5();
            dialogConvo.log33();
            setTimeout(() => {
                entranceRiddle();
            }, 4000);
        }
    } else {
        let repsonse = window.prompt("Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.");
        if (repsonse.match(/\b(\w*wind\w*)\b/gi)) {
            dialogConvo.log29();
            setTimeout(() => {
                chapterTwo.twoPageFour();
            }, 4000);
        } else if (repsonse === null) {
            dialogConvo.log34();
            newHealth(lightDam);
            setTimeout(() => {
                entranceRiddle();
            }, 4000);
        } else {
            dialogConvo.log34();
            newHealth(lightDam);
            setTimeout(() => {
                entranceRiddle();
            }, 4000);
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
    if (inventory.hasOwnProperty('emptyWater')) {
        while (pageButtonsDiv.firstChild) {
            pageButtonsDiv.removeChild(pageButtonsDiv.lastChild);
        };
        delete inventory.emptyWater;
        board4Drops.removeChild(emptyWater);
        pageButtonsDiv.appendChild(chapterThreeBtn);
        dialogConvo.log35();
    }
}

function roomOnTheLeft() {
    dialogConvo.log82();
    if (firstFloorItems.hasOwnProperty('water')) {
        water.style.display = "inline-block";
    }
    if (firstFloorItems.hasOwnProperty('emptyWater')) {
        emptyWater.style.display = "none";
    }
    board4Img.style.backgroundImage = "url('./assets/imgs/first-left.jpeg')";
    if (inventory.hasOwnProperty('magnifyingGlass')) {
        notebookConvo.note7();
        dialogConvo.log36();
    }
}

function roomOnTheRight() {
    dialogConvo.log83();
    if (firstFloorItems.hasOwnProperty('water')) {
        water.style.display = "none";
    }
    if (firstFloorItems.hasOwnProperty('emptyWater')) {
        emptyWater.style.display = "inline-block";
    }
    board4Img.style.backgroundImage = "url('./assets/imgs/first-right.jpeg')";
    if (inventory.hasOwnProperty('magnifyingGlass')) {
        notebookConvo.note8();
        dialogConvo.log37();
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
    setTimeout(() => {
        roomInTheMiddle();
    }, 3000);
}

function placeWater() {
    if (inventory.hasOwnProperty('water')) {
        const rmvBtnLeft = document.querySelector('#rightroom');
        rmvBtnLeft.removeEventListener('click', roomOnTheRight);
        emptyWater.appendChild(water);
        emptyWater.style.backgroundColor = 'rgba(0,0,0,0)'
        inventory.emptyWater = emptyWater;
        delete inventory.water;
        setTimeout(() => {
            roomInTheMiddle();
        }, 3000);
    } else {
        dialogConvo.log34();
        if (inventory.hasOwnProperty('glasses')) {
            notebookConvo.note5();
            dialogConvo.log33();
        } else {
            newHealth(medDam);
        }
    }
}

//          CHAPTER THREE FUNCTIONS
function inTorchRoom() {
    board4Img.style.backgroundImage = "url('./assets/imgs/un-lit.png')";
    const unclickBtn = document.querySelector('#torchRoomBtn');
    unclickBtn.removeEventListener('click', inTorchRoom);
    pageButtonsDiv.removeChild(unclickBtn);
    dialogConvo.log32();
    notebookConvo.note10();
    for (let toRches in dark) {
        dark[toRches].style.display = "inline-block";
        dark[toRches].addEventListener('click', (event) => countTorches(event, toRches));
    }
    function countTorches(event, toRches) {
        if (event.detail === 1) {
            if (toRches === "torch1") {
                board4Drops.removeChild(unLit1);        
                delete dark.torch1;
                if (Object.keys(dark).length === 0) {
                    board4Img.style.backgroundImage = "url('./assets/imgs/lit.png')"
                    setTimeout(() => {
                        chapterThree.threePageThree();
                    }, 3000);
                } else {
                    dialogConvo.log38();
                }
            }
            if (toRches === "torch2") {
                board4Drops.removeChild(unLit2);
                delete dark.torch2;
                if (Object.keys(dark).length === 0) {
                    board4Img.style.backgroundImage = "url('./assets/imgs/lit.png')"
                    setTimeout(() => {
                        chapterThree.threePageThree();
                    }, 3000);
                } else {
                    dialogConvo.log38();
                }
            }
            if (toRches === "torch3") {
                board4Drops.removeChild(unLit3);
                delete dark.torch3;
                if (Object.keys(dark).length === 0) {
                    board4Img.style.backgroundImage = "url('./assets/imgs/lit.png')"
                    setTimeout(() => {
                        chapterThree.threePageThree();
                    }, 3000);
                } else {
                    dialogConvo.log38();
                }
            }
        }
    }
}

//          CHAPTER FOUR FUNCTIONS
function wayOfFire() {
    board4Img.style.backgroundImage = "url('./assets/imgs/fire-intro.jpeg')";
    pageButtonsDiv.innerHTML = '';
    pageButtonsDiv.appendChild(elementRoom);
    pageButtonsDiv.appendChild(fireFinal);
    if (inventory.hasOwnProperty('theFire') || inventory.hasOwnProperty('theWind')
     || inventory.hasOwnProperty('theWater') || inventory.hasOwnProperty('theEarth')) {
        eleFireDrop.style.display = 'none';
    } else {
        eleFire.style.display = 'none'
    }
}

function fireFinalWay() {
    board4Img.style.backgroundImage = "url('./assets/imgs/fire-final.jpeg')";
    pageButtonsDiv.innerHTML = '';
    pageButtonsDiv.appendChild(fire);
    if (elemental.hasOwnProperty('theFire')) {
        eleFire.style.display = 'inline-block';
    } else if (inventory.hasOwnProperty('theFire') || inventory.hasOwnProperty('theWind')
     || inventory.hasOwnProperty('theWater') || inventory.hasOwnProperty('theEarth')) {
       eleFireDrop.style.display = 'inline-block';
    }
}

function wayOfWater() {
    board4Img.style.backgroundImage = "url('./assets/imgs/water-intro.jpeg')";
    pageButtonsDiv.innerHTML = '';
    pageButtonsDiv.appendChild(elementRoom);
    pageButtonsDiv.appendChild(waterFinal);
    if (inventory.hasOwnProperty('theFire') || inventory.hasOwnProperty('theWind')
     || inventory.hasOwnProperty('theWater') || inventory.hasOwnProperty('theEarth')) {
        eleWaterDrop.style.display = 'none';
    } else {
        eleWater.style.display = 'none'
    }
}

function waterFinalWay() {
    board4Img.style.backgroundImage = "url('./assets/imgs/water-final.jpeg')";
    pageButtonsDiv.innerHTML = '';
    pageButtonsDiv.appendChild(waterWay);
    if (elemental.hasOwnProperty('theWater')) {
        eleWater.style.display = 'inline-block';
    } else if (inventory.hasOwnProperty('theFire') || inventory.hasOwnProperty('theWind')
     || inventory.hasOwnProperty('theWater') || inventory.hasOwnProperty('theEarth')) {
       eleWaterDrop.style.display = 'inline-block';
    }
}

function wayOfAir() {
    board4Img.style.backgroundImage = "url('./assets/imgs/wind-intro.jpeg')";
    pageButtonsDiv.innerHTML = '';
    pageButtonsDiv.appendChild(elementRoom);
    pageButtonsDiv.appendChild(airFinal);
    if (inventory.hasOwnProperty('theFire') || inventory.hasOwnProperty('theWind')
     || inventory.hasOwnProperty('theWater') || inventory.hasOwnProperty('theEarth')) {
        eleWindDrop.style.display = 'none';
    } else {
        eleWind.style.display = 'none'
    }
}

function airFinalWay() {
    board4Img.style.backgroundImage = "url('./assets/imgs/wind-final.jpeg')";
    pageButtonsDiv.innerHTML = '';
    pageButtonsDiv.appendChild(air);
    if (elemental.hasOwnProperty('theWind')) {
        eleWind.style.display = 'inline-block';
    } else if (inventory.hasOwnProperty('theFire') || inventory.hasOwnProperty('theWind')
     || inventory.hasOwnProperty('theWater') || inventory.hasOwnProperty('theEarth')) {
       eleWindDrop.style.display = 'inline-block';
    }
}

function wayOfEarth() {
    board4Img.style.backgroundImage = "url('./assets/imgs/earth-intro.jpeg')";
    pageButtonsDiv.innerHTML = '';
    pageButtonsDiv.appendChild(elementRoom);
    pageButtonsDiv.appendChild(earthFinal);
    if (inventory.hasOwnProperty('theFire') || inventory.hasOwnProperty('theWind')
     || inventory.hasOwnProperty('theWater') || inventory.hasOwnProperty('theEarth')) {
        eleEarthDrop.style.display = 'none';
    } else {
        eleEarth.style.display = 'none'
    }
}

function earthFinalWay() {
    board4Img.style.backgroundImage = "url('./assets/imgs/earth-final.jpeg')";
    pageButtonsDiv.innerHTML = '';
    pageButtonsDiv.appendChild(earth);
    if (elemental.hasOwnProperty('theEarth')) {
        eleEarth.style.display = 'inline-block';
    } else if (inventory.hasOwnProperty('theFire') || inventory.hasOwnProperty('theWind')
     || inventory.hasOwnProperty('theWater') || inventory.hasOwnProperty('theEarth')) {
       eleEarthDrop.style.display = 'inline-block';
    }
}

function finalWay() {
    board4Img.style.backgroundImage = "url('./assets/imgs/final-doorway.jpeg')";
    pageButtonsDiv.innerHTML = '';
    pageButtonsDiv.appendChild(elementRoom);
    pageButtonsDiv.appendChild(lastDoor);
    eleKeyDrop.style.display = 'none';
}

function finalDoor() {
    board4Img.style.backgroundImage = "url('./assets/imgs/final-door.jpeg')";
    pageButtonsDiv.innerHTML = '';
    pageButtonsDiv.appendChild(final);
    eleKeyDrop.style.display = 'inline-block';
    notebookConvo.note17;
    dialogConvo.log51();
    dialogConvo.log69();
    if (inventory.hasOwnProperty('luckyCoin') && inventory.hasOwnProperty('rock')) {
        setTimeout(() => {
            dialogConvo.log68();
            notebookConvo.note23();
        }, 3000);
    }
}

function corridor() {
    board4Img.style.backgroundImage = "url('./assets/imgs/corridor.jpeg')";
    pageButtonsDiv.innerHTML = '';
    pageButtonsDiv.appendChild(fire);
    pageButtonsDiv.appendChild(waterWay);
    pageButtonsDiv.appendChild(earth);
    pageButtonsDiv.appendChild(air);
    pageButtonsDiv.appendChild(final);
    dialogConvo.log52();
}

function addToInvent(event) {
    if (event.target === eleFire) {
        dialogConvo.log53();
        notebookConvo.note18();
        dialogConvo.log63();
        inventory.theFire = elemental.theFire;
        eleFireDrop.style.display = 'inline-block';
        eleFire.style.position = 'static';
        inventoryDiv.appendChild(eleFire);
        delete elemental.theFire;
        fireFinalWay();
    } else if (event.target === eleWind) {
        dialogConvo.log54();
        notebookConvo.note19();
        dialogConvo.log64();
        inventory.theWind = elemental.theWind;
        eleWindDrop.style.display = 'inline-block';
        eleWind.style.position = 'static';
        inventoryDiv.appendChild(eleWind);
        delete elemental.theWind;
        airFinalWay();
    } else if (event.target === eleWater) {
        dialogConvo.log55();
        notebookConvo.note20();
        dialogConvo.log65();
        inventory.theWater = elemental.theWater;
        eleWaterDrop.style.display = 'inline-block';
        eleWater.style.position = 'static';
        inventoryDiv.appendChild(eleWater);
        delete elemental.theWater;
        waterFinalWay();
    } else if (event.target === eleEarth) {
        dialogConvo.log56();
        notebookConvo.note21();
        dialogConvo.log66();
        inventory.theEarth = elemental.theEarth;
        eleEarthDrop.style.display = 'inline-block';
        eleEarth.style.position = 'static';
        inventoryDiv.appendChild(eleEarth);
        delete elemental.theEarth;
        earthFinalWay();
    }
}

function getKey(event) {
    if (event.target === eleFireDrop) {
        if (inventory.hasOwnProperty('theWater')) {
            dialogConvo.log57();
            elementDropCount += 1;
            delete inventory.theWater;
            eleFireDrop.appendChild(eleWater);
            setTimeout(() => {
                if (elementDropCount === 4) {
                    dialogConvo.log61();
                    dialogConvo.log67();
                    inventory.theKey = elemental.theKey;
                    inventoryDiv.appendChild(eleKey);
                    eleFireDrop.style.display = 'none';
                    fire.style.display = 'none';
                    eleKey.style.display = 'inline-block';
                    corridor();
                } else {
                    eleFireDrop.style.display = 'none';
                    fire.style.display = 'none';
                    corridor();
                }
            }, 2000);
        } else {
            dialogConvo.log34();
            newHealth(dam);
        }
    } else if (event.target === eleWindDrop) {
        if (inventory.hasOwnProperty('theEarth')) {
            dialogConvo.log58();
            elementDropCount += 1;
            delete inventory.theEarth;
            eleWindDrop.appendChild(eleEarth);
            setTimeout(() => {
                if (elementDropCount === 4) {
                    dialogConvo.log61();
                    dialogConvo.log67();
                    inventory.theKey = elemental.theKey;
                    inventoryDiv.appendChild(eleKey);
                    eleWindDrop.style.display = 'none';
                    air.style.display = 'none';
                    eleKey.style.display = 'inline-block';
                    corridor();
                } else {
                    eleWindDrop.style.display = 'none';
                    air.style.display = 'none';
                    corridor();
                }
            }, 2000);
        } else {
            dialogConvo.log34();
            newHealth(dam);
        }
    } else if (event.target === eleWaterDrop) {
        if (inventory.hasOwnProperty('theWind')) {
            dialogConvo.log59();
            elementDropCount += 1;
            delete inventory.theWind;
            eleWaterDrop.appendChild(eleWind);
            setTimeout(() => {
                if (elementDropCount === 4) {
                    dialogConvo.log61();
                    dialogConvo.log67();
                    inventory.theKey = elemental.theKey;
                    inventoryDiv.appendChild(eleKey);
                    eleWaterDrop.style.display = 'none';
                    waterWay.style.display = 'none';
                    eleKey.style.display = 'inline-block';
                    corridor();
                } else {
                    waterWay.style.display = 'none';
                    eleWaterDrop.style.display = 'none';
                    corridor();
                }
            }, 2000);
        } else {
            dialogConvo.log34();
            newHealth(dam);
        }
    } else if (event.target === eleEarthDrop) {
        if (inventory.hasOwnProperty('theFire')) {
            dialogConvo.log60();
            elementDropCount += 1;
            delete inventory.theFire;
            eleEarthDrop.appendChild(eleFire);
            setTimeout(() => {
                if (elementDropCount === 4) {
                    dialogConvo.log61();
                    dialogConvo.log67();
                    inventoryDiv.appendChild(eleKey);
                    eleEarthDrop.style.display = 'none';
                    inventory.theKey = elemental.theKey;
                    earth.style.display = 'none';
                    eleKey.style.display = 'inline-block';
                    corridor();
                } else {
                    eleEarthDrop.style.display = 'none';
                    earth.style.display = 'none';
                    corridor();
                }
            }, 2000);
        } else {
            dialogConvo.log34();
            newHealth(dam);
        }
    }
}

function openDoor() {
    if (inventory.hasOwnProperty('luckyCoin') && inventory.hasOwnProperty('rock')) {
        dialogConvo.log62();
        inventoryDiv.removeChild(luckyCoin);
        inventoryDiv.removeChild(shinyRock);
        eleKeyDrop.style.display = 'none';
        pageButtonsDiv.removeChild(final);
        pageButtonsDiv.appendChild(finalChapter);
    } else if (elementDropCount === 4) {
        dialogConvo.log62();
        eleKey.style.display = 'none';
        eleKeyDrop.style.display = 'none';
        lastPeople.theKey = inventory.theKey;
        pageButtonsDiv.removeChild(final);
        pageButtonsDiv.appendChild(finalChapter);
        delete inventory.theKey;
    } else {
        dialogConvo.log34();
        newHealth(ouch);
    }
}

// FINAL CHAPTER FUNCTIONS
function iUseGun() {
    dialogConvo.log77();
    setTimeout(() => {
        youVeWon();
    }, 3000);
}

function iUseEle() {
    dialogConvo.log76();
    dialogConvo.log73();
    setTimeout(() => {
        newHealth(lightDam);
        setTimeout(() => {
            youVeWon();
        }, 5000);
    }, 3000);
}

function iUseEleSci() {
    dialogConvo.log78();
    dialogConvo.log73();
    setTimeout(() => {
        newHealth(lightDam);
        setTimeout(() => {
            youVeWon();
        }, 5000);
    }, 3000);
}

function iUseAppCoin() {
    dialogConvo.log79();
    dialogConvo.log73();
    setTimeout(() => {
        newHealth(medDam);
        setTimeout(() => {
            youVeWon();
        }, 5000);
    }, 3000);
}

function iRun() {
    dialogConvo.log80();
    dialogConvo.log73();
    setTimeout(() => {
        newHealth(dam);
        setTimeout(() => {
            youVeWon();
        }, 5000);
    }, 3000);
}

function iUseEleGun() {
    dialogConvo.log73();
    dialogConvo.log76();
    dialogConvo.log81();
    setTimeout(() => {
        newHealth(medDam);
        setTimeout(() => {
            youVeWon();
        }, 5000);
    }, 3000);
}

function iUseEleSciGun() {
    dialogConvo.log73();
    dialogConvo.log78();
    dialogConvo.log81();
    setTimeout(() => {
        newHealth(medDam);
        setTimeout(() => {
            youVeWon();
        }, 5000);
    }, 3000);
}

function iUseAppCoinGun() {
    dialogConvo.log73();
    dialogConvo.log79();
    dialogConvo.log81();
    setTimeout(() => {
        newHealth(dam);
        setTimeout(() => {
            youVeWon();
        }, 5000);
    }, 3000);
}

function iRunGun() {
    dialogConvo.log73();
    dialogConvo.log80();
    dialogConvo.log81();
    setTimeout(() => {
        newHealth(ouch);
        setTimeout(() => {
            youVeWon();
        }, 5000);
    }, 3000);
}

function youVeWon() {
    drOther2.style.display = 'none';
    mercenary2.style.display = 'none';
    scientist2.style.display = 'none';
    dialogBoxDiv.innerText = '';
    pageButtonsDiv.innerHTML = '';
    setTimeout(() => {
        board4Img.style.backgroundImage = "url('./assets/imgs/final-door.jpeg')";
        setTimeout(() => {
            dialogBoxDiv.innerText = 'RUNN!!';
            board4Img.style.backgroundImage = "url('./assets/imgs/final-doorway.jpeg')";
            setTimeout(() => {
                board4Img.style.backgroundImage = "url('./assets/imgs/corridor.jpeg')";
                setTimeout(() => {
                    board4Img.style.backgroundImage = "url('./assets/imgs/third-first.png')";
                    setTimeout(() => {
                        board4Img.style.backgroundImage = "url('./assets/imgs/second-final.jpeg')";
                        setTimeout(() => {
                            dialogBoxDiv.innerText = 'RUNNNNNNNN!!';
                            board4Img.style.backgroundImage = "url('./assets/imgs/lit.png')";
                            setTimeout(() => {
                                board4Img.style.backgroundImage = "url('./assets/imgs/secondFloor.jpeg')";
                                setTimeout(() => {
                                    board4Img.style.backgroundImage = "url('./assets/imgs/first-middle.jpeg')";
                                    setTimeout(() => {
                                        board4Img.style.backgroundImage = "url('./assets/imgs/the-entrance.jpeg')";
                                        setTimeout(() => {
                                            board4Img.style.backgroundImage = "url('./assets/imgs/cave-morning.jpeg')";
                                            setTimeout(() => {
                                                dialogBoxDiv.innerText = 'PHEW.';
                                                board4Img.style.backgroundImage = "url('./assets/imgs/traveling.jpeg')";
                                                setTimeout(() => {
                                                    setTimeout(() => {
                                                        board4Img.style.backgroundImage = "url('./assets/imgs/the-office.jpeg')";
                                                        scientist2.style.display = 'inline-block';
                                                        setTimeout(() => {
                                                            alert('YOUVE DONE IT');
                                                            location.reload();
                                                        }, 3000);
                                                    }, 3000)
                                                }, 3000);
                                            }, 3000);
                                        }, 3000);
                                    }, 3000);
                                }, 3000);
                            }, 3000);
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}


//          DIALOG METHODS
const dialogConvo = {
    log1() {
        dialogBoxDiv.appendChild(lineBreak('\nLook for all messages to appear in the THIS box at the bottom of the screen.'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log2() {
        dialogBoxDiv.appendChild(lineBreak('\nGood Morning, Today is like no other and you are about to find out why!'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log3() {
        dialogBoxDiv.appendChild(lineBreak('\nThis dialog box is essential to the process of the game, so will be the buttons to the left of this box.'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log4() {
        dialogBoxDiv.appendChild(lineBreak('\nClick the Page: 2 button to procede with the intro.'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log5() {
        dialogBoxDiv.appendChild(lineBreak("\nYour ego decides for you that you must go to this new mysterious island"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log6() {
        dialogBoxDiv.appendChild(lineBreak('\nYou are now going to your office and can only bring three of these items with you on the trip. Flip to Page: 3'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log7() {
        dialogBoxDiv.appendChild(lineBreak('\nONLY three items from this office can be put into your inventory box. You will never have access to the items left behind again!'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log8() {
        dialogBoxDiv.appendChild(lineBreak('\nMagnifying Glass: This will inspect every page of the story and give you clues.'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log9() {
        dialogBoxDiv.appendChild(lineBreak('\nNotebook: This will allow you to store all special notes that you come across. You may even find old note?'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log10() {
        dialogBoxDiv.appendChild(lineBreak('\nLucky Coin: This has always been my lucky coin.'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log11() {
        dialogBoxDiv.appendChild(lineBreak('\nLighter: This can sure serve a purpose.'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log12() {
        dialogBoxDiv.appendChild(lineBreak('\nGlasses: These serve more as hind-sight rather than needed to see and prevents minor damage.'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log13() {
        dialogBoxDiv.appendChild(lineBreak('\nApple: This will provide a small boost to health.'));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log14() {
        dialogBoxDiv.appendChild(lineBreak("\nGun: It's a gun."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log15() {
        dialogBoxDiv.appendChild(lineBreak("\nYour Inventory is full. Try pressing 'q' to return the items from your Inventory to the office.\n You may also go to the next Chapter now."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log16() {
        dialogBoxDiv.appendChild(lineBreak("\nHint: Click on an item to check it's usefulness.\n Double click an item to place it into your inventory."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log17() {
        dialogBoxDiv.appendChild(lineBreak("\nThe Helicopter is leaving! You need to pick three NOW."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log18() {
        dialogBoxDiv.appendChild(lineBreak("\nWow! Antartica has really been melting a lot. There must be more than just this new discovery here."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log19() {
        dialogBoxDiv.appendChild(lineBreak("\nMagnifying Glass: Try talking to these two people, one of them has an offer for you."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log20() {
        dialogBoxDiv.appendChild(lineBreak("\nSCIENTIST: Hello Dr. SoAndSo, my name is Dr. notImportant and we've been expecting you. Here I believe you will need this if you can make it past the entrance.\nThe scientist has given you a Torch!"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log21() {
        dialogBoxDiv.appendChild(lineBreak("\nMERCENARY: Dr. OtherPerson said you'd be showing up today.\n Don't worry about me, I'm just the hired help."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log22() {
        dialogBoxDiv.appendChild(lineBreak("\nMERCENARY: HEY!! Is that an old revolver? Would you like to trade for this shiny rock?"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log23() {
        dialogBoxDiv.appendChild(lineBreak("\nMERCENARY: Whatever. Your loss anyways."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log24() {
        dialogBoxDiv.appendChild(lineBreak("\nHmmmm... This rock is rather interesting. It seems to have special properties to it."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log25() {
        dialogBoxDiv.appendChild(lineBreak("\nGlasses & Rock: I definitely made the right choice. It seems to be missing a piece though. \nGlasses: I wonder where Dr. OtherPerson was?"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log26() {
        dialogBoxDiv.appendChild(lineBreak("\nGlasses: I wonder where Dr. OtherPerson was?"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log27() {
        dialogBoxDiv.appendChild(lineBreak("\nHmm.. There appears to be an ancient language written on the door."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log28() {
        if (inventory.hasOwnProperty('magnifyingGlass') && inventory.hasOwnProperty('luckyCoin')) {
            dialogBoxDiv.appendChild(lineBreak("\nMagnifying Glass: I believe I've seen a movie with a similar riddle likes this.\nLucky Coin: This reminded you of a movie you watched with a similar riddle!"));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        } else if (inventory.hasOwnProperty('magnifyingGlass')) {
            dialogBoxDiv.appendChild(lineBreak("\nMagnifying Glass: I believe I've seen a movie with a similar riddle likes this."));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        }
    },
    log29() {
        dialogBoxDiv.appendChild(lineBreak("\nI got it! Now the door is opening!"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log30() {
        dialogBoxDiv.appendChild(lineBreak("\nThe next door will not open either. It says something about what does mankind covete? It looks like there is a room on my right and one more on my left."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log31() {
        if (inventory.hasOwnProperty('magnifyingGlass') && inventory.hasOwnProperty('glasses')) {
            dialogBoxDiv.appendChild(lineBreak("\nGlasses: First wind, then water, this is interesting.\nMagnifying Glass: I'm glad I was given this torch, it is getting really dark."));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        } else if (inventory.hasOwnProperty('magnifyingGlass')) {
            dialogBoxDiv.appendChild(lineBreak("\nMagnifying Glass: I'm glad I was given this torch, it is getting really dark."));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        } else if (inventory.hasOwnProperty('glasses')) {
            dialogBoxDiv.appendChild(lineBreak("\nGlasses: First wind, then water, this is interesting."));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        }
    },
    log32() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            dialogBoxDiv.appendChild(lineBreak("\nMagnifying Glass: Extremely happy I have the torch, Lets light these three torches."));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        }
    },
    // FOR ALL GLASSES DAMAGE PREVENTION
    log33() {
        dialogBoxDiv.appendChild(lineBreak("\nGlasses: Prevented the damage, try again."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    // FOR ALL DAMAGE DONE
    log34() {
        dialogBoxDiv.appendChild(lineBreak("\nOUCH!!"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log35() {
        dialogBoxDiv.appendChild(lineBreak("\nLets Move on the the next Chapter."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log36() {
        dialogBoxDiv.appendChild(lineBreak("\nMagnifying Glass: This room is centered on this water fountain."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log37() {
        if (inventory.hasOwnProperty('magnifyingGlass') && inventory.hasOwnProperty('water')) {
            dialogBoxDiv.appendChild(lineBreak("\nMagnifying Glass: This empty pedestal is begging for the water."));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        } else {
            dialogBoxDiv.appendChild(lineBreak("\nMagnifying Glass: This empty pedestal is missing something."));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        }
    },
    log38() {
        dialogBoxDiv.appendChild(lineBreak("\nThat worked! let's light another one."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log39() {
        dialogBoxDiv.appendChild(lineBreak("\nGlad I can see now. Let's move on into the next room."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log40() {
        dialogBoxDiv.appendChild(lineBreak("\nBATS!!!!!"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log41() {
        dialogBoxDiv.appendChild(lineBreak("\nGun: The bang of the gun woke up all of the bats, which swarm and attack you!"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log42() {
        dialogBoxDiv.appendChild(lineBreak("\nLighter: You are able to re-lit your torch and don't need to flee."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log43() {
        dialogBoxDiv.appendChild(lineBreak("\nThe torch was the right call, but I can't see! I have to go back a room to re-light my torch."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log44() {
        dialogBoxDiv.appendChild(lineBreak("\nRunning always works, however the bats got you pretty good. Now you have to re-light your torch in the previous room."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log45() {
        dialogBoxDiv.appendChild(lineBreak("\nWell that didn't work?!?! OUCH!"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log46() {
        dialogBoxDiv.appendChild(lineBreak("\nMagnifying Glass: We survived with a few scratches. Let us hope that doesn't happen again."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log47() {
        dialogBoxDiv.appendChild(lineBreak("\nThe consequences are becoming steep. I hope we can make it through this temple."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log48() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            dialogBoxDiv.appendChild(lineBreak("\nMagnifying Glass: WOW! This corridor is incredible. Who could've thought this temple would be this large?"));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
        }
    },
    log49() {
        dialogBoxDiv.appendChild(lineBreak("\nFurther into the Depths of the Temple, this next room looks to be massive!"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight;
    },
    log50() {
        if (inventory.hasOwnProperty('glasses')) {
            dialogBoxDiv.appendChild(lineBreak("\nGlasses: first wind, second water, now fire..."));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
        }
    },
    log51() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            dialogBoxDiv.appendChild(lineBreak("\nMagnifying Glass: I really don't think I should touch this door yet. It has a familiar shaped hole in the center..."));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
        }
    },
    log52() {
        dialogBoxDiv.appendChild(lineBreak("\nThings are starting to get crazy! I have to do something to calm this place down."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log53() {
        dialogBoxDiv.appendChild(lineBreak("\nYou've picked up the Fire element!"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log54() {
        dialogBoxDiv.appendChild(lineBreak("\nYou've picked up the Air element!"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log55() {
        dialogBoxDiv.appendChild(lineBreak("\nYou've picked up the Water element!"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log56() {
        dialogBoxDiv.appendChild(lineBreak("\nYou've picked up the Earth element!"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log57() {
        dialogBoxDiv.appendChild(lineBreak("\nYou've calmed the Fire Room."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log58() {
        dialogBoxDiv.appendChild(lineBreak("\nYou've calmed the Air Room."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log59() {
        dialogBoxDiv.appendChild(lineBreak("\nYou've calmed the Water Room."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log60() {
        dialogBoxDiv.appendChild(lineBreak("\nYou've calmed the Earth Room."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log61() {
        dialogBoxDiv.appendChild(lineBreak("\nSuddenly the whole temple goes silent.. and a new Elemental stone has emerged."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log62() {
        dialogBoxDiv.appendChild(lineBreak("\nThe final door is opening! What could lie behind?"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log63() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            dialogBoxDiv.appendChild(lineBreak("\nMagnifying Glass: The fire room is going crazy now!"));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
        }
    },
    log64() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            dialogBoxDiv.appendChild(lineBreak("\nMagnifying Glass: The wind has picked up and it has become hard to stand in this room!"));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
        }
    },
    log65() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            dialogBoxDiv.appendChild(lineBreak("\nMagnifying Glass: The water has begun gushing into the room!"));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
        }
    },
    log66() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            dialogBoxDiv.appendChild(lineBreak("\nMagnifying Glass: The ground is shaking and some rocks are now falling!"));
            dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
        }
    },
    log67() {
        dialogBoxDiv.appendChild(lineBreak("\nThis must be a key to the last door!"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log68() {
        dialogBoxDiv.appendChild(lineBreak("\nShiny Rock: This Rock is glowing in this room!\nLucky Coin: You have your lucky coin and something feels right about this room..."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log69() {
        dialogBoxDiv.appendChild(lineBreak("\nYou can almost feel the energy in this room.."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log70() {
        dialogBoxDiv.appendChild(lineBreak("\nGun: This is easy enough.."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log71() {
        dialogBoxDiv.appendChild(lineBreak("\nDr OtherPerson: I knew you'd would fall right into my trap. Thank you for doing all of the hard work for me."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log72() {
        dialogBoxDiv.appendChild(lineBreak("\nMercenary: You should've just stayed home."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log73() {
        dialogBoxDiv.appendChild(lineBreak("\nScientist: We have to try to run! Let's go now!"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log74() {
        dialogBoxDiv.appendChild(lineBreak("\nScientist: I came as fast as I could!"));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log75() {
        dialogBoxDiv.appendChild(lineBreak("\nElement: This is still seems like it is holding a lot of energy. I should use it."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log76() {
        dialogBoxDiv.appendChild(lineBreak("\nElement: You Throw this Element towards Dr. OtherPerson and the Mecenary causing it to explode. You take a little damage and run."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log77() {
        dialogBoxDiv.appendChild(lineBreak("\nScientist: Alright let's go."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log78() {
        dialogBoxDiv.appendChild(lineBreak("\nScientist: I pried this out of the door, here use this. The scientist throws you the Elemental key and you throw this Element towards Dr. OtherPerson and the Mecenary causing it to explode. You take a little damage and run."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log79() {
        dialogBoxDiv.appendChild(lineBreak("\nApple & Lucky Coin: You decide to lie to them and try to distract them giving them your apple telling them it came from the tree. Then you try to run and take some damage."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log80() {
        dialogBoxDiv.appendChild(lineBreak("\nRUUNNNNNNNN... You Take some damage and try to escape."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log81() {
        dialogBoxDiv.appendChild(lineBreak("\nMercenary: Shoots at you with the gun you gave him.. you take damage and try to escape."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log82() {
        dialogBoxDiv.appendChild(lineBreak("\nThis room has a cup of water in it.."));
        dialogBoxDiv.scrollTop = dialogBoxDiv.scrollHeight; 
    },
    log83() {
        dialogBoxDiv.appendChild(lineBreak("\nThis room looks rather empty, other than that pedestal."));
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
        notebookText.appendChild(lineBreak("\nNotebook: You've brought the 'Notebook'. You will not regret this."));
        notebookText.scrollTop = notebookText.scrollHeight;
        secretCounter(notebookText);
    },
    note2() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("\nMagnifying Glass: Try talking to these two. One of them may have a trade for you."));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        }
    },
    note3() {
        if (inventory.hasOwnProperty('rock') && inventory.hasOwnProperty('glasses')) {
            notebookText.appendChild(lineBreak("\nGlasses: I wonder where Dr. OtherPerson was?\nGlasses & Rock: I have a good feeling about this trade."));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        } else if (inventory.hasOwnProperty('glasses')) {
            notebookText.appendChild(lineBreak("\nGlasses: I wonder where Dr. OtherPerson was?"));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        } 
    },
    note4() {
        if (inventory.hasOwnProperty('magnifyingGlass') && inventory.hasOwnProperty('luckyCoin')) {
            notebookText.appendChild(lineBreak("\nMagnifying Glass: I believe I've seen a movie with a similar riddle likes this.\nLucky Coin: This reminded you of a movie you watched with a similar riddle!"));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        } else if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("\nMagnifying Glass: I believe I've seen a movie with a similar riddle likes this."));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        }
    },
    note5() {
        /// COULD WORK FOR ALL GLASSES PREVENTS
        notebookText.appendChild(lineBreak("\nGlasses: Prevented the damage, try again."));
        notebookText.scrollTop = notebookText.scrollHeight;
        secretCounter(notebookText);
    },
    note6() {
        notebookText.appendChild(lineBreak("\nMagnifying Glass: The door reads 'What does mankind covete the most?'."));
        notebookText.scrollTop = notebookText.scrollHeight;
        secretCounter(notebookText);
    },
    note7() {
        notebookText.appendChild(lineBreak("\nMagnifying Glass: This room is centered on this water fountain."));
        notebookText.scrollTop = notebookText.scrollHeight;
        secretCounter(notebookText);
    },
    note8() {
        if (inventory.hasOwnProperty('magnifyingGlass') && inventory.hasOwnProperty('water')) {
            notebookText.appendChild(lineBreak("\nMagnifying Glass: This empty pedestal is begging for the water."));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        } else {
            notebookText.appendChild(lineBreak("\nMagnifying Glass: This empty pedestal is missing something."));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        }
    },
    note9() {
        if (inventory.hasOwnProperty('magnifyingGlass') && inventory.hasOwnProperty('glasses')) {
            notebookText.appendChild(lineBreak("\nGlasses: First wind, then water, this is interesting.\nMagnifying Glass: I'm glad I was given this torch, it is getting really dark."));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        } else if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("\nMagnifying Glass: I'm glad I was given this torch, it is getting really dark."));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        } else if (inventory.hasOwnProperty('glasses')) {
            notebookText.appendChild(lineBreak("\nGlasses: First wind, then water, this is interesting."));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        }
    },
    note10() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("\nMagnifying Glass: Extremely happy I have the torch, Lets light these three torches."));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        }
    },
    note11() {
        if (inventory.hasOwnProperty('glasses')) {
            notebookText.appendChild(lineBreak("\nGlasses: first wind, second water, now fire..."));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        }
    },
    note12() {
        notebookText.appendChild(lineBreak("\nRock: Hmmmm... This rock is rather interesting. It seems to have special properties to it."));
        notebookText.scrollTop = notebookText.scrollHeight;
        secretCounter(notebookText);
    },
    note13() {
        notebookText.appendChild(lineBreak("\nGun: The bang of the gun woke up all of the bats, which swarm and attack you!"));
        notebookText.scrollTop = notebookText.scrollHeight;
        secretCounter(notebookText);
    },
    note14() {
        notebookText.appendChild(lineBreak("\nLighter: You are able to re-lit your torch and don't need to flee."));
        notebookText.scrollTop = notebookText.scrollHeight;
        secretCounter(notebookText);
    },
    note15() {
        notebookText.appendChild(lineBreak("\nMagnifying Glass: We survived with a few scratches. Let us hope that doesn't happen again."));
        notebookText.scrollTop = notebookText.scrollHeight;
        secretCounter(notebookText);
    },
    note16() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("\nMagnifying Glass: WOW! This corridor is incredible. Who could've thought this temple would be this large?"));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        }
    },
    note17() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("\nMagnifying Glass: I really don't think I should touch this door yet. It has a familiar shaped hole in the center..."));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        }
    },
    note18() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("\nMagnifying Glass: The fire room is going crazy now!"));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        }
    },
    note19() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("\nMagnifying Glass: The wind has picked up and it has become hard to stand in this room!"));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        }
    },
    note20() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("\nMagnifying Glass: The water has begun gushing into the room!"));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        }
    },
    note21() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("\nMagnifying Glass: The ground is shaking and some rocks are now falling!"));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        }
    },
    note22() {
        if (inventory.hasOwnProperty('magnifyingGlass')) {
            notebookText.appendChild(lineBreak("\nMagnifying Glass: This must be a key to the last door!"));
            notebookText.scrollTop = notebookText.scrollHeight;
            secretCounter(notebookText);
        }
    },
    note23() {
        notebookText.appendChild(lineBreak("\nShiny Rock: This Rock is glowing in this room!\nLucky Coin: You have your lucky coin and something feels right about this room..."));
        notebookText.scrollTop = notebookText.scrollHeight;
        secretCounter(notebookText);
    },
    note24() {
        notebookText.appendChild(lineBreak("\nGun: This is easy enough.."));
        notebookText.scrollTop = notebookText.scrollHeight;
        secretCounter(notebookText);
    },
}

function lineBreak(string) {
    let p = document.createElement('p');
    p.innerText = string;
    return p;
}

//  HEALTH HANDLER
function newHealth(change) {
    health -= change;
    healthBar.setAttribute('value', health);
    if (health === 0) {
        alert('YOU HAVE DIED');
        location.reload();
    } else if (health < 25) {
        if (inventory.hasOwnProperty('apple')) {
            alert("You should eat your Apple!! You're health is getting low!!");
        }
    }
}

//          HIDDEN ABILITIES
//  APPLE
function eatingApple() {
    newHealth(eatApple);
    delete inventory.apple;
    inventoryDiv.removeChild(apple);
}

//  NOTEBOOK
function secretCounter(string) {
    if (string.innerText.length > 650) {
        return;
    } else if (string.innerText.length > 600) {
        notebookText.appendChild(lineBreak("\nOLD NOTES!!\nHINT: I should try to hold on to anything I find in here.\n"));
        notebookText.scrollTop = notebookText.scrollHeight;
    } else if (string.innerText.length > 450) {
        return;
    } else if (string.innerText.length > 400) {
        notebookText.appendChild(lineBreak("\nOLD NOTES!!\nHINT: The wind always tames the water.\n"));
        notebookText.scrollTop = notebookText.scrollHeight;
    } else if (string.innerText.length > 200) {
        return;
    } else if (string.innerText.length > 150) {
        notebookText.appendChild(lineBreak("\nOLD NOTES!!\nHINT: I never liked working with Dr. OtherPerson, why am I going?\n"));
        notebookText.scrollTop = notebookText.scrollHeight;
    }
    
}