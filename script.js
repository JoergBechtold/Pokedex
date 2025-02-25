let AllPokemon = [];
let searchPokemonArray = [];
let singlePokemonArray = [];
let amountOfLoadedPokemon = 120;
let pokemonDetails = [];
let speciesText = [];
let startIndex = 0;
let endIndex = 20;
let pokemon = [];
let heigtNumber = 0;
let weightNumber = 0;
let germanSpeciesText = '';

function initFunction() {
  removeCouldNotLoadetMessage();
  fetchPokemonList();
}

async function renderCards(parameter = false) {
  const { showMoreBtnContainerRef } = getIdRefs();

  if (parameter) {
    setPropertyForSearchRenderFunction();
  } else {
    showMoreBtnContainerRef.classList.add('d-flex');
  }
  checkIfContainerEmpty();
  forLoopRenderCards(parameter);
}

async function forLoopRenderCards(parameter) {
  const { showAllCardsContainerRef } = getIdRefs();
  for (let indexPokemonList = startIndex; indexPokemonList < endIndex; indexPokemonList++) {
    let singlePokemon = '';

    if (parameter) {
      singlePokemon = searchPokemonArray[indexPokemonList];
    } else {
      singlePokemon = AllPokemon[indexPokemonList];
    }
    singlePokemonArray.push(singlePokemon);

    await fetchPokemonDetails(indexPokemonList);
    await fetchSpeciesText(indexPokemonList);
    showAllCardsContainerRef.innerHTML += templateSingleCardHtml(indexPokemonList);
  }
}

function setPropertyForSearchRenderFunction() {
  const { showMoreBtnContainerRef } = getIdRefs();
  showMoreBtnContainerRef.classList.add('d-none');
  endIndex = Math.min(searchPokemonArray.length, 15);
  singlePokemonArray = [];
  startIndex = 0;
}

function formatPokemonDimension(element) {
  let setElement = element;
  elementNumber = (setElement / 10).toFixed(1).replace('.', ',');
  return elementNumber;
}

function validateSearchInput() {
  const { searchInputRef } = getIdRefs();
  let inputValue = searchInputRef.value;

  try {
    if (/[^a-zA-Z]/.test(inputValue)) {
      setProbertysIfInputTextNotValide(searchInputRef);
    }
    if (inputValue.length === 0) {
      callFunctionsIfLengthZero();
    } else if (inputValue.length < 3) {
      setProbertysIfInputLengthThree();
    } else {
      hideErrorMessages();
      searchPokemon(inputValue);
    }
  } catch (error) {
    console.error('Fehler in validateSearchInput:', error);
  }
}

function callFunctionsIfLengthZero() {
  setProbertysIfInputLengthZero();
  resetGlobalValue();
  renderCards();
}

function setProbertysIfInputLengthZero() {
  const { showMoreBtnContainerRef, showAllCardsContainerRef, lengthMessageRef, pokemonCouldNotFoundContainerRef, notValideMessageContainer } =
    getIdRefs();
  notValideMessageContainer.classList.add('d-flex');
  lengthMessageRef.classList.add('d-flex');
  pokemonCouldNotFoundContainerRef.innerHTML = ``;
  showAllCardsContainerRef.innerHTML = '';
  showAllCardsContainerRef.classList.remove('padding-bottom-50px');
  showAllCardsContainerRef.classList.remove('d-none');
  showMoreBtnContainerRef.classList.remove('d-none');
}

function setProbertysIfInputTextNotValide(searchInputRef) {
  const { errorMessageRef, pokemonCouldNotFoundContainerRef, notValideMessageContainer } = getIdRefs();
  notValideMessageContainer.classList.add('d-flex');
  errorMessageRef.classList.add('d-flex');
  pokemonCouldNotFoundContainerRef.innerHTML = ``;
  searchInputRef.value = '';
  return;
}

function setProbertysIfInputLengthThree() {
  const { lengthMessageRef, notValideMessageContainer, pokemonCouldNotFoundContainerRef } = getIdRefs();
  notValideMessageContainer.classList.add('d-flex');
  lengthMessageRef.classList.add('d-flex');
  pokemonCouldNotFoundContainerRef.innerHTML = ``;
}

function searchPokemon(inputValue) {
  const { showAllCardsContainerRef, showMoreBtnContainerRef, pokemonCouldNotFoundContainerRef } = getIdRefs();

  setTimeout(() => {
    setPropertysSearchPokemon(inputValue);
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
  }, 300);
}

function setPropertysSearchPokemon(inputValue) {
  const { showAllCardsContainerRef, showMoreBtnContainerRef } = getIdRefs();
  inputValue = inputValue.toLowerCase();
  showMoreBtnContainerRef.classList.add('d-none');
  showAllCardsContainerRef.classList.add('padding-bottom-50px');
  showAllCardsContainerRef.innerHTML = '';
}

function clearSearch() {
  const { searchInputRef } = getIdRefs();
  searchInputRef.value = '';
}

function resetGlobalValue() {
  startIndex = 0;
  endIndex = 20;
  singlePokemonArray = [];
  searchPokemonArray = [];
}

async function loadMorePokemon() {
  endIndex += 20;
  startIndex += 20;
  await renderCards();
}

async function showNextPokemon(indexPokemonList) {
  indexPokemonList++;
  if (!singlePokemonArray[indexPokemonList]) {
    closeFullScreenCardOverlay();
    await loadMorePokemon();
  }
  openFullScreenCardOverlay(indexPokemonList);
}

async function showPreviousPokemon(indexPokemonList) {
  indexPokemonList--;
  openFullScreenCardOverlay(indexPokemonList);
}

function checkPokemonNumber(indexPokemonList) {
  const { btnLeftRef, btnRightRef } = getIdRefs();
  if (indexPokemonList == 0) {
    btnLeftRef.classList.add('d-none');
  }

  if (indexPokemonList == AllPokemon.length - 1) {
    btnRightRef.classList.add('d-none');
  }
}
