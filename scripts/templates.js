function templateSingleCardHtml(pokeNumber, indexPokemonList) {
  return /*html*/ `
        <div onclick="openFullScreenCardOverlay(${indexPokemonList})" id="single_card_${indexPokemonList}" class="single-card">
          <div class="headline-card">
            <span>#${pokeNumber}</span>
            <span class="text-wrap">${pokeName}</span>
          </div>
          <div class="img-card" id="img_card_${indexPokemonList}">
            <img
              src="${pokemonDetails[indexPokemonList].sprites.other['home'].front_default}"
              alt="Bild von ${pokemonDetails[indexPokemonList].name}"
              id="pokemon_image_${indexPokemonList}"
            />
          </div>
          <div id="characteristics_container_${indexPokemonList}" class="characteristics-container">
           <span class="type-one bg-${typOne[indexPokemonList]}" id="type_one_${indexPokemonList}">${typOne[indexPokemonList]}</span>
           <span class="type-two bg-${typTwo[indexPokemonList]}" id="type_two_${indexPokemonList}">${typTwo[indexPokemonList]}</span>
          </div>
        </div>
    `;
}

function templateDataCouldNotLoadedHtml() {
  return /*html*/ `
    <span class="data-could-not-be-loaded" id="data_could_not_be_loaded">Pokemon konnten nicht geladen werden...</span> 
  `;
}

function templatePokemonCouldNotFoundHtml() {
  return /*html*/ `
    <span class="data-could-not-be-loaded" id="data_could_not_be_loaded">Pokemon konnten nicht gefunden werden...</span> 
  `;
}

function templateFullScreenCardHtml(indexPokemonList) {
  return /*html*/ `
    
  `;
}
