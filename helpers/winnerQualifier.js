export default class WinnerQualifier {
  findWinner (userMove, computerMove, userSequense, HMACkey) {
    console.log(`Computer's move: ${computerMove}`)
    console.log(`Your move: ${userMove}`)

    const userMoveID = userSequense.indexOf(userMove)
    const computerMoveID = userSequense.indexOf(computerMove)
    const center = Math.floor(userSequense.length / 2)

    if (userMoveID === computerMoveID) console.log('-------- DRAW --------')

    else if (userMoveID <= center && computerMoveID <= center) {
      if (userMoveID === 0) console.log('-------- YOU WIN --------')
      else if (computerMoveID < userMoveID) {
        console.log('-------- COMPUTER WINS --------')
      } else {
        console.log('-------- YOU WIN --------')
      }
    } else if (userMoveID > center && computerMoveID > center) {
      if (userMoveID > computerMoveID) {
        console.log('-------- YOU WIN --------')
      } else {
        console.log('-------- COMPUTER WINS --------')
      }
    } else if (userMoveID <= center && computerMoveID > center) {
      if (computerMoveID - userMoveID > center) {
        console.log('-------- COMPUTER WINS --------')
      } else {
        console.log('-------- YOU WIN --------')
      }
    } else if (userMoveID > center && computerMoveID <= center) {
      if (userMoveID - computerMoveID > center) {
        console.log('-------- YOU WIN --------')
      } else {
        console.log('-------- COMPUTER WINS --------')
      }
    }
    console.log(`HMAC key: ${HMACkey}`)
  }
}
