/* Map adalah struktur data yg menyimpan pasangan key-value. Mirip dengan objek {}, tapi dengan fitur tambahan:
  - Bisa pakai tipe data apapun sebagai Key (termasuk objel dan fungsi)
  - Menjaga urutan penambahan
  - Memiliki ukuran (size) dan method khusus  */

// 1. Cara membuat Map
const myMap1 = new Map();
const myMap2 = new Map([
    ['nama', 'Putra'],
    ['umur', 20],
    [123, 'apalah']
]);
console.log(myMap1);
console.log(myMap2);

const myObj = {
    'nama': 'Putra',
    'umur': 20,
}
console.log(myObj);


/* Perbedaan Map dan Object
Fitur                           Map     Object
- Key bisa tipe apapun          ✅      ❌ (hanya string/symbol)
- Urutan Terjaga                ✅      ❌ 
- Ukuran (size)                 ✅      ❌
- Iterasi langsung              ✅      ❌ (perlu Object.entries())
- Untuk struktur data           ✅      ❌ (lebih cocok utk data model)  */ 
