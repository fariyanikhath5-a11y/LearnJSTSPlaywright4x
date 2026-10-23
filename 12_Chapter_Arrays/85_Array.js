let browser=['chrome','firefox','safari','opera','edge','IE'];
console.log(browser.length); //6

browser.pop();
console.log(browser); //[ 'chrome', 'firefox', 'safari', 'opera', 'edge' ]

let removed=browser.shift();
console.log(removed);//chrome
console.log(browser);//[ 'firefox', 'safari', 'opera', 'edge' ]

for(let i=0; i<browser.length ;i++)
{
    console.log(browser[i]);
    if (browser[i]=== 'opera')
    {
          console.log("Opera doesnt support auto now");
    }
}
///***o/p:

//6
// [ 'chrome', 'firefox', 'safari', 'opera', 'edge' ]
//chrome
// [ 'firefox', 'safari', 'opera', 'edge' ]
//firefox
//safari
//opera
//Opera doesnt support auto now
//edge  ***////

