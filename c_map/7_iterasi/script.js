/* 1. for of
Berbeda dengan Object yg menggunakan for in, walau Map dan Object memiliki key-value  */
const myMap1 = new Map([
    ['a', 1], 
    ['b', 2],
    [3, 'c']
]);

for (const [key, value] of myMap1) {
    console.log(key + "-" + value);
}


// 2. forEach()
myMap1.forEach((value, key) => {
    console.log(key + " " + value);
});


// 3. for of .keys()
for (const key of myMap1.keys()) {
    console.log(key);
}


// 4. for of .values()
for (const value of myMap1.values()) {
    console.log(value);
}


// 5. entries()  -> sama dengan 1. for of, karena Map secara default mengiterasi entries()
for (const [key, value] of myMap1.entries()) {
    console.log(key + "-" + value);
}