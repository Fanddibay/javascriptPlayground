document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("root");
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const resultData = data;
      content.innerHTML = resultData.map(value).join("");
    })
    .catch((error) => {
      console.error("Erorr fetching data", error);
      content.innerHTML = "<h2>error fetch data</h2>";
    });
});

function value(element) {
  return `
  <div style="display:flex; align-items:center;" class="card">
    <div style="margin:4px 12px 42px 12px;">
      <img src="${element.image}">
    </div>
    <div style="margin-top:-48px;">
      <h1>Nama : ${element.name} </h1>
      <p>price : ${element.price} </p>
      <p>country : ${element.country} </p>
      <p>rate : ${element.rate} </p>
      <p>description : ${element.description} </p>
      <p>stock : ${element.stock} </p>


    </div>
  </div>

 
  `;
}
