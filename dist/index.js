"use strict";
class Person {
    constructor(speciesName, name, _gender) {
        this.speciesName = speciesName;
        this.name = name;
        this._gender = _gender;
    }
    canEat() {
        console.log(`canEat`);
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
}
class Student extends Person {
    constructor(speciesName, name, gender, studentId) {
        super(speciesName, name, gender);
        this.studentId = studentId;
    }
    attendSchool() {
        console.log(`attends school`);
    }
}
const myself = new Student(`HomoSapian`, `Avi`, `Tranny`, `12121`);
myself.gender = "Male";
console.log(myself.gender);
myself.canEat();
//# sourceMappingURL=index.js.map