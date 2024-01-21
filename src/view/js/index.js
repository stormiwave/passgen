import { generatePassword } from './components/password-generator.js'

function init () {
  console.log('Initialization tasks being performed')

  const generateBtn = document.getElementById('generate')
  generateBtn.addEventListener('click', () => generatePassword())
}

init()
