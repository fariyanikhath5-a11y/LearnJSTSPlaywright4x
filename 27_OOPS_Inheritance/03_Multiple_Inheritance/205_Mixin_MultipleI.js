// Mixin concept can help you to perform the multiple inheritance. 

// Mixin 1: Adds logging ability

let LoggerMixin = function(Base){
    return class extends Base{
        log(msg){
            console.log("[Log]" , msg);
        }        
        
    }
}

let ScreenshotMixin = function (Base){
    return class extends Base{
        takeScreenshot(){
           console.log("[screenshot] captured");
        }
    };
};

//Base Class

class TestCase{
    constructor(name){
        this.name = name;
    }
    run(){
        console.log("Running: " + this.name);
    }
}

//Apply both Mixins

class SmartTest extends ScreenshotMixin(LoggerMixin(TestCase)){
    constructor(name){
        super(name);
    }
}

let t= new SmartTest("Login Flow");
t.run(); //Running: Login Flow
t.log("Test Started"); //[Log] Test Started
t.takeScreenshot(); //[screenshot] captured