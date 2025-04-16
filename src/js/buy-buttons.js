const buyButtons = document.querySelectorAll('button.buy-btn')

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('quantity-btn')) {
            // não mudar seus estilos
            return
        }

        const newButton = button.cloneNode(false)
        newButton.classList.add('quantity-btn')
        newButton.innerText = ''

        const minusBtn = document.createElement('img')
        minusBtn.classList.add('minus-btn')
        minusBtn.src = '/minus.svg'
        minusBtn.height = 12
        newButton.appendChild(minusBtn)

        const numberEl = document.createElement('span')
        numberEl.classList.add('count')
        numberEl.innerText = 1
        newButton.appendChild(numberEl)

        const plusBtn = document.createElement('img')
        plusBtn.classList.add('plus-btn')
        plusBtn.src = '/plus.svg'
        plusBtn.height = 12
        newButton.appendChild(plusBtn)

        minusBtn.addEventListener('click', () => {
            const result = Number(numberEl.innerText) - 1
            if (result === 0) {
                newButton.replaceWith(button)
                button.innerText = 'Comprar'
                button.classList.remove('quantity-btn')
            } else {
                numberEl.innerText = result
            }
        })

        plusBtn.addEventListener('click', () => {
            const result = Number(numberEl.innerText) + 1
            numberEl.innerText = result
        })

        button.replaceWith(newButton)
    })
})
