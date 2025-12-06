// arrow function vs traditional function

// demo 1: must use parenthesis for no parameters, but for one parameter its optional
function display1(){
    console.log("display 1")
}

const display2 = ()=>{
    console.log("display 2")
}
// function calling
display1()
display2()

// demo 2: no need to use curly braces if returning or dealing with single statement
function display3(){console.log("display 3")}
const display4=()=>console.log("display 4")

// function calling
display3()
display4()

// demo 3: returning value in arrow function - no need to use curly braces and return keyword if returning or dealing with single statement
function display5(){ 
    return "I am display 5";
}
const display6 = () => "I am display 6";

console.log(display5())
console.log(display6())

// parameters in arrow function 
function add1(x,y){ 
    return x+y;
}

const add2 = (x,y)=>x+y


// arrow function with map and filter
let students=[
    {
        id : 10,
        name : 'abcd',
        gpa : 3.92
    },
    {
        id : 20,
        name : 'efgh',
        gpa : 3.12
    },
    {
        id : 30,
        name : 'ijkl',
        gpa : 2.92
    },
    {
        id : 40,
        name : 'Limon',
        gpa : 4.92
    },
]

// returning the student name whose gpa is greater than 3 using traditional function
function studentsName1(){
    return students.filter(function(x){
        return x.gpa>3
        
    }).map(function(){
        return y.name
    })
}
console.log(studentsName1)

// using arrow function
const studentsName2 = ()=>{
   return students.filter((x)=>x.gpa>3).map((y)=>y.name)
}
