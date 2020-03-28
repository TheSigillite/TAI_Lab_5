class Complex{
    private real: number;
    private imaginary: number;
    constructor(r: number, i: number){
        this.real = r;
        this.imaginary = i;
    }
    add(imNum1: Complex): Complex{
        return new Complex(imNum1.real+this.real,imNum1.imaginary+this.imaginary);
    }
    subtract(imNum1: Complex): Complex{
        return new Complex(this.real-imNum1.real,this.imaginary-imNum1.imaginary);
    }
    mod(): number{
        return Math.sqrt(Math.pow(this.real,2)+Math.pow(this.imaginary,2));
    }
    toString():string{
        return this.real+" + "+this.imaginary+"i";
    }
}

let numer1:Complex = new Complex(1,2);
let numer2:Complex = new Complex(5,1);

let numer3:Complex = numer1.add(numer2);
console.log("Dodawanie "+numer3.toString());
let numer4:Complex = numer3.subtract(numer1);
console.log("Odejmowanie: "+numer4.toString());
let modulo:number = numer4.mod();
console.log("modul: "+modulo);