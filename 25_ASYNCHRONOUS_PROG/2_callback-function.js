function square(x){
    console.log(x*x)
}
let a = square // in js we can store function into a variable
// a(5)

// callback function and higher order function
// using callback we can make our code non blocking

function higherOrderFunction(num, callback){
    callback(num)

}
higherOrderFunction(2,square)
