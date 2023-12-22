/*

  * Berisikan latihan javascript yang telah dipelajai :
    1. Membuat fetch data json dengan menggunakan fetch dan catch, lalu di render menggunakan function expresion
    2. Membat permainan sederharrna suit jawa
    3. Menebak angka 1 - 10 dan memberi 5 kesempatan
    4. Membuat daftar add and remove transpotasi
    5. membuat login page dengan password and username

*/

// 1. Fetch data

// 2. Suit Jawa
function suitPlay() {
  let repeat = true;
  while (repeat) {
    for (let chance = 5; chance > 0; chance--) {
      const user = prompt(
        "pilih antara batu, gunting, kertas dan kamu memiliki " +
          chance +
          " kesempatan"
      );
      let npc = Math.random() * 1;
      let chanceResult = chance - 1;
      // random npc
      if (npc < 0.34) {
        npc = "batu";
      } else if (npc >= 0.34 && npc < 0.64) {
        npc = "gunting";
      } else {
        npc = "kertas";
      }
      let result = "";

      if (user == npc) {
        result = alert("hasilnya seri kesempatan kamu tersisa " + chanceResult);
        if (chanceResult == 0) {
          result = alert("Kesempatan kamu habis, dan kamu seri!");
          break;
        }
      } else if (user == "gunting") {
        if (npc == "batu") {
          result = alert(
            "kamu kalah npc memilih " +
              npc +
              "kamu memiliki " +
              chanceResult +
              " kesempatan"
          );
          if (chanceResult == 0) {
            result = alert("Kesempatan kamu habis, dan kamu kalah!");
            break;
          }
        } else {
          result = alert("kamu menang npc memilih " + npc);
          break;
        }
      } else if (user == "batu") {
        if (npc == "kertas") {
          result = alert(
            "kamu kalah npc memilih " +
              npc +
              " kesempatan kamu tersisa " +
              chanceResult
          );
          if (chanceResult == 0) {
            result = alert("Kesempatan kamu habis, dan kamu kalah!");
            break;
          }
        } else {
          result = alert("kamu menang npc memilih " + npc);
          break;
        }
      } else if (user == "kertas") {
        if (npc == "gunting") {
          result = alert(
            "kamu kalah npc memilih" +
              npc +
              " kesempatan kamu tersisa " +
              chanceResult
          );
          if (chanceResult == 0) {
            result = alert("Kesempatan kamu habis, dan kamu kalah!");
            break;
          }
        } else {
          result = alert("kamu menang npc memilih " + npc);
          break;
        }
      } else {
        if (chanceResult == 0) {
          result = alert("Kesempatan kamu habis, dan kamu kalah!");
          break;
        }
        result = alert("kamu mengetik tidak benar");
      }
    }
    repeat = confirm("mau lagi?");
  }
  alert("terima kasih telah bermain");
}

// 3. Menebak angka

// 4. Membuat daftar add and remove transportasi

// 5. Login page
