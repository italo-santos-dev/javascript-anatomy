// function decorators

function direSalut() {
    console.log('Salut')
}

direSalut()

function sayHello(name) {
    console.log('Hello ' + name)
}

sayHello('Italo Santos')

function returnHi() {
    return 'Hi'
}

const greeting = returnHi()
console.log(greeting)

function returnHiTo(name) {
    return `Hi ${name}`
}

console.log(returnHiTo('Andrew'))

const decoder = new TextDecoder("utf-8");
const str = decoder.decode(Buffer.from([0xAA, 0xAA]));

console.log(str)