let pokemonList = [];
let searchPokemonArray = [];
let searchPokemonList = [];
let singlePokemonArray = [];
let pokemonImg = [];
let pokemonDetails = [];
let startIndex = 0;
// let endIndex = 20;
let numberOfImagesLoaded = 20;
let pokemon = [];
let typOne = [];
let typTwo = [];

function initFunction() {
  removeCouldNotLoadetMessage();
  fetchPokemonList();
}

async function renderCards() {
  const { showAllCardsContainerRef, showMoreBtnContainerRef } = getIdRefs();
  showMoreBtnContainerRef.classList.add('d-flex');
  // showAllCardsContainerRef.innerHTML = '';
  checkIfContainerEmpty();
  // singlePokemonArray = [];

  for (let indexPokemonList = startIndex; indexPokemonList < numberOfImagesLoaded; indexPokemonList++) {
    singlePokemonArray.push(pokemonList[indexPokemonList]);

    pokeName = singlePokemonArray[indexPokemonList].name;
    pokeNumber = singlePokemonArray[indexPokemonList].number;

    await fetchPokemonDetails(indexPokemonList);

    setTypes(indexPokemonList);

    showAllCardsContainerRef.innerHTML += templateSingleCardHtml(pokeNumber, indexPokemonList);
    isTypeAvailable(indexPokemonList);
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
  numberOfImagesLoaded += 20;
  startIndex += 20;
  renderCards();
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

function validateSearchInput() {
  const { searchInputRef, dataCouldNotLoadedContainerRef, lengthMessageRef, pokemonCouldNotFoundContainerRef } = getIdRefs();
  let inputValue = searchInputRef.value;

  try {
    inputValue = inputValue.replace(/[^a-zA-Z]/g, '');
    searchInputRef.value = inputValue;

    if (inputValue.length === 0) {
      lengthMessageRef.classList.add('d-flex');
      pokemonCouldNotFoundContainerRef.innerHTML = ``;
      fetchPokemonList();
    } else if (inputValue.length < 3) {
      lengthMessageRef.classList.add('d-flex');
      pokemonCouldNotFoundContainerRef.innerHTML = '';
    } else {
      hideErrorMessages();
      searchPokemon(inputValue);
    }
  } catch (error) {
    console.error('Fehler in validateSearchInput:', error);
  }
}

function searchPokemon(inputValue) {
  const { searchInputRef, showAllCardsContainerRef, showMoreBtnContainerRef, pokemonCouldNotFoundContainerRef } = getIdRefs();

  inputValue = inputValue.toLowerCase();
  showMoreBtnContainerRef.classList.add('d-none');
  showAllCardsContainerRef.classList.add('padding-bottom-50px');
  showAllCardsContainerRef.innerHTML = '';

  let searchPokemonResults = pokemonList.filter((pokemon) => {
    return pokemon.name.includes(inputValue);
  });

  pokemonList = searchPokemonResults;

  if (pokemonList.length === 0) {
    pokemonCouldNotFoundContainerRef.innerHTML = templatePokemonCouldNotFoundHtml();
    showAllCardsContainerRef.innerHTML = '';
  } else {
    pokemonCouldNotFoundContainerRef.innerHTML = '';
  }
  showMoreBtnContainerRef.classList.add('d-none');

  renderCards();
}

function clearSearch() {
  const { searchInputRef } = getIdRefs();
  searchInputRef.value = '';
}

function hideErrorMessages() {
  const { errorMessageRef, lengthMessageRef } = getIdRefs();
  errorMessageRef.classList.remove('d-flex');
  lengthMessageRef.classList.remove('d-flex');
}
