// *local storage: no expiry date for data. data never gets lost even if u close the browser
// local storage store data as key value pair (in string)

// set data to the localstorage
localStorage.setItem("userName","nadim")

// get data from local storage
const userName = localStorage.getItem("userName")
console.log(userName)

// remove data from local storage
localStorage.removeItem("userName")

// ?if data is not string
// set data to the browser
const countries = ["Bnagladesh", "UAE", "Australia"]
localStorage.setItem("countries", JSON.stringify(countries)) // stringify(): convert into string

// get data
const res = JSON.parse(localStorage.getItem("countries"))
console.log(res)

// clear everything
localStorage.clear()

