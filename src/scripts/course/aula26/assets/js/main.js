const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputWeight = event.target.querySelector('#peso');
    const inputHeight = event.target.querySelector('#altura');
    
    const weight = Number(inputWeight.value);
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
    const levelImc = getLevelImc(imc);

    const msg = `Seu imc é ${imc} (${levelImc})`;

    setResult(msg, true);
});

function getLevelImc(imc) {
    const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
     'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

     if (imc >= 39.9) return level[5]; 
     if (imc >= 34.9) return level[4];
     if (imc >= 29.9) return level[3];
     if (imc >= 24.9) return level[2];
     if (imc >= 18.5) return level[1];
     if (imc < 18.5) return level[0];
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

    if (isValid) {
        paragraph.classList.add('paragrafo-resultado');
    } else {
        paragraph.classList.add('bad');
    }

    paragraph.innerHTML = msg;
    result.appendChild(paragraph);
}