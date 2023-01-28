/*
const School: {
  name: string;
  readonly foundingYear: number;
  readonly totalStudents: number;
  studentsPerHouse: (totalStudents: number) => number;
} = {
  name: "SSS",
  foundingYear: 1990,
  totalStudents: 600,
  studentsPerHouse: function (houses) {
    return this.totalStudents / houses;
  },
};

// Instead of Declaring three constants

const enum PersonTraits {
  Name = "Avi",
  Age = 10,
  Gender = "Tranny",
}

const theName: PersonTraits = PersonTraits.Name; 

*/

/* TOPIC: Type Aliases: 

const Person: {
  name: string;
  age: number;
  sex: string;
} = {
  name: `Avi`,
  age: 15,
  sex: "M",
};

*/

type Employee = {
  readonly id: number;
  name: string;
  tenure: number;
  canRetire: (tenure?: number) => boolean;
};

const firstEmployee: Employee = {
  id: 1212121,
  name: "Uncooked Sausage",
  tenure: 25,
  canRetire: function (tenure?: number) {
    tenure = tenure || this.tenure;
    return tenure > 5;
  },
};

const secondEmployee: Employee = {
  id: 121212121,
  name: "Skinny Twerp",
  tenure: 15,
  canRetire: function (tenure?: number) {
    tenure = tenure || this.tenure; // if falsy then this.tenure
    return tenure > 10;
  },
};

// console.log(firstEmployee.name);
// console.log(secondEmployee.name);

function kgToLbs(weight: number | string): number {
  // Narrowing

  if (typeof weight === "number") return Math.trunc(weight * 2.2);

  return parseInt(weight) * 2.2; // here data type is string
}

console.log(kgToLbs(100));
console.log(kgToLbs("10"));
