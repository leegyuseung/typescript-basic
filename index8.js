// 함수표현식에만 type alias 사용가능.
var function1 = function (a) {
    return 10;
};
var memberInfo = {
    name: "kim",
    age: 20,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log("hi");
    },
};
// object안 함수 실행
memberInfo.plusOne(1);
memberInfo.changeName();
// 콜백함수 : 함수안에 함수 function3가 콜백함수이다.
function function2(a) {
    a();
}
function function3() { }
function2(function3);
function makeFunction(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
// makeFunction("010-1111-2222", cutZero, removeDash);
