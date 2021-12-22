import inquirer from 'inquirer'

const PROMPT = inquirer.createPromptModule()

export default class InquirerAPI {
  askUserSequense (validate, steps) {
    PROMPT({
      message: 'Try again:',
      name: 'input',
      type: 'input'
    }).then(answer => {
      const userInput = answer.input.split(' ')
      validate(userInput, steps)
    }).catch(err => console.log(err))
  }

  async getUserMove (steps) {
    const answer = await PROMPT({
      message: 'Choose your move:',
      name: 'user move',
      type: 'list',
      choices: [...steps.map((step, i) => `${i + 1}: ${step}`), '0: exit', '?: help']
    })
    return answer
  }
}
