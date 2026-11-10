function test(item, callMeWhenDone) {
    console.log('test function called with item:', item);
    callMeWhenDone(item);
}

test("verify the login page is working", (item) => {
    console.log('Callback executed: Test completed for item:', item);
});

/*o/p:
test function called with item: verify the login page is working
Callback executed: Test completed for item: verify the login page is working */


/*test("Verify the login page is working", async (page) =>{
});*/