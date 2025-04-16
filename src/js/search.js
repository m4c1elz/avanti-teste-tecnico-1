const searchBtn = document.querySelector('img.search-btn')

searchBtn.addEventListener('click', () => {
    const searchInput = document.querySelector('input.search-input')
    const searchText = searchInput.value.trim()

    if (searchText.length > 0) {
        alert(`Você buscou por: ${searchText}`)
        return
    }

    alert('Você não buscou por nada.')
})
