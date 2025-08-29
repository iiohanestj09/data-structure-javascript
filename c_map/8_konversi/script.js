// Materi ini berisi konversi Mpa, Object dan Array

// 1. Map -> Array
const myMap1 = new Map([
    ['a', 1],
    ['b', 2],
]);
const arr1 = [...myMap1];
console.log(arr1);


// 2. Array -> Map
const arr2 = [['nama', 'Putra'], ['umur', 20]];
const myMap2 = new Map(arr2);
console.log(myMap2);
// Dengan syarat array harus berisi pasangan [key, value]


// 3. Map -> Object
const obj1 = Object.fromEntries(myMap1);
console.log(obj1);
// Dengan syarat key harus bisa dikonversi ke string
// Kalau key berupa objek/fungsi, akan dibuah jadi [object object]


// 4. Object -> Map
const obj2 = { nama: 'Putra', umur: 20 };
const myMap3 = new Map(Object.entries(obj2));
console.log(myMap3);