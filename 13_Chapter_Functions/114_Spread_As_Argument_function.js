function add(a,b,c)
{
    return a+b+c; //type4 function
}

let num=[1,2,3,45];
console.log(add(...num)); //6 , can pass spread also to the function

// ----

function hasError(...codes)
{
    return codes.some(c => c >= 400);

}

let responseCodes = [200,201,404];
let responseCode2 = [500 , 100 ,500];
console.log(hasError(...responseCodes)); //true
