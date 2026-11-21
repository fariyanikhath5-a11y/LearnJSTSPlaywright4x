class TestCase{
    #status = "not run";
    static #count = 0;

    constructor(name){
        this.name = name;
        TestCase.#count ++;
    }

    run(pass){
        this.#status = pass ? "passed" : "Failed";
    }
    getStatus(){

        return this.#status;
    }

    static getCount(){
        return TestCase.#count ;
    }

    static setCount(V){
        TestCase.#count = V;

    }
}

const tc = new TestCase("Login");
tc.run(true);
console.log(tc.getStatus()); // passed

new TestCase("Login");
new TestCase("Login");
new TestCase("Login");
console.log(TestCase.getCount());  // 4