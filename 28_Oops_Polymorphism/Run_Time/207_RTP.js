class BaseTest{
    setup(){
        console.log("Base: Open Browser");
    }
}

class APIPage extends BaseTest{
    setup(){
        console.log("API Test: Open Browser");
    }
}

let btest= new BaseTest();
let test = new APIPage();
test.setup(); //API Test: Open Browser
btest.setup(); //Base: Open Browser

