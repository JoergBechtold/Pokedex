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
          <div id="information_img_container_${indexPokemonList}" class="information-img-container">
            <img
              src="${pokemonDetails[indexPokemonList].sprites.other['official-artwork'].front_default}"
              alt="Bild von ${singlePokemonArray[indexPokemonList].name}"
            />
          </div>

          <div class="information-right-content">
          <div id="gif_container_${indexPokemonList}" class="gif-container">
            <img src="${pokemonDetails[indexPokemonList].sprites.other['showdown'].front_default}" alt="Bokemon ${singlePokemonArray[indexPokemonList].name} Gif" />
          </div>

          <div id="characteristics_container_overlay_${indexPokemonList}" class="characteristics-container-overlay">
            <span class="characteristics-hedline">Typ</span>
            <div class="characteristics-type-container">
              <span class="type-one width-100 bg-${typOne[indexPokemonList]}" id="type_one_overlay_${indexPokemonList}">${typOne[indexPokemonList]}</span>
              <span class="type-two width-100 bg-${typTwo[indexPokemonList]}" id="type_two_overlay_${indexPokemonList}">${typTwo[indexPokemonList]}</span>
           </div>
          </div>



            <div id="information_text" class="information-text">
              <span
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, mollitia doloremque eum voluptates rerum possimus, tempora et repellat
                ratione magnam ad nesciunt voluptatum dolorem, cum sapiente provident laboriosam fuga aperiam.</span
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
               
              </table>
            </div>
          </div>
        </div>

        <div id="btn_container" class="btn-container">
          <div class="btn-content-left">
          <button id="btn_left" onclick="showPreviousPokemon(${indexPokemonList})" class="btn-left"><img src="assets/icons/icon-arrow-67.png" alt="Pfeil Links" /></button>
          </div>

          <div class="btn-content-right">
          <button id="btn_right" onclick="showNextPokemon(${indexPokemonList})" class="btn-right"><img src="assets/icons/icon-arrow-67.png" alt="Pfeil Rechts" /></button>
          </div>
        </div>
  </div>
    </div>
    
  `;
}
