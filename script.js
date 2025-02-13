let pokemonList = [];
let singlePokemonArray = [];
let pokemonDetails = [];
let startIndex = 0;
let endIndex = 40;
let pokemon = [];

function initFunction() {
  loadDataSinglePokemon();
}

async function loadDataSinglePokemon() {
  const { showMoreBtnContainerRef, dataCouldNotLoadedContainerRef } = getIdRefs();

  try {
    let BASE_URL = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=120&offset=0.`);
    fetchPokemonGlobal = await BASE_URL.json();
    pokemonList = fetchPokemonGlobal.results;

    renderFirstCards();
    checkButtonVisibility();
  } catch (error) {
    showMoreBtnContainerRef.classList.add('d-none');
    dataCouldNotLoadedContainerRef.innerHTML = templateDataCouldNotLoadedHtml();
  }
}

function renderFirstCards() {
  const { showAllCardsContainerRef, showMoreBtnContainerRef } = getIdRefs();
  showMoreBtnContainerRef.classList.add('d-flex');
  showAllCardsContainerRef.innerHTML = '';

  let pokeNumber = 0;

  for (let indexPokemonList = 0; indexPokemonList < 40; indexPokemonList++) {
    singlePokemonArray.push(pokemonList[indexPokemonList]);

    pokeName = singlePokemonArray[indexPokemonList].name;
    pokeNumber = indexPokemonList + 1;
    fetchUrlSinglePokemon();
    showAllCardsContainerRef.innerHTML += templateSingleCardHtml(pokeName, pokeNumber, indexPokemonList);
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
    singlePokemonArray.push(pokemonList[indexMorePokemon]);
    pokeName = singlePokemonArray[indexMorePokemon].name;
    pokeNumber = indexMorePokemon + 1;
    fetchUrlSinglePokemon();
    showAllCardsContainerRef.innerHTML += templateSingleCardHtml(pokeName, pokeNumber, indexMorePokemon);
  }
}

async function fetchUrlSinglePokemon() {
  const { showMoreBtnContainerRef, dataCouldNotLoadedContainerRef, showAllCardsContainerRef } = getIdRefs();

  for (let indexSinglePokemon = 0; indexSinglePokemon < singlePokemonArray.length; indexSinglePokemon++) {
    try {
      let pokemonUrl = singlePokemonArray[indexSinglePokemon].url;
      let SINGLE_POKEMON_URL = await fetch(pokemonUrl);
      pokemonDetails = await SINGLE_POKEMON_URL.json();
    } catch (error) {
      showAllCardsContainerRef.classList.add('d-none');
      showMoreBtnContainerRef.classList.add('d-none');
      dataCouldNotLoadedContainerRef.innerHTML = templateDataCouldNotLoadedHtml();
    }
    let imgElement = document.getElementById(`pokemon_image_${indexSinglePokemon}`);
    imgElement.src = pokemonDetails.sprites.other['official-artwork'].front_default;
  }
}

function onclickLoadNextFortyData() {
  const { showMoreBtnRef, loadingDotsRef } = getIdRefs();

  loadingDotsRef.classList.add('d-flex');
  showMoreBtnRef.classList.add('d-none');

  setTimeout(function () {
    loadingDotsRef.classList.remove('d-flex');
    showMoreBtnRef.classList.remove('d-none');
  }, 5000);

  renderMoreCards();
}
