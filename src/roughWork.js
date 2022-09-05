
// // ********** my unused code and rough work *********

// const myUlList = document.querySelector('ul')
// // const liClassName = document.getElementsByClassName('card')
// // const liClassName = document.querySelector('li')

// const liClassName = myUlList.getElementsByTagName('li')

//  data.forEach( () => {
//     const myLi = document.createElement('li')
//     myLi.classList.add('card')
//     myUlList.append(myLi)   
// })


// function pokemonName () {

// const items = myUlList.getElementsByTagName("li");
// for (var i = 0; i < items.length; ++i) {
//   const pokemonName = document.createElement('h2')
//   pokemonName.classList.add('card--title')
//   pokemonName.textContent = "hello"
//   myUlList.append(pokemonName)
//   console.log(pokemonName)
// }

// }

// pokemonName ()


// var items = myUlList.getElementsByTagName("li");
// for (var i = 0; i < items.length; ++i) {
//   const pokemonName = document.createElement('h2')
//   pokemonName.classList.add('card--title')
//   pokemonName.textContent = "hello"
//   myUlList.append(pokemonName)
//   console.log(pokemonName)
// }





// function addTitle(){
//     for(let i = 0; i <= data.length; i++) {
//         // console.log(liClassName)
//         let pokemonName = document.createElement('h2')
//         pokemonName.classList.add('card--title')
//         pokemonName.textContent = data[i].name
//         // console.log(pokemonName)
//         liClassName.append(pokemonName)
//     }
//     return pokemonName
// }

// addTitle()





// for (var i = 0; i < data.length; ++i) {
//     const nameText = data[i].name
//     items.append(nameText)
//     // console.log(nameText)
//   }


// data.forEach( names => {
//     const liClassName = document.querySelector('.card');
//     let pokemonName = document.createElement('h2')
//     pokemonName.classList.add('card--title')
//     pokemonName.textContent = names.name
//     liClassName.append(pokemonName)
//     console.log(pokemonName)

// })

// function addTitle(){
//     for(let i = 0; i < data.length; i++) {
//         const liClassName = document.querySelector('.card')
//         let pokemonName = document.createElement('h2')
//         pokemonName.classList.add('card--title')
//         pokemonName.textContent = data[i].name
//         liClassName.append(pokemonName)
//     }
// }

// addTitle()



// function addTitle(){
//     for(let i = 0; i < data.length; i++) {
//         const liClassName = document.querySelector('li')
//         let pokemonName = document.createElement('h2')
//         pokemonName.classList.add('card--title')
//         pokemonName.textContent += data[i].name
//         liClassName.prepend(pokemonName)
//     }
// }

// addTitle()



// const addH2ToLi = data.forEach(() => {
//     const myH2 = document.createElement('h2')
//     myH2.classList.add('card--title')
//     myH2.innerHTML = data[1]
//     myUlList.append(myH2)

// })