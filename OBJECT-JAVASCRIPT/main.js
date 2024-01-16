/*

  * object javascript
    1. object literal
    2. function declaration
    3. contructo function (keywod new)
    4. obect.create()

    ? perbedaanm dari function declarration dan constructor adalah untuk declaration membuat variabel sendiri dan return sendiri
    ? sedangkan constructor otomatis membuat variabel dan return sendiri dan untuk memanggilnya harus menggunakan keyword new untuk memanggil object ini

    ! property adalah variabel yang di dalam object
    ! methode adalah function di dalam object
    ! scope global adalah object window
    ! this adalah mengembalika object global sama seperti window
    ! perbedaan function () dan arrow function () => {} adalah pada lexical atau yang mengikat pada this dalam suatu function, untuk function arrow sendiiri itu mengikat semua yang ada atau global sedangkan function() itu hanya mengikat fungsi yang diberi value itu saja jadi dapat berubah sesuai yang di inginkan
*/

// const identitas = {
//   name: "Fandi Bayu",
//   age: 21, // ini adalah poperti dai object array
//   job: "ui/ux engineer",
//   sapa: () => {
//     // dan ini adalah method dari object menggunakan arow function
//     return `HI NAMA SAYA ` + this.name;
//   },
// };

// console.log(identitas);

// // 1. object literal
// const mhs = {
//   name: "fandi",
//   age: 14,
//   email: "fandi@gmail.com",
//   jurusan: "sistem infomasi",
// };

// // 2. function declaration
// function objectDeclaration(nama, age, jurusan, email, status) {
//   let mhs = {};
//   mhs.name = nama;
//   mhs.age = age;
//   mhs.jurusan = jurusan;
//   mhs.email = email;
//   mhs.status = status;

//   return mhs;
// }

// const mhs3 = objectDeclaration(
//   "fandi",
//   12,
//   "sistem informasi",
//   "fandi22@gmail.com",
//   "jomblo"
// );

// console.log(mhs3);

// // 3. object constuctor
// function objectConts(name, age, jurusan, email, status) {
//   // const this = {}
//   this.name = name;
//   this.age = age;
//   this.jurusan = jurusan;
//   this.email = email;
//   this.status = status;

//   // return this;
// }

// const mhs4 = new objectConts("fandi", 12, "ips", "falkjwew@gmail", "jomblo");
// console.log(mhs4);

// // this object

// // 1. function declaration
// function halo() {
//   console.log("halo");
// }

// this.halo();

// // 2. object liteal

// // ! this mengembalikaan object yang bersangkutan
// var obj2 = { a: 10, nama: "fandi" };

// obj2.halo2 = function () {
//   console.log(this);
// };
// obj2.halo2();

// // 3. object constuctor
// function Halo() {
//   console.log(this);
//   console.log("halo");
// }

// const obj1 = new Halo();
// const obj4 = new Halo();

// this mengembalikan object yang baru di buat

// this
// this adalah konsel special yang di definisikan di setiap funtion

// * latihan object
/*

* PENGELOLAAN ANGKOT
  1. Sopir
  2. Trayek
  3. Kas
  4. Penumpang
    - Penumpang naik
    - Penumpang turun

*/

// function angkot(sopir, trayek, kas, penumpang) {
//   this.sopir = sopir;
//   this.trayek = trayek;
//   this.kas = kas;
//   this.penumpang = penumpang;

//   this.addPenumpang = function (account) {
//     if (this.penumpang.length == 0) {
//       this.penumpang.push(account);
//       return this.penumpang;
//     } else {
//       for (let i = 0; i < this.penumpang.length; i++) {
//         if (this.penumpang[i] == account) {
//           alert(account + " sudah ada data tersebut");
//           return this.penumpang;
//         } else if (i == this.penumpang.length - 1) {
//           this.penumpang.push(account);
//           return this.penumpang;
//         } else if (this.penumpang[i] == undefined) {
//           this.penumpang[i] = account;
//           return this.penumpang;
//         }
//       }
//     }
//   };

//   this.deletePenumpang = function (account, pay) {
//     if (this.penumpang.length == 0) {
//       alert("data masih kosong!");
//       return this.penumpang;
//     } else {
//       for (let i = 0; i < this.penumpang.length; i++) {
//         if (this.penumpang[i] == account) {
//           this.penumpang[i] = undefined;
//           this.kas += pay;
//         } else if (i == this.penumpang.length - 1) {
//           alert(account + " tidak ada dalam data");
//         }
//         return this.penumpang;
//       }
//     }
//   };
// }

// let angkot1 = new angkot("Fandi", ["Jakarta", "Surabaya"], 0, []);
// console.log(angkot1);

// function ticketDepature(name, price, takeoff, passenger) {
//   this.name = name;
//   this.price = price;
//   this.takeoff = takeoff;
//   this.passenger = passenger;

