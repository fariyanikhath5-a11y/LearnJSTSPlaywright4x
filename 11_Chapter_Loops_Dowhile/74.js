let retry=0;

do{
    console.log("Executing ....");
    console.log("Retrying....");
    retry++; // IF WE do not use this then it will be infinite loop
    console.log(retry);
} while(retry<4)
{
    console.log("inside while loop" + retry);
}

//let retry = 0;

//do {
    //console.log("Executing the code....");
    //console.log("Retrying.....",retry);
    //retry++;
//} while (retry < 3);