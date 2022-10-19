class User3 {
  protected x = 10;
}

class NewUser extends User3 {
  // private이면 여기안에서 x 사용불가능.
  // protected는 사용 가능
  doThis() {
    this.x;
  }
}

class User4 {
  // static붙이면 부모 class에 직접 부여
  static x = 10;
  y = 20;
}

let jasik = new User4();
// console.log(jasik.x); // 불가능
console.log(User4.x);

// private / protected / public + static 가능

class User5 {
  static skill = "js";
  intro = User5.skill + "전문가입니다";
}
let chulsu = new User5();
