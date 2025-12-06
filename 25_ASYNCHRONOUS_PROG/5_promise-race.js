// race receives only 1 promise which resolve first

// promise 1 creation
const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 complited")

    },2000)

})

// promise 2 creation
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise 2 complited")

    },1000)
})

// call promise
Promise.race([promise1, promise2]).then((res)=>{
    console.log(res)

})

