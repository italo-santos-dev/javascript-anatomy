function escopo() {
    const form = document.querySelector('.formulario')

    function recebeEvent(event) {
        event.preventDefault();

        const name = form.querySelector('.nome');
        const sobreName = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        console.log(name.value, sobreName.value, peso.value, altura.value);
    }

    form.addEventListener('submit', recebeEvent)
}

escopo();