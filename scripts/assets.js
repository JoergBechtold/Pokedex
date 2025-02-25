function checkButtonVisibility() {
  const { showAllCardsContainerRef, showMoreBtnContainerRef } = getIdRefs();

  if (endIndex >= amountOfLoadedPokemon) {
    showMoreBtnContainerRef.classList.add('d-none');
    showAllCardsContainerRef.classList.add('padding-bottom-50px');
  }
}

function getIdRefs() {
  return {
    bodyRef: document.body,
    loadingSpinnerRef: document.getElementById('loading_spinner'),
    showMoreBtnRef: document.getElementById('show_more_btn'),
    loadingDotsRef: document.getElementById('loading_dots'),
    showAllCardsContainerRef: document.getElementById('show_all_cards_container'),
    searchAllCardsContainerREef: document.getElementById('search_all_cards_container'),
    showMoreBtnContainerRef: document.getElementById('show_more_btn_container'),
    dataCouldNotLoadedContainerRef: document.getElementById('data_could_not_loaded_container'),
    dataCouldNotBeLoadedRef: document.getElementById('data_could_not_be_loaded'),
    loadingOverlayRef: document.getElementById('loading_overlay'),
    cardOverlayFullScreenRef: document.getElementById('card_overlay_full_screen'),
    cardContainerFullScreenRef: document.getElementById('card_container_full_screen'),
    searchInputRef: document.getElementById('Search_input'),
    notValideMessageContainer: document.getElementById('not_valide_message_container'),
    lengthMessageRef: document.getElementById('length_message'),
    errorMessageRef: document.getElementById('error_message'),
    pokemonCouldNotFoundContainerRef: document.getElementById('pokemon_could_not_found_container'),
    btnLeftRef: document.getElementById('btn_left'),
    btnRightRef: document.getElementById('btn_right'),
  };
}

function showLoadingOverlay() {
  const { loadingOverlayRef } = getIdRefs();
  loadingOverlayRef.classList.add('d-flex');
}

function showLoadingError(error) {
  const { loadingOverlayRef, dataCouldNotLoadedContainerRef, showAllCardsContainerRef, showMoreBtnContainerRef } = getIdRefs();
  removeLoadingOverlay();
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

function showLoadingSpinner() {
  const { loadingSpinnerRef } = getIdRefs();
  loadingSpinnerRef.classList.add('d-flex');
}

function removeLoadingSpinner() {
  const { loadingSpinnerRef } = getIdRefs();
  loadingSpinnerRef.classList.add('d-none');
}

function checkIfContainerEmpty() {
  const { dataCouldNotLoadedContainerRef } = getIdRefs();

  if (dataCouldNotLoadedContainerRef.innerHTML === '') {
    dataCouldNotLoadedContainerRef.innerHTML += templateDataCouldNotLoadedHtml();
  }
}

function hideErrorMessages() {
  const { errorMessageRef, lengthMessageRef, notValideMessageContainer } = getIdRefs();
  notValideMessageContainer.classList.remove('d-flex');
  errorMessageRef.classList.remove('d-flex');
  lengthMessageRef.classList.remove('d-flex');
}

function removeCouldNotLoadetMessage() {
  const { dataCouldNotBeLoadedRef } = getIdRefs();
  if (dataCouldNotBeLoadedRef) {
    dataCouldNotBeLoadedRef.remove();
  }
}

function showPokemonCouldNotFoundMessage() {
  const { pokemonCouldNotFoundContainerRef } = getIdRefs();

  if (pokemonCouldNotFoundContainerRef.innerHTML === '') {
    pokemonCouldNotFoundContainerRef.innerHTML += templateDataCouldNotLoadedHtml();
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

function eventBubbling(event) {
  event.stopPropagation();
}
