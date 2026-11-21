class Icici{
    #balance;
    constructor(name , balance){
        this.#balance = balance;
        this.name = name;

    }

    getBalance(){
        return this.#balance;
    }

    setBalance(Changed_Bal , iscashier){

        if(iscashier){
            this.#balance = Changed_Bal;
        }
        else{
            console.log("Not Allowed");
        }

    }
}

let fari=new Icici("Fariya" , 1000);
console.log(fari.getBalance()); //1000

fari.setBalance(1000000 , false);//Not Allowed
console.log(fari.getBalance()); //1000

let fari_Father = new Icici("fari" , 20000000);
console.log(fari_Father.getBalance()); //20000000
fari_Father.setBalance(500000000 , true) ;
console.log(fari_Father.getBalance()); //500000000
