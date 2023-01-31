"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Sauce(sauce) {
    return function (constructor) {
        constructor.prototype[`sauce`] = `${sauce.toLowerCase()}`;
        console.log(`Property Applied`);
        console.log(constructor.prototype.sauce);
    };
}
let Pizza = class Pizza {
    constructor() { }
};
Pizza = __decorate([
    Sauce("pesto")
], Pizza);
const myPizza = new Pizza();
const result = Object.prototype.hasOwnProperty("sauce");
console.log(result);
//# sourceMappingURL=index.js.map