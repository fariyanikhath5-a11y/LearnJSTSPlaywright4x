class BasePage{
    verify(){
        console.log("Verifying the base page");
    }
}

class LoginPage extends BasePage{
    verify(){
        console.log("Verify: username field exists");
        console.log("Verify: password field exists");
        console.log("Verify: login button is visible");
    }
}

class DashboardPage extends BasePage{
    verify(){
        console.log("Verify: welcome message shown");
        console.log("Verify: sidebar menu loaded");
    }
}

class CartPage extends BasePage{
    verify(){
        console.log("Verify: cart items displayed");
        console.log("Verify: total price is correct");
    }
}

let pages = [new LoginPage() , new DashboardPage() , new CartPage()];

pages.forEach(function(page){
    page.verify();
    console.log(" ----");
});

// o/P:
// Verify: username field exists
// Verify: password field exists
// Verify: login button is visible
//  ----
// Verify: welcome message shown
// Verify: sidebar menu loaded
//  ----
// Verify: cart items displayed
// Verify: total price is correct
//  ----
