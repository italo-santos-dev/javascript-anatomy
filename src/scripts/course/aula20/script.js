function escopo() {
    const form = document.querySelector('.formulario');
    const meng = document.querySelector('.mensagem');

    const people = [];

    function recebeEvent(event) {
        event.preventDefault();

        const name = form.querySelector('.nome');
        const sobreName = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        people.push({
            name: name.value,
            sobreName: sobreName.value,
            peso: peso.value,
            altura: altura.value
        });
        
        meng.innerHTML += name.value + " " + sobreName.value + " " + peso.value + " " +altura.value;
    }

    form.addEventListener('submit', recebeEvent)
}

escopo();