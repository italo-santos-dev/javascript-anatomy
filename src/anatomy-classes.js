class Retangulo {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.calcularArea()
    }

    calcularArea() {
        return this.altura * this.largura
    }
}

const retangulo = new Retangulo(10, 15)

console.log(retangulo.area)