module.exports = function (num) {
  return num % 3 === 0
    ? (num % 5 === 0 ? 'fizzbuzz' : 'fizz')
    : (num % 5 === 0 ? 'buzz' : num)
}
