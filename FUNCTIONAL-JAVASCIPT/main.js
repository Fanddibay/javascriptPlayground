// pop up
const popup = document.getElementById("popup");

const body = document.body;
function openPopup() {
  popup.classList.add("openPopup");
  body.style.backgroundColor = "red";
}

function closePopup() {
  popup.classList.remove("openPopup");
  body.style.backgroundColor = "white";
}

function playGames() {
  let repeat = true;

  while (repeat) {
    // membuat variabel untuk mendapatkan nilai acak dari 1 - 10
    let comp = Math.ceil(Math.random() * 10);

    // membuat looping kesempatan yang diberikan
    for (let chance = 3; chance > 0; chance--) {
      // membuat prompt untuk user memasukan nilai
      let player = prompt(
        "Silahkan masukan nilai dari 1 - 10 dan kamu memiliki " +
          chance +
          " Kesempatan"
      );
      // membuat variabel yang berguna untuk ketika user telah menggunakan kesempatannya otomatis kesempatan dikurangi 1
      let chanceResult = chance - 1;
      // membuat variabel untuk menaru hasil
      let result = "";
      // membuat pengkodisian permainan\
      if (player == comp) {
        result = alert(
          "Jawaban kamu benar, hasil dari computer adalah " + comp
        );
        break;
      } else if (player > comp) {
        if (chanceResult == 0) {
          alert("Kesempatan kamu habis, jawabannya adalah " + comp);
          break;
        }
        result = alert(
          "Jawaban kamu terlalu tinggi, ayo coba lagi, kesempatanmu tersisa " +
            chanceResult +
            " Kesempatan"
        );
      } else if (player < comp) {
        if (chanceResult == 0) {
          alert("Kesempatan kamu habis, jawabannya adalah " + comp);
          break;
        }
        result = alert(
          "Jawaban kamu terlalu rendah, ayo coba lagi, kesempatanmu tersisa " +
            chanceResult +
            " Kesempatan"
        );
      } else {
        if (chanceResult == 0) {
          alert("Kesempatan kamu habis, jawabannya adalah " + comp);
          break;
        }
        result = alert(
          "Inputan yang kamu masukan salah, silahakan masukan inputan dengan benar dan kesempatanmu tersisa " +
            chanceResult
        );
      }
    }

    repeat = confirm("Mau bermain lagi?");
  }
  alert("Terima kasih telah bermain");
}

// melakukan permainan batu gunting kertas
// memiliki 5 kesempatan
// jika kesempatan habis maka melakukan perloopingan dengan confirm
// lakukan semua di dalam function

function suitJapan() {
  let repeat = true;

  while (repeat) {
    for (let chance = 5; chance > 0; chance--) {
      let npc = Math.random() * 1;
      let user = prompt(
        "Pilih antara. Batu, Gunting, Kertas, dan kamu memiliki " +
          chance +
          " kesempatan"
      );
      if (npc < 0.34) {
        npc = "Batu";
      } else if (npc >= 0.34 && npc < 0.67) {
        npc = "Gunting";
      } else {
        npc = "Kertas";
      }

      let chanceResult = chance - 1;
      let result = "";

      if (user == npc) {
        result = alert(
          "Seri!, kesempatan kamu tersisa " + chanceResult + " Kesempatan"
        );
      } else if (user == "Gunting") {
        if (npc == "Kertas") {
          result = alert("Kamu Menang, musuh memilih " + npc);
          break;
        } else {
          if (chanceResult == 0) {
            alert("kesempatan kamu habis! dan komputer memilih " + npc);
            break;
          }
          result = alert(
            "Kamu kalah kesempatan kamu tersisa " + chanceResult + " Kesempatan"
          );
        }
      } else if (user == "Kertas") {
        if (npc == "Batu") {
          result = alert("Kamu menang, musuh memilih " + npc);
          break;
        } else {
          if (chanceResult == 0) {
            alert("kesempatan kamu habis! dan komputer memilih " + npc);
            break;
          }
          result = alert(
            "Kamu kalah kesempatan kamu tersisa " + chanceResult + " Kesempatan"
          );
        }
      } else if (user == "Batu") {
        if (npc == "Gunting") {
          result = alert("Kamu menang, musuh memilih " + npc);
          break;
        } else {
          if (chanceResult == 0) {
            alert("kesempatan kamu habis! dan komputer memilih " + npc);
            break;
          }
          result = alert(
            "Kamu kalah kesempatan kamu tersisa " + chanceResult + " Kesempatan"
          );
        }
      } else {
        if (chanceResult == 0) {
          alert(
            "inputan kamu salah!, Kesempatan kamu habis dan npc memilih " + npc
          );
          break;
        }
        result = alert(
          "Kamu salah memasukan input, silahkan masukan dengan benar dan kesempatan kamu tersisa " +
            chanceResult +
            " Kesempatan"
        );
      }
    }

    repeat = confirm("Mau bermain lagi?");
  }
  alert("terima kasih telah bermain");
}

