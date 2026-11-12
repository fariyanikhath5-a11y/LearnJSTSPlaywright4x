// Retry Pattern with Async/Await - REAL QA
// One simulated API succeeds after two failures;
//  another exhausts its retries.

function createFlakyAPIs(successAttempt){
    let attempt = 0 ;
    return function(){
        attempt++;
        if(attempt < successAttempt)
        {
            return Promise.reject("Attempt" + attempt + " Failed");

        }
        return Promise.resolve("Attempt" + attempt + " Success");
    };
}

async function retryTesting(){
    let s= await createFlakyAPIs(1);
    console.log(s());
    
}
retryTesting();

/* o/p: 
Promise { 'Attempt1 Success' }
*/