// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery

// fetch() has replaced XMLHttpRequest
// fetch() - global method for making HTTP Request
// 2 ways to call - then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() returns a promise
// - returned promise can only handle network error
// - does not support all the older browser

console.clear()

// get 
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((res)=>{
//     if(!res.ok){
//         const msg = `ERROR: ${res.status}`
//         throw new Error(msg)
//     }
//     return res.json()
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

// post
fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    body:JSON.stringify({
        id:1,
        title:"fetchaaaaaaa",
        body:'bodyyyyyyy',
        userId:1
    }),
    headers:{
        'Content-Type':'application/json; charset=UTF-8'
    },
})
.then((res)=>{
    if(!res.ok){
        const msg = `ERROR: ${res.status}`
        throw new Error(msg)
    }
    return res.json()
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
