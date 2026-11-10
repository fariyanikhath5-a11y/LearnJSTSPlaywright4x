let results=["pass", "Fail" , "pass","Skip"];

results.forEach(function(result,index)
{
    console.log("Test",index,result);
});

// "All done" prints LAST because forEach is synchronous — it finishes all 4 iterations first, then moves on.


/*results.forEach((result) => {
    if(result === "pass"){
        console.log("Test Passed");
    }else if(result === "Fail"){
        console.log("Test Failed");
    }
    else if(result === "Skip"){
        console.log("Test Skipped");
    }*/
