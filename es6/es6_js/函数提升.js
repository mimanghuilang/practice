function f() {
    console.log("i am outside");
}
(function () {
    if (false) {
        function f() {
            console.log(" i am inside");
        }
    }
    f();
})();

