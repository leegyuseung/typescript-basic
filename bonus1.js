var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// rest parameter 타입지정
function func() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
func(1, 5, 3, 5, 6, 6);
// spread operator
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
console.log(arr3);
// destructuring
var _a = ["안녕", 100], var1 = _a[0], var2 = _a[1];
console.log(var1);
var _b = { students: true, age2: 20 }, students = _b.students, age2 = _b.age2;
var object2 = { students: true, age2: 20 };
function func2(_a) {
    var students = _a.students, age2 = _a.age2;
    console.log(students, age2);
}
// func2(object2.students, object2.age2);
func2({ students: true, age2: 20 });
