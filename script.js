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
  const { showAllCardsContainerRef, showMoreBtnContainerRef } = getIdRefs();

  if (parameter) {
    showMoreBtnContainerRef.classList.add('d-none');
    endIndex = Math.min(searchPokemonArray.length, 15);
    singlePokemonArray = [];
    startIndex = 0;
  } else {
    showMoreBtnContainerRef.classList.add('d-flex');
  }

  checkIfContainerEmpty();

  // auslagern for loob??
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

function showLoadingOverlay() {
  const { loadingOverlayRef } = getIdRefs();
  loadingOverlayRef.classList.add('d-flex');
}

function showLoadingError(error) {
  loadingOverlayRef.classList.remove('d-flex');
  showAllCardsContainerRef.classList.add('d-none');
  showMoreBtnContainerRef.classList.add('d-none');
  dataCouldNotLoadedContainerRef.innerHTML += templateDataCouldNotLoadedHtml();
  console.error(error);
}

function removeLoadingOverlay() {
  const { loadingOverlayRef, bodyRef, cardOverlayFullScreenRef } = getIdRefs();
  const isCardOverlayFullScreenActive = cardOverlayFullScreenRef.classList.contains('d-flex');

  if (!isCardOverlayFullScreenActive) {
    bodyRef.classList.remove('no-scroll');
    bodyRef.classList.remove('padding-right');
  }

  loadingOverlayRef.classList.remove('d-flex');
}

function formatPokemonDimension(element) {
  let setElement = element;
  elementNumber = (setElement / 10).toFixed(1).replace('.', ',');
  return elementNumber;
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

function getGermanText(index) {
  for (let indexSpecies = 0; indexSpecies < speciesText[index].flavor_text_entries.length; indexSpecies++) {
    const element = speciesText[index].flavor_text_entries[indexSpecies];

    if (element.language && element.language.name === 'de') {
      germanSpeciesText = element.flavor_text;
      return;
    }
  }
}
