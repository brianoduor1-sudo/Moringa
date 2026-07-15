/*
Events -.
if something happens i want to be notified
- callback
sensor

click
hover
type

-Before attaching an event. you be able to access the the element

*/

function alertMe() {
    alert("Button clicked!");
}
document.querySelector("#btn-event-checker").addEventListener("click", alertMe);
function clickAlert(e) {
    alert("Hi button was clicked")
    
}
// Select the button
// Select the button
const button = document.querySelector("#btn-event-checker");

// Click event
button.addEventListener("click", function (event) {
    console.log(event); // Print the event object
    alert("Button clicked!");
});

// Mouseover event
button.addEventListener("mouseover", function (event) {
    console.log(event); // Print the event object
    console.log(new Date()); // Print the current date and time
});

// Get the spans where the coordinates will be displayed
const x = document.querySelector("#x");
const y = document.querySelector("#y");

// Listen for mouse movement on the window
window.addEventListener("mousemove", function (event) {
    // Display the mouse coordinates
    x.innerText = event.clientX;
    y.innerText = event.clientY;

    // Print the event and coordinates to the console
    console.log(event);
    console.log("X direction:", event.clientX);
    console.log("Y direction:", event.clientY);
});