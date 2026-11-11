// An async function always returns a promise.
// await reads the resolved value inside another async function.

function apiRequest()
{
    return new Promise(function(resolve){
        resolve({status: 200});
    });
}

async function runAPIRequest()
{
    let response= await apiRequest();
    console.log("API Status:" , response.status); // o/p: API Status: 200
}

runAPIRequest();
