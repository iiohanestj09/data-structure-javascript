// Materi Array sudah ada di 'basic-programming-javascript'

// 1. Deklarasi & Inisialisasi
const arr1 = [];
const arr2 = new Array(5);


// 2. Operasi Dasar Array
    /* A. Menambah & Menghapus 
    - .push()     -> Menambah di akhir
    - .pop()      -> Menghapus di akhir
    - .unshift()  -> Menambah di depan
    - .shitf()    -> Menghapus di depan  */
const arr3 = [1, "Ayam", 3, true, 5];
arr3.push(6);
arr3.pop();
arr3.unshift(0);
arr3.shift();
console.log(arr3);

    /* B. Mengambil & Menghapus+Menyisipkan 
    - .slice()  -> Mengambil sebagian array
    - .splice(x, y) -> Menghapus dari index 'x' ke kanan sebanyak 'y'
    - .splice(x, y, z)  -> Menghapus dari index 'x' ke kanan sebanyak 'y'. 
                           Lalu menyisipkan nilai 'z' ke index 'x'  */
const arr3Slice = arr3.slice();
console.log(arr3Slice);
arr3.splice(1, 2);        
console.log(arr3);
arr3.splice(2, 0, "x");  
console.log(arr3);


// 3. Iterasi
const arr4 = ["kambing", 6, undefined, 2.5, true, null];
for (let i = 0; i < arr4.length; i++) console.log(`${i}. ${arr4[i]}`);

for (let value of arr4) console.log(`${value}`);

arr4.forEach((value, index) => {
    console.log(`${index}. ${value}`);
});

let i = 0;
while (i < arr4.length) {
    console.log(`${i}. ${arr4[i]}`);
    i++;
};


/* 4. Search
    - in  -> Mengecek apakah sebuah index berada di array
    - .indexOf(x)  -> Mengembalikan INDEX kemunculan pertama dari value 'x' 
    - .lastIndexOf(x)  -> Mengembalikan INDEX kemunculan terakhir dari value 'x'
    - .includes(x)  -> Mengecek apakaj value 'x' berada di array (true/false)
    - .find()  -> Mengembalikkan VALUE pertama yg memenuhi kondisi
    - .findIndex()  -> Mengembalikkan INDEX pertama dari elemen yg memenuhi kondisi  */
const arr5 = ["y", 2, 3, 4, 5, "y"];
console.log(6 in arr5);
console.log(arr5.indexOf("y"));
console.log(arr5.indexOf(6));
console.log(arr5.lastIndexOf("y"));
console.log(arr5.includes(3));
console.log(arr5.find(val => 2 < val && val < 5));
console.log(arr5.findIndex(val => val % 2 === 0));


// 5. Sorting
const arr6 = ["ayam", "jerapah", "kuda", "bebek", "AYAM", "gajah"];
console.log(arr6.sort());

const arr7 = [5, 6, 2, 9, 7, 8];
console.log(arr7.sort((a, b) => a - b));
const arr8 = [9, 10, 5, 7, 2 , 4, 1, 9, 6];
console.log(arr8.sort((a, b) => b - a));


/* 6. Transformasi
    - .map()  -> Melakukan tranfsormasi pada setiap elemen dan mengembalikkan array baru
    - .filter()  -> Mengambil elemen yg memenuhi kondisi tertentu
    - .reduce()  -> Menggabungkan semua nilai menjadi satu nilai akhir (akumulasi)  */
console.log(arr6.map(n => n + "uy"));
console.log(arr7.filter(n => n % 2 === 1));
console.log(arr8.reduce((result, num) => result + num, 0));