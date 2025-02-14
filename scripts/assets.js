function checkButtonVisibility() {
  const { showAllCardsContainerRef, showMoreBtnContainerRef } = getIdRefs();

  if (endIndex >= 120) {
    showMoreBtnContainerRef.classList.add('d-none');
    showAllCardsContainerRef.classList.add('padding-bottom-50px');
  }
}

function getIdRefs(indexType) {
  return {
    bodyRef: document.body,
    loadingSpinnerRef: document.getElementById('loading_spinner'),
    showMoreBtnRef: document.getElementById('show_more_btn'),
    loadingDotsRef: document.getElementById('loading_dots'),
    showAllCardsContainerRef: document.getElementById('show_all_cards_container'),
    showMoreBtnContainerRef: document.getElementById('show_more_btn_container'),
    dataCouldNotLoadedContainerRef: document.getElementById('data_could_not_loaded_container'),
    dataCouldNotBeLoadedRef: document.getElementById('data_could_not_be_loaded'),
    loadingOverlayRef: document.getElementById('loading_overlay'),
    typeOneSpanRef: document.getElementById(`type_one_${indexType}`),
    typeTwoSpanRef: document.getElementById(`type_two_${indexType}`),
    fullScreenPeokemonCardOverlayRef: document.getElementById('full_screen_pokemon_card_overlay'),
    fullScreenPokemonCardContainerRef: document.getElementById('full_screen_pokemon_card_container'),
  };
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

function removeCouldNotLoadetMessage() {
  const { dataCouldNotBeLoadedRef } = getIdRefs();
  if (dataCouldNotBeLoadedRef) {
    dataCouldNotBeLoadedRef.remove();
  }
}

function pushImg(imgIndex) {
  pokemonImg.push(pokemonDetails[imgIndex].sprites.other['home'].front_default);
}

function eventBubbling(event) {
  event.stopPropagation();
}
