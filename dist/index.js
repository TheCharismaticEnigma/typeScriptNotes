"use strict";
const firstEmployee = {
    id: 1212121,
    name: "Uncooked Sausage",
    tenure: 25,
    canRetire: function (tenure) {
        tenure = tenure || this.tenure;
        return tenure > 5;
    },
};
const secondEmployee = {
    id: 121212121,
    name: "Skinny Twerp",
    tenure: 15,
    canRetire: function (tenure) {
        tenure = tenure || this.tenure;
        return tenure > 10;
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return Math.trunc(weight * 2.2);
    return parseInt(weight) * 2.2;
}
console.log(kgToLbs(100));
console.log(kgToLbs("10"));
//# sourceMappingURL=index.js.map