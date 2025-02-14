let pokemonList = [];
let singlePokemonArray = [];
let pokemonImg = [];
let pokemonDetails = [];
let startIndex = 0;
let endIndex = 20;
let numberOfImagesLoaded = 20;
let pokemon = [];
let typOne = [];
let typTwo = [];

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

  for (let indexPokemonList = 0; indexPokemonList < numberOfImagesLoaded; indexPokemonList++) {
    singlePokemonArray.push(pokemonList[indexPokemonList]);

    pokeName = singlePokemonArray[indexPokemonList].name;
    pokeNumber = indexPokemonList + 1;

    await fetchPokemonDetails(indexPokemonList);

    pushImg(indexPokemonList);
    setTypes(indexPokemonList);

    showAllCardsContainerRef.innerHTML += templateSingleCardHtml(pokeNumber, indexPokemonList);
    isTypeAvailable(indexPokemonList);
  }
}

async function renderMoreCards() {
  const { showAllCardsContainerRef, showMoreBtnContainerRef } = getIdRefs();
  showMoreBtnContainerRef.classList.add('d-flex');
  startIndex = endIndex;
  endIndex = endIndex + numberOfImagesLoaded;

  let pokeNumber = 0;

  for (let indexMorePokemon = startIndex; indexMorePokemon < endIndex; indexMorePokemon++) {
    singlePokemonArray.push(pokemonList[indexMorePokemon]);
    pokeName = singlePokemonArray[indexMorePokemon].name;
    pokeNumber = indexMorePokemon + 1;

    await fetchPokemonDetails(indexMorePokemon);

    pushImg(indexMorePokemon);
    setTypes(indexMorePokemon);

    showAllCardsContainerRef.innerHTML += templateSingleCardHtml(pokeNumber, indexMorePokemon);
    isTypeAvailable(indexMorePokemon);
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

function setTypes(indexType) {
  if (pokemonDetails[indexType].types[0]) {
    typOne.push(pokemonDetails[indexType].types[0].type.name);
  } else {
    typOne.push(0);
  }

  if (pokemonDetails[indexType].types[1]) {
    typTwo.push(pokemonDetails[indexType].types[1].type.name);
  } else {
    typTwo.push(0);
  }
}

function isTypeAvailable(indexType) {
  const { typeOneSpanRef, typeTwoSpanRef } = getIdRefs(indexType);

  if (typOne[indexType] === 0) {
    typeOneSpanRef.classList.add('d-none');
  } else {
    typeOneSpanRef.classList.remove('d-none');
  }

  if (typTwo[indexType] === 0) {
    typeTwoSpanRef.classList.add('d-none');
  } else {
    typeTwoSpanRef.classList.remove('d-none');
  }
}
