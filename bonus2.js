// && 를 이용한 narrowing
function abc(a) {
    if (a && typeof a === "string") {
        // a가 undefined이면 실행x
        // a가 string이면 실행
    }
}
function abcd(animal) {
    if ("swim" in animal) {
        animal.swim;
    }
}
// instanceof 연산자로 narrowing
var date = new Date();
if (date instanceof Date) {
}
// wheel이 배타적
function carbike(x) {
    if (x.wheel === "4개") {
        console.log("x는 Car타입이에요");
    }
}
