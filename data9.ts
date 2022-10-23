// export와 import 중 하나를 작성하면 자동으로 로컬 모듈이 된다.
// 로컬모듈에서 글로벌변수를 만들고 싶으면 declare global{} 을 이용한다.

let abcde = 10;
declare global {
  type Dog = string;
}

export {};
