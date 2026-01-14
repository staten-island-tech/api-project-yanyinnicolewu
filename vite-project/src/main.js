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

const container = document.querySelector(".container");
const form = document.getElementById("search-form");
const input = document.getElementById("title");

async function getAllData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=25");
    if (response.status != 200) {
      throw new Error("Pokémon not found");
    } else {
      const data = await response.json();
      data.results.forEach((item) => {
        getitemDetails(item.url);
      });
      return data;
    }
  } catch (error) {
    container.innerHTML = `<p class="text-red-500">${error.message}</p>`;
    console.log(error);
  }
}

async function getitemDetails(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    inject(data);
  } catch (error) {
    console.log(error);
  }
}

function inject(item) {
  const html = `
    <div class="bg-white p-4 rounded shadow text-center">
    <div class="bg-gray-800 text-white p-4 rounded-lg shadow-lg text-center">
      <h2 class="capitalize font-bold text-lg">${item.name}</h2>
      <img src="${item.sprites.front_default}" class="mx-auto"/>
      <p>Height: ${item.height}</p>
      <p>Weight: ${item.weight}</p>
    </div>`;
  container.insertAdjacentHTML("afterbegin", html);
}

document
  .getElementById("search-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const value = document.getElementById("title").value.toLowerCase();
    const container = document.querySelector(".container");

    container.innerHTML = "";

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${value}`
      );

      if (response.status != 200) {
        throw new Error("Pokémon not found");
      }
      const data = await response.json();
      inject(data);
    } catch (error) {
      container.innerHTML = `<p class="text-red-500">${error.message}</p>`;
    }
  });

getAllData();

// const URL = "https://bible-api.com/data/web/random";

// async function getData(URL) {
//   try {
//     const response = await fetch(URL);
//     const data = await response.json();
//     document.getElementById("api-response").text = data.text;
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData(URL);
