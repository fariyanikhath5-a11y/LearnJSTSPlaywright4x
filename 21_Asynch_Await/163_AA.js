/*function getTestResults(){
    return "Pass";
}

getTestResults().then(function(results){
    console.log(results);
}); 

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
//Clean up  
*/
//----------------------------------------------------------------
async function getTestResult(){
    return new Promise.resolve("abc");
    
    
}

async function test(){
    let r = await getTestResult();
    console.log('Result',r);
}

