import "./style.css";
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

// const URL = "https://api.thecatapi.com/v1/images/search?limit=10";

// async function getData(URL) {
//   try {
//     const response = await fetch(URL);
//     if (response.status != 200) {
//       throw new Error(response);
//     } else {
//       const data = await response.json(); //makes the data into JSON object we can use
//       console.log(data);
//       document.getElementById("api-response").textContent = data.name;
//     }
//   } catch (error) {
//     console.log(error);
//     console.log("no bueno");
//   }
// }
// getData(URL);

async function getAllData() {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      data.forEach((card) => console.log(card));
    }
  } catch (error) {
    console.log(error);
  }
}
getAllData();

function inject(item) {
  const container = document.querySelector(".container");
  const html = `
    <div class="card" data-name="${item.name}" data-img="${item.img}" data-alt="${item.alt}" data-price="${item.price}">
      <img class="card-img" src="${item.img}" alt="${item.alt}">
      <h2 class="card-name">${item.name}</h2>
      <p class="card-alt">${item.alt}</p>
      <p class="card-price">Price: $${item.price}</p>
      <button class="button">Add to Cart</button>
    </div>`;
  container.insertAdjacentHTML("afterbegin", html);
}

dogs.forEach((item) => inject(item));
