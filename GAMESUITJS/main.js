function playGame() {
  var request = true;

  while (request) {
    // masukan pilihan pemain
    let player = prompt("silahkan pilih :  Semut, Gajah, Manusia");

    // masukan math random untuk komputer
    let computer = Math.random();

    // bikin pengkondisian komputer
    if (computer < 0.34) {
      computer = "Gajah";
    } else if (computer >= 0.34 && computer < 0.67) {
      computer = "Semut";
    } else {
      computer = "Manusia";
    }

    // menentukan rules
    let result = "";
    if (player == computer) {
      result = alert("Seri");
    } else if (player == "Manusia") {
      if (computer == "Semut") {
        result = alert("Menang");
      } else {
        result = alert("Kalah");
      }
    } else if (player == "Gajah") {
      if (computer == "Manusia") {
        result = alert("Menang");
      } else {
        result = alert("Kalah");
      }
    } else if (player == "Semut") {
      if (computer == "Gajah") {
        result = alert("Menang");
      } else {
        result = alert("Kalah");
      }
    } else {
      result = "Kamu memasukan input yang tidak sesuai";
    }

    // // tampilkan hasil
    // const resultGame =
    //   "Kamu memilih " +
    //   " " +
    //   player +
    //   " dan computer memilih" +
    //   " " +
    //   computer +
    //   " Hasilnya adalah kamu " +
    //   " " +
    //   result;

    // alert(resultGame);
    // const content = document.getElementById("root");
    // content.innerHTML = resultGame;

    request = confirm("ingin mencoba lagi?");
  }
  alert("terima kasih sudah bermain");
}

let arrayku = [1, 2, 3, 4];
console.log(arrayku);

// menemukan angka dari 1 - 10 yang di input oleh komputer

// membuat function untuk menajalnkan scriptnya

function playerGame2() {
  let repeat = true;

  while (repeat) {
    // membuat angka by sistem
    let comp = Math.ceil(Math.random() * 10);

    let result = "";

    for (let chance = 3; chance > 0; chance--) {
      let player = prompt(
        "masukan nilai dari 1 - 10 dan kamu memiliki " +
          chance +
          " Kesempatan lagi"
      );
      let youChance = chance - 1;

      if (player == comp) {
        result = alert("Jawaban kamu benar! karna nilainya adalah " + comp);
      } else if (player < comp) {
        if (youChance == 0) {
          alert("Kesempatan kamu habis, jawabannya adalah " + comp);
          break;
        }

        result = alert(
          "Jawaban kamu terlalu rendah ayo kerjain lagi karena kesempatanmu tersisa " +
            youChance +
            " Kesempatan"
        );
      } else if (player > comp) {
        if (youChance == 0) {
          alert("Kesempatan kamu habis, jawabannya adalah " + comp);
          break;
        }
        result = alert(
          "Jawaban kamu terlalu tinggi ayo kerjain lagi karena kesempatanmu tersisa " +
            youChance +
            " Kesempatan"
        );
      } else {
        if (youChance == 0) {
          alert("Kesempatan kamu habis, jawabannya adalah " + comp);
          break;
        }
        result = alert(
          "kamu memasukan inputan yang salah, kesempatanmu tersisa  " +
            youChance +
            " Kesempatan"
        );
      }
    }
    repeat = confirm("main lagi?");
  }
  alert("terima kasih telah bermain");
}

//   for (var kesempatan = 3; kesempatan > 0; kesempatan--) {
//     let player = prompt(
//       "pilih 1 sampai 10. ada " + kesempatan + " kali kesempatan"
//     );

//     let sisaKesempatan = kesempatan - 1;

//     if (player == comp) {
//       hasil = alert("tebakanmu benar");
//       break;
//     } else if (player > comp) {
//       if (sisaKesempatan == 0) {
//         alert("gagal. yang benar adalah " + comp);
//         break;
//       }

//       hasil = alert(
//         "tebakanmu ketinggian. masih ada " +
//           sisaKesempatan +
//           " kesempatan lagi"
//       );
//     } else if (player < comp) {
//       if (sisaKesempatan == 0) {
//         alert("gagal. yang benar adalah " + comp);
//         break;
//       }

//       hasil = alert(
//         "tebakanmu kekecilan. masih ada " +
//           sisaKesempatan +
//           " kesempatan lagi"
//       );
//     } else {
//       if (sisaKesempatan == 0) {
//         alert("gagal. yang benar adalah " + comp);
//         break;
//       }

//       hasil = alert(
//         "masukan angka. masih ada " + (kesempatan - 1) + " kesempatan lagi"
//       );
//     }
//   }

//   lagi = confirm("lagi?");
// }