//   this.addPassenger = function (addData) {
//     if (this.passenger.length == 0) {
//       this.passenger.push(addData);
//       return this.passenger;
//     } else {
//       // lopping isi dalam data passenger
//       for (let i = 0; i < passenger.length; i++) {
//         // apabila sudah ada nama yang sama
//         if (this.passenger[i] == addData) {
//           alert(addData + " sudah ada dalam data");
//           return this.passenger;
//         } else if (i == this.passenger.length - 1) {
//           this.passenger.push(addData);
//           return this.passenger;
//         } else if (this.passenger[i] == undefined) {
//           this.passenger[i] = addData;
//           return this.passenger;
//         }
//       }
//     }
//   };

//   this.deletePassenger = function (addData, pay) {
//     // validasi apakah data nya kosong apa tidak
//     if (this.passenger.length == 0) {
//       alert("data masih kosong!");
//       return this.passenger;
//     } else {
//       // loping data
//       for (let i = 0; i < this.passenger.length; i++) {
//         // menghapus data
//         if (this.passenger[i] == addData) {
//           this.passenger[i] = undefined;
//           this.price += pay;
//           return this.passenger;
//         } else if (i == this.passenger.length - 1) {
//           this.passenger.push(addData);
//           return this.passenger;
//         }
//       }
//     }
//   };
// }

// let depature = new ticketDepature("Lion airlanes", 0, ["12.00", "15.00"], []);
// console.log(depature);

// // * = dipakai untuk merrubah suatu data dari kiri ke kanan, sedangkan == / === membandingkan atau expression suaatu data

// // function
// function rails(name, price, passenger) {
//   this.name = name;
//   this.price = price;
//   this.passenger = passenger;

//   this.addDataPassemger = function (addNew) {
//     if (this.passenger.length == 0) {
//       this.passenger.push(addNew);
//       return this.passenger;
//     } else {
//       for (let i = 0; i < this.passenger.length; i++) {
//         if (this.passenger[i] == addNew) {
//           alert(addNew + " sudah ada dalam data");
//           return this.passenger;
//         } else if (this.passenger.length == undefined) {
//           this.passenger[i] = addNew;
//           return this.passenger;
//         } else if (i == this.passenger.length - 1) {
//           this.passenger.push(addNew);
//           return this.passenger;
//         }
//       }
//     }
//   };
// }

// let railWay = new rails("Bengawan", 0, []);
// console.log(railWay);

// revisited object

// literal object
// tidak efektif untuk object yang banyak
let mahasiswa = {
  nama: "fandi bayu",
  semester: 12,
  jurusan: "saintek",
  alamat: "jakarta",
  ip: 4.1,
  nilai: function (nilai) {
    this.ip += nilai;
    alert(`${this.ip}`);
  },
};
// function declaration
// melakukan
const murid = function (nama, kelas, jurusan, alamat, rapot) {
  // pada function declaration kita membuat terlebih dahulu variabel penampung untuk nilai yang akan ditentukan
  let profile = {};
  profile.nama = nama;
  profile.kelas = kelas;
  profile.jurusan = jurusan;
  profile.alamt = alamat;
  profile.rapot = rapot;
  profile.nilai = function (rate) {
    profile.rapot += rate;
    alert(`nilai terbaru kamu sebesar ${rapot}`);
  };

  return profile;
};

const nilaiMurid1 = murid("fandi", 12, "IPA", "pondok aren", 91);

// function constructor

const siswa = function (nama, kelas, jurusan, alamat, rapot) {
  this.nama = nama;
  this.kelas = kelas;
  this.jurusan = jurusan;
  this.alamat = alamat;
  this.rapot = rapot;
  this.nilai = function (tambah) {
    this.rapot = this.rapot + tambah;
    alert(`nilai kamu ${nama}, menjadi ${rapot}`);
  };

  this.min = function (nilai) {
    this.rapot -= nilai;
    alert(`nilai kamu ${rapot}`);
  };
};

const nilaiSiswa = new siswa("Fandi", 12, "IPA", "Pondok Aren", 91);

// object create
/*
  ! cara membuat object dengan mudah
  * jadi object.create itu membuat variabel methode yang terpisah dari object agar meminimalisir penyimpanan dan tidak memanggil berulang ulang
*/

const objectPayment = {
  payment: function (payments) {
    if (!Array.isArray(this.pay)) {
      this.pay = [];
    }
    this.pay.push(payments);
    alert(`${this.pay}`);
  },

  totals: function () {
    this.total = "";
    this.total += this.pay;
    alert(`${this.total}`);
  },
};

const paymentGateway = function (name, pay, schedule, total) {
  let payment = Object.create(objectPayment);

  payment.name = name;
  payment.pay = `IDR ${pay}`;
  payment.schedule = schedule;
  payment.total = total;

  return payment;
};

const paymentId = paymentGateway("Fandi", 49000, "19-10-2023");
