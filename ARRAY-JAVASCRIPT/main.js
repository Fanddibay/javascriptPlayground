// document.addEventListener("DOMContentLoaded", () => {
//   const content = document.getElementById("root");
//   fetch("data.json")
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((items) => {
//         const dataItems = items.products;
//         const container = document.createElement("h3");

//         content.appendChild(container);
//         content.innerHTML += dataItems.map(value).join("");
//       });
//     })
//     .catch((error) => {
//       console.error("Error fetching data", error);
//       content.innerHTML = "<h2>Error fetching data</h2>";
//     });
// });

// function value(itemsLink) {
//   return `
//     <div style="display:flex; align-items:center;">
//       <div style="margin:32px;">
//         <img src="${itemsLink.thumbnail}">
//       </div>
//       <div>
//        <h1>
//           ${itemsLink.title}
//        </h1>
//        <p>
//          Harga : ${itemsLink.price}
//        <p>
//        <p>
//          Quantity : ${itemsLink.quantity}
//        <p>
//        <p>
//         Total : ${itemsLink.total}
//        <p>
//        <p>
//         Discount : ${itemsLink.discountPercentage} %
//        <p>
//        <p>
//         Discount Price : ${itemsLink.discountedPrice} $
//        <p>
//       </div>
//     </div>

//   `;
// }

const dataTiketBus = [
  {
    id: 1,
    namaMaskapai: "ABC Bus",
    rute: "Kota A - Kota B",
    kelas: "Ekonomi",
    harga: 150000,
    kapasitas: 50,
    tersedia: 30,
    keberangkatan: "2023-01-15 08:00",
  },
  {
    id: 2,
    namaMaskapai: "XYZ Bus",
    rute: "Kota B - Kota C",
    kelas: "Bisnis",
    harga: 250000,
    kapasitas: 40,
    tersedia: 20,
    keberangkatan: "2023-01-16 10:30",
  },
  {
    id: 3,
    namaMaskapai: "PQR Bus",
    rute: "Kota C - Kota D",
    kelas: "Eksekutif",
    harga: 400000,
    kapasitas: 30,
    tersedia: 10,
    keberangkatan: "2023-01-18 15:45",
  },
  {
    id: 1,
    namaMaskapai: "ABC Bus",
    rute: "Kota A - Kota B",
    kelas: "Ekonomi",
    harga: 150000,
    kapasitas: 50,
    tersedia: 30,
    keberangkatan: "2023-01-15 08:00",
  },
  {
    id: 2,
    namaMaskapai: "XYZ Bus",
    rute: "Kota B - Kota C",
    kelas: "Bisnis",
    harga: 250000,
    kapasitas: 40,
    tersedia: 20,
    keberangkatan: "2023-01-16 10:30",
  },
  {
    id: 3,
    namaMaskapai: "PQR Bus",
    rute: "Kota C - Kota D",
    kelas: "Eksekutif",
    harga: 400000,
    kapasitas: 30,
    tersedia: 10,
    keberangkatan: "2023-01-18 15:45",
  },
  {
    id: 9,
    namaMaskapai: "EFG Bus",
    rute: "Kota I - Kota J",
    kelas: "Eksekutif",
    harga: 420000,
    kapasitas: 30,
    tersedia: 15,
    keberangkatan: "2023-03-05 17:30",
  },
  {
    id: 10,
    namaMaskapai: "NOP Bus",
    rute: "Kota J - Kota K",
    kelas: "Bisnis",
    harga: 280000,
    kapasitas: 45,
    tersedia: 25,
    keberangkatan: "2023-03-10 11:15",
  },
  {
    id: 11,
    namaMaskapai: "QRS Bus",
    rute: "Kota K - Kota L",
    kelas: "Ekonomi",
    harga: 150000,
    kapasitas: 55,
    tersedia: 35,
    keberangkatan: "2023-03-15 09:00",
  },
  {
    id: 12,
    namaMaskapai: "TUV Bus",
    rute: "Kota L - Kota M",
    kelas: "Bisnis",
    harga: 320000,
    kapasitas: 35,
    tersedia: 10,
    keberangkatan: "2023-03-20 14:45",
  },
  {
    id: 13,
    namaMaskapai: "WXYZ Bus",
    rute: "Kota M - Kota N",
    kelas: "Eksekutif",
    harga: 500000,
    kapasitas: 25,
    tersedia: 5,
    keberangkatan: "2023-03-25 19:00",
  },
  {
    id: 14,
    namaMaskapai: "LMN Bus",
    rute: "Kota N - Kota O",
    kelas: "Bisnis",
    harga: 300000,
    kapasitas: 40,
    tersedia: 20,
    keberangkatan: "2023-03-30 10:30",
  },
  // ... tambahkan data tiket bus lainnya sesuai kebutuhan
];

const contentDiv = document.getElementById("div");
let resultTicketBus = [];

for (const index of dataTiketBus) {
  const value = index;
  resultTicketBus.push({
    name: value.namaMaskapai,
    rute: value.rute,
    kelas: value.kelas,
    harga: value.harga,
    kapasitas: value.kapasitas,
    tersedia: value.tersedia,
    keberangkatan: value.keberangkatan,
  });
}

const sortTicket = resultTicketBus.sort((x, y) => x.harga - y.harga);
const mapTicket = sortTicket.map((value) => {
  return `
    <div>
      <ul style="list-style:none;">
        <li>
         ${value.harga}, ${value.name}, ${value.kelas}, ${value.rute}, ${value.kapasitas}, ${value.tersedia}, ${value.keberangkatan}
        </li>
      </ul>
    </div>
  `;
});

contentDiv.innerHTML += mapTicket;

function valueTicket(value) {
  return `
    ${value.namaMaskapai},
    ${value.harga}
  `;
}

/*

  *Array adalah sebuah tipe data ataupun stuktur data (susunan sistematis dari objek objek serupa)
  ? array itu aadalah tipe dta yang mendeskripsikn kumpulan element (nili tau vriabel) yang tiap2 elementnya memiliki index
  ! array adalah variabel yang lebih sakti (karena bisa menampung lebih dari satu nilai)


  kenapa array??
  ? mempermudah mengelola nilai, value, data
    - Penelusuaaan dan pencarian
    - Manajemen memori
    1. Variabel jamak yang mempunyi banyak elemen daan diacu dengan nama yang sama
    2. Kumpulaan pasangan key dan nilai pasangaan antaa key dari array dan value dari isi key tersebut
    3. Key adalah index pada aray dengan tipe integer yang dimulai dari 0
    4. Array pada javascrirpt bertipe object
    5. Aray pada javascrirpt memiliki fungsi//method lenght untuk menghitung jumlah elemen di dlamannya
    6. elemen pada aray boleh memiliki tipe data yang berbeda jadi bisa integer dan string dijadikan 1 array (boleh juga dimasukan tipe function expession)
*/

let getDay = new Date();
let day = getDay.getDay();
let days = ["Minggu", "Senin", "Selasa", "Kamis", "Jumat", "Sabtu"];

const result = days[day];
// if (day == 0) {
//   result = "Minggu";
// } else if (day == 1) {
//   result = "Senin";
// } else if (day == 2) {
//   result = "Selasa";
// } else if (day == 3) {
//   result = "Rabu";
// } else if (day == 4) {
//   result = "Kamis";
// } else if (day == 5) {
//   result = "Jumat";
// } else {
//   result == "Sabtu";
// }

console.log(result);
const map = days.map((value) => {});
console.log(map);

const myFunct = function helloWorld() {
  return helloWorld;
};

var myArr = ["Teks", 2, false, myFunct, [4, 5, 6]];
console.log(myArr[4][1]);

/*

  * Memanipulasi array
    1. Menambahkan nilai array
    2. Menghapus elemen pada aray
    3. Menampilkan seluruh isi array


    * Method array
      1. Length
      2. Join
      3. Push, Pop, Shift, Unshift
      4. Slice & Splice
      5. Foreach & Method
      6. Sort
      7. Filter
      8. Find
      9. Fill
        ! Sort, Filter, Map, Find harus dibuat variabel ekspression terlebih dahulu sebelum di deklarasikan
*/

// 1. Join
var arrs = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  undefined,
];

// 2. Push
// arrs.push("September");
// arrs.pop(); // menghapus element terakhir padaa sebuah array

// 3. Unshift & Shift
// arrs.unshift("robin"); // menambahkan pada element pertama
// arrs.shift(); // menghapus element pertama

// 4. Splice
// splice(indexAWAL, mauDiHapusBerapa elementbaru1, elementbaru 2)
arrs.splice(2, 4, "Testing", "robert");
console.log(arrs.join(" "));

// 5. Slice
// slice(awal, akhir) index akhir sebagai batasan yang tidak dibawa
var arrs2 = arrs.slice(2, 4);
console.log(arrs2);

// 6. Foreach
var angka = [1, 2, 20, 40, 4, 5, 6, 7, 1];
var mahasiswa = ["dodit", "lufi", "putra", "putri"];
mahasiswa.forEach((e, i) => {
  console.log("mahasiswa " + (i + 1) + " " + e);
});

// 7. Map
// mengembalikan nilai array
const resultAngka = angka.map((e) => {
  return e * 12;
});

resultAngka.sort((x, y) => {
  return x - y;
});
console.log(resultAngka);

// 8. Filter
// Mengembalikan banyak nilai
console.log("filter angka");

const filterAngka = resultAngka.filter((x) => x > 10);

console.log(filterAngka);

// 9. Find
const findAngka = filterAngka.find((x) => {
  return x > 72;
});

console.log(findAngka);

// 10. Fill
// memodifikasi array dengan aturan array.fill(value, start, end);
var angka2 = [1, 2, 20, 40, 4, 5, 6, 7, 1];
const fillAngka = angka2.fill(9, 1, 3);
console.log(fillAngka);
