class WithGetSet {
    #msg = 'hello world'
    get msg() {
        return this.#msg
    }
    set msg(x) {
        this.#msg = `hello ${x}`
    }
}

const instance = new WithGetSet()
console.log(instance.msg)

instance.msg = 'Stef'
console.log(instance.msg)