// Type 3 =  with argument/parameter but no return type. 

function greetByLname(Lname)
{
    console.log("Hello" + Lname); // nothing printed
}

greetByLname("Frog"); // HelloFrog , should define in double quotes without that it gives error not defined

let Lname= greetByLname("Lava"); //HelloLava , we can use variable name same as parameter name of fn
console.log(Lname); //undefined


