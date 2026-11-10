let apiCall= new Promise(function(resolve,reject)
{
    resolve({status:200 , body: "User Data"});
});

apiCall.then(function(response)
{
    console.log(response); //o/p: { status: 200, body: 'User Data' }
});

let testRun = new Promise(function(resolve,reject)
{
    reject("Assertion failed.");
});

testRun.then(function(data)
{
    //Resolve
    console.log(data); //{ status: 200, body: 'User Data' }
}).catch(function(error)
{
    //reject
    console.log(error); // Assertion failed.
});