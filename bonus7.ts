// function 함수<MyType>(x: MyType[]): Mytype {
//   return x[0];
// }

// let ab = 함수<number>([4, 2]);
// let ab2 = 함수<string>(["4", "2"]);

// console.log(ab);

function 함수2<MyType extends number>(x: MyType) {
  return x - 1;
}

let aa = 함수2<number>(100);

// custom type
interface LengthCheck {
  length: number;
}
function 함수3<MyType extends LengthCheck>(x: MyType) {
  return x.length;
}

let aaa = 함수3<string[]>(["100"]);

// 1. 함수에 타입파라미터 넣을 수 있음
// 2. extends 키워드로 넣을 수 있는 타입 제한가능
// 3. class에도 타입파라미터 넣을 수 있음.
