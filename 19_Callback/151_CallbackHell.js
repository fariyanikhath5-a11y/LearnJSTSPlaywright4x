// Real QA Scenario: E2E Login Flow app.vwo.com

function openBrowser(callBack)
{
 console.log("Opening Browser");
 setTimeout(function() {
  console.log("Step 1 : Browser starting ! ...");
  callBack();
 } ,500);
}

function goToLoginPage(callBack)
{ setTimeout(function() {
    console.log("Step2: Login page loaded...");
    callBack();
},500);
}

function enterCredentials(callBack)
{
 setTimeout(function() {    
    console.log("Step3: Entering credentials...");
    callBack();
 },500);
}

function clickLoginButton(callBack)
{
 setTimeout(function() {    
    console.log("Step4: Clicking login button...");
    callBack();
 },500);
}

// // THIS IS CALLBACK HELL 👇
openBrowser(function() {
    goToLoginPage(function() {
        enterCredentials(function() {   
            clickLoginButton(function() {
                console.log("Step5: Login Successful !");
            })
        })
    })
});

/* o/p:
Opening Browser
Step 1 : Browser starting ! ...
Step2: Login page loaded...
Step3: Entering credentials...
Step4: Clicking login button...
Step5: Login Successful !*/




