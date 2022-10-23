// 삼항연산자 조건식 ? 참 : 거짓
3 > 1 ? console.log("ok") : console.log("no");

// extends 를 이용하여 type 검사
type Agess<T> = T extends string ? string : unknown;

let aaaaa: Agess<string>;
let bbbbb: Agess<number>;

// quiz
type FirstItem<T> = T extends any[] ? T[0] : any;

// infer : type을 뽑아주세요? -> 같은위치에 있는 것을 추출한다.

// type Personsss<T> = T extends string ? string : unknown;

// type Personsss<T> = T extends (infer R)[] ? R : unknown;
// type s = Personsss<string[]>; s:string

type Personsss<T> = T extends () => infer R ? R : unknown;
type s = Personsss<() => void>;
type b = ReturnType<() => void>;
