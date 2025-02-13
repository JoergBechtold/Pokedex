function templateSingleCardHtml(pokeName, pokeNumber, indexPokemonList) {
  return /*html*/ `
        <div id="single_card_${indexPokemonList}" class="single-card">
          <div class="headline-card">
            <span>#${pokeNumber}</span>
            <span class="text-wrap">${pokeName}</span>
          </div>
          <div class="img-card" id="img_card_${indexPokemonList}">
            <img
              src="${pokemonDetails[indexPokemonList].sprites.other['official-artwork'].front_default}"
              alt="Bild von ${pokemonDetails[indexPokemonList].name}"
              id="pokemon_image_${indexPokemonList}"
            />
          </div>
          <div id="characteristics_container_${indexPokemonList}" class="characteristics-container"></div>
        </div>
    `;
}

function templateDataCouldNotLoadedHtml() {
  return /*html*/ `
    <span class="data-could-not-be-loaded" id="data_could_not_be_loaded">Pokemon konnten nicht geladen werden...</span> 
  `;
}
