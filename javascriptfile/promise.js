//Creating an promise object    
//this is even odd program
const theProm = new Promise(function(resolve,reject){
    let n = 9;
    if(n%2 === 0){
        resolve("The Number is even");
    }
    else{
        reject("The Number is odd");
    }
});

// theProm
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

let evenNo = (data)=>console.log(data);
let oddNo = (err)=>console.log(err);

theProm
.then(evenNo)
.catch(oddNo);


//function that return promises

// function checkEvenOdd(num) {
//     return new Promise(function(resolve,reject){
//         if(num%2 === 0){
//             resolve("Even No..!");
//         }
//         else{
//             reject("Odd No..!");
//         }
//     });
// }

// // console.log(checkEvenOdd(8));
// checkEvenOdd(12).then((data)=>{
//     console.log(data);
// })
// .catch((e)=>{
//     console.log(e);
// });


//take sometime while fetching data from the server
//By using setTimeOut method

function checkEvenOdd(num) {
    return new Promise(function(resolve,reject){
        console.log("Fetching data please wait......");

        setTimeout(function(){
            if(num%2 === 0){
                resolve("Even No..!");
            }
            else{
                reject("Odd No..!");
            }
        },3000);

    });
}

// console.log(checkEvenOdd(8));
checkEvenOdd(12).then((data)=>{
    console.log(data);
})
.catch((e)=>{
    console.log(e);
});