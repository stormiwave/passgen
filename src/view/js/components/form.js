export class Form {
  passQty
  passLength
  symbolCharacters
  passCharacters = {
    numbers: true,
    lowerCase: true,
    upperCase: true,
    symbols: true
  }

  #validateNumberPass () {
    if (!Number.isInteger(Number(this.passQty))) {
      window.alert('Please insert a whole number.')
      throw new Error('Validation Error. Not a whole number.')
    } else if (this.passQty > 500) {
      window.alert('The maximum Number of passwords is 500.')
      throw new Error('Validation Error. Max Number of passwords is 500.')
    } else if (this.passQty < 1) {
      window.alert('The minimum Number of passwords is 1.')
      throw new Error('Validation Error. Min Number of passwords is 1.')
    }
  }

  #validatePassLenght () {
    if (!Number.isInteger(Number(this.passQty))) {
      window.alert('Please insert a whole number.')
      throw new Error('Validation Error. Not a whole number.')
    } else if (this.passLength > 60) {
      window.alert('The maximum Password length is 60.')
      throw new Error('Validation Error. Max Password length is 60.')
    } else if (this.passLength < 4) {
      window.alert('The minimum Password length is 4.')
      throw new Error('Validation Error. Min Password length is 4.')
    }
  }

  validatePassQtyAndLenght () {
    this.#validateNumberPass()
    this.#validatePassLenght()
  }
}
