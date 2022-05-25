function escopo() {
    const form = document.querySelector('.formulario')

    form.onsubmit = function (event) {
        event.preventDefault();
        console.log("Ainda é cedo")
    };
}

escopo();