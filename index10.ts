class Person {
  data = 0;
  name: string; //typescript는 name을 필드에 입력해줘야 오류가발생하지않는다.
  constructor(a: string) {
    this.name = a;
  }
  funct(a: string) {
    console.log("hi!" + a);
  }
}

let person1 = new Person("kim");
let person2 = new Person("lee");

console.log(person1.data); //0
console.log(person1); // {name:'kim'}
console.log(person1.funct("bye"));
