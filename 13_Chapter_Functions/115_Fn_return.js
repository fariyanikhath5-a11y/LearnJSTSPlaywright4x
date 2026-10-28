function getStatusCode(code)
{
  if(code>= 200 && code<300)
  {
    return "success";
  } 
  else if (code >= 400 && code<500)
  {
    return "Client Error";
  }
  else if (code>=500)
  {
    return "server error" ;

  }
  else
  {
    return "unknown";
  }
}

console.log(getStatusCode(200)); //success
console.log(getStatusCode(409)); //Client Error

console.log(getStatusCode(501)); //server error

