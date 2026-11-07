// 1D array,list - duplicate element

let results = ["Pss", "Fail", "Pass", "Fail", "Pass", "Fail", "Pass", "Fail"];

let duplicate = results.filter((item, index) => {
  return results.indexOf(item) !== index;
});
console.log(duplicate); // Output: [ 'Fail', 'Pass', 'Fail', 'Pass', 'Fail' ]

