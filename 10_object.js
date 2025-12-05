// object
let student1={
    name:"nadim",
    dept:"cse",
    uni:"aiub",
    cgpa:3.91
}

// a db can have multiple student. for each student we do not want to declare separeate object
// we can use constructor 

function Student(name, dept, uni, cgpa){
    this.name = name;
    this.dept = dept;
    this.uni = uni;
    this.cgpa = cgpa;

    // function inside constructor
    this.display=function(){
        console.log(this.name)
        console.log(this.dept)
        console.log(this.uni)
    }

}
let stu1 = new Student('a', 'eee','NSU', 3.88)
let stu2 = new Student('b', 'llb','IUB',3.75)