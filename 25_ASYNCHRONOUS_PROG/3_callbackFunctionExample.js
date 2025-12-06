// async behavior without by callback function
/*
const taskOne = ()=>{
    console.log('Task 1')
}

const taskTwo = ()=>{
    console.log('Task 2')
}

const taskThree = ()=>{
    // console.log('Task 3')
    setTimeout(()=>{
        console.log("Task 3 loading")

    },2000)
}

const taskFour = ()=>{
    console.log('Task 4')
}

const taskFive = ()=>{
    console.log('Task 5')
}

// function calling
taskOne()
taskTwo()
taskThree()
taskFour()
taskFive()
*/


// using callback we can make our code non blocking
const taskOne = (callback)=>{
    console.log('Task 1')
    callback()
}

const taskTwo = (callback)=>{
    console.log('Task 2')
    callback()
}

const taskThree = (callback)=>{
    // console.log('Task 3')
    setTimeout(()=>{
        console.log("Task 3 loading")
        callback()

    },2000)
}

const taskFour = (callback)=>{
    console.log('Task 4')
    callback()
}

const taskFive = ()=>{
    console.log('Task 5')
}

// calling...
// taskOne(function f1(){
//     taskTwo(function f2(){
//         taskThree(function f3(){
//             taskFour(function f4(){
//                 taskFive()
//             })
//         })
//     })
// })

taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour(()=>{
                taskFive()
            })
        })
    })
})