class User2 {
  // public 붙으면 모든 자식들이 이용가능 > 생략해도 강제부여
  name: string;

  // private name = 'kim' > private는 자식이 수정 불가능
  private familyName: string = "kim";

  // constructor가 존재하면 파라미터를 넣을 수 있다.
  constructor(a) {
    this.name = a + this.familyName;
  }

  nameChange() {
    this.familyName = "park";
  }
}
let user1 = new User2("minsu");
// user1.name = "hi";
user1.nameChange();

class Person2 {
  // constructor로 public 축약하기
  constructor(public name1: string) {}
}
let child = new Person2("kim");
