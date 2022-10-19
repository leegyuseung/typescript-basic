var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User3 = /** @class */ (function () {
    function User3() {
        this.x = 10;
    }
    return User3;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // private이면 여기안에서 x 사용불가능.
    // protected는 사용 가능
    NewUser.prototype.doThis = function () {
        this.x;
    };
    return NewUser;
}(User3));
var User4 = /** @class */ (function () {
    function User4() {
        this.y = 20;
    }
    // static붙이면 부모 class에 직접 부여
    User4.x = 10;
    return User4;
}());
var jasik = new User4();
// console.log(jasik.x); // 불가능
console.log(User4.x);
// private / protected / public + static 가능
var User5 = /** @class */ (function () {
    function User5() {
        this.intro = User5.skill + "전문가입니다";
    }
    User5.skill = "js";
    return User5;
}());
var chulsu = new User5();
