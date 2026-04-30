const moment = require('moment');
 const time = moment().format("DD MM YYYY HH:mm:ss");

/*  synchronous function:
    define   call 
    callback function
*/
const list = [
    "be a good student",
    "choose right boss",
    "start your own business",
    "do what you are good at",
    "invest in young generation",
    "now do a rest and enjoy your life"
];

// define

function giveAdvice(age, callback) {
    if(typeof age !== "number") callback("insert only number", null);
    else if(age >= 61) callback(null, list[5]);
    else if(age >= 51) callback(null, list[4]);
    else if(age >= 41) callback(null, list[3]);
    else if(age >= 31) callback(null, list[2]);
    else if(age >= 21) callback(null, list[1]);
    else callback(null, list[0]);
}

// call

giveAdvice(10, (err, data) => {
    if(err) console.log("ERROR:", err);
    else console.log("data:", data);
});

console.log("Time:", time)

