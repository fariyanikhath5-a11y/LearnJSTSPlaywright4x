class Environment{
    //constructor(name = "staging" , port = "3000"){
         constructor(name = "staging" , port = 3000){
        //constructor(name,port){
        this.name = name;
        this.port = port;
    }
    getURL(){
        return "http://"  + this.name + ":"  + this.port ; 
    }
}

let env1 = new Environment(); 
let env2 = new Environment("production" , 8080);
console.log (env1.getURL()); //http://staging:3000  , if we dont define value to name and port
// in constructor then output will be http://undefined:undefined
console.log(env2.getURL()); //http://production:8080

