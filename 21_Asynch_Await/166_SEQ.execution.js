function apiCall(name){
    return new Promise(function (resolve){
        setTimeout(function ()
    {
        resolve(name + " : 200 Ok");
    }, 1000 );
    });
}

async function sequentialTest() {
 console.log("starting of the test");
 let start = Date.now();
 
 let r1 = await apiCall("Login");
 console.log(r1);

 let r2 = await apiCall("Dashboard");
 console.log(r2);

 let r3 = await apiCall("Report");
 console.log(r3);

 console.log("Time : ~ " + (Date.now()  - start) + "ms");

}

sequentialTest();


/* o/p : 
starting of the test
Login : 200 Ok
Dashboard : 200 Ok
Report : 200 Ok
Time : ~ 3015ms */