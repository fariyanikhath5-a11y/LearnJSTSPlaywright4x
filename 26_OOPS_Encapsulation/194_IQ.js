class User{
    constructor(name){
        this.name = name;

    }
    greet(){
        console.log("Hi , i am " + this.name);
    }
}

let user1 = new User("Fari");
let user2 = new User("Nik");
user1.greet(); //Hi , i am Fari
user2.greet(); //Hi , i am Nik