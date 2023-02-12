const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Event previnido');
    setResult('hello world');
});

function setResult(msg) {
    const result = document.querySelector('#resultado');
    result.innerHTML = '';

    const p = document.createElement('p');
    p.innerHTML = 'test';
    result.appendChild(p);
}