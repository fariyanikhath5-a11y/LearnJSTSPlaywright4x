class TestRunner{
   static totaltests_count = 0;
   static TC_Passcount = 0;

   constructor(name, passed){
    this.TC_name= name;
    TestRunner.totaltests_count++;

    if(passed){
        TestRunner.TC_Passcount++;
    }
    this.TC_Passed = passed;  
   }

}

let t1= new TestRunner("LoginTest" , true);
let t2 = new TestRunner("SignTest" , false);
let t3 = new TestRunner("dashboardTest" , true);
let t4 = new TestRunner("SupportTest" , true);
console.log(TestRunner.totaltests_count);
console.log(TestRunner.TC_Passcount);
console.log(t1.TC_name);
console.log(t2.TC_name);
console.log(t3.TC_name);
console.log(t4.TC_name);
console.log(t1.TC_Passed); // true
console.log(t2.passed); //undefined
console.log(t2.TC_Passed); //false
console.log(t3.TC_Passed); //true

// name ,passed - non static
// totaltests_count, TC_Passcount - static

//o/p:
// 4
// 3
// LoginTest
// SignTest
// dashboardTest
// SupportTest