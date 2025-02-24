async function fetchPokemonList() {
  // const { showMoreBtnContainerRef, dataCouldNotLoadedContainerRef, loadingOverlayRef } = getIdRefs();
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
    showLoadingError(error);
  }
  removeLoadingOverlay();
}

async function fetchPokemonDetails(indexSinglePokemon) {
  let url = singlePokemonArray[indexSinglePokemon].url;
  pokemonDetails[indexSinglePokemon] = await fetchData(url);
}

async function fetchSpeciesText(indexSinglePokemon) {
  let url = pokemonDetails[indexSinglePokemon].species.url;
  speciesText[indexSinglePokemon] = await fetchData(url);
}

async function fetchData(url) {
  const { loadingOverlayRef } = getIdRefs();
  const isLoadingOverlayActive = loadingOverlayRef.classList.contains('d-flex');
  if (!isLoadingOverlayActive) {
    showLoadingOverlay();
  }

  let json;
  try {
    let result = await fetch(url);
    json = await result.json();

    removeCouldNotLoadetMessage();
    checkButtonVisibility();
  } catch (error) {
    showLoadingError(error);
  }
  removeLoadingOverlay();
  return json;
}
