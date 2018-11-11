var Student = /** @class */ (function () {
    // public 等同于创建了同名的成员变量
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user2 = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user2);
