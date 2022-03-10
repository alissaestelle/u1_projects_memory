const cardArr = [
  'https://imgur.com/4I84VuB.jpg',
  'https://imgur.com/4I84VuB.jpg'
  // 'https://imgur.com/Zm1Zitn.jpg'
]

// const randomCardArr = Math.floor(Math.random * cardArr.length)

const cardBack = 'https://imgur.com/u2TG8t3.jpg'

let flippedIndex
let flipCount = 0
let score = 0

const flipCard = (mem, card, idx) => {
  if (mem.classList.contains('flipped')) {
    console.log('This card is flipped!')
  } else {
    mem.setAttribute('class', 'flipped')
    card.setAttribute('src', cardArr[idx])
    flipCount++
    console.log(flipCount)
    if (flipCount < 2) {
      flippedIndex = idx
    } else if (flipCount === 2) {
      checkMatch(idx)
    }
  }
}

const checkMatch = (idx) => {
  if (cardArr[idx] === cardArr[flippedIndex]) {
    score++
    console.log('Score: ', score)
  } else {
    let curCard = document.getElementById(`card-${idx}`)
    let prevCard = document.getElementById(`card-${flippedIndex}`)
    // Reset within set timeout
  }
  flipCount = 0
}

const createBoard = () => {
  cardArr.forEach((card, idx) => {
    let cardImage = document.createElement('img')
    cardImage.setAttribute('src', cardBack)

    let memCard = document.createElement('div')
    memCard.setAttribute('id', `card-${idx}`)
    memCard.append(cardImage)
    document.body.append(memCard)

    memCard.addEventListener('click', () => {
      flipCard(memCard, cardImage, idx)
    })
  })
}

createBoard()
