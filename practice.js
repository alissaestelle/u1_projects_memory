const sailorGuardians = [
  'https://imgur.com/KMOWFgV.jpg',
  'https://imgur.com/Alnxq5q.jpg',
  'https://imgur.com/uEsruxa.jpg',
  'https://imgur.com/M40MaoN.jpg',
  'https://imgur.com/tz2Tviz.jpg',
  'https://imgur.com/q9QSSYa.jpg',
  'https://imgur.com/boZ9C0p.jpg',
  'https://imgur.com/lrPz8Bt.jpg',
  'https://imgur.com/VJ4dhIQ.jpg',
  'https://imgur.com/KMOWFgV.jpg',
  'https://imgur.com/Alnxq5q.jpg',
  'https://imgur.com/uEsruxa.jpg',
  'https://imgur.com/M40MaoN.jpg',
  'https://imgur.com/tz2Tviz.jpg',
  'https://imgur.com/q9QSSYa.jpg',
  'https://imgur.com/boZ9C0p.jpg',
  'https://imgur.com/lrPz8Bt.jpg',
  'https://imgur.com/VJ4dhIQ.jpg'
]

const cardLogo = 'https://imgur.com/u2TG8t3.jpg'

let prevIdx = null
let flipCount = 0
let score = 0
let totalTurns = 0

const turnDisplay = document.querySelector('#total-turns')
const matchDisplay = document.querySelector('#matches')
const resetButton = document.querySelector('.reset')

const flipCard = (div, img, idx) => {
  if (div.classList.contains('flipped')) {
    console.log('A card has been flipped!')
  } else {
    div.className = 'flipped'
    img.src = sailorGuardians[idx]
    img.className = 'card-style'
    flipCount++
    if (flipCount === 1) {
      prevIdx = idx
      //  null = [0]
      //  [0] = [1]
    } else if (flipCount === 2) {
      totalTurns++
      turnDisplay.innerText = totalTurns
      checkMatch(img, idx)
    }
  }
}

const checkMatch = (img, idx) => {
  if (sailorGuardians[idx] === sailorGuardians[prevIdx]) {
    score++
    matchDisplay.innerText = score
  } else {
    setTimeout(() => {
      let prevCard = document.getElementById(`card-${prevIdx}`)
      let curCard = document.getElementById(`card-${idx}`)
      prevCard.firstElementChild.src = cardLogo
      curCard.firstElementChild.src = cardLogo
      curCard.classList.toggle('flipped')
      prevCard.classList.toggle('flipped')
    }, 1000)
  }
  flipCount = 0
}

const createBoard = () => {
  sailorGuardians.forEach((guardian, idx) => {
    let cardTop = document.createElement('img')
    cardTop.src = cardLogo
    cardTop.className = 'card-style'

    let cardDiv = document.createElement('div')
    cardDiv.id = `card-${idx}`
    cardDiv.append(cardTop)
    document.querySelector('.grid').append(cardDiv)

    cardDiv.addEventListener('click', () => {
      flipCard(cardDiv, cardTop, idx)
    })
  })
}

resetButton.addEventListener('click', () => {
  // Fisher Yates Method Applied Here:
  sailorGuardians.sort(() => Math.random() - 0.5)
  // Source: JavaScript Info - Array Methods
  prevIdx = null
  flipCount = 0
  score = 0
  totalTurns = 0
})

createBoard()

// Deploy: Media Query?
