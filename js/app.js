console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  'The-Shire',
  'Rivendell',
  'Mordor'
];


// ============
// Chapter 1
// ============

function makeMiddleEarth() {
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
   const sectionMiddleEarth = document.createElement("section");
   sectionMiddleEarth.setAttribute("id", "middle-earth");

  // 2. use a for loop to iterate over the lands array that does the following:
   for (let land of lands) {
  //   2a. creates an article tag (there should be one for each land when the loop is done)
     const newArticle = document.createElement("article");
  //   2b. gives each land article an `id` tag of the corresponding land name
    newArticle.setAttribute("id", land.toLowerCase());
  //   2c. includes an h1 with the name of the land inside each land article
    newArticle.innerHTML =  `<h1>${land}</h1>`;
  //   2d. appends each land to the middle-earth section
    sectionMiddleEarth.appendChild(newArticle);
 }
  // 3. append the section to the body of the DOM.
       document.body.appendChild(sectionMiddleEarth);
}




// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log("2: makeHobbits");

  // display an `unordered list` of hobbits in the shire
  const hobbitsList = document.createElement("ul");
   for (let hobbit of hobbits) {
      let liElement = document.createElement("li");
      liElement.classList.add("hobbit");
      liElement.innerHTML = hobbit;
      // liElement.innerHTML = `<li class = "hobbit">${hobbit}</li>`;
      hobbitsList.appendChild(liElement);
   }
 document.getElementById("the-shire").appendChild(hobbitsList);
  // give each hobbit a class of `hobbit`

  // hint: create a 'ul' outside the loop into which to append the 'li's

  // hint: get 'The-Shire' by using its id

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".


// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
   const divElement = document.createElement("div");
   divElement.setAttribute("id","the-ring");
  // give the div a class of `'magic-imbued-jewelry'`
  divElement.classList.add("magic-imbued-jewelry");
  // add the ring as a child of `Frodo`
  console.log(document.querySelector(".hobbit"));
  document.querySelector(".hobbit").appendChild(divElement);
  
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".


// ============
// Chapter 4
// ============

function makeBaddies() {
  console.log("4: makeBaddies");

  // display an unordered list of baddies in Mordor
    const baddiescontainer = document.createElement("ul");
    for (let baddy of baddies) {
      const baddyEl = document.createElement("li");
      // give each of the baddies a class of "baddy"
      baddyEl.classList.add("baddy");
      baddyEl.innerHTML = baddy;
      baddiescontainer.appendChild(baddyEl);
    }

  // remember to append them to Mordor
  console.log(baddiescontainer);
  document.getElementById("mordor").appendChild(baddiescontainer);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..


// ============
// Chapter 5
// ============

function makeBuddies() {
  console.log("5: makeBuddies");

  // create an `aside` tag
   const aside = document.createElement("aside");
  // put an `unordered list` of the `'buddies'` in the aside
   const buddiesList = document.createElement("ul");
   for (let buddy of buddies) {
    const buddyLi = document.createElement("li");
    buddyLi.innerHTML = buddy;
    buddyLi.classList.add("buddy");
    buddiesList.appendChild(buddyLi);
   }
  // insert your aside as a child element of `rivendell`
  console.log(buddiesList);
  aside.appendChild(buddiesList);
   document.getElementById('rivendell').appendChild(aside);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".


// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log("6: leaveTheShire");

  // assemble the `hobbits` and move them to `rivendell`
  // const hobbitsbox = document.querySelector(".the-shire ul");
  // console.log(hobbitsbox);
  // document.getElementById("rivendell").appendChild(hobbitsbox);
  const hobbitList = document.querySelectorAll(".hobbit");
  console.log(hobbitList)
  for (let hobbit of hobbitList){
    document.getElementById("rivendell").appendChild(hobbit);
  }
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"


// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log("7: beautifulStranger");
  document.querySelectorAll(".rivendell li")[3].innerHTML = "Aragorn";
  // change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"


// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");
  // create a new div called `'the-fellowship'` within `rivendell`
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they // have joined your party
  const theFellowship = document.createElement('div');
  theFellowship.setAttribute("id","the-fellowship")
  document.getElementById("rivendell").appendChild(theFellowship);
  console.log(theFellowship);
  const hobbitList = document.querySelectorAll(".hobbit");
  const buddyList = document.querySelectorAll(".buddy");
  for (let hobbit of hobbitList) {
    theFellowship.appendChild(hobbit);
  }
  for (let buddy of buddyList) {
    theFellowship.appendChild(buddy);
  }
  alert("they have joined your party")

  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
  console.log("9: theBalrog");
  // change the `'Gandalf'` text to `'Gandalf the White'`
  const gandalfEl = document.querySelectorAll(".buddy")[0];
  gandalfEl.innerHTML = "Gandalf the White";
  // apply the following style to the element, make the // background 'white', add a grey border
  gandalfEl.style.backgroundColor = "white";
  gandalfEl.style.borderColor = "red";
  gandalfEl.style.borderWidth = "thick";
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"


// ============
// Chapter 10
// ============

function hornOfGondor() {
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown")
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
  document.querySelectorAll(".buddy")[4].remove();
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"


// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  // add a div with an id of `'mount-doom'` to `Mordor`
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"


// ============
// Chapter 12
// ============

function weWantsIt() {
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  // Move all the `hobbits` back to `the shire`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

// 

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document.getElementById('chapter-3').addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', makeBaddies);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document.getElementById('chapter-7').addEventListener('click', beautifulStranger);
document.getElementById('chapter-8').addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document.getElementById('chapter-11').addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document.getElementById('chapter-13').addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
