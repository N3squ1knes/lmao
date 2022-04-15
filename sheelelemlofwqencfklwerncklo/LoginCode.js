function checkCreds(){
    console.log("checkCreds() started...");
    //create the name and badge variables and fill them in
    var firstName = document.getElementById("fname").value;
    console.log("First Name: " + firstName);
    var lastName = document.getElementById("lname").value;
    console.log("Last Name: " + lastName);
    var badgeNum = document.getElementById("badgeID").value;
    console.log("Badge ID: " + badgeNum);
    //name a fullName variable 
    var fullName = firstName + " " + lastName;
    console.log("Full Name: " + fullName);

    //check if full name is 20 characters or less
    var fullNameLength = fullName.length;
    console.log(fullNameLength);
    if(fullNameLength > 21 || fullNameLength < 3)
    {
        document.getElementById("loginStatus").innerHTML = 
            "Invalid Full Name, please resubmit.";
    }
    else if(badgeNum > 999 || badgeNum < 1)
    {
        document.getElementById("loginStatus").innerHTML =
            "Invalid Badge Number! please resubmit";
    }
    else
    {
        //if everything is okay, thenj grant access to the UATSpace webpage
        alert("Access granted , Welcome " + fullName);
        location.replace("./UATSpacePage.html")
    }
    // check the badge number is less than 1000



     

}