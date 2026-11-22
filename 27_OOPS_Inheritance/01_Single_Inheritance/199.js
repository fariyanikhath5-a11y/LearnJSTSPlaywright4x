class BaseTest{
    constructor(){
        console.log("Parent !!!");
    }
    setup(){
        console.log("Base: Open Browser");

    }
    teardown(){
        console.log("Base: Close Browser!!!");
    }
}

class UITest extends BaseTest{
    constructor(){
        super();
    }
    setup(){
        super.setup(); // UITest will help you to call your parent function. super() - Constrcutor, super.fname() - functions name
    console.log("UI Maximize window");
    }

    teardown(){
        console.log("UI: Take screenshot");
        super.teardown();
    }
}

let set = new UITest(); // undefined since it handed back nothing if dont want undefined call directly without console.log
//console.log(set.setup()); // Parent !!!
// Base: Open Browser
// UI Maximize window
// undefined

set.setup();
// o/p: 
// Parent !!!
// Base: Open Browser
// UI Maximize window