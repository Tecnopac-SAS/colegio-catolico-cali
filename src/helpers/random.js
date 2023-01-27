const POSSIBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const INTEGER = "0123456789"

const deterministic = (l) => {
  const length = POSSIBLE.length
  const index = POSSIBLE.indexOf(l)
  return (index + 1) / length
}

const makeId = (length=5) => {
  var text = ""
  for (var i = 0; i < length; i++) {
    text += POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length))
  }
  return text
}

const makeIdInteger = (length=5) => {
  var text = ""
  for (var i = 0; i < length; i++) {
    text += INTEGER.charAt(Math.floor(Math.random() * INTEGER.length))
  }
  return text
}

const integer = (min=1, max=100) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const makeUniq = (prefix="", length=5) => {
  return `${prefix}${makeId(length)}${Date.now()}`
}

module.exports = {
  makeId,
  integer,
  makeUniq,
  deterministic,
  makeIdInteger,
}
