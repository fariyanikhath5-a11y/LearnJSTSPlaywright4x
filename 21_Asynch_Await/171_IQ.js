console.log("A");

async function test(){
    console.log("B");
    await Promise.resolve();
    console.log("C");
}

test();
console.log("D");

/* o/p: since promise will wait to resolve . hence if we want sequential order mention everything inside async function
A
B
D
C  */
// --------------------------------------------------------------------------

/*console.log("A1");

async function test1(){
    console.log("B1");
    await Promise.resolve();
    console.log("C1");
    console.log("D1");
}

test1();

/*o/p:
A1
B1
C1
D1 */