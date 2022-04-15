function start()
{
    console.log("start() started...");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    console.log("update seconds row to Reading Data");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop()
{
    console.log("stop() started...");
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time elapsed:</td><td>15 seconds</td></tr>";
    console.log("update seconds row to hard wire Table Data");
     document.getElementById("startButton").disabled = false;
     document.getElementById("stopButton").disabled = true;
   
}
















































//for the assignment, we need a timer to count down from 50 to 0 by 5 sec increments and show blastOff at 0
//for my example

function blastOffTimer()
{
    console.log("blastOffTimer() started")
    var currtime = 50;
    var i = 5;
    var timeMult = 5000;
    document.getElementById("blastOffText").innerHTML = currtime;
    console.log(currtime)
    currtime = currtime - i;
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, timeMult)
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, 2 * timeMult);
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, 3 * timeMult);
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, 4 * timeMult);
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, 5 * timeMult);
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, 6 * timeMult);
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, 7 * timeMult);
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, 8 * timeMult);
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, 9 * timeMult);
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = "Blast Off!";
        currtime = currtime - i;
    }, 10
     * timeMult);
}

currTime = 0;
function testCtnDown()
{
    console.log("testCtnDown() started");
    //variable to track time
    currTime = 50
    //for loop to save typing
    for(var i = 0; i <= 10; i++)
    {
        console.log(i);
        setTimeout(function()
        {
            if(currTime == 0)
            //if we are done and need blastoff
            {
                document.getElementById("blastOffText").innerHTML = "Blast off";
            }
            else if(currTime < 25)
            //bc the admiral wants this
            {
                document.getElementById("blastOffText").innerHTML = 
                    "Warning less than 1/2 way to launch, time left = " + currTime;
            }
            else
            //everything else
            {
                document.getElementById("blastOffText").innerHTML = currTime;
            }
            //we are iterating by 5s
            currTime = currTime - 5;
            //5000 to wait 5 sec between counts
        }, 5000 * i)
    }
}

var wins = 0
//this stores the wins
var losses= 0
//this stores the losses
var ties = 0
//this stores the ties

function playCraps()
{
    console.log("playCraps() started...")
    var die1 = 6 * Math.random(); 
    //stores the value for die1
    var roundDie1 = Math.ceil(die1); 
    //this is the value that gets shown to the user die1
    console.log("The rounded number is " + roundDie1); 
    //This is shown on the console of the web page
    document.getElementById("die1Res").innerHTML = "die 1: " + roundDie1; 
    //This is to show it on the main web page
    var die2 = 6 * Math.random();
    //stores value for die2
    var roundDie2 = Math.ceil(die2); 
    //this is the value that gets shown to the user for die2
    console.log("The rounded number is " + roundDie2); 
    //This is shown on the console of the web page
    document.getElementById("die2Res").innerHTML = "die 2: " + roundDie2; 
    //This is to show it on the main web page
    var sum = roundDie1 + roundDie2; 
    //stores value for the sum of die1 and die2
    console.log("the sum of the two dice rolls is: " + sum); 
    //This is shown on the console web page
    document.getElementById("sumRes").innerHTML = "sum: " + sum; 
    //this is to show it on the main web page
    if(sum == 7 || sum == 11) 
    //this determines if lost the game
    {
        document.getElementById("crapsRes").innerHTML = "CRaPS, you lose. :)";
        losses = losses + 1;
        document.getElementById("Lose").innerHTML = "Your losses: " + losses;
    }
    else if (roundDie1 == roundDie2 && roundDie1 % 2 == 0)
    //this will determine if you won the game
    {
        document.getElementById("crapsRes").innerHTML = "Doubles, you won";
        wins = wins + 1;
        document.getElementById("Wins").innerHTML = "Your wins: " + wins;
    }
    else 
    //this will determine if you won the game
    {
        document.getElementById("crapsRes").innerHTML = "Tie. Sorry, try again :(";
        ties = ties + 1;
        document.getElementById("Ties").innerHTML = "Your Ties: " + ties;
    }

}