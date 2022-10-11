// tsc -w 하면 ts를 js로 바꿔준다.
let names1: string = "kim";
let names2: string[] = ["kim", "park"];
let names3: { name?: string } = { name: "kim" };
let names4: string | number = 123;

type Mytype = string | number;
let names5: Mytype = 123;

function a(x: number): number {
  return x * 2;
}

type Member = [number, boolean];
let john: Member = [123, true];

type Member2 = {
  name: string;
};
let john2: Member2 = { name: "kim" };

type Member3 = {
  [key: string]: string;
};

let john3: Member3 = { name: "kim" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
