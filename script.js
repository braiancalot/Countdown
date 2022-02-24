const btnAbrirModal = document.querySelector(".button-open")
const modal = document.querySelector(".modal-container")

function abrirModal(){
    modal.classList.add('active')
    modal.addEventListener('click', event => {
        console.log(event.target.className)
        if(event.target.className === 'button-close' || event.target.className === 'modal-container active'){
            modal.classList.remove('active')
        }
    })
}


btnAbrirModal.addEventListener('click', abrirModal)
