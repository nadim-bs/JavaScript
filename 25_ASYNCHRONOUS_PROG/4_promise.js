// promise: pending, resolve, reject

// create promise
const promise1 = new Promise((resolve, reject)=>{
    let complitedPromise = true
    if(complitedPromise){
        resolve('promise 1 complited')
    }
    else{
        reject('promise 1 rejected')
    }

})

// create promise 2
const promise2 = new Promise((resolve, reject)=>{
        resolve("promise 2 complited")
    
})


// call promise 1
// promise1.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

//  call promise 2
// promise2.then((res)=>{
//     console.log(res)
// })

// call all promise at a time
Promise.all([promise1, promise2])
.then((res)=>{
    console.log(res)
})

// call all promise at a time and receive all promise using destructure
Promise.all([promise1, promise2])
.then(([res1,res2])=>{
    console.log(res1, res2)
})