function placeOrder(item,callback)
{
    console.log("Placing order for " + item);
    console.log("Order placed successfully for " + item);
    callback();
}


// // First Way
// function CompleteOrderPrint(){
//     console.log("Normal Fn");
// }

// placeOrder("Burger", CompleteOrderPrint);
// Example usage of the placeOrder function
placeOrder("Laptop", function() {
    console.log("Callback executed: Order processing completed.");
});

// // Sencond Way Anoy
// placeOrder("Burger", function(){
//     console.log("Order is ready!, pick it up!");
// });

//Third way Arrow function
placeOrder("Pizza", () => {
    console.log("Callback executed: Enjoy your Pizza!");
});

placeOrder("Burger",() => {
    console.log("Arrow fn, I am also a function without name!");
})

/*test('has title', async ({ page }) => {
});*/

//test('Has title', async ({ page }) => {
  //await page.goto('https://playwright.dev/');
//await expect(page).toHaveTitle(/Playwright/);
//});



