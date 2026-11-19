class Car{
    // Constructor
    // Default vs Param

    constructor(assigned_name){
        this.name=assigned_name;
    }
}

let i10= new Car("i10 Hundai");
console.log(i10.name);  // o/p: i10 Hundai


let mg_hector= new Car("MG");
console.log(mg_hector.name);  //MG

const i20 = new Car("i20");  // constructor runs → "i10"
const Nexon = new Car("Nexon tata");

//o/p:

//without constructor it shows undefined
//without constructor if we try to print it will display empty class and undefined car{} , undefined
// if with constructor we try to print only object reference name without constructor attribute name then it display Car { name: 'i10 Hundai'}
