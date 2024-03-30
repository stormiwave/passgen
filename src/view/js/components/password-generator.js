function makeRandomPass (form) {
  let result = ''
  const characters = charSelector(form.passCharacters, form.symbolCharacters)
  const charactersLength = characters.length
  let counter = 0
  while (counter < form.passLength) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

function charSelector (charSelection, symbolCharacters) {
  let characters = ''

  if (charSelection.upperCase) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  if (charSelection.lowerCase) {
    characters = characters + 'abcdefghijklmnopqrstuvwxyz'
  }
  if (charSelection.numbers) {
    characters = characters + '0123456789'
  }
  if (charSelection.symbols) {
    characters = characters + symbolCharacters
  }
  return characters
}

function insertText (textarea, text) {
  textarea.value = text.join('\n')
  const cont = textarea.value.split('\n')
  document.querySelector('pre').innerText = new Array(cont.length).fill(0).map((_, i) => i + 1).join('\n')
};

function cleanText (textarea) {
  textarea.value = ''
};

export function generatePassword (form) {
  const textarea = document.getElementById('allpass')
  cleanText(textarea)

  const passwords = []
  for (let i = 0; i < form.passQty; i++) {
    passwords.push(makeRandomPass(form))
  }

  insertText(textarea, passwords)
}
