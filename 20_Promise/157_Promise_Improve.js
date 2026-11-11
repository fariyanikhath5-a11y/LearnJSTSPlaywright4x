function openBrowser()
{
 return new Promise(function(resolve)
{
    resolve("Browser has been opened");
});
}

function goToLogin()
{
    return new Promise(function(resolve)
{
    resolve("Login page loaded");
});
}

function enterCredentials()
{
    return new Promise(function(resolve)
{
    resolve("credentials entered");
});
}

function clickLogin()
{
    return new Promise(function(resolve)
{
    resolve("Logged in successfully!");
});
}

openBrowser()
.then(function(msg){
    console.log("step 1 " ,msg);
    return goToLogin();
}).then(function(msg){
    console.log("Step 2 " , msg);
    return enterCredentials();
}) .then (function(msg)
{
    console.log("step 3" , msg);
    return clickLogin();
}) .then (function(msg)
{
    console.log("Step 4:" ,msg);
    
}).catch(function(error)
{
    console.log("error:" ,error);
}) . finally(function(){
    console.log("Done execution!");
});

/*o/p: promise is used to overcome call back cons
step 1  Browser has been opened
Step 2  Login page loaded
step 3 credentials entered
Step 4: Logged in successfully!
Done execution! */