// array type 지정
let mongmong: (string | boolean)[] = ["dog", true];

// tuple type 지정 (자리에 따른 type 지정)
// ?는 있어도 되고 없어도 된다. >> ?는 항상 맨마지막에만 입력가능하다 >> ?는 여러개여도 되는데 뒤에서부터 달아야한다.
let mongmong2: [string, boolean?] = ["dog", true];

// rest parameter 타입지정 > array 타입지정
function mongFunc(...x: number[]) {
  console.log(x);
}
mongFunc(1, 2, 3, 4, 5, 3, 4);

// tuple type의 rest parameter
function mongFunc2(...x: [number, string]) {
  console.log(x);
}
mongFunc2(1, "2");

// spread 연산자 type 지정
let arr4 = [1, 2, 3];
let arr5: [number, number, ...number[]] = [4, 5, ...arr4];
