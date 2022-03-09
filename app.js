const nodeList = document.querySelectorAll('button')
console.log(nodeList)
const buttonArray = Array.from(nodeList)
console.log(buttonArray)

let sailorGuardians = [
  "url('https://imgur.com/4I84VuB.jpg')",
  "url('https://imgur.com/rAzmj18.jpg')",
  "url('https://imgur.com/eKWUBnp.jpg)"
]

const usagiTsukino = "url('https://imgur.com/4I84VuB.jpg')"
const reiHino = "url('https://imgur.com/rAzmj18.jpg')"
const amiMizuno = "url('https://imgur.com/eKWUBnp.jpg)"

// Class Notes:
// const changeClass = (arr, idx) => {
//   arr.forEach((arr, idx) => {
//     if (idx === arr[0])
//   }
// }

const oddCards = buttonArray.filter((button, idx) => {
  return idx % 2 === 0
})
console.log(oddCards)

// const oddImages = oddCards.map((card) => {
//   card = sailorGuardians[0]
//   sailorGuardians[0]++
// })
// console.log(oddImages)

// for (let i = 0; i < sailorGuardians.length; i++) {
//   while (oddCards.length < 10) oddCards[0] = sailorGuardians[i]
//   oddCards[0]++
// }

const evenCards = buttonArray.filter((button, idx) => {
  return idx % 2 !== 0
})
console.log(evenCards)

const cOne = document.querySelector('#one')
// const cTwo = document.querySelector('#two')

// const turnCard = (button, image) => {
//   button.style.backgroundImage = image
//   button.style.backgroundSize = '100px 100px'
//   button.style.backgroundRepeat = 'no-repeat'
//   button.style.backgroundPosition = 'center'
// }

cOne.addEventListener('click', turnCard)

// cTwo.addEventListener('click', () => {
//   turnCard(cTwo, "url('https://imgur.com/rAzmj18.jpg')")
// })

// Brain Child Sanctuary:

// Logic/Research:

// Assigning the same image to two buttons at once, yet each button still waits for an individual click?
// Assigning image URLs to global variables? (didn't work on the first try)
// Randomize image URLs? How to control this, though? (so that each card has a match)

// Functions:

// const assignListeners = (arr) => {
//   arr.forEach((elem) => {
//     arr.addEventListener('click', () => {
//       turnCard(elem)
//     })
//   })
// }

// Images:

// Card One: "url('https://imgur.com/4I84VuB.jpg')"
