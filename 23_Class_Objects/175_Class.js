class Person{ //CAB
    //Attributes | Instance Variables | Data Memebers | PRoperties
    #name;
    #age;
    #rollNo;
    #phoneNo;

        // Constructor, Attributes, Behaviour - CAB
// # Constructor
    //  **A special function that runs automatically, 
    // once, at the moment an object is born.**

    constructor()
    {
         console.log("I will be called whenever an object is created. ")
    }

     // Behaviour | Methods | Members Functions | 
     eat(){}
     sleep(){}
}


// # and we are not using function key in class for the f(n)
// CAB -> Class has the A, B

const fariya = new Person();
// Object -> new Person();
// Object Ref -> fariya

const nik = new Person();