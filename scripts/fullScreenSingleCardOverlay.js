function openFullScreenCardOverlay(indexPokemonList) {
  const { bodyRef, cardOverlayFullScreenRef, cardContainerFullScreenRef } = getIdRefs();

  cardOverlayFullScreenRef.classList.add('d-flex');
  bodyRef.classList.add('no-scroll');
  bodyRef.classList.add('padding-right');
  cardOverlayFullScreenRef.innerHTML = '';
  cardOverlayFullScreenRef.innerHTML += templateFullScreenCardHtml(indexPokemonList);
}

function closeFullScreenCardOverlay() {
  const { bodyRef, cardOverlayFullScreenRef } = getIdRefs();
  cardOverlayFullScreenRef.classList.remove('d-flex');
  bodyRef.classList.remove('padding-right');
  bodyRef.classList.remove('no-scroll');
}
