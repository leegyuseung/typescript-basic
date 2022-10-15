// number or string : union
let member: number | string = 123;

let member2: (number | string)[] = [1, "2", 3];

let member3: number | string[] = ["1", "2"];

let object: { a: string | number } = { a: "123" };

// any는 아무거나 가능 > 타입스크립트 의미가없다.
let namess: any;
namess = 1;
namess = [];

// any와 같은 효과 any보다 안전
let namesss: unknown;

// namesss - 1 : 엄격한 typescript 뺄셈은 type 정해져있다.

let ages: string | number;
// ages + 1  : string type or number type에서는 +가 불가능하다 따로따로는 가능하다. 엄격!

let ages2: unknown = 1;
// ages2 - 1 : 숫자타입이 아니라 -가 불가능하다. unknown 이라 불가능!
