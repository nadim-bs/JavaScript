const task1 = ()=>{
   return new Promise((resolve, reject)=>{
        resolve("task 1 complited")
    })
}

const task2 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("task 2 complited")

        },2000)
    })
}

const task3 = ()=>{
    return new Promise((resolve, reject)=>{
        reject("task 3 is not complited")
    })
}

const task4 = ()=>{
    return new Promise((resolve, reject)=>{
        resolve("task 4 complited")
    })
}

// call task1
task1().then((res)=>console.log(res))
.then(task2)
.then((res)=>console.log(res))
.then(task3)
.then((res)=>console.log(res))
.then(task4)
.then((res)=>console.log(res))
.catch((err)=>{
    console.log(err)
});