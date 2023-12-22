// const content = document.getElementById("root");

let date = new Date();
const day = date.getDay();

// const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
let resultDays = "";
// console.log(days[day]);
if (day === 0) {
  resultDays = "Minggu";
} else if (day === 1) {
  resultDays = "Senin";
} else if (day === 2) {
  resultDays = "Selasa";
} else if (day === 3) {
  resultDays = "Rabu";
} else if (day === 4) {
  resultDays = "Kamis";
} else if (day === 5) {
  resultDays = "Jumat";
} else if (day === 6) {
  resultDays = "Sabtu";
}

console.log(resultDays);
