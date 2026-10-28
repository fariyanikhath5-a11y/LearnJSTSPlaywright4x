//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 

function name1()
{
 console.log("hi");
 }
 name1();

 (function()
 {
    console.log("Anonymous fn");
 })();

 (function()
 {
    console.log("staging");
 })();

 (() =>
 {
    console.log("Set up complete!");
 })();
 