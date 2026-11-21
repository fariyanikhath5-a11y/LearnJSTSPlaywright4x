class Car{
    #engine; //private
    constructor(name,engineName){
        this.name = name;
        this.#engine = engineName;
    }
    getEngine(){
            return this.#engine;
    }
    setEngine(nameEngine){
           this.#engine = nameEngine;
    }
}

let en= new Car("Tesla" , "V9");
console.log(en.getEngine()); //v9
en.setEngine("v10");
console.log(en.getEngine()); //v10
