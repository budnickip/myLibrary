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
    let paragraph = '<h3>Licznik książek z danej kategorii</h3>'
    counter.forEach(category => {
        paragraph += `<p>${category.category}: <span class="counter-crime">${category.count}</span></p>`
    })
    paragraph += `<h3>Ilość dodanych książek:</h3><p>${books.length}</p>`
    counterDiv.innerHTML = paragraph
}

export default categoryCounter