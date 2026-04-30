/*  assynchronous function: Callback vs Async vs Promise
    DEFINE        CALL 
    callback      func
    async/await   then/catch
    promise       then/catch
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
/*
async function suggest(age) {
    if(typeof age !== "number") throw new Error("insert only number");
    else if (age >= 61) return list[5];
    else if (age >= 51) return list[4];
    else if (age >= 41) return list[3];
    else if (age >= 31) return list[2];
    else if (age >= 21) return list[1];
    else return list[0]
}
*/

 function suggest(age) {
    return new Promise((resolve, reject) => {
        if(typeof age !== "number") reject("insert only number");
    else if(age >= 61) resolve (list[5]);
    else if(age >= 51) resolve (list[4]);
    else if(age >= 41) resolve (list[3]);
    else if(age >= 31) resolve (list[2]);
    else if(age >= 21) resolve (list[1]);
    else resolve (list[0])
    })
}

// call 

suggest(44).then(data => {
    console.log("RESULT:", data);
}).catch(err => {
    console.log("ERROR:", err);
});

