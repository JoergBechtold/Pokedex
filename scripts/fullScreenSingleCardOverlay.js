function openFullScreenPokemonCardOverlay(indexPokemonList) {
  const { bodyRef, fullScreenPeokemonCardOverlayRef, fullScreenPokemonCardContainerRef } = getIdRefs();
  fullScreenPeokemonCardOverlayRef.classList.add('d-flex');
  bodyRef.classList.add('no-scroll');
  fullScreenPokemonCardContainerRef.innerHTML = '';
  fullScreenPokemonCardContainerRef.innerHTML += templateFullScreenPokemonCardHtml();
}

function closeFullScreenPokemonCardOverlay() {
  const { bodyRef, fullScreenPeokemonCardOverlayRef } = getIdRefs();
  fullScreenPeokemonCardOverlayRef.classList.remove('d-flex');
  bodyRef.classList.remove('no-scroll');
}
