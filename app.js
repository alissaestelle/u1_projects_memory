const cOne = document.querySelector('#one')
const cTwo = document.querySelector('#two')

const turnCard = (button, image) => {
  button.style.backgroundImage = image
  button.style.backgroundSize = '175px 175px'
  button.style.backgroundRepeat = 'no-repeat'
  button.style.backgroundPosition = 'center'
}

cOne.addEventListener('click', () => {
  turnCard(cOne, "url('https://imgur.com/4I84VuB.jpg')")
})

cTwo.addEventListener('click', () => {
  turnCard(cTwo, "url('https://imgur.com/rAzmj18.jpg')")
})

// const assignListeners = (arr) => {
//   arr.forEach((elem) => {
//     arr.addEventListener('click', () => {
//       turnCard(elem)
//     })
//   })
// }

// Images
// Card One: "url('https://imgur.com/4I84VuB.jpg')"
