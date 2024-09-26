/*
Author: Josh T
File Name: main.js for Lab 3
*/

//create variables to hold the referenced HTML elements
const locator = document.getElementById("mouseLocator");
const cheese = document.getElementById("cheese");
const trap = document.getElementById("mouseTrap");
const mouse = document.getElementById("mouse");
const healthDisplay = document.getElementById("health");
const instructions = document.getElementById("instructions");
const result = document.getElementById("result");
const startBtn = document.getElementById("start");

//make a variable to hold the health of the cheese
let health = 100;

//make a variable to hold the seconds remaining in the timer
let timeRemaining = 31;

//make a variable to hold the timer innterval
let timerInterval = 0;

//this function does all the work needed to initialize a new game
//it executes the showCheese and moveCheese functions
//it resets the health, time remaining, and timer interval
//it updates the health and the timer using the updateHealth and updateTimer functions
//finally, it hides the instructions, result and the start button
function launchGame()
{
    health = 100;
    timeRemaining = 31;
    timer.style.opacity = 1;
    timerInterval = window.setInterval(updateTimer, 1000);
    updateHealth();

    showCheese();
    moveCheese();

    instructions.style.opacity = 0;
    result.style.opacity = 0;
    startBtn.style.opacity = 0;
    startBtn.style.pointerEvents = "none";



}


//this function sets the text in the locator paragraph to the position of the mouse
//it also logs the event object to the console
function mouseInfo(e){

    locator.innerHTML = 'X: ' + e.clientX + '  Y: ' + e.clientY;

    console.log(e);
}

//this function sets the text in the health display paragraph to the currect health of the cheese
function updateHealth(){
    healthDisplay.innerHTML = health + "%";
    
}

//this function decrements the timer.  it will run every second
//it sets the text of the timer paragraph to the new time
//it also runs the gameLostTime function if the timer runs out
function updateTimer()
{
    timeRemaining--;

    if(timeRemaining < 10)
    {
        timer.innerHTML = "00:0" + timeRemaining;
    }
    else
    {
        timer.innerHTML = "00:" + timeRemaining;
    }


    if(timeRemaining === 0)
    {
        gameLostTime();
    }
}

//this function reveals the cheese and trap using the fadeIn animation
//it also allows them to be clicked
function showCheese(){
    cheese.style.opacity = 1;
    cheese.style.animation = "fadeIn 2s ease";
    cheese.style.pointerEvents = "auto";

    trap.style.opacity = 1;
    trap.style.animation = "fadeIn 2s ease";
    trap.style.pointerEvents = "auto";

}

//this function moves the cheese and trap to random places on the screen using transform and translate
function moveCheese(e) {
    cheese.style.transform = `translateX(${Math.floor(Math.random() * (500 + 501)) - 500}px)`; 
    cheese.style.transform += `translateY(${Math.floor(Math.random() * 500 + 501) - 500}px)`;

    trap.style.transform = `translateX(${Math.floor(Math.random() * (500 + 501)) - 500}px)`; 
    trap.style.transform += `translateY(${Math.floor(Math.random() * 500 + 501) - 500}px)`;

};

//this function moves the cheese and decreases it's health by 5
//it also updates the health text and determines if the cheese has been fully eaten
function hit()
{
    moveCheese();
    health -= 5;
    updateHealth();

    if(health === 0)
    {
        gameWon();
    }
}

//this function does all the stuff that is needed when a game ends
//it clears the time interval, stopping the timer
//it clears the text in the health bar and timer to zero and hides the timer
//it hides the cheese and trap and makes them unclickable
//it clears the animations on the cheese and trap
///it shows the start button and the result of the game (whether you won, got trapped or ran out of time)
//finally it changes the text on the start button to try again and makes it clickable
function gameEnd(){
    clearInterval(timerInterval);

    healthDisplay.innerHTML = "";
    timer.innerHTML = "";

    timer.style.opacity = 0;

    cheese.style.opacity = 0;
    trap.style.opacity = 0;

    cheese.style.pointerEvents = "none";
    trap.style.pointerEvents = "none";

    cheese.style.animation = "";
    trap.style.animation = "";


    startBtn.style.opacity = 1;
    result.style.opacity = 1;

    startBtn.innerHTML = "Try Again?";
    startBtn.style.pointerEvents = "auto";
}

//this function calls gameEnd and sets the result to the win message
function gameWon(){
    gameEnd();

    result.innerHTML = "The Cheese has Been Consumed!  Well Done!";

}

//this function calls gameEnd and sets the result to the trapped message
function gameLostTrap()
{
    gameEnd();

    result.innerHTML = "Your Mouse Got Trapped!";

}

//this function calls gameEnd and sets the result to the time ran out message
function gameLostTime()
{
    gameEnd();

    result.innerHTML = "Times Up!";

}




//add a event listener that calls the mouseInfo function every time the mouse is moved
document.addEventListener("mousemove", mouseInfo);

//add an event listener that calls the hit function whenever the cheese is clicked
cheese.addEventListener("click", hit);

//add an event listener that calls the gameLostTrap function whenever the mouse touches the trap
trap.addEventListener("mouseover", gameLostTrap);

//add an event listener that calls the launch game function whenever the start button is clicked
startBtn.addEventListener("click", launchGame);

