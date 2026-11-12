function apiCall(name)
{
  return new Promise(function (resolve) { 
    setTimeout(function () { 
        resolve (name + ": 200 Ok" );
    } , 1000 );
  });
}

async function parallelTest() {

    console.log("Starting of the test");
    let start = Date. now ();

    let [r1,r2,r3] = await Promise.all ([
        apiCall("Auth Service"),
        apiCall("User Service"),
        apiCall("Payment Service")

    ]);

    console.log(r1);
    console.log(r2);
    console.log(r3);


    console.log("Time : ~ " + (Date. now() - start) + "ms");
}

parallelTest();

/*
o/p:
Starting of the test
Auth Service: 200 Ok
User Service: 200 Ok
Payment Service: 200 Ok
Time : ~ 1005ms
*/