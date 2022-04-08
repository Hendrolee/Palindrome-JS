// reverse()
// gsub() - compare strings, ignoring other elements i.e. ('!', ',', ':')

const word = 'racecar'
// wordArray.replace(/ /g, '')

const palindrome = (word) => {
  const stringReversed = word.split('').reverse().join('').toUpperCase().replace(/[^a-zA-Z ]|\s/g, '')
  const string = word.replace(/[^a-zA-Z ]|\s/g, '').toUpperCase()
  // const wordJoin = wordArray.join('').toUpperCase().replace(/[^a-zA-Z ]|\s/g, '')

  // console.log(word.replace(/[^a-zA-Z ]|\s/g, '').toUpperCase())
  // console.log(wordJoin.replace(/[^a-zA-Z ]|\s/g, ''))

  // word.replace(/[^a-zA-Z ]|\s/g, '').toUpperCase() === wordJoin.replace(/[^a-zA-Z ]|\s/g, '') ?
  //   console.log('T') : console.log('F')

  return string === stringReversed
}
console.log(palindrome('hello'))

