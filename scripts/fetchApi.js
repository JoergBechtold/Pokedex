async function fetchPokemonList() {
  const { showMoreBtnContainerRef, dataCouldNotLoadedContainerRef, loadingOverlayRef } = getIdRefs();
  showLoadingOverlay();
  try {
    const BASE_URL = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${amountOfLoadedPokemon}&offset=0`);
    fetchPokemonGlobal = await BASE_URL.json();
    AllPokemon = fetchPokemonGlobal.results;

    AllPokemon = fetchPokemonGlobal.results.map((pokemon) => ({
      ...pokemon,
      number: parseInt(pokemon.url.split('/').reverse()[1]),
    }));

    removeCouldNotLoadetMessage();
    renderCards();
    checkButtonVisibility();
  } catch (error) {
    loadingOverlayRef.classList.remove('d-flex');
    showMoreBtnContainerRef.classList.add('d-none');
    dataCouldNotLoadedContainerRef.innerHTML += templateDataCouldNotLoadedHtml();
    console.error(error);
  }
  removeLoadingOverlay();
}

async function fetchPokemonDetails(indexSinglePokemon) {
  const { showMoreBtnContainerRef, dataCouldNotLoadedContainerRef, showAllCardsContainerRef, loadingOverlayRef, cardOverlayFullScreenRef } =
    getIdRefs();
  const isLoadingOverlayActive = loadingOverlayRef.classList.contains('d-flex');
  if (!isLoadingOverlayActive) {
    showLoadingOverlay();
  }

  try {
    let pokemonUrl = singlePokemonArray[indexSinglePokemon].url;
    let SINGLE_POKEMON_URL = await fetch(pokemonUrl);
    pokemonDetails[indexSinglePokemon] = await SINGLE_POKEMON_URL.json();

    removeCouldNotLoadetMessage();
    checkButtonVisibility();
  } catch (error) {
    loadingOverlayRef.classList.remove('d-flex');
    showAllCardsContainerRef.classList.add('d-none');
    showMoreBtnContainerRef.classList.add('d-none');
    dataCouldNotLoadedContainerRef.innerHTML += templateDataCouldNotLoadedHtml();
    console.error(error);
  }
  removeLoadingOverlay();
}
