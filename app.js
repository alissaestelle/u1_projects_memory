const nodeList = document.querySelectorAll('button')
console.log(nodeList)
const buttonArray = Array.from(nodeList)
console.log(buttonArray)

// const sailorGuardians = [
//   "url('https://imgur.com/4I84VuB.jpg')",
//   "url('https://imgur.com/Zm1Zitn.jpg')",
//   "url('https://imgur.com/rAzmj18.jpg')",
//   "url('https://imgur.com/7m7H9QR.jpg')"
// ]

const usagiTsukino = "url('https://imgur.com/lJbFee3.jpg')"
const amiMizuno = "url('https://imgur.com/Zm1Zitn.jpg')"
const reiHino = "url('https://imgur.com/rAzmj18.jpg')"
const makotoKino = "url('https://imgur.com/7m7H9QR.jpg')"
const minakoAino = "url('https://imgur.com/hkCfQs5.jpg')"
const chibiUsa = "url('https://imgur.com/G5UuUf0.jpg')"
const mamoruChiba = "url('https://imgur.com/1Zmm7TP.jpg')"

const oddCards = buttonArray.filter((button, idx) => {
  return idx % 2 === 0
})
console.log(oddCards)

// const cardImages = (i) => {
//   let sailorGuardians = [
//     "url('https://imgur.com/4I84VuB.jpg')",
//     "url('https://imgur.com/Zm1Zitn.jpg')",
//     "url('https://imgur.com/rAzmj18.jpg')",
//     "url('https://imgur.com/7m7H9QR.jpg')"
//   ]
//   for (let j = 0; j < 10; j++) {
//     ;[i].style.backgroundImage = sailorGuardians[j]
//     ;[i].style.backgroundSize = '100px 100px'
//     ;[i].style.backgroundRepeat = 'no-repeat'
//     ;[i].style.backgroundPosition = 'center'
//   }
// }

// for (let i = 0; i < oddCards.length; i++) {
//   oddCards[i].addEventListener('click', () => {
//     cardImages(i)
//   })
// }

// To-Do
// Flip Cards Back Over After Detection
// Randomize Board - Card Array

// Class Notes:
// const changeClass = (arr, idx) => {
//   arr.forEach((arr, idx) => {
//     if (idx === arr[0])
//   }
// }

// const evenCards = buttonArray.filter((button, idx) => {
//   return idx % 2 !== 0
// })
// console.log(evenCards)

const cOne = document.querySelector('#one')
const cTwo = document.querySelector('#two')
const cThree = document.querySelector('#three')
const cFour = document.querySelector('#four')
const cFive = document.querySelector('#five')
const cSix = document.querySelector('#six')
const cSeven = document.querySelector('#seven')

const turnCard = (button, image) => {
  button.style.backgroundImage = image
  button.style.backgroundSize = '225px 225px'
  button.style.backgroundRepeat = 'no-repeat'
  button.style.backgroundPosition = 'center'
}

cOne.addEventListener('click', () => {
  turnCard(cOne, usagiTsukino)
})

cTwo.addEventListener('click', () => {
  turnCard(cTwo, amiMizuno)
})

cThree.addEventListener('click', () => {
  turnCard(cThree, reiHino)
})

cFour.addEventListener('click', () => {
  turnCard(cFour, makotoKino)
})

cFive.addEventListener('click', () => {
  turnCard(cFive, minakoAino)
})

cSix.addEventListener('click', () => {
  turnCard(cSix, chibiUsa)
})

cSeven.addEventListener('click', () => {
  turnCard(cSeven, mamoruChiba)
})

// cFive.addEventListener('click', () => {
//   turnCard(cFive)
// })

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
