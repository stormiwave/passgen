function makeid (length) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!";#$%&\'()*+,-./:;<=>?@[]^_`{|}~'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

function insertText (textarea, text) {
  const position = textarea.selectionStart
  const end = position + text.length
  textarea.setRangeText(text, 0, end, 'select')
};

export function generatePassword () {
  const password = (makeid(20))

  const textarea = document.getElementById('allpass')
  insertText(textarea, password)
}
