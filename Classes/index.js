const human = {
    eye : 2,
    leg : 2,
    head : 1,
    race : ["Negeroid", "Monogold"],
    desc : function(){
        console.log("Hey I am human")
    }
}

human.head = 4
console.log(human.desc());

class Person{
    static minimum_wage = 1000
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.language = "Eng"
    }

    status(){
        return `I am ${this.name} at ${this.age}, 
        here is my email ${this.email}, ${Person.minimum_wage}`
    }

    static greet(){
        return "Good Morning"
    }
}

let person = new Person("Yusuf", 45, "y@.io")
let person2 = new Person("Roselyn", 12, "r@text.com")
person2.language = "Spanish"

console.log(person.status());
console.log(person2.language);

let person3 = new Person("Quadri", 55, "d@t.com")

let g = Person.greet()
console.log(g);

