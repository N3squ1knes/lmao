class Rocket
{
    //make the properties
    constructor(
        fuelType,
        weight,
        power,
    ){
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }
    launch(){
        console.log("launch sequence started");
        alert("clear the launch area, launch is about to start");
        alert("launch sequence started");
    }

    landing(){
        console.log("landing sequence started");
        alert("landing sequence started");
    }

    detachThruster(){
        console.log("detach Thruster sequence staqrted");
        alert("detatch Thruster sequence started")
    }
}

class Mission{
    constructor(
        objective,
        oxyLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft,
        numberOfAstonauts
    ) {
        this.objective = objective;
        this.oxyLvl = oxyLvl;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft = spaceCraft;
        this.numberOfAstonauts = numberOfAstonauts;
    }
    launchMission(){
        console.log("launchMission started");
        alert("launch sequence started, Best of luck to the crew of the " + this.spaceCraft);
    }

    displayMissionParameters(){
        console.log("displayMissionParameters() started");
        alert("The spacecraft " + this.spaceCraft + " will launch on " 
        + this.launchDateDay + " of " + this.launchDateMonth + " " + this.launchDateYear 
        + " with an O2 level of " + this.oxyLvl + "%");
    }
}



function runSpDisplay(){
    console.log("runSpDisplay() started");
    springLaunch.displayMissionParameters();
}

function spLaunch(){
    console.log("spLaunch() started");
    springLaunch.launchMission();
}

function runfallDisplay(){
    console.log("runfallDisplay() started");
    fallLaunch.displayMissionParameters();
}

function FallLaunch(){
    console.log("spLaunch() started");
    fallLaunch.launchMission();
}