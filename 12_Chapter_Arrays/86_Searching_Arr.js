let results=["pass","fail","pass","error","fail"];

console.log(results.indexOf("fail")); //1

console.log(results.indexOf("skip")); //-1 , if no element found


// lastIndexOf — searches from the end
console.log(results.lastIndexOf("fail")); // 4


// includes — returns boolean
console.log(results.includes("pass")); //true

//o/p:
//1
// -1
//4
//true


