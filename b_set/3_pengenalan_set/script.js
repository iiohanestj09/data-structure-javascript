/* Set adalah struktur data bawaan (built-in) JS yg menyimpan nilai unik
-> Cocok utk filter duplikat, cek keanggotaan dan operasi himpunan  */

// 1. Cara membuat Set
const angka = new Set([1, "ayam", 2, true, 3, null, 2, 1]);
console.log(angka);

// 2. Method Penting
  // A. .add(val)  -> Menambah elemen
  angka.add(undefined);
  angka.add(1);
  console.log(angka);

  // B. .delete(val)  -> Menghapus elemen
  angka.delete(3);
  console.log(angka);

  // C. .has(val)  -> Mengecel apakah nilai ada
  console.log(angka.has(2));

  // D. .size  -> Jumlah elemen dalam Set
  console.log(angka.size);

  // E. .clear()  -> Menghapus semua isi
  angka.clear();
  console.log(angka);