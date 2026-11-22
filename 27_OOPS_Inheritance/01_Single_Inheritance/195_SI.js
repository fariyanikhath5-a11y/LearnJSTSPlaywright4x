class Father{
    eat(){
        console.log(" I am eating");
    }

}

class Son extends Father{
      sleep(){
        console.log("Hi , I am sleeping");
      }
}

let f = new Father();
let s = new Son();

s.eat(); // I am eating
s.sleep(); //Hi , I am sleeping

f.eat(); // I am eating
//f.sleep();  not allowed 
