async function openFullScreenCardOverlay(indexPokemonList) {
  const { bodyRef, cardOverlayFullScreenRef, loadingOverlayRef } = getIdRefs();
  const isLoadingOverlayActive = loadingOverlayRef.classList.contains('d-flex');

  if (!isLoadingOverlayActive) {
    showLoadingOverlay();
  }

  cardOverlayFullScreenRef.classList.add('d-flex');
  bodyRef.classList.add('no-scroll');
  bodyRef.classList.add('padding-right');

  heigtNumber = formatPokemonDimension(pokemonDetails[indexPokemonList].height);
  weightNumber = formatPokemonDimension(pokemonDetails[indexPokemonList].weight);
  // setHeight(indexPokemonList);
  // setWeight(indexPokemonList);

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
