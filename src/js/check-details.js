// definir o estilo dos <details> com base na tela
function checkDetails() {
    const detailElements = document.querySelectorAll('footer details')
    detailElements.forEach(element => {
        // se a tela for grande, abrir os <details>
        if (window.innerWidth >= 1024) {
            element.open = true
        } else {
            // senão, fechar os <details>
            element.open = false
        }
    })
}

checkDetails()

window.addEventListener('resize', checkDetails)
