const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputWeight = event.target.querySelector('#peso');
    const inputHeight = event.target.querySelector('#altura');
    
    const weight = Number(inputHeight.value);
    const height = Number(inputHeight.value);

    if (!weight) {
        setResult('Weight invalid', false);
        return;
    };

    if (!height) {
        setResult('Height invalid', false);
        return;
    }; 

    const imc = getImc(weight,  height);
});

function getLevelImc(imc) {
    const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
     'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
}

function getImc(weight, height) {
    const imc = weight / height ** 2;
    return imc.toFixed(2);
}

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