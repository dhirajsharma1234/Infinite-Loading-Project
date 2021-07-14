//even odd program
//This promise is resolve when th number is even
let prom = new Promise(function(resolve,reject){
    let no = 12;
    setTimeout(function(){
        if(no%2 === 0){
            console.log("this is even no!");
            resolve("Even");
        }
        else{
            reject("Odd");
        }
    },3000)

});

// prom.then((even)=>{
//     console.log(even);
// })
// .catch((odd)=>{
//     console.log(odd);
// });


//check two number which is greater
//This promise is resolve when the num1 is greater than num2
let check = new Promise(function(resolve,reject){
    let num1 = 80,num2 = 40
    setTimeout(function(){
        if(num1 === num2){
            reject("Number is equal!");
        }
        else if(num1<num2){
            reject("Number is smaller!");
        }
        else{
            console.log("this is greater!");
            resolve("Num1 is greater!")
        }
    },1000)
});

// check.then((data)=>{
//     console.log(data);
// })
// .catch((e)=>{
//     console.log(e);
// });


//When all the promise is resolve then the then() method is called
//If any of the promise is rejected then the catch() method will be called
Promise.all([prom,check])
.then((data)=>{
    console.log(data);
})
.catch((e)=>{
    console.log(e);
});