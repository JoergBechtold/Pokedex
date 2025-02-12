let allPokemon = [];
let singlePokemonArray = [];
let startIndex = 0;
let endIndex = 40;

function initFunction() {
  loadDataSinglePokemon();
}

// async function loadDataSinglePokemon() {
//   let showMoreBtnContainerRef = document.getElementById('show_more_btn_container');
//   let dataCouldNotBeLoadedRef = document.getElementById('data_could_not_be_loaded');

//   try {
//     let BASE_URL = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${endOffsetLink}&offset=${startOffsetLink}`);
//     fetchPokemonGlobal = await BASE_URL.json();
//     loadPokemonInformation();
//     renderCards();
//     checkButtonVisibility();
//   } catch (error) {
//     removeLoadingSpinner();
//     showMoreBtnContainerRef.style.display = 'none';
//     dataCouldNotBeLoadedRef.style.display = 'flex';
//   }
// }

// function renderCards() {
//   let showAllCardsContainerRef = document.getElementById('show_all_cards_container');
//   let showMoreBtnContainerRef = document.getElementById('show_more_btn_container');
//   showMoreBtnContainerRef.style.display = 'flex';
//   showAllCardsContainerRef.innerHTML = '';

//   let pokeNumber = 0;

//   for (let indexPokemon = 0; indexPokemon < fetchPokemonGlobal.results.length; indexPokemon++) {
//     let pokeName = fetchPokemonGlobal.results[indexPokemon].name;
//     pokeNumber = indexPokemon + 1;

//     showAllCardsContainerRef.innerHTML += templateSingleCardHtml(pokeName, pokeNumber, indexPokemon);
//   }
// }

async function loadDataSinglePokemon() {
  const { showMoreBtnContainerRef } = getIdRefs();

  try {
    let BASE_URL = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=120&offset=0.`);
    fetchPokemonGlobal = await BASE_URL.json();
    allPokemon = fetchPokemonGlobal.results;

    renderFirstCards();
    checkButtonVisibility();
  } catch (error) {
    showMoreBtnContainerRef.classList.add('d-none');
  }
}

function renderFirstCards() {
  const { showAllCardsContainerRef, showMoreBtnContainerRef } = getIdRefs();
  showMoreBtnContainerRef.classList.add('d-flex');
  showAllCardsContainerRef.innerHTML = '';

  let pokeNumber = 0;

  for (let indexPokemon = 0; indexPokemon < 40; indexPokemon++) {
    singlePokemonArray.push(allPokemon[indexPokemon]);

    pokeName = singlePokemonArray[indexPokemon].name;
    pokeNumber = indexPokemon + 1;

    showAllCardsContainerRef.innerHTML += templateSingleCardHtml(pokeName, pokeNumber, indexPokemon);
  }
}

function renderMoreCards() {
  const { showAllCardsContainerRef, showMoreBtnContainerRef } = getIdRefs();
  showMoreBtnContainerRef.classList.add('d-flex');

  startIndex = endIndex;
  endIndex = endIndex + 40;
  checkButtonVisibility();

  let pokeNumber = 0;

  for (let indexMorePokemon = startIndex; indexMorePokemon < endIndex; indexMorePokemon++) {
    singlePokemonArray.push(allPokemon[indexMorePokemon]);

    pokeName = singlePokemonArray[indexMorePokemon].name;
    pokeNumber = indexMorePokemon + 1;

    showAllCardsContainerRef.innerHTML += templateSingleCardHtml(pokeName, pokeNumber, indexMorePokemon);
  }
}

async function loadPokemonInformation() {
  try {
    let POKEMON_URL = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
    fetchPokemonInformation = await POKEMON_URL.json();
  } catch (error) {
    alert('Irgendwas stimmt nicht');
  }
}

function showLoadingSpinner() {
  const { loadingContainerRef } = getIdRefs();
  loadingContainerRef.classList.add('flex');
}

function removeLoadingSpinner() {
  const { loadingContainerRef } = getIdRefs();
  loadingContainerRef.classList.add('none');
}

function onclickLoadNextFortyData() {
  const { showMoreBtnRef, loadingDotsRef } = getIdRefs();

  loadingDotsRef.classList.add('d-flex');
  showMoreBtnRef.classList.add('d-none');

  setTimeout(function () {
    loadingDotsRef.classList.remove('d-flex');
    showMoreBtnRef.classList.remove('d-none');
  }, 1500);

  renderMoreCards();

  // loadDataSinglePokemon();
}

// function renderPokemonInformation(){

// }
