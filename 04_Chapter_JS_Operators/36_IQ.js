let temp =35;
let feel = (temp >=40) ? "Very Hot" : 
 (temp >=30) ? "Hot"  : 
   (temp >= 20) ? "Warm"  :
      (temp >=10) ? "cool" : "cold" ;

      console.log("Temperature:" ,temp , "| Feel :" , feel);  //o/p : Temperature: 35 | Feel : Hot