class Bug{
    constructor(title, severity){
        this.title= title;
        this.severity = severity;

    }
    display(){
        console.log("[" + this.severity  + " ] " +  this.title);
    }
}

let b1 = new Bug("Login crash" , "critical");
let b2 = new Bug("Typo in Footer" , "Low");

b1.display(); //[critical ] Login crash
b2.display(); //[Low ] Typo in Footer