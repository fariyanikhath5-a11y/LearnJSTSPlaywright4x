//Mutiline

const getResult = (score) => 
{
    if(score >70) return "PAss";
    return "fail" ;

}

console.log(getResult(78)); //PAss
console.log(getResult(65)); //fail

const getResult1 = (score1) => {
     if (score1 > 90) return "Passed" ;
      return "fail" ; 
}
console.log(getResult1(34)); //fail ,if we dont give return keyword then o/p is undefined