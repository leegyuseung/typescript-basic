// never type
function never() {
    // return값이 없어야함
    // 함수 endpoint가 없어야함
    throw new Error();
}
function never2() {
    while (true) { }
}
// never type ex1
function never3(parameter) {
    if (typeof parameter == "string") {
        console.log(parameter);
    }
    else {
        // 뭔가 이상한 narrowing 은 never 타입 등장
        console.log(parameter);
    }
}
// never type ex2
var never4 = function () {
    throw new Error();
};
