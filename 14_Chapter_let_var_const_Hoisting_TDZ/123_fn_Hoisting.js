function getUserStatus()
{
    var statuscode; // var status_code; => hoisted
    console.log(statuscode); //undefined
    var statuscode= "200";
    console.log(statuscode); //200
}

getUserStatus();