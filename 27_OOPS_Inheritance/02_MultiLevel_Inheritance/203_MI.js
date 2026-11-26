// Grand Father -> Father -> Son

class BasePage{
    constructor(name){
        this.name= name;
    }
    open(){
        console.log("[open]" + this.name);
    }
}

class AuthPage extends BasePage{
    login(user){
        console.log("[Login]" + user);
    }

}

class AdminPage extends AuthPage{
    constructor(){
        super("Admin Panel");
    }
    manageUsers(){
        console.log("[Admin] Managing users");
    }
}

let admin = new AdminPage();
admin.open(); //[open]Admin Panel
admin.login("superadmin"); //[Login]superadmin

admin.manageUsers(); //[Admin] Managing users

//Expalination : 
// Think of BasePage as setting a name tag on the page object.

// When this runs: let admin = new AdminPage();

// AdminPage calls super("Admin Panel"). That runs the BasePage constructor, which puts "Admin Panel" into the new object’s name property:

// The constructor does not return this.name. It sets this.name; JavaScript then gives the completed object to admin.

// So when line 28 calls admin.open(), open() reads that saved name and prints: