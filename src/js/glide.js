import Glide from '@glidejs/glide'

const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 5,
    breakpoints: {
        1440: {
            perView: 3,
        },
        1024: {
            perView: 2,
        },
    },
})

window.addEventListener('load', () => {
    glide.mount()
})
