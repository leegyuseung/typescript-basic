// number or string : union
var member = 123;
var member2 = [1, "2", 3];
var member3 = ["1", "2"];
var object = { a: "123" };
// any는 아무거나 가능 > 타입스크립트 의미가없다.
var namess;
namess = 1;
namess = [];
// any와 같은 효과 any보다 안전
var namesss;
// namesss - 1 : 엄격한 typescript 뺄셈은 type 정해져있다.
var ages;
// ages + 1  : string type or number type에서는 +가 불가능하다 따로따로는 가능하다. 엄격!
var ages2 = 1;
// ages2 - 1 : 숫자타입이 아니라 -가 불가능하다. unknown 이라 불가능!
