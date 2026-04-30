/*  assynchronous function: Callback vs Async vs Promise
    DEFINE        CALL 
    callback      func
    async/await   then/catch
    promise       then/catch
*/

// define synchronous function
// function division(a, b, callback) {
//     if(b === 0) {
//      callback ("Not divided by zero", null);
//     } else {
//      callback(null, a % b);
//     }
//  }
 
//  // call 
//  division(10, 3,  function (err, data) {
//      if(err) console.log("Error: ", err);
//      else {
//          console.log("Result: ", data);
//          console.log("...")
//      }
//  });




// async function division(a, b) {
//     if(b === 0) {
//        throw new Error ("Not divided by zero");
//     } else {
//         setInterval(function(){
//             return a % b;
//         }, 2000)
//     }
//  }
 
//  // call 
//  division(10, 3).then(data => {
//     console.log("Result:", data);
//     console.log("...");
//  }).catch(err => {
//     console.log("Error division",err)
//  })


function division(a, b) {
    return new Promise((resolve, reject) => {
        if(b === 0) {
           reject("Not divided by zero");
         } else {
             setTimeout(function(){
                 resolve(a % b);
             }, 5000)
         }
    })
 }
 
 // call 
 division(10, 3).then(data => {
    console.log("Result:", data);
    console.log("...");
 }).catch(err => {
    console.log("Error division",err)
 })