// return object from function
function student1(name, age){
    return {
        name,age
    }
}

// function inside object
let msg ={
    body:function(){
        return "Hi i am function body inside object"
    }
}
console.log(msg.body())