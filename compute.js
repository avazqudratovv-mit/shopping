/* callback function:
    define   call
    callbackk function 
*/

// define synchronous function
function division(a, b, callback) {
   if(b === 0) {
    callback ("Not divided by zero", null);
   } else {
    callback(null, a % b);
   }
}

// call 
division(10, 3,  function (err, data) {
    if(err) console.log("Error: ", err);
    else {
        console.log("Result: ", data);
        console.log("...");

        division(10, 4,  function (err, data) {
            if(err) console.log("Error: ", err);
            else {
                console.log("Result: ", data);
                console.log("...");

                division(20, 7,  function (err, data) {
                    if(err) console.log("Error: ", err);
                    else {
                        console.log("Result: ", data);
                        console.log("...")
                    }
                });
            }
        });
    }
});

