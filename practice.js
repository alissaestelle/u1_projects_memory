const sailorGuardians = [
  'https://imgur.com/rmz0QP6.jpg',
  'https://imgur.com/PTjwCsw.jpg',
  'https://imgur.com/fDgT6qD.jpg',
  'https://imgur.com/6ZCY7we.jpg',
  'https://imgur.com/YqZJqKw.jpg',
  'https://imgur.com/PyXIgcL.jpg'
  //  'https://imgur.com/7m7H9QR.jpg'
]

// const randomCardArr = Math.floor(Math.random * cardArr.length)

const cardLogo = 'https://imgur.com/u2TG8t3.jpg'

let prevIdx = null
let flipCount = 0
let score = 0

const flipCard = (div, img, idx) => {
  if (div.classList.contains('flipped')) {
    console.log('This card is flipped!')
  } else {
    div.className = 'flipped'
    img.src = sailorGuardians[idx]
    flipCount++
    console.log(`Flip Count: ${flipCount}`)
    if (flipCount === 1) {
      prevIdx = idx
      //  null = [0]
      //  [0] = [1]
      console.log(`Previous Index: ${prevIdx}`)
      console.log(`Sailor Guardian Index is now: ${sailorGuardians[idx]}`)
    } else if (flipCount === 2) {
      checkMatch(img, idx)
    }
  }
}

const checkMatch = (img, idx) => {
  if (sailorGuardians[idx] === sailorGuardians[prevIdx]) {
    console.log('Test')
    score++
    console.log('Score: ', score)
  } else {
    setTimeout(() => {
      let prevCard = document.getElementById(`card-${prevIdx}`)
      let curCard = document.getElementById(`card-${idx}`)
      prevCard.firstElementChild.src = cardLogo
      curCard.firstElementChild.src = cardLogo
      curCard.classList.toggle('flipped')
      prevCard.classList.toggle('flipped')
    }, 2000)
  }
  flipCount = 0
}

const createBoard = () => {
  sailorGuardians.forEach((guardian, idx) => {
    let cardTop = document.createElement('img')
    cardTop.src = cardLogo
    // Make a CSS Class for Images
    cardTop.style.height = '200px'
    cardTop.style.width = '125px'

    let cardDiv = document.createElement('div')
    cardDiv.id = `card-${idx}`
    cardDiv.append(cardTop)
    document.body.append(cardDiv)
    // document.querySelector('.grid').append(cardDiv)

    cardDiv.addEventListener('click', () => {
      console.log(cardDiv)
      flipCard(cardDiv, cardTop, idx)
    })
  })
}

createBoard()
