// type narrowing : type이 아직 하나로 확정되지 않았을 경우
function myFunction(x) {
    if (typeof x === "string") {
        return x + 1;
    }
    else {
    }
}
// if문 썻으면 끝까지 써야 안전하다. else or else if
function myFunction2(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
    // instanceof
}
// assertion 문법 x를 number로 덮어써주세요~
function myFunction3(x) {
    var array = [];
    array[0] = x; // <number> x 와 같다.
    // 1. narrowing 할 때 씁니다. union type을 하나로 확정하고 싶을 때 사용한다. 타입을 변경하려고 사용하면 안된다.
    // 2. 무슨 타입이 들어올지 100% 확신할 때 사용한다. if문 쓰는게 훨씬 좋긴하다. (버그 캐치못한다.)
}
