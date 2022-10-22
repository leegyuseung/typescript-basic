export var nameA = "kim";
export var ageA = 20;

export type NameA = string;

namespace NameSpace {
  export type NameB = string | number;
}

let qustn: NameSpace.NameB = "kim";
