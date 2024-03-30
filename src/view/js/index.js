import { Form } from './components/form.js'
import { generatePassword } from './components/password-generator.js'
import { copyPassword, downloadAsTxt } from './components/results.js'

const form = new Form()

function init () {
  console.log('Initialization tasks being performed')

  const generateBtn = document.getElementById('generate')
  generateBtn.addEventListener('click', () => {
    runGeneratePassword()
  })

  const copyBtn = document.getElementById('copy')
  copyBtn.addEventListener('click', () => copyPassword())

  const downloadTxt = document.getElementById('download')
  downloadTxt.addEventListener('click', () => downloadAsTxt())

  const textarea = document.getElementById('allpass')
  const pre = document.querySelector('pre')
  const textareaStyles = window.getComputedStyle(textarea);
  [
    'fontFamily',
    'fontSize',
    'fontWeight',
    'letterSpacing',
    'lineHeight'
  ].forEach((property) => {
    pre.style[property] = textareaStyles[property]
  })

  textarea.addEventListener('scroll', () => {
    pre.scrollTop = textarea.scrollTop
  })

  textarea.addEventListener('input', e => {
    const cont = e.target.value.split('\n')
    pre.innerText = new Array(cont.length).fill(0).map((_, i) => i + 1).join('\n')
  })

  runGeneratePassword()
  console.log('Initialization tasks finished')
}

init()

function runGeneratePassword () {
  form.passQty = document.getElementById('pass-qty').value
  form.passLength = document.getElementById('pass-length').value
  form.passCharacters.numbers = document.getElementById('char-numbers').checked
  form.passCharacters.lowerCase = document.getElementById('char-lower').checked
  form.passCharacters.upperCase = document.getElementById('char-upper').checked
  form.passCharacters.symbols = document.getElementById('char-symbols').checked
  form.symbolCharacters = document.getElementById('spec-chars').value
  generatePassword(form)
}
