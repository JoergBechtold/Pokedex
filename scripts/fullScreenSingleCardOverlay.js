async function openFullScreenCardOverlay(indexPokemonList) {
  const { cardOverlayFullScreenRef, loadingOverlayRef } = getIdRefs();
  const isLoadingOverlayActive = loadingOverlayRef.classList.contains('d-flex');

  if (!isLoadingOverlayActive) {
    showLoadingOverlay();
  }
  checkCardOverlayFullScreenAddDisplayFlex();

  heigtNumber = formatPokemonDimension(pokemonDetails[indexPokemonList].height);
  weightNumber = formatPokemonDimension(pokemonDetails[indexPokemonList].weight);

  cardOverlayFullScreenRef.innerHTML = '';
  cardOverlayFullScreenRef.innerHTML += templateFullScreenCardHtml(indexPokemonList);
  checkPokemonNumber(indexPokemonList);
  removeLoadingOverlay();
}

function closeFullScreenCardOverlay() {
  const { bodyRef, cardOverlayFullScreenRef } = getIdRefs();
  cardOverlayFullScreenRef.classList.remove('d-flex');
  bodyRef.classList.remove('padding-right');
  bodyRef.classList.remove('no-scroll');
}

function checkCardOverlayFullScreenAddDisplayFlex() {
  const { bodyRef, cardOverlayFullScreenRef } = getIdRefs();
  cardOverlayFullScreenRef.classList.add('d-flex');
  bodyRef.classList.add('no-scroll');
  bodyRef.classList.add('padding-right');
}
