Promise.allSettled([
    Promise.resolve("Test A passed"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test C passed!")
]) . then (function(results){
    results.forEach(function(r,i)
{
    console.log("Test" + (i+1) + " : " ,r.status , "-" , r.value || r.reason); 
});
})

/* o/p:
Test1 :  fulfilled - Test A passed
Test2 :  rejected - Test B failed
Test3 :  fulfilled - Test C passed!
*/