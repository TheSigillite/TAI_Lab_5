"use strict";
class Complex {
    constructor(r, i) {
        this.real = r;
        this.imaginary = i;
    }
    add(imNum1) {
        return new Complex(imNum1.real + this.real, imNum1.imaginary + this.imaginary);
    }
    subtract(imNum1) {
        return new Complex(this.real - imNum1.real, this.imaginary - imNum1.imaginary);
    }
    mod() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        return this.real + " + " + this.imaginary + "i";
    }
}
let numer1 = new Complex(1, 2);
let numer2 = new Complex(5, 1);
let numer3 = numer1.add(numer2);
console.log("Dodawanie " + numer3.toString());
let numer4 = numer3.subtract(numer1);
console.log("Odejmowanie: " + numer4.toString());
let modulo = numer4.mod();
console.log("modul: " + modulo);
