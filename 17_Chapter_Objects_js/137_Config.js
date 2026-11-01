let config={};
config.browser="chrome";
config.timeout=5000;
config.timeout=3000; //latest
console.log(config); //{ browser: 'chrome', timeout: 3000 }
delete config.browser;
console.log(config); //{ timeout: 3000 }


