/* class adalah cetakan (blueprint) untuk membuat Object.
Dia mendefinisikan property (data/atribut) dan method (fungsi/operasi) yg akan dimiliki oleh Object hasil cetakan tersebut.
object hasil class disebut INSTANCE  */

/* 1. Membuat class
- class = blueprint (cetakan) utk bikin object
- constructor() = fungsi khusus yg dipanggil otomatis saat object baru dibuat dengan new
- this = mengacu ke object yg sedang dibuat
- Di contoh: p1 INSTANCE (object hasil dari class). Dan p1 bertipe data Person (nama classnya)  */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let p1 = new Person("Putra", 20);
console.log(p1);
console.log(p1.name);


/* 2. Property & Method
- Property = data/atribut yg dimiliki object (this.name)
- Method = fungsi yg ada di dalam class (speak)
- Mirip struct di C + function, tapi lebih terorganisir
- Untuk struktur data: property = data yg disimpan, method = operasi  */
class Animal {
    constructor(name) {
        this.name = name;    // property
    }

    speak() {    // method
        console.log(this.name + " make a sound");
    }
}
let dog = new Animal("Dog");
dog.speak();    // Dog make a sound


/* 3. Default Value Property
- Bisa langsung memberi nilai awal ke property tanpa constructor
- Jadi setiap object baru otomatis mulai dengan nilai itu  */
class Counter {
    count = 0;      // default value property
} 
let c = new Counter();
console.log(c.count);

/* 4. Private Property
- Pakai # untuk bikin property jadi private
- Private property tidak bisa diakses dari luar class
- Ini berguna kalau kita ingin menyembunyikan detail internal  */
class Example {
    #secret = 42;    // private property
    #ipk = 3.81;

    showSecret() {
        return this.#secret + " " + this.#ipk;
    }
}
let e = new Example();
console.log(e.showSecret());
// console.log(e.#secret);      Error


/* 5. Static Method
- static = method yg menempel ke class, bukan ke Object
- Bisa dipanggil tanpa bikin object -> (MathUtil.square(5))
- Biasanya dipakai utk Helper Function (misalnya perhitungan matematika)
- Note: Static method tidak bisa diakses dari instance  */ 
class MathUtil {
    static square(x) {
        return x * x;
    }

    static add(a, b) {
        return a + b;
    }
}
console.log(MathUtil.square(5));
console.log(MathUtil.add(1, 3));
let m = new MathUtil();
// console.log(m.square(5));    Error: m.square is not a function