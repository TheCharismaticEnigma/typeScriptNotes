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
/*
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
  // Narrowing using type guarding

  if (typeof weight === "number") return Math.trunc(weight * 2.2);

  return parseInt(weight) * 2.2; // here data type is string
}

// console.log(kgToLbs(100));
// console.log(kgToLbs("10"));

*/

// Class in TS

/*
class Account {
  // readonly id: number;
  // private _owner: string;
  // balance: number;
  nickname?: string;

  constructor(
    public readonly id: number,
    private _owner: string,
    public balance: number
  ) {
    // this.id = id;
    // this.balance = balance;
    // this._owner = owner; // in TS, this references current class.
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("AHAAHAH Twerp!");

    this.balance += amount;
  }

  getOwner(): string {
    return this._owner;
  }
}

const myAccount = new Account(12121, "Enigma", 0);
myAccount.deposit(120);
const owner: string = myAccount.getOwner();

console.log(owner);
*/

// Interface (Homo Sapien) => Person => Teacher and Student

/*
interface Species {
  readonly speciesName: string;
  canEat(): void; // abstract method
}

// Super Class

class Person implements Species {
  constructor(
    public readonly speciesName: string,
    public name: string,
    private _gender: string
  ) {}

  canEat(): void {
    console.log(`canEat`);
  }

  get gender() {
    return this._gender;
  }

  set gender(gender: string) {
    this._gender = gender;
  }
}

// Super Class => Person

class Student extends Person {
  constructor(
    speciesName: string,
    name: string,
    gender: string,
    public studentId: string
  ) {
    super(speciesName, name, gender);
    // this.studentId = studentId
  }

  // getter,setter,canWalk() will be inherited from parent.

  attendSchool(): void {
    console.log(`attends school`);
  }
}
*/

interface Species {
  name: string;
  era: string;
}

type ReadOnlySpecies = {
  readonly [Key in keyof Species]: Species[Key];
};

const myClass: {
  standard: string;
  division: string;
  building: string;
} = {
  standard: "10",
  division: "B",
  building: "Old Building",
};
