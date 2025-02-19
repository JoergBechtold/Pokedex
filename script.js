let AllPokemon = [];
let searchPokemonArray = [];
let singlePokemonArray = [];
// let pokemonImg = [];
let amountOfLoadedPokemon = 120;
let pokemonDetails = [];
let startIndex = 0;
let endIndex = 20;
let pokemon = [];
let typOne = [];
let typTwo = [];

function initFunction() {
  removeCouldNotLoadetMessage();
  fetchPokemonList();
}

async function renderCards(parameter = false) {
  const { showAllCardsContainerRef, showMoreBtnContainerRef } = getIdRefs();

  if (parameter) {
    showMoreBtnContainerRef.classList.add('d-none');
    endIndex = searchPokemonArray.length;
    singlePokemonArray = [];
    startIndex = 0;
  } else {
    showMoreBtnContainerRef.classList.add('d-flex');
  }

  checkIfContainerEmpty();

  for (let indexPokemonList = startIndex; indexPokemonList < endIndex; indexPokemonList++) {
    let singlePokemon = '';

    if (parameter) {
      singlePokemon = searchPokemonArray[indexPokemonList];
    } else {
      singlePokemon = AllPokemon[indexPokemonList];
    }
    singlePokemonArray.push(singlePokemon);

    await fetchPokemonDetails(indexPokemonList);

    setTypes(indexPokemonList);

    showAllCardsContainerRef.innerHTML += templateSingleCardHtml(indexPokemonList);
    isTypeAvailable(indexPokemonList);
  }
}

function showLoadingOverlay() {
  const { loadingOverlayRef, bodyRef } = getIdRefs();
  bodyRef.classList.add('no-scroll');
  bodyRef.classList.add('padding-right');
  loadingOverlayRef.classList.add('d-flex');
}

function removeLoadingOverlay() {
  const { loadingOverlayRef, bodyRef } = getIdRefs();
  bodyRef.classList.remove('no-scroll');
  bodyRef.classList.remove('padding-right');
  loadingOverlayRef.classList.remove('d-flex');
}

function loadMorePokemon() {
  endIndex += 20;
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
  let typeOneSpanRef = document.getElementById(`type_one_${indexType}`);
  let typeTwoSpanRef = document.getElementById(`type_two_${indexType}`);

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
  const { searchInputRef, showMoreBtnContainerRef, showAllCardsContainerRef, lengthMessageRef, pokemonCouldNotFoundContainerRef } = getIdRefs();
  let inputValue = searchInputRef.value;

  try {
    inputValue = inputValue.replace(/[^a-zA-Z]/g, '');
    searchInputRef.value = inputValue;

    if (inputValue.length === 0) {
      lengthMessageRef.classList.add('d-flex');
      pokemonCouldNotFoundContainerRef.innerHTML = ``;
      showAllCardsContainerRef.innerHTML = '';
      showAllCardsContainerRef.classList.remove('padding-bottom-50px');
      showAllCardsContainerRef.classList.remove('d-none');
      showMoreBtnContainerRef.classList.remove('d-none');
      resetGlobalValue();
      renderCards();
    } else if (inputValue.length < 3) {
      lengthMessageRef.classList.add('d-flex');
      pokemonCouldNotFoundContainerRef.innerHTML = ``;
    } else {
      hideErrorMessages();
      searchPokemon(inputValue);
    }
  } catch (error) {
    console.error('Fehler in validateSearchInput:', error);
  }
}

function searchPokemon(inputValue) {
  const { showAllCardsContainerRef, showMoreBtnContainerRef, pokemonCouldNotFoundContainerRef } = getIdRefs();

  inputValue = inputValue.toLowerCase();
  showMoreBtnContainerRef.classList.add('d-none');
  showAllCardsContainerRef.classList.add('padding-bottom-50px');
  showAllCardsContainerRef.innerHTML = '';

  searchPokemonArray = AllPokemon.filter((pokemon) => {
    return pokemon.name.includes(inputValue);
  });

  if (searchPokemonArray.length === 0) {
    pokemonCouldNotFoundContainerRef.innerHTML = templatePokemonCouldNotFoundHtml();
    showAllCardsContainerRef.innerHTML = '';
  } else {
    pokemonCouldNotFoundContainerRef.innerHTML = '';
  }
  showMoreBtnContainerRef.classList.add('d-none');
  renderCards(true);
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

function resetGlobalValue() {
  startIndex = 0;
  endIndex = 20;
  singlePokemonArray = [];
  searchPokemonArray = [];
}
