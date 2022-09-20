const children = ['czerwony', 'zielony', 'niebieski', 'zolty']

const parent = document.createElement('div')
parent.classList.add('parent')

for(i=0; i<children.length; i++){
    const className = children[i]
    const div = document.createElement('div')
    div.classList.add('child')
    div.classList.add(className)
    parent.appendChild(div)
}
document.querySelector('body').appendChild(parent)