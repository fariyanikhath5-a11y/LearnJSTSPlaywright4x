function calculate(a,b,operation){
    return operation(a,b);
}

let sum= calculate(10,5,function(x,y)
{
    return x+y;
});

console.log(sum); //15

function calculate(a,b,operation)
{
    return operation(a,b);
}

let sum1 = calculate(56,14,function(a,b)
{
    return a=b;
}
);
console.log(sum1); //14