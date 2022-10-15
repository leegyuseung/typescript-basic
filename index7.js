// literal types : const 변수의 업그레이드버전이다.
var nameIs;
nameIs = 123;
// 변수에 뭐가 들어올지 더 엄격하게 관리가능, 자동완성
var me;
me = "nohair";
function myFunction2(a) {
    return 1;
}
myFunction2("hello");
// ex
function rock(a) {
    return ["rkdnl", "qh"];
}
// literal type 문제점
var files = {
    name: "kim",
};
files.name;
function myFunction3(a) { }
myFunction3("kim");
// myFunction3(files.name) : kim이라는 type만 들어올 수 있는데 files.name은 string이다. 그래서 오류가 발생한다.
// 해결 방법
// 자료 타입을 정해준다
// as를 이용해서 바꿔준다
// as const를 사용한다.
var files2 = {
    name: "kim",
};
files.name;
function myFunction4(a) { }
myFunction3(files2.name);
// as const : (1) object value 값을 그대로 타입으로 지정해줌 (2) object속성들에 모두 readonly 붙여줌
