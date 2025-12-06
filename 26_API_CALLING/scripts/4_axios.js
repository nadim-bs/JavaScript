// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// axios is a js library
// it helps to make request from browser (plain js/Vue/React/Angular), node.js

// + very easy to use
// + it supports all modern browser includig IE
// + it returns promise
// + throws error brilliantly
// + No need to set header cause axios is intelligent

// axios(config)
// axios(url [, config])

// axios.get(url [, config])
// axios.post(url [, config])
// axios.put(url [, config])
// axios.patch(url [, config])
// axios.delete(url [, config])

// axios returns response object - data, status, statusText, headers, config

console.clear();

// get
// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{console.log(res.data)})
// .catch((err)=>console.log(err))

// post
// axios.post("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//         body:JSON.stringify({
//         id:1,
//         title:"fetchaaaaaaa",
//         body:'bodyyyyyyy',
//         userId:1
//         }),
//         headers:{
//         'Content-Type':'application/json; charset=UTF-8'
//         },
// })
// .then((res)=>{console.log(res.data)})
// .catch((err)=>console.log(err))


// using async await..........................
const makeRequest = async (config)=>{
    return await axios(config)
}

// get request
const getData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}
// getData()


// post request
const sendData = ()=>{
    makeRequest({
        url:'https://jsonplaceholder.typicode.com/posts',
        method:'post',
        data:JSON.stringify({
            id:1,
            title:"fetchaaaaaaa",
            body:'bodyyyyyyy',
            userId:1

        })
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}
sendData()

