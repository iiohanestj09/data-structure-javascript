// 1. Deklarasi & Inisialisasi
const arrX = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// 2. Operasi Dasar Array
arrX.push([10, 11, 12]);
arrX.shift();
console.log(arrX);

arrX.splice(2, 1, ["ayam", "kambing", "sapi"]);
console.log(arrX);


// 3. Iterasi
for (let i = 0; i < arrX.length; i++) {
    for (let j = 0; j < arrX[i].length; j++) {
        console.log(`[${i}][${j}]: ${arrX[i][j]}`);
    }
} 

for (let row of arrX) {
    for (let value of row) {
        console.log(value);
    }
}

arrX.forEach((row) => {
    row.forEach(val => {
        console.log(val);
    });
});

let i = 0;
while (i < arrX.length) {
    let j = 0;
    while (j < arrX[i].length) {
        console.log(`[${i}][${j}]: ${arrX[i][j]}`);
        j++;
    }
    i++;
}


// 4. Search
console.log(arrX[2][1] !== undefined);  // Pengganti 'in': apakah arrX[x][y] tidak tidak didefinisi
for (let i = 0; i < arrX.length; i++) {
    for (let j = 0; j < arrX[i].length; j++) {
        if (arrX[i][j] === 2) console.log(2);
        if (arrX[i][j] === 9) console.log(`[${i}][${j}]`);
    }
}


// 6. Transformasi
for (let row of arrX) {
    console.log(row.map(n => n + "Oy"));
}

for (let row of arrX) {
    console.log(row.filter(n => n % 2 === 0));
}

for (let row of arrX) {
    console.log(row.reduce((result, num) => result + num, 0));
}