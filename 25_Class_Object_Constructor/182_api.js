class APIClient{
 constructor(baseUrl){
    this.baseURL = baseUrl;
 }
  fari(path){
    return this.baseURL + path;
  }

}

let staging = new APIClient("https://staging.api.com");
let prod = new APIClient("https://prod.api.com")
console.log(staging.fari("/user"));
console.log(prod.fari("/prod/users"));

// o/P:
// https://staging.api.com/user
// https://prod.api.com/prod/users

