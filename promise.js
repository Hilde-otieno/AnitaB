const internship = true;
const myPromise = new Promise((resolve, reject)=>{
    if(internship){
        resolve('I made it')
    }
    else{
        reject('I will not give up')
    }
})
myPromise.then((response) =>{
    console.log({response});
    console.log('I will get confirmed');

})

.catch((error)=>{
    console.log({error});
    console.log('I will continue applying');
})

.finally(() =>{
    console.log('I will be a software engineer');
});


// console.log({myPromise});

// PROMISE CHAINING
// .THEN()
// .CATCH()
// .FINALLY()



// ASYNCHRONOUS FUNCTIONS

async function myAkiraChicDream(){
    // await myPromise;
    try{
        await myPromise;
    }
    catch{
        console.log('I will get a job one day');
    }
}
myAkiraChicDream();

// setTimeout(intro, 2000);
