// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
console.clear();

// event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()

// const makeRequest=(method, url, data)=>{
//     const xhr = new XMLHttpRequest()
//     xhr.open(method, url)

//     xhr.setRequestHeader('Content-Type','application/json')

//     // process data
//     xhr.onload =()=>{
//         let data = xhr.response
//         console.log(xhr.status)
//         console.log(xhr.statusText)
//         console.log(JSON.parse(data))
        

//     }
//     xhr.onerror=()=>{
//         console.log('ERROR!!!')
//     }
//     xhr.send(JSON.stringify(data))
// }

// GET request
// const getData = ()=>{
//     makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
// }
// getData()

// POST request
const sendData = ()=>{
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
}
// sendData()

// PUT request
const updateData = ()=>{
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1',{
        id:1,
        title: 'javaaaaaaaaaaaaaaaaaaa',
        body: 'bar',
        userId: 1,
    })
}
// updateData()

// PATCH request
const partiallyUpdateData = ()=>{
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1',{
        title: 'partially update data',
        body: 'bar',
        
    })
}
// partiallyUpdateData()

// DELETE request
const deleteData = ()=>{
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1')
}
// deleteData()


// ?now using promise..............................
const makeRequest=(method, url, data)=>{
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)

        xhr.setRequestHeader('Content-Type','application/json')

        // process data
        xhr.onload =()=>{
        let data = xhr.response
        console.log(xhr.status)
        console.log(xhr.statusText)
        console.log(JSON.parse(data))
        }
        xhr.onerror=()=>{
        console.log('ERROR!!!')
        }
        xhr.send(JSON.stringify(data))
    })
}

// GET request
const getData = ()=>{
    makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
        console.log(res)
    })
}
getData()

