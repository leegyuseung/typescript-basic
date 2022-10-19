var User2 = /** @class */ (function () {
    // constructor가 존재하면 파라미터를 넣을 수 있다.
    function User2(a) {
        // private name = 'kim' > private는 자식이 수정 불가능
        this.familyName = "kim";
        this.name = a + this.familyName;
    }
    User2.prototype.nameChange = function () {
        this.familyName = "park";
    };
    return User2;
}());
var user1 = new User2("minsu");
// user1.name = "hi";
user1.nameChange();
var Person2 = /** @class */ (function () {
    // constructor로 public 축약하기
    function Person2(name1) {
        this.name1 = name1;
    }
    return Person2;
}());
var child = new Person2("kim");
