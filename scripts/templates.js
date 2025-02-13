function templateSingleCardHtml(pokeName, pokeNumber, indexPokemonList) {
  return /*html*/ `
        <div id="single_card_${indexPokemonList}" class="single-card">
            <div class="headline-card">
              <span>#${pokeNumber}</span>
              <span class="text-wrap">${pokeName}</span>
            </div>
            <div class="img-card" id="img_card_${indexPokemonList}">
            <!-- <img src="assets/img/pokemon1.png" alt="Bild vom Pokemon.." /> -->
              <img src="" alt="Bild von ${pokeName}"id="pokemon_image_${indexPokemonList}" />
            </div>
            <div class="characteristics">
              <span class="types-span">PFLANZE</span>
              <span class="types-span">Gift</span>
            </div>
          </div>
    `;
}

function templateDataCouldNotLoadedHtml() {
  return /*html*/ `
    <span class="data-could-not-be-loaded" id="data_could_not_be_loaded">Pokemon konnten nicht geladen werden...</span> 
  `;
}
