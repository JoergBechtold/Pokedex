function templateSingleCardHtml(indexPokemonList) {
  return /*html*/ `
        <div onclick="openFullScreenCardOverlay(${indexPokemonList})" id="single_card_${indexPokemonList}" class="single-card">
          <div class="headline-card">
            <span>#${singlePokemonArray[indexPokemonList].number}</span>
            <span class="text-wrap">${singlePokemonArray[indexPokemonList].name}</span>
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
   <div onclick="eventBubbling(event)" class="card-container-full-screen">
            <div id="content_full_screen_${indexPokemonList}" class="content-full-screen">
              <div id="headline_container_full-scren" class="headline-container-full-screen">
                <span id="headline_number_full_screen_${indexPokemonList}" class="headline-number-full-screen"
                  >#${singlePokemonArray[indexPokemonList].number}</span
                >
                <div id="headline_name_full_screen_${indexPokemonList}" class="headline-name-full-screen">
                  <span id="headline_name${indexPokemonList}">${singlePokemonArray[indexPokemonList].name}</span>
                </div>
                <div class="close-btn">
                  <img onclick="closeFullScreenCardOverlay()" src="assets/icons/icon-close-50.png" alt="Button zum schließen" />
                </div>
              </div>

              <div id="information_container" class="information-container">
                <div id="information_img_${indexPokemonList}" class="information-img">
                  <img
                    src="${pokemonDetails[indexPokemonList].sprites.other['official-artwork'].front_default}"
                    alt="Bild von ${singlePokemonArray[indexPokemonList].name}"
                  />
                </div>
                <div id="information_text" class="information-text">
                  <span
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, mollitia doloremque eum voluptates rerum possimus, tempora et
                    repellat ratione magnam ad nesciunt voluptatum dolorem, cum sapiente provident laboriosam fuga aperiam.</span
                  >
                </div>
                <div id="infomration_table" class="information-table">
                  <table>
                    <tr>
                      <th>Größe</th>
                      <th>Kategorie</th>
                    </tr>
                    <tr>
                      <td>0,7 m</td>
                      <td>Samen</td>
                    </tr>
                    <tr>
                      <th>Gewicht</th>
                      <th>Fähigkeiten</th>
                    </tr>
                    <tr>
                      <td>6,9 kg</td>
                      <td>Notdünger <span class="question-mark">?</span></td>
                    </tr>
                    <tr>
                      <th>Geschlecht</th>
                      <td></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
  `;
}
