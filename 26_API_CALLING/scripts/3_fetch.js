// now using async await
const makeRequest = async (url, bodyData)=>{
  const res = await fetch(url, bodyData);
  if(!res.ok){
    const msg = `Error: ${res.status}`
    throw new Error(msg)
  }
  const data = await res.json()
  return data;

}

// get data
const getData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        console.log(res)
    })
    .catch((er)=>{
        console.log(er)
    })
}
// getData()

// send data
const sendData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts",{
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
        console.log(res)
    })
    .catch((er)=>{
        console.log(er)
    })
}
sendData()