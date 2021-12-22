import InquirerAPI from './inquirerAPI.js'

const comandLine = new InquirerAPI()

function validateUserInput (input) {
  let isValid = false

  if (!input.length) {
    console.log('Whoops, you\'ve entered nothing. Try again!')
  } else if (input.length < 3) {
    console.log('Not enough steps. Should be 3 or more')
  } else if (input.length % 2 === 0) {
    console.log('You sould enter odd number of steps')
  } else if (input.filter((el, i) => input.indexOf(el) !== i).length >= 1) {
    console.log('Please, enter unique steps')
  } else {
    isValid = true
  }
  return isValid ? input : comandLine.askUserSequense(validateUserInput, input)
}

export { validateUserInput }
