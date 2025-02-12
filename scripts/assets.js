function checkButtonVisibility() {
  const { showAllCardsContainerRef, showMoreBtnContainerRef } = getIdRefs();

  if (endIndex >= 120) {
    showMoreBtnContainerRef.classList.add('d-none');
    showAllCardsContainerRef.classList.add('padding-bottom-50px');
  }
}

function getIdRefs() {
  return {
    loadingSpinnerRef: document.getElementById('loading_spinner'),
    showMoreBtnRef: document.getElementById('show_more_btn'),
    loadingDotsRef: document.getElementById('loading_dots'),
    showAllCardsContainerRef: document.getElementById('show_all_cards_container'),
    showMoreBtnContainerRef: document.getElementById('show_more_btn_container'),
    dataCouldNotBeLoadedRef: document.getElementById('data_could_not_be_loaded'),
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
