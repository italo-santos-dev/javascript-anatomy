class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // metodos de instancia
    aumentarVolume() {
        this.volume += 2;
    }

    dimunuirVolume() {
        this.volume -= 2;
    }

    // metodos estático
    static canal() {
        console.log('Canal')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.canal();