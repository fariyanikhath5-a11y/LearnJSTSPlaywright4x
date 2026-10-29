function startBrowser() {
    let name = "edge";

    function installBrowser() {
        console.log(name); //edge
    }
    return installBrowser; // if we use return installBrowser() then it will give error.
}
//installBrowser(); //reference error : installBrowser is not defined
//startBrowser; // nothing in output
//startBrowser(); // nothing in output
const runTC = startBrowser();
runTC();

//installBrowser(); // error