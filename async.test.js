const functions = require("./async")


//test('works with promises', () => {
//  return new Promise((resolve, reject) => {
//      ···
//  })
//   })

//   test('works with async/await', async () => {
//     const hello = await foo()
//     ···
//  })////
//Callbacks
//Promises
//Async/Await

//expect.assertions will give the number of time a request will be pulled which is the call
//then we have the promise //Promises


test('calling a value leanne graham ', () => {
    expect.assertions(1);
    return functions.fetchData().then(data => {
        expect(data.name).toEqual("Leanne Graham")
    })

})