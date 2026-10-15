let num= prompt("Enter a number:");
num= Number(num); //convert string to number

if (num % 2===0)
{
    console.log(num + "Is even");
}

    else
    {
    console.log(num +" is odd");
    }
//prompt will not run in nodjs it will only run in browser
