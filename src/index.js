// console.log(data);
// console.log(data[0]);


const myUnordered  = document.querySelector('ul')
function init (){
  for(let i = 0; i < data.length; i++) {
    const pokemon = data[i]
    console.log('pokemon does ', pokemon,i)
    
    const card = createCard()
    addTitle(card, pokemon)
    addImage(card, pokemon)
    addInfoList(card, pokemon)

    myUnordered.append(card)
  }
}


// create the Li 
function createCard() {
  const pokemonCard = document.createElement('li')
  pokemonCard.classList.add('card')
  return pokemonCard
}

// get h2 tag
function addTitle(card, pokemon) {
 const pokemonName = document.createElement('h2')
 pokemonName.classList.add('card--title')
 pokemonName.textContent = pokemon.name
 card.append(pokemonName)
//  return pokemonName
}

// add image to card
function addImage(card, pokemon) {
    const pokImage = document.createElement('img')
    pokImage.classList.add('card--img')
    pokImage.style.width = "256px";
    pokImage.setAttribute('src', pokemon.sprites.front_default)
    card.append(pokImage)
    // return pokImage
  }

  // add the ul to card
  function addInfoList(card, pokemon) {
    const ulPokemonInfo = document.createElement('ul')
    ulPokemonInfo.classList.add("card--text")
    addPokemonStats(ulPokemonInfo, pokemon)
    card.append(ulPokemonInfo)
    // return ulPokemonInfo
  }

// add info to li
function addPokemonStats(cardInfoList, pokemon) {
  for(let i = 0; i < pokemon.stats.length; i++) {
    const stat = pokemon.stats[i]
    const pokemonStatLi = document.createElement('li')
    pokemonStatLi.innerText = `${stat.stat.name.toUpperCase()}: ${String(stat.base_stat)}`
    cardInfoList.append(pokemonStatLi)
  }
}

init ()
