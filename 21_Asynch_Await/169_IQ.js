/* IQ 1: 
async function sayHello(){
    return "Hello , QA!";

}

sayHello().then(function (msg){
    console.log(msg);
});

//o/p: Hello , QA! 
 -------------------------------------------------------- */
/*async function getStatus(){
    let status = await Promise.resolve(200);
    console.log("status Code: " , status);
    
}
getStatus();

// o/p: status Code:  200 

------------------------------------------------------------ */

async function testFlow(){
    let step1 = await Promise.resolve("Open browser");
    console.log(step1);

    let step2 = await Promise.resolve("Clicked Login!");
    console.log(step2);

    let step3 = await Promise.resolve("Verified Dashboard");
    console.log(step3);
}

testFlow();

/* o/p:
Open browser
Clicked Login!
Verified Dashboard */