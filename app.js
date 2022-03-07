const cOne = document.querySelector('#one')
const cTwo = document.querySelector('#two')
// const cThree = document.querySelector('#three')

const turnCard = (button, image) => {
  button.style.backgroundImage = image
  button.style.backgroundSize = '175px 175px'
  button.style.backgroundRepeat = 'no-repeat'
  button.style.backgroundPosition = 'center'
}

cOne.addEventListener('click', () => {
  turnCard(cOne, "url('https://imgur.com/4I84VuB.jpg')")
  // turnCard(cThree, "url('https://imgur.com/4I84VuB.jpg')")
})

cTwo.addEventListener('click', () => {
  turnCard(cTwo, "url('https://imgur.com/rAzmj18.jpg')")
})

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
