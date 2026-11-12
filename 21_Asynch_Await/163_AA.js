async function getTestResults(){
    return "Pass";
    //return new Promise.resolve("asap") // normal function we cant use .then otherwise it will throw error
    //use async if we use .then
}

//getTestResults().then(function(results){
  //  console.log(results); //pass
//}); 

async function test(){
    await getTestResults();
}

//---------------------------------------------------------------------------

async function testAPI() {
    try{
         let result = await Promise.reject("503 service unavailable");
         console.log('Result', result);
   
}
catch(error)
{
    console.log('Error', error);
}
  finally{
    console.log("Clean up");
  }
}

testAPI();
//o/p: 
//Error 503 service unavailable
//Clean up   */

//----------------------------------------------------------------
async function getTestResult(){
    return new Promise.resolve("abc");
    
    
}

async function test(){
    let r = await getTestResult();
    console.log('Result',r);
}

