let names: string = "kim";
let age: number = 50;
let merry: boolean = true;
// undefined, null type도 존재한다.

let members: string[] = ["kim", "park"];
let members2: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

// 타입지정을 안해도 typescript가 자동으로 정해준다.

// ex1)
let myName: string = "james";
let myAge: number = 30;
let myAddress: string = "suwon";

// ex2)
let myFavorite: { singer: string; song: string } = {
  singer: "IU",
  song: "You And I",
};

// ex3)
let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
