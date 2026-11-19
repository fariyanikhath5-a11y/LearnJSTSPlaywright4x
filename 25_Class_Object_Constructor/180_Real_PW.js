class TestCase{

    constructor(name_given,status_given,priority_given){
        this.name= name_given;
        this.status=status_given;
        this.priority=priority_given;

    }
    display(){
        console.log(this.name + " - > " + this.status + " - > " + this.priority + " - >");

    }
}

let loginTest_ref = new TestCase("Login" , "Pass" , "P1");
loginTest_ref.display();

let signUpTest_ref = new TestCase("Signup Test" , "Fail" , "Sev1");

signUpTest_ref.display();

//o/p: 
//Login - > Pass - > P1 - >
//Signup Test - > Fail - > Sev1 - >