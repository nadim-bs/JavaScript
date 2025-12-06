// default and rest operator

function display(x="This is default parameter"){
    console.log(x)

}

// rest operator
function displayRest(a, b, ...c){
    console.log(`a=${a}, b=${b}, c=${c}`)

}
displayRest(1,2,3,4,5,6)

// spread operator
function addNumber(a, b, c){
    return a+b+c;
}
let arr =[1,2,3]
console.log(addNumber(...arr))

// rest operator can only use in the last parameter but spread operator can use any position