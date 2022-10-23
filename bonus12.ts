let obj = { name: "kim", age: 20 };

// ['name','key']
Object.keys(obj);

// interface Personssss {
//   age: number;
//   name: string;
// }

interface Personssss {
  [key: string]: number;
}
// PersonKeys : 'age' | 'name'
type PersonKeys = keyof Personssss;
// index signature에다가 keyof 사용한다면
// PersonKeys : string | number
let aaaa: PersonKeys = "age";

// 전부 스트링으로 바꾸려면? 타입변환기만들기
type Carssss = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
};

type newType = TypeChanger<Carssss>;
