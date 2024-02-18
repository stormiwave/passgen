import { Form } from './components/form.js'
import { generatePassword } from './components/password-generator.js'
import { copyPassword, downloadAsTxt } from './components/results.js'

function init () {
  console.log('Initialization tasks being performed')
  const form = new Form()

  const generateBtn = document.getElementById('generate')
  generateBtn.addEventListener('click', () => {
    form.passQty = document.getElementById('pass-qty').value
    form.passLength = document.getElementById('pass-length').value
    form.passCharacters.numbers = document.getElementById('char-numbers').checked
    form.passCharacters.lowerCase = document.getElementById('char-lower').checked
    form.passCharacters.upperCase = document.getElementById('char-upper').checked
    form.passCharacters.symbols = document.getElementById('char-symbols').checked
    generatePassword(form)
  })

  const copyBtn = document.getElementById('copy')
  copyBtn.addEventListener('click', () => copyPassword())

  const downloadTxt = document.getElementById('download')
  downloadTxt.addEventListener('click', () => downloadAsTxt())
  console.log('Initialization tasks finished')
}

init()
