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

/*
interface Species {
  name: string;
  era: string;
}

type ReadOnlySpecies = {
  readonly [Key in keyof Species]: Species[Key];
};


// const homoSapiens: ReadOnlySpecies = {
//   name: "Homo Sapien",
//   era: "Jurassic "
// }

type ReadOnly<G> = { 
  readonly [Key in keyof G]: G[Key];  // propertyName:propertyType
}

const homoSapiens: ReadOnly<Species> = {
  name: "Homo Superior",
  era: "jurrasic Era "
}
*/

/*
function Enhance(constructor: Function) {
  constructor.prototype.isModified = true;
  constructor.prototype.uniqueId = new Date();
}

@Enhance
class Person {}

const myself = new Person();

*/

/*
type FreqTable = {
  [stringKey: string]: number;
};

function tableType(table: FreqTable): string {
  return typeof table;
}

const table: FreqTable = {
  a: 1,
};

console.log(tableType(table));
*/

// Decorator for accessors (getters and setters)

/*
function Capitalize(target: any, key: string, descriptor: PropertyDescriptor) {
  const prevGetter = descriptor.get;

  descriptor.get = function () {
    // reassing new function
    const result = prevGetter?.call(this); // getters have no argument

    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Person {
  constructor(private _name: string) {}

  @Capitalize
  get name() {
    return this._name;
  }
}

const meself = new Person(`Sausage`);
console.log(meself.name);

// Property Modifier

function MaxLength(maxLength: number) {
  // modifier factory

  // For propertyModifier, pass the target and key.
  // In modifier function => create custom descriptor and attach onto the
  // property using Object.defineProperty(target,propertyName,proprtyDescriptor)

  return function (target: any, propertyKey: string) {
    let value: string;

    // applying getter and setter for property descriptor.

    const descriptor: PropertyDescriptor = {
      // attaching a setter to the property.

      get() {
        return value;
      },

      set(newPassword: string) {
        if (newPassword.length > maxLength)
          throw new Error(`AHAHAHAHA PIN-HEADED-Twerp AHAHA!`);

        value = newPassword;
      },
    };

    // attach descriptor onto the property.
    Object.defineProperty(target, propertyKey, descriptor);
  };
}

class User {
  @MaxLength(8)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

const newUser = new User("sasaa");
const descriptor = Object.getOwnPropertyDescriptor(newUser, newUser.password);

console.log(descriptor);
*/

function Sauce(sauce: string) {
  // for class one argument: constructor function
  return function (constructor: Function) {
    constructor.prototype[`sauce`] = `${sauce.toLowerCase()}`;
    console.log(`Property Applied`);
    console.log(constructor.prototype.sauce);
  };
}

@Sauce("pesto")
class Pizza {
  constructor() {}
}
