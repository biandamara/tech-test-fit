// soal nomor 2

// Hitunglah jumlah kata pada sebuah kalimat

// a. Input: Saat meng*ecat tembok, Agung dib_antu oleh Raihan.
// Output: 5

// b. Input: Berapa u(mur minimal[ untuk !mengurus ktp?
// Output: 3

// c. Input: Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.
// Output: 4

const countWords = (words) => {
  // memisahkan kata dalam kalimat
  const letr = words.split(" ");

  // karakter spesial dengan manggunakan regex
  const regex = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\/~]/;

  // deklarasi untuk mencatat nilai
  let counterWords = 0;

  // looping untuk buat membaca tiap kata
  letr.forEach((i) => {
    // membaca tiap kata jika tidak terdapat special character
    if (!regex.test(i)) {
      // variabel pencatatan nilai apabila tiap kata sudah sesuai
      counterWords++;
    }
  });

  console.log(counterWords);
};

// soal a
countWords("Saat meng*ecat tembok, Agung di_bantu oleh Raihan.");

// soal b
countWords("Berapa u(mur minimal[ untuk !mengurus ktp?");

// soal c
countWords("Masing-masing anak mendapat(kan uang jajan ya=ng be&rbeda.");
