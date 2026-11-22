class Animal{
    constructor(name){
        this.name= name;

    }
    eat(){
        console.log(this.name + " is eating");
    }
    sleep(){
        console.log(this.name + " is sleeping");
    }
    foo(){
        console.log("Foo called!") ; 
    }
}

class Dog extends Animal{
    constructor(name , breed){
        super(name); // it is used for parent constructor
        this.breed = breed;
    }
    bark(){
        super.foo();
        console.log(this.name + " is barking");
    }

}

let dog = new Dog("Rexona" , "Labrador");
dog.eat(); //Rexona is eating

dog.sleep(); //Rexona is sleeping

dog.bark(); // Foo called! 
//Rexona is barking

dog.foo(); // Foo called!

console.log(dog.breed); //Labrador