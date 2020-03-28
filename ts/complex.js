var Complex = /** @class */ (function () {
    function Complex(r, i) {
        this.real = r;
        this.imaginary = i;
    }
    Complex.prototype.add = function (imNum1) {
        return new Complex(imNum1.real + this.real, imNum1.imaginary + this.imaginary);
    };
    Complex.prototype.subtract = function (imNum1) {
        return new Complex(this.real - imNum1.real, this.imaginary - imNum1.imaginary);
    };
    Complex.prototype.mod = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.toString = function () {
        return this.real + " + " + this.imaginary + "i";
    };
    return Complex;
}());
var numer1 = new Complex(1, 2);
var numer2 = new Complex(5, 1);
var numer3 = numer1.add(numer2);
console.log("Dodawanie " + numer3.toString());
var numer4 = numer3.subtract(numer1);
console.log("Odejmowanie: " + numer4.toString());
var modulo = numer4.mod();
console.log("modul: " + modulo);
