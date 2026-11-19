class Credential{
 #apiKey;

  constructor(user,key){
    this.user=user;
    this.#apiKey=key;
  }

  getAPI(){
    return this.#apiKey;
  }

}

let cred = new Credential("admin" , "#Secret_Key_1234");
console.log(cred.user);  //o/p: admin

//console.log(cred.#apikey);