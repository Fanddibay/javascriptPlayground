// document.addEventListener("DOMContentLoaded", () => {
//   const moviesContainer = document.getElementById("movies-container");

//   // Ganti API_KEY dengan kunci API Movie DB Anda
//   const API_KEY = `d727777f4effde0f35a95fe566b99030`;
//   const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

//   fetch(API_URL)
//     .then((response) => response.json())
//     .then((data) => {
//       const movies = data.results;
//       moviesContainer.innerHTML = movies.map(createMovieCard).join("");
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//       moviesContainer.innerHTML = "<p>Error fetching data</p>";
//     });

//   function createMovieCard(movie) {
//     return `
//         <div class="container">
//             <div class="row">
//                 <div class="col-3">
//                     <div>
//                     <img src="https://image.tmdb.org/t/p/w185/${movie.poster_path}" alt="${movie.title}" class="movie-poster">
//                     <h2>${movie.title}</h2>
//                     <p>Release Date: ${movie.release_date}</p>
//                     <p>Genres: ${movie.genre_ids}</p>
//                     <p>Rating: ${movie.vote_average}</p>
//                     <p>Popularity: ${movie.popularity}</p>
//                     <p>Original Language: ${movie.original_language}</p>
//                     <p>Runtime: ${movie.runtime} minutes</p>
//                     <p>Status: ${movie.status}</p>
//                     <p>${movie.overview}</p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//         `;
//   }
// });

// execise function n array
/* pengelolaan penumpang
  1. penumpangnaik
    - tambahPenumpang()
      ? 2 parameter :
        - namaPenumpang
        - arrayPenumpang
        ! 1. Rules tambah penumpang : 
          - Jika angkot kosong, penumpang naik duduk di kursi pertama
          - penumpang berikutnya dudukk di kursi selanjutnya secara berurutan
          - jika ada kursi kkosong (karena penumpang turum), penumpang yang naik berikkutnya duduk di kursi kosong telebih dahulu
          - asumsi kus tidak akan perrnuh dan akan bertambah terus jika ada penumpang nak
          - nama penumpang tidak boleh sama, untuk menghindari ketika nanti penumpang turun
          - membuat prompt untuk memasukan nilai secara alert
          - melakukan confirm untuk melakukan lagi
          - menampilkan pada dom
          - menghapus berbeda button
  2. penumpang turun
    - hapusPenumpang()

*/

let penumpang = [];

const tambahPenumpang = (namaPenumpang, penumpang) => {
  // membuat menambah penumpang
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    // membuat penjumlahan kursi dengan looping
    for (let i = 0; i < penumpang.length; i++) {
      // jika ada penumpang kosong
      if (penumpang.length == undefined) {
        penumpang[i] == namaPenumpang;
        return penumpang;
        // jika ada nama penumpang sama
      } else if (penumpang[i] == namaPenumpang) {
        console.log("sudah ada nama penumpang dengan nama " + namaPenumpang);
        return penumpang;
        // jika ada penumpang turun maka akan di isi dengan penumpang lain atau penumpang yang baru masuk
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

// Disaat Turun = hapusPenumpang()
const deletePenumpang = (namaPenumpang, penumpang) => {
  // misal tidak ada data
  if (penumpang.length == 0) {
    console.log("data masih kosong!");
  } else {
    // urutkn data dengan looping
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
      } else if (penumpang[i] !== namaPenumpang) {
        console.log("penumpang tidak ada dengan nama " + namaPenumpang);
      }
    }
  }
  return penumpang;
};

let arrayku = [1, 2, 3, 45, 55];

let dataArray = [];
