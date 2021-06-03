var Book = function (title,time,type) {
    this.title = title
    this.time = time
    this.type = type
}
var book = Book('js权威指南','2014','js')
console.log(book)
console.log(title)
console.log(time)
console.log(type)


// 安全模式就是为了上面忘记写new
var Person = function (name,age,sex) {
    if(this instanceof Person){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }else{
        return new Person(name,age,sex)
    }
}
var xiaoming =  Person('小明',27,'男')
console.log(xiaoming)