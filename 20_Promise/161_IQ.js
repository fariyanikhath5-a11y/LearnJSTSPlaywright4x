/*let p= new Promise(function (resolve,reject){
    resolve(42);
});

p.then(function(value){
    console.log("Answer:" , value); // o/p: Answer: 42
});
----------------------------------------------------
let p1=new Promise(function(resolve,reject){
    reject("something broke");
});

p1.catch(function(err){
 console.log("error:" , err); // o/p: error: something broke
});
--------------------------------------------------------
let p2=Promise.resolve(5);

p2.then(function(val){
    return val*10;
}) .then(function(val){
    console.log("Result:" , val); // o/p: Result: 50
});
----------------------------------

let p3= Promise.resolve(1);
p3 
.then (function(val1){
    console.log(val1);
    return val1+1;
})

.then (function(val1){
    console.log(val1);
    return val1+1;
})

.then(function(val1){
    console.log(val1);
})

//o/p:
1
2
3
---------------------------------------------------------------------

Promise.resolve("start")
.then(function(val){
    console.log(val);
    throw new Error("Broke at step 2");
     
})
.then (function(){
    console.log("This will not run");
})

.catch(function(err){
    console.log("Caught:" , err.message);
});
//o/p: 
//start
//Caught: Broke at step 2

-----------------------------------------------------
*/
Promise.reject("test Failed")
.then(function(data){
    console.log("data:" , data);
})
.catch(function(err){
    console.log("error:" , err);
})
.finally(function(){
    console.log("Clean up Done!.........");
});

/* o/p:
error: test Failed
Clean up Done!......... */