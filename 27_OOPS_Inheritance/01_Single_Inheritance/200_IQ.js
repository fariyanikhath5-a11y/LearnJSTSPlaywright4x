class TestCase{
    execute(){
        console.log("Running Generic Test!");
    }
}

class UnitTest extends TestCase{
    execute(){
         console.log("Running unit test — checking one function");
    }

}

class APITest extends TestCase{
    execute(){
        console.log("Running API test — sending HTTP request");
    }
}

class E2ETest extends TestCase{
    execute(){
        console.log("Running E2E test — opening browser")
    }
}

let tests = [new UnitTest() , new APITest() , new E2ETest()];
//tests.foreach(function(test){
    tests.forEach(function(test){ 
       //tests.foreach(function(test){
  test.execute();
});

// o/p:
// Running unit test — checking one function
// Running API test — sending HTTP request
// Running E2E test — opening browser