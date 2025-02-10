let fetchDataClobal = [];
let pokeNumber = 0;
let startOffsetLink = 0;
let endOffsetLink = 40;
let BASE_URL = '';

function initFunction() {
  loadData();
}

async function loadData() {
  try {
    let BASE_URL = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${endOffsetLink}&offset=${startOffsetLink}`);
    let responseAsJson = await BASE_URL.json();
    fetchDataClobal = responseAsJson;
    renderCards();

    checkButtonVisibility();
  } catch (error) {
    alert('Irgendwas stimmt nicht');
  }
}

function checkButtonVisibility() {
  let showMoreBtnContainerRef = document.getElementById('show_more_btn_container');
  let showAllCardsContainerRef = document.getElementById('show_all_cards_container');
  if (endOffsetLink >= 120) {
    showMoreBtnContainerRef.style.display = 'none';
    showAllCardsContainerRef.style.paddingBottom = '50px';
  }
}

function onclickLoadNextFortyData() {
  startOffsetLink += 40;
  endOffsetLink += 40;
  loadData();
}

function renderCards() {
  let showAllCardsContainerRef = document.getElementById('show_all_cards_container');
  showAllCardsContainerRef.innerHTML = '';

  for (let i = 0; i < fetchDataClobal.results.length; i++) {
    let pokeName = fetchDataClobal.results[i].name;
    pokeNumber = i + 1;

    showAllCardsContainerRef.innerHTML += /*html*/ `

        <div class="singleCard">
            <div class="headline-card">
              <span>#${pokeNumber}</span>
              <span class="text-wrap">${pokeName}</span>
            </div>
            <div class="img-card">
              <img src="assets/img/pokemon1.png" alt="Bild vom Pokemon.." />
              <!-- <img src="assets/img/bild1.gif" alt="Bild vom Pokemon.." /> -->
            </div>
            <div class="characteristics">
              <span class="types-span">PFLANZE</span>
              <span class="types-span">Gift</span>
            </div>
          </div>
    `;
  }
}
