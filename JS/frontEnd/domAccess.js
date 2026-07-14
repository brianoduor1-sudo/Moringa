/*
DOM Access using
1. querySelector
2. getElement...

1. getElementById
*/

// Create a variable and assign the element with id="div1"
const divElement = document.getElementById("Team");

// Log the element
console.log("getElementById:");
console.log(divElement);


/*
2. getElementsByClassName
*/

// Create a variable and assign the elements with class="list-item"
const classElements = document.getElementsByClassName("list-item");

// Log the HTMLCollection
console.log("getElementsByClassName:");
console.log(classElements);


/*
3. querySelector
*/

// Select the element with id="div1"
const divQuery = document.querySelector("#Team");

console.log("querySelector by ID:");
console.log(divQuery);


// Select the first element with class="list-item"
const firstListItem = document.querySelector(".list-item");

console.log("querySelector by Class:");
console.log(firstListItem);


/*
4. querySelectorAll
*/

// Select all elements with class="list-item"
const allListItems = document.querySelectorAll(".list-item");

console.log("querySelectorAll:");
console.log(allListItems);

// Loop through all the list items
for (let i = 0; i < allListItems.length; i++) {
    console.log(allListItems[i]);
}


const otherLeagues = ["Italian League", "Bundesliga", "Ligue 1"];
const originalDiv = document.querySelector("#Team").innerHTML;

function original() {
    console.log("original clicked");
    document.querySelector("#Team").innerHTML = originalDiv;
}


function replace() {
    console.log("replace clicked");
    const newHtml = `
    <h3>Leagues</h3>

        <ul>
            <li class="list-item"> Most competitive</li>
            <li class="list-item"> Hardest in the world</li>
            <li class="list-item"> Produced the Goat </li>
        </ul>`;
        document.querySelector("#Team").innerHTML = newHtml;
    
}

function update() {
    console.log("update clicked");

    // Select all list items
    const listItems = document.querySelectorAll(".list-item");

    // Replace only the text
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].innerText = otherLeagues[i];
    }
}