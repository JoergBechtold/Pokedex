let pokemonList = [];
let singlePokemonArray = [];
let pokemonImg = [];
let pokemonDetails = [];
let startIndex = 0;
let endIndex = 40;
let pokemon = [];

function initFunction() {
  removeCouldNotLoadetMessage();
  fetchPokemonList();
}

async function renderFirstCards() {
  const { showAllCardsContainerRef, showMoreBtnContainerRef } = getIdRefs();
  showMoreBtnContainerRef.classList.add('d-flex');
  showAllCardsContainerRef.innerHTML = '';
  checkIfContainerEmpty();
  let pokeNumber = 0;

  for (let indexPokemonList = 0; indexPokemonList < 40; indexPokemonList++) {
    singlePokemonArray.push(pokemonList[indexPokemonList]);

    pokeName = singlePokemonArray[indexPokemonList].name;
    pokeNumber = indexPokemonList + 1;

    await fetchPokemonDetails(indexPokemonList);

    pokemonImg.push(pokemonDetails[indexPokemonList].sprites.other['official-artwork'].front_default);
    // pokemonImg.push(pokemonDetails[indexPokemonList]);

    showAllCardsContainerRef.innerHTML += templateSingleCardHtml(pokeName, pokeNumber, pokemonImg, indexPokemonList);
  }

  console.log(pokemonImg[1]);
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

    pokemonImg.push(pokemonDetails[indexMorePokemon].sprites.other['official-artwork'].front_default);

    showAllCardsContainerRef.innerHTML += templateSingleCardHtml(pokeName, pokeNumber, pokemonImg, indexMorePokemon);
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
