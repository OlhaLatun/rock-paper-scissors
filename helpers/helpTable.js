import Table from 'cli-table'

export default class HelpTable {
  constructor (userInput) {
    this.userInput = userInput
  }

  getStructuredWinLoseSequence () {
    const winLoseSequence = []
    const center = Math.floor(this.userInput.length / 2)

    this.userInput.forEach(el => {
      if (el === this.userInput[0]) {
        winLoseSequence.push('draw')
      } else if (this.userInput.indexOf(el) <= center) {
        winLoseSequence.push('win')
      } else {
        winLoseSequence.push('lose')
      }
    })

    const winLoseMatrix = []
    for (let i = 0; i < winLoseSequence.length; i++) {
      winLoseMatrix.push([
        ...winLoseSequence.slice(winLoseSequence.length - i),
        ...winLoseSequence.slice(0, winLoseSequence.length - i)])
    }

    const mapped = this.userInput.map((el, i) => {
      return { [`${el}`]: winLoseMatrix[i] }
    })

    return mapped
  }

  createTable () {
    const table = new Table({
      head: ['Computer -->', ...this.userInput]
    })

    table.push(...this.getStructuredWinLoseSequence())

    return table
  }
}
