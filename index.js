// tsc -w 하면 ts를 js로 바꿔준다.
var names1 = "kim";
var names2 = ["kim", "park"];
var names3 = { name: "kim" };
var names4 = 123;
var names5 = 123;
function a(x) {
    return x * 2;
}
var john = [123, true];
var john2 = { name: "kim" };
var john3 = { name: "kim" };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
