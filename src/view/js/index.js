import { generatePassword } from './components/password-generator.js'
import { copyPassword, downloadAsTxt } from './components/results.js'

function init () {
  console.log('Initialization tasks being performed')

  const generateBtn = document.getElementById('generate')
  generateBtn.addEventListener('click', () => generatePassword())

  const copyBtn = document.getElementById('copy')
  copyBtn.addEventListener('click', () => copyPassword())

  const downloadTxt = document.getElementById('download')
  downloadTxt.addEventListener('click', () => downloadAsTxt())
}

init()
