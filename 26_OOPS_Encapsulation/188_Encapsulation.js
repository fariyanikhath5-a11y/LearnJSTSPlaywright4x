class Person{
        // hide my variable
   #child1;
   #child2;
   constructor(name,child1,child2){
    this.name=name;
    this.child1=child1;
    this.child2=child2;
   }

   getChild(){  //Mother

    return this.child1;
   }

   setChild(changed_name){  //wife setChild(changed_name , changed_name1)
         //this.child2= changed_name;
         //this.child1= changed_name1;
         this.child1 = changed_name;
   }
}

let p= new Person("virat" , "Manisha" , "Abraham");
console.log(p.child1);  // Manisha

console.log(p.getChild());  //Manisha


p.setChild("VRAD");
console.log(p.getChild()); //Manisha , VRAD


console.log(p.name); // virat
p.name = "Amit" ;
console.log(p.name); // Amit