/*Criar um documento html onde tem um form, e nesse form input que o usuario vai colocar o nome, esse nome vai ser add em um lista que vai aparecer embaixo do input e 
cada nome vai precisar de um botão que vai remover o nome. Usar o preventDefault() */ 
const userName = document.querySelector('#name')

const form = document.querySelector('form')

const users = document.querySelector('#users')
let contador = 0

form.onsubmit = (event) => {
    event.preventDefault()

    const {value} = userName

    if(!value || !value.trim()){
        return
    }
    
    const item = document.createElement('li')
    const span = document.createElement('span')
    const button = document.createElement('button')
    const id = `id-${contador}`

    item.setAttribute('id', id)
    button.dataset.parentId = id
    button.onclick = remove
    button.setAttribute('class', 'remove')

    span.innerHTML = value
    item.appendChild(span)
    item.appendChild(button) 
    users.appendChild(item)
    
    userName.value = ""
    
    contador++
}

function removeFromList(id){
    let child = null

    for (let item of users.children){
        if(item.id === id){
            child = item
        }    
    }
    if(child != null){
        users.removeChild(child)
    }
}

function remove(event){
    removeFromList(event.target.dataset.parentId)
}
   