// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";
// includes()

url.includes("staging");
url.includes("prod");

// startsWith / endsWith
url.startsWith("https");
url.endsWith("true");
url.startsWith("https://");

// indexOf / lastIndexOf

console.log(url.indexOf("a")); //10
console.log(url.lastIndexOf("a")); //24 earches the string from right to left and returns the index of the last "a" it finds.
console.log(url.indexOf("nothere")); //-1 , if nothing is there it will print -1

// ASCII -> A -> 65