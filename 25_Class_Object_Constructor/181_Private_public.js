class Browser {
    constructor(name) {
        this.name = name;
        this.isOpen = true;

        console.log(name + "launched");
    }

    startBrowser(){
        console.log("Starting the browser");

    }

    closeBrowser(){
        console.log("Closing the browser");
    }


}
let chrome= new Browser("Chrome");
let firefox = new Browser("Mozilla");
console.log(chrome.name);
console.log(firefox.isOpen);

chrome.closeBrowser();
chrome.startBrowser();

firefox.startBrowser();
firefox.closeBrowser();

//o/p: 
// Chromelaunched
// Mozillalaunched
// Chrome
// true
// Closing the browser
// Starting the browser
// Starting the browser
// Closing the browser