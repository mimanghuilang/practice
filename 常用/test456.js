var Animal = function (name) {
    this.name = name;
    this.sayName = function (){console.log(this.name)}
}
var cat = new Animal('dog')
console.log(cat instanceof Animal)