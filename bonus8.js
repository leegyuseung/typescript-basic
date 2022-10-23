var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// array type 지정
var mongmong = ["dog", true];
// tuple type 지정 (자리에 따른 type 지정)
// ?는 있어도 되고 없어도 된다. >> ?는 항상 맨마지막에만 입력가능하다 >> ?는 여러개여도 되는데 뒤에서부터 달아야한다.
var mongmong2 = ["dog", true];
// rest parameter 타입지정 > array 타입지정
function mongFunc() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
mongFunc(1, 2, 3, 4, 5, 3, 4);
// tuple type의 rest parameter
function mongFunc2() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
mongFunc2(1, "2");
// spread 연산자 type 지정
var arr4 = [1, 2, 3];
var arr5 = __spreadArray([4, 5], arr4, true);
