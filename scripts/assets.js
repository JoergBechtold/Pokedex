function checkButtonVisibility() {
  const { showAllCardsContainerRef, showMoreBtnContainerRef } = getIdRefs();

  if (endIndex >= 120) {
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
    showMoreBtnContainerRef: document.getElementById('show_more_btn_container'),
    dataCouldNotLoadedContainerRef: document.getElementById('data_could_not_loaded_container'),
    dataCouldNotBeLoadedRef: document.getElementById('data_could_not_be_loaded'),
    loadingOverlayRef: document.getElementById('loading_overlay'),
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
  const { dataCouldNotLoadedContainerRef, dataCouldNotBeLoadedRef } = getIdRefs();
  if (dataCouldNotBeLoadedRef) {
    dataCouldNotBeLoadedRef.remove();
  }
}
