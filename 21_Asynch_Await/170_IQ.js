/*async function riskyTest() {
    try{
        let data = await Promise.reject("Element not found");
        console.log(data);
    }
    catch(err){
         console.log("Test Failed:" , err);
    }
}

riskyTest();
/* o/p:
Test Failed: Element not found 

---------------------------------------------------------------*/

async function apiTest(){
    try {
        let response = await Promise.resolve({status: 201 , body: "Created"});
        console.log("Status:" , response.status);
        console.log("Body:" , response.body);
    }
    catch(err) {
        console.log("Error" , err);

    }
    finally{
        console.log('test Complete');
    }
}

apiTest();

/* o/p:
Status: 201
Body: Created
test Complete */