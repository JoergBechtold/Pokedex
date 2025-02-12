function templateSingleCardHtml(pokeName, pokeNumber, indexPokemon) {
  return /*html*/ `
        <div id="single_card_${indexPokemon}" class="single-card">
            <div class="headline-card">
              <span>#${pokeNumber}</span>
              <span class="text-wrap">${pokeName}</span>
            </div>
            <div class="img-card">
              <img src="assets/img/pokemon1.png" alt="Bild vom Pokemon.." />
            </div>
            <div class="characteristics">
              <span class="types-span">PFLANZE</span>
              <span class="types-span">Gift</span>
            </div>
          </div>
    `;
}
