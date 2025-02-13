let pokemonList = [];
let singlePokemonArray = [];
let pokemonDetails = [];
let startIndex = 0;
let endIndex = 40;
let pokemon = [];

function initFunction() {
  fetchPokemonList();
}

async function renderFirstCards() {
  const { showAllCardsContainerRef, showMoreBtnContainerRef } = getIdRefs();
  showMoreBtnContainerRef.classList.add('d-flex');
  showAllCardsContainerRef.innerHTML = '';

  let pokeNumber = 0;

  for (let indexPokemonList = 0; indexPokemonList < 40; indexPokemonList++) {
    singlePokemonArray.push(pokemonList[indexPokemonList]);

    pokeName = singlePokemonArray[indexPokemonList].name;
    pokeNumber = indexPokemonList + 1;

    await fetchPokemonDetails(indexPokemonList);

    showAllCardsContainerRef.innerHTML += templateSingleCardHtml(pokeName, pokeNumber, indexPokemonList);
  }
}

async function renderMoreCards() {
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

    await fetchPokemonDetails(indexMorePokemon);

    showAllCardsContainerRef.innerHTML += templateSingleCardHtml(pokeName, pokeNumber, indexMorePokemon);
  }
}

function showLoadingOverlay() {
  const { loadingOverlayRef, bodyRef } = getIdRefs();
  bodyRef.classList.add('no-scroll');
  loadingOverlayRef.classList.add('d-flex');
}

function removeLoadingOverlay() {
  const { loadingOverlayRef, bodyRef } = getIdRefs();
  bodyRef.classList.remove('no-scroll');
  loadingOverlayRef.classList.remove('d-flex');
}

function loadMorePokemon() {
  renderMoreCards();
}
