// Dark Mode 

const html = document.querySelector('html')
const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', () => {
    html.classList.toggle('dark')
})

// Script

const Modal = {
    open(){
        // Abrir Modal
        // Adicionar a class active ao modal
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        // Fechar Modal
        // Remover a class active do modal
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}