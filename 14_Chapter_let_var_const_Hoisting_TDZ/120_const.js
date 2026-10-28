const pi =3.14;
console.log(pi); //3.14

function hello()
{
    const pi=3.15;
    console.log(pi); //3.15
    if (true)
    {
        const pi = 4;
        console.log(pi); //4
    }
    console.log(pi); //3.15
}
console.log(pi); //3.14
hello();

//pi = 3.14159; error assignment to constant variable