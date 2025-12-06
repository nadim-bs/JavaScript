// for loop
for (let x = 1; x<=10; x++){
    // console.log(x);
    console.log("javaScript")
    console.log 
}

// while loop
let i = 0;
while(i<10){
    console.log(i)
    i++;
}

// do while
let a =0;
do{
    console.log(a)
    a++;
}while(a<10)

// for of
const names = ['s1', 's2', 's3']
for (let name of names){
    console.log(name)
}

// for in : used for iterate the object
let students ={
    id:100,
    name:"abcf",
    cgpa:3.91
}
for(let x in students){
    console.log(`x, ${students[x]}`)
}

// for each
let numbers =[10, 20, 60, 90]
numbers.forEach(function(x){
    console.log(x)

})