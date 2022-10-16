// type SquareType = { color: string; width: number };
interface SquareType {
  color: string;
  width: number;
}

let square: SquareType = { color: "red", width: 100 };

// quiz !!!
// interface의 장점 : extends로 복사가능

interface Student {
  name: string;
}
// interface Teacher {
//   name: string;
//   age: number;
// }

interface Teacher extends Student {
  age: number;
}

let student: Student = { name: "kim", score: 50 };
let teacher: Teacher = { name: "kim", age: 20, score: 100 };

// tpye alias도 가능 (intersection type)
type Animals = { name: string };
type Cats = { age: number } & Animals;

// interface는 중복선언 가능한데 type은 중복선언 불가능하다.
interface Student {
  score: number;
}
