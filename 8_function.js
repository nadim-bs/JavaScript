// normal function
function add(num1, num2){
    let res = num1 + num2;
    return res;
}
ans = add(10, 20);
console.log(ans)

// 2. IIFESs: Imediately Invokeable function expression
// do not need to call the function, it instantly call the function when define
(function print(){
    console.log("Hi")
})()

// 3. Function expression
let func = function display(msg){
    console.log(msg)
}
// call the fuhnction
func("abcd")