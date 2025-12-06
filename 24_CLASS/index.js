class Student{
    constructor(id, name){
        this.id = id;
        this.name = name
    }

    set studentName(name){
        this.name = name
    }

    get studentInfo(){
        return this.name
    }
}

// object creation
s1 = new Student("nadim", "100")
console.log(s1);

s1.studentName("Nadim Hossain")