const uri = 'https://mozilla.org/?x=шеллы'
const encoded = encodeURI(uri)
console.log(encoded)

try {
    console.log(decodeURI(encoded))
} catch (err) {
    console.error(err)
}