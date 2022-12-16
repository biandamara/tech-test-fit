// soal nomor 1

// hitunglah jumlah pasang kaos kaki yang dapat dijual oleh sales

// a. input: [10, 20, 20, 10, 10, 30, 50, 10, 20]
// output yang diharapkan: 3

// b. input: [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]
// output yang diharapkan: 6

// c. input: [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
// output yang diharapkan: 4

const pairSocks = (arr) => {
  // deklarasi variabel untuk mencatat nilai pasang kaos kaki
  let counterPairSocks = 0;

  // looping array pertama untuk mencari nilai index pertama
  for (let a = 0; a < arr.length; a++) {
    // looping array kedua kali untuk mencari nilai index sebagai pasangan
    for (let b = 0; b < arr.length; b++) {
      // mendapatkan nilai index array kedua dari looping array kedua kali
      // syarat arr[a] != "x" diberikan sebagai kaos kaki yang terlah berpasangan tidak dihitung kambali
      // syarat a != b diberikan agar nilai index array yang sama tidak dianggan sebagai pasang kaos kaki
      if (arr[a] == arr[b] && arr[a] != "x" && a != b) {
        // index yang ditumukan berpasangan akan diganti dengan nilainya menjadi "x"
        arr[a] = "x";
        arr[b] = "x";

        // variabel pencatanan nilai ditambah 1 apabila pasangan koas kaki telah ditemukan 
        counterPairSocks++;

        // mengakhiri looping array apabila nilai index sudah sama dengan looping array pertama dengan looping array kedua kali
        b = arr.length;
      }
    }
  }

  return counterPairSocks;
};

// pasang kaos kaki soal a
const socksA = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(pairSocks(socksA));

// pasang kaos kaki soal b
const socksB = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
console.log(pairSocks(socksB));

// pasang kaos kaki soal c
const socksC = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
console.log(pairSocks(socksC));
