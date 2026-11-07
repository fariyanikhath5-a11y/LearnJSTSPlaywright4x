// n = 3
// *
// * *
// * * *

let n=3 ;
for (i=0;i<n;i++){
    let str = "";
    for (j=0;j<=i;j++){
        str += "* ";
    }
    console.log(str);
}

/*
let n = 3;

for(let i=0;i<n;i++){
    for(let j=0;j<=i;j++){
        // console.log("*");
        process.stdout.write("*");
    }
    console.log("");
} */