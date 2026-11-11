let fastServer= new Promise(function(resolve){
    setTimeout(function(){
        resolve("fast 100ms")
    }) , 100
});

let slowServer = new Promise(function(resolve){
    setTimeout(function()
{
    resolve("slow 500ms")
}) , 500
});

Promise.race([fastServer , slowServer]).then(function(winner){
    console.log("Winner:" , winner);
});

/* o/p:
Winner: fast 100ms
*/