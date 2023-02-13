const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputWeight = event.target.querySelector('');
});

function createParagraph (className) {
    const paragraph = document.createElement('p');
    return paragraph;
}

function setResult(msg) {
    const result = document.querySelector('#resultado');
    result.innerHTML = '';
    const paragraph = createParagraph();
}