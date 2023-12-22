// memiliki 10 angkot
// angkot 5 dan 8 adalah angkot yang lembur
// angkot 6 keatas itu angkot yang bermasalah
// angkot 1 - 5 adalah angkot yang masih beroperasi

var angkot = 10;

for (var index = 0; index < angkot; index++) {
  if (index <= 6) {
    console.log(index + " sedang beroperasi");
  } else if (index === 5 || index === 8) {
    console.log(index + " angkot ini sedang lembur");
  } else {
    console.log(index + " angkot sedang dalamm perbaikan dan beramsalah");
  }
}

// const angka = prompt("silahkan masukan angka");

// if (angka % 2 === 0) {
//   alert(angka + " " + "adalah bilangan genap");
// } else {
//   alert(angka + " " + "bilangan ganjil");
// }

// login

function submitLogin() {
  const password = document.getElementById("pass").value;
  const email = document.getElementById("mail").value;
  const alert = document.getElementById("alert");
  const textAlert = document.getElementById("messageAlert");

  const emailAccount = "admin123";
  const passwordAccount = "admin123";

  if (email === emailAccount && password === passwordAccount) {
    // Autentikasi berhasil
    window.location.href = "index.html";
  } else if (email === emailAccount) {
    textAlert.innerHTML = "please input your correct password!";
    alert.classList.remove("d-none");
  } else if (password === passwordAccount) {
    textAlert.innerHTML = "please input your correct email!";
    alert.classList.remove("d-none");
  } else {
    textAlert.innerHTML = "Invalid email and password combination!";
    alert.classList.remove("d-none");
  }
}

function closeAlert() {
  const alert = document.getElementById("alert");
  alert.classList.add("d-none");
}

let array = [1, 2, 3, 4, 2, 1, 2, 2];
let arrayKosong = [];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}
