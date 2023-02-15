const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputWeight = event.target.querySelector('#peso');
    const inputHeight = event.target.querySelector('#altura');
    
    const weight = Number(inputHeight.value);
    const height = Number(inputHeight.value);

    if (!weight) {
        setResult( 'Weight invalid', false);
        return;
    };

    if (!height) {
        setResult( 'Height invalid', false);
        return;
    }; 

});

function createParagraph (className) {
    const paragraph = document.createElement('p');
    return paragraph;
}

function setResult(msg, isValid) {
    const result = document.querySelector('#resultado');
    result.innerHTML = '';
    const paragraph = createParagraph();
    paragraph.innerHTML = msg;
    result.appendChild(paragraph);
}