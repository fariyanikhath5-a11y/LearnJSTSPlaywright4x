let status = 0;
console.log(typeof status);
switch (status) // // === Strict, value and data type both of them should be same.
{
    case false:
        console.log("False matched");
        break;
    case 0:
        console.log("Zero matched");
        break;
}