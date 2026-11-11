let apiCall = new Promise(function(resolve,reject){
    resolve({status: 200}); //{ status: 200 }
    //reject ("error");
})

apiCall.then(function(data)
{
    console.log(data);
}) .catch(function(error){
    console.log(error);
}). finally(function(){
    //Alwats executed
    console.log("I will be executed anyhow"); //I will be executed anyhow

})

