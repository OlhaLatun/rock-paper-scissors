import { validateUserInput } from './helpers/helpers.js'
import InquirerAPI from './helpers/inquirerAPI.js'
import HelpTable from './helpers/helpTable.js'
import WinnerQualifier from './helpers/winnerQualifier.js'
import HMACgenerator from './helpers/HMACgenerator.js'

const comandLine = new InquirerAPI()
const winner = new WinnerQualifier()
const HMAC = new HMACgenerator(32)
const HMACkey = HMAC.generateKey()

class RockPaperScissors {
  constructor () {
    this.userSequense = []
    this.userMove = ''
    this.computerMove = ''
    this.HMAC = ''
  }

  startGame () {
    this.setUserSequense(process.argv.slice(2))
    this.play()
  }

  setUserSequense (userSequense) {
    const sequence = this.userSequense = validateUserInput(userSequense)
    return sequence
  }

  play () {
    this.computerMove = this.getComputerMove()
    this.showMenu()
  }

  async showMenu () {
    await comandLine.getUserMove(this.userSequense)
      .then(move => {
        if (move['user move'].slice(3) === 'exit') this.stopGame()
        if (move['user move'].slice(3) === 'help') this.showHelpTable()
        else this.userMove = move['user move'].slice(3)
        winner.findWinner(this.userMove, this.computerMove, this.userSequense, HMACkey)
      }).catch(err => console.log(err))
  }

  getComputerMove () {
    const i = Math.floor(Math.random() * this.userSequense.length)
    const move = this.userSequense[i]
    this.HMAC = HMAC.generateHMAC(move, HMACkey)
    console.log(`HMAC: ${this.HMAC}`)
    return move
  }

  showHelpTable () {
    const table = new HelpTable(this.userSequense)
    console.log(table.createTable().toString())
    this.showMenu()
  }

  stopGame () {
    console.log('Ok, bye bye!')
    process.exit()
  }
}

const game = new RockPaperScissors()

game.startGame()
