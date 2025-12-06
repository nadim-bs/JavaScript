// sync vs async
// js is single threaded, synchronous programming language.
//  tasks will be added in call stack, when one task is done then it will moved to the next one (LIFO)

//sync js
console.log("---------- sync js ----------")
console.log("task 1")
console.log("task 2")
console.log("task 3")
console.log("task 4")
console.log("------------------------------")

// async js
// setTimeout() is an asynchronous function
// tasks will be added in call stack, when one task is done then it will moved to the next one (LIFO)
// setTimeout() will move the task into web APIs where the task will be running in background
// other task will continue in call stack
// when the call stack is completely empty then task (callback functions) from web APIs will be moved to task queue (FIFO)
// when the entire call stack is empty then from task queue task will moved to call stack and the process is done

console.log("---------- async js ----------")
console.log('task 1')
setTimeout(()=>{
    console.log('task 2')

},2000)
console.log('task 3')
console.log('task 4')

console.log("------------------------------")