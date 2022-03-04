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