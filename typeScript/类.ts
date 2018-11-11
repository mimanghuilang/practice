class Student {
    fullName: string;

    // public 等同于创建了同名的成员变量
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string,
    lastName: string,
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user2);