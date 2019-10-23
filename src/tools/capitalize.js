export default function toUpper(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => {
      return word[0].toUpperCase() + word.substr(1)
    })
    .join(" ")
}
