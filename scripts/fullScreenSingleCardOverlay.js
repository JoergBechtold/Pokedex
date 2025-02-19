function openFullScreenCardOverlay(indexPokemonList) {
  const { bodyRef, fullScreenCardOverlayRef, fullScreenCardContainerRef } = getIdRefs();
  fullScreenCardOverlayRef.classList.add('d-flex');
  bodyRef.classList.add('no-scroll');
  bodyRef.classList.add('padding-right');
  fullScreenCardContainerRef.innerHTML = '';
  fullScreenCardContainerRef.innerHTML += templateFullScreenCardHtml(indexPokemonList);
}

function closeFullScreenCardOverlay() {
  const { bodyRef, fullScreenCardOverlayRef } = getIdRefs();
  fullScreenCardOverlayRef.classList.remove('d-flex');
  bodyRef.classList.remove('padding-right');
  bodyRef.classList.remove('no-scroll');
}
