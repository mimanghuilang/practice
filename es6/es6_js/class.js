class Calc {
    contructor() {
        console.log('calc constructor');
    }

    add(a, b) {
        return a + b;
    }
}
var c = new Calc();
console.log(c.add(4, 5));
