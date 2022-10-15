// type 변수 담아쓰기  => type alias
type Animal = string | number | undefined;
let animal: Animal = "kim";

// 작명은 대문자로 시작하는게 좋다. 끝은 Type 쓰면 좋을 것 같다.
type PersonType = { name: string; age: number };
let person: PersonType = { name: "kim", age: 20 };

const bornRegion = { region: "seoul" };
bornRegion.region = "busan";

// ts에서 readonly를 이용하여 object 수정 막기
type GirlFriendType = {
  readonly name: string;
};

const girlFriend: GirlFriendType = {
  name: "Amber",
};

// girlFriend.name = "Yura" 수정하려고하면 error가 뜬다.
// 실제 변환된 js파일은 에러없음 타입스크립트 에러는 에디터 & 터미널에서만 존재함.

//  type 합치기.
type NameType = string;
type AgeType = number;
type Person2Type = NameType | AgeType;

// object type 합치기.
type PostionXType = { x: number };
type PostionYType = { y: number };

type NewType = PostionXType & PostionYType;

let positon: NewType = { x: 10, y: 20 };