/*
  ! pembelajaran mulai dari sini!
*/

// function ada dua yaitu built in function yang dibuat dan sudah ada
// contoh function deklarasi
// keyword nama function   parameter/arguments
function jumlahDuaBilangan(a, b) {
  var total;
  total = a + b;

  return total;
}

// contoh function expression
var jumlahData = function jumlahDuaBilangan(a, b) {
  var total;
  total = a + b;

  return total;
};

// sebelum di refactoring
function volumeKubus(x, y) {
  let a;
  let b;
  let total;

  a = x * x * x;
  b = y * y * y;

  return (total = a + b);
}

console.log(volumeKubus(5, 3));
console.log(volumeKubus(2, 3));

// function ada 3 nilai, pertama ada body function tersebut yang diakhiri oleh return, kedua ada
// parameter yang dimasukan dalam kurung berisikan data yang ingin digunakan
// yang ketiga adalah argument yang berissikan nilai dari funtion tersebut
// contoh function biasa
function kali(a, b) {
  let hasil = a * b;

  return hasil;
}

const hasilPerkalian = kali(2, 4);

console.log(hasilPerkalian);

// contoh function arguments

function tambah() {
  let hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

const hasil = tambah(3, 5, 1, 2, 3, 5);
console.log(hasil);

function even() {
  // membuat element untuk digunakan
  let element = 0;
  // melakukan looping nilai
  for (let i = 0; i < arguments.length; i++) {
    // memasukan looping nilai kedalam element yang akan di panggil
    element -= arguments[i];
  }
  // memanggil element yang sudah di lakukan perloopingan
  return element;
}

const result = even(10, 1, 4, 2);
console.log(result);
// refactoring adalah sebuah proses yang merubah kode menjadi lebih baik tanpa merrubah functionalitasnya.
/*
  * refactoring berfungsi untuk pertama 
    1. Readability (Mudah dibaca bagi orang lain)
    2. DRY (Dont repeat yourself)
    3. Testability;
    4. Perfomance
    5. Maintanability (Dapat mudah dikelola dan dikembangkan)
*/

// contoh pengunaan refactoing dalam kode yang tadi kita buat
function volumeKubus(x, y) {
  return x * x + y * y;
}

console.log(volumeKubus(5, 3));

/*

  * Variable scope pada function
  variabel function scope adalah sebuah variabel yang bisa digunakan hanya dalam 1 scope atau kurung kurawal 1
  ! kalau di function itu bisa mengaskes variabel luar, namun variabel luar tidak bisa mengakses variabel yang ada di dalam function karena itu disebut variabel scope
  var a = 1; ini adalh variabel global
  function test(a) disamping adalah variabel local{
    console.log(a) ini juga local;
  }

  test(a); dan dua ini adalah variabel global yang memanggil variabel global tersebut
  console.log(a)
*/

/*

  * REKRUSIF
    adalah sebuah fungsi yang memanggil dirinya sendiri
      ? input > Function > Ouutput
      ? Input > Function (ada baris kode yang memanggil dirinya sendiri dan seterusnya sampai pemanggilan berhenti) > Output
      ! Oleh karena itu function harus berhenti dan mendapatkan nilai oleh karena itu kondisi akhirnya disebut base case

*/

function cetakAngka(n) {
  if (n == 0) return; // ini adalah base case untuk menghentikan looping secara terus menerus / rekrusif

  console.log(n);
  cetakAngka(n - 1);
}

cetakAngka(10);

function faktorial(n) {
  if (n == 0) return 1;
  return n ** 3;
}

console.log(faktorial(5));

// dalam es6 untuk faktorial bisa menggunakan ( ** ) untuk menghasilkan faktorial

/*

  ! Function Declaration and Expression
  * Function Declaration
    Fcuntion Indentifier (Parameter/Argument option){

      Function Body

    }

    1. Lebih fleksibel (dapat ditulis dimanapun)
      - Karena ada konsep Hoisting
    2. Lebih mudah dipahami lleh pemula
    ! Bisa dipanggil dahulu baru di definisikan
* Function Expression
    Fcuntion Indentifier option(Parameter/Argument option){

      Function Body

    }

    1. Harus didefinisikan terlebih dahulu sebelum dipanggil
    2. Lebih powerfull :
      - Sebagai closure
      - Sebagai argumen untuk function lain
      - IIFE (Immediatelu Invoked Function Expression)
        ! Jadi harus di definisikan terlebuh dahlu baru dipanggil
*/

// Function Declaration
// tampilPesan("Fandi Bayu");
// function tampilPesan(name) {
//   alert("Halo" + name);
// }

// // Function Ekspession
// const tammpilPesan = function tampilPesan(name) {
//   alert("Halo" + name);
// };
// tampilPesan("Fandi Bayu");
