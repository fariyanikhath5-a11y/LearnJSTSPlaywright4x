function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
}

const validateStatusCode_exp = function (status) { //for expression we use function keyword
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
} 

const validateStatusCode_Arrow = (status) =>
{
    if(status >=200 && status <=300)
    {
        console.log("Request is fine!");
    }
}

validateStatusCode(200); //Request is fine!
validateStatusCode_exp(200); //Request is fine!
validateStatusCode_Arrow(301); //nothing is printed since we did not give else 