

const payment = true;
const mark = 80;


function  admission(){
    console.log("payment  checking ...");

    const promice = new Promise(function(resolve, reject){
        setTimeout(() => {
            if (payment) {
                resolve();
            }else{
                reject("payment not confirm !!!")
            }
        }, 4000);
    })
    return promice;
}

function states(){
    console.log("status  checking ...");
    const promice = new Promise(function(resolve, reject){
         setTimeout(() => {
            if (mark>=80) {
                resolve();
             }else{
                reject("your status is FAIL");
             }
         }, 3000);
    })
    return promice
}

function certificate(){
    console.log("certificate in progress ...");
    const promice = new Promise(function(resolve){
       setTimeout(() => {
        resolve("you got certificate !!!")
       }, 1000);
    })
    return promice
}

async function admit(){
    try {
        await admission();
        await states();
        const message = await certificate();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}
admit()
// admission()
//          .then(states)
//          .then(certificate)
//          .then(function(value){
//               console.log(value);
//          })
//          .catch(function(err){
//             console.log(err);
//          })




