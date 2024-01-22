export async function copyPassword () {
  const password = document.getElementById('allpass').value
  try {
    await navigator.clipboard.writeText(password)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

export function downloadAsTxt () {
  try {
    const password = document.getElementById('allpass').value
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(password))
    element.setAttribute('download', 'your-pass.txt')
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  } catch (err) {
    console.error('Faile to download: ', err)
  }
}
