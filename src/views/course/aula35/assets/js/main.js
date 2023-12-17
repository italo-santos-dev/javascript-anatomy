const elements = [
    {tag: 'p', texto: "Lorem lorem lorem"},
    {tag: 'div', texto: "Lorem 1"},
    {tag: 'section', texto: 'Lorem 2'},
    {tag: 'footer', texto: 'Lorem 4'}
]

const container = document.querySelector('.container');
const div = document.createElement('div');


for (let i = 0; i < elements.length; i++) {
    let {tag, texto} = elements[i];
    let tagCreate = document.createElement(tag);
    tagCreate.innerHTML = texto;
    div.appendChild(tagCreate);
}

container.appendChild(div);