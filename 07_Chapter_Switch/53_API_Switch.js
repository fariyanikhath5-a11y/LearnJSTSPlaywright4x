let responseCode= 404;

switch(responseCode)
{
    case 200:
        console.log("200 ok");
        break;

    case 404: 
        console.log("404 Not Found!");
        break;

    default: 
        console.log("No status code match"); 
}