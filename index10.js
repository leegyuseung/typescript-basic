var Person = /** @class */ (function () {
    function Person(a) {
        this.data = 0;
        this.name = a;
    }
    Person.prototype.funct = function (a) {
        console.log("hi!" + a);
    };
    return Person;
}());
var person1 = new Person("kim");
var person2 = new Person("lee");
console.log(person1.data); //0
console.log(person1); // {name:'kim'}
console.log(person1.funct("bye"));
