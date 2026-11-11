let checkAuth=Promise.resolve("Auth ok");
let checkDB=Promise.resolve("DB check ok ");
let checkCache = Promise.resolve("Catch ok");

Promise.all([checkAuth,checkDB,checkCache]).then(function(results){
    console.log("All checks done:" , results);
})

Promise.all([
    Promise.resolve("ok"),
    Promise.reject("DB down"),
    Promise.resolve("ok")
])
 .then(function (r){
    console.log(r);
 })
 .catch(function(err){
    console.log("Failed:",err)
 });

 /*o/p: all promises should be resolve then only resolve will execute or else one reject will execute catch 
 All checks done: [ 'Auth ok', 'DB check ok ', 'Catch ok' ]
Failed: DB down */
