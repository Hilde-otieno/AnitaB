class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(
            'Hello, my name is ${this.name} and I am ${this.age} years old'
        )
    }
};

const adam = new Person('Adam', 30);
console.log({adam});

// write methods outside your functions  

class Student extends Person{
    constructor(name, age, school){
        super(name,age);
        this.school = school;
    }
    profession(){
        console.log('I am a student at ${this.school}')
    }
};

const Student = new Student('Megan', 19, 'Akirachix');
console.log({student});
student.profession();
student.greet();


