class BaseTest{
    setup(){
        console.log("Base: Open Brwoser");
    }
}

class APITest extends BaseTest{
    setup(){
        console.log("APITest: Open Browser");
    }

}

let test = new APITest(); // if fn name is same then depends on object child class fn is called
test.setup(); //APITest: Open Browser

