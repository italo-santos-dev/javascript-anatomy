class DispositoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
        this.ligado = false;
    }
}

const d1 = new DispositoEletronico('Smartphone')
d1.ligar();
d1.desligar()
d1.desligar()
console.log(d1)