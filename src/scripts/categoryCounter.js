import { books } from './loadBooks'

const categoryCounter = () =>{
    let categories = JSON.parse(localStorage.getItem('categories'))
    let counter = []
    categories.forEach(category =>{
        let result = books.filter(book=>{
            return book.category === category
        })
        counter.push({category: category, count: result.length})
    })

    const counterDiv = document.querySelector('.counter')
    let paragraph = '<h3 class="counter__header">Licznik książek z danej kategorii:</h3>'
    counter.forEach(category => {
        paragraph += `<p class="counter__paragraph">${category.category}: <span class="counter-crime">${category.count}</span></p>`
    })
    paragraph += `<h3 class="counter__header">Ilość dodanych książek:</h3><p class="counter__paragraph">${books.length}</p>`
    counterDiv.innerHTML = paragraph
}

export default categoryCounter