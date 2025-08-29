/* 1. Iterasi Set
Untuk akses elemen Set, gunakan looping utk setiap elemen  */
  // A. for of
  const items = new Set(["Apel", undefined, 3, true]);
  for (const item of items) {
    console.log(item);
  }

  // B. .forEach()
  items.forEach(item => console.log(item));

  // C. for of .values()
  for (const item of items.values()) {
    console.log(item);
  }

  // D. for of .keys()  -> di Set .values() dan .keys() SAMA
  for (const item of items.keys()) {
    console.log(item);
  }

  // E. .entries()  -> mengembalikkan [value, value] karena Set tidak punya key
  for (const [key, value] of items.entries()) {
    console.log(key + "-" + value);
  }


// 2. Konversi Array <-> Set
  // A. Array -> Set  (Harus salin)
  const data = ["ayam", 1, 2, 3, "ayam", 2];
  const unik = new Set(data);
  console.log(unik);

  // B. Set -> Array  (Pakai Array.from())
  const setBuah = new Set(["Apel", "Mangga"]);
  const arrBuah = Array.from(setBuah);

  // C. Array -> Set -> Array  (Biasanya utk hapus duplikat)
  const arrContoh = [6, 2, 1, 4, 3, 2, 5, 4, 6, 3];
  const arrHasil = [...new Set(arrContoh)];
  console.log(arrHasil);