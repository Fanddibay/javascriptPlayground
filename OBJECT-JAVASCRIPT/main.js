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

function angkot(sopir, trayek, kas, penumpang) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.kas = kas;
  this.penumpang = penumpang;

  this.addPenumpang = function (account) {
    if (this.penumpang.length == 0) {
      this.penumpang.push(account);
      return this.penumpang;
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == account) {
          alert(account + " sudah ada data tersebut");
          return this.penumpang;
        } else if (i == this.penumpang.length - 1) {
          this.penumpang.push(account);
          return this.penumpang;
        } else if (this.penumpang[i] == undefined) {
          this.penumpang[i] = account;
          return this.penumpang;
        }
      }
    }
  };

  this.deletePenumpang = function (account, pay) {
    if (this.penumpang.length == 0) {
      alert("data masih kosong!");
      return this.penumpang;
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == account) {
          this.penumpang[i] = undefined;
          this.kas += pay;
        } else if (i == this.penumpang.length - 1) {
          alert(account + " tidak ada dalam data");
        }
        return this.penumpang;
      }
    }
  };
}

let angkot1 = new angkot("Fandi", ["Jakarta", "Surabaya"], 0, []);
console.log(angkot1);

function ticketDepature(name, price, takeoff, passenger) {
  this.name = name;
  this.price = price;
  this.takeoff = takeoff;
  this.passenger = passenger;

  this.addPrice = function (account, pay) {
    this.passenger.push(account);
    this.price += pay;
    return this.passenger;
  };
}

let depature = new ticketDepature("Lion airlanes", 0, ["12.00", "15.00"], []);
console.log(depature);
