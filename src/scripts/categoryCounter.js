import { books } from './loadBooks'

const categoryCounter = () =>{
    let crime = books.filter(book =>{
        return book.category === 'kryminał'
    })
    let sciFi = books.filter(book =>{
        return book.category === 'sci-fi'
    });
    let fantasy = books.filter(book =>{
        return book.category === 'fantastyka'
    });
    let poetry = books.filter(book =>{
        return book.category === 'poezja'
    });
    let drama = books.filter(book =>{
        return book.category === 'dramat'
    });
    let science = books.filter(book =>{
        return book.category === 'nauki ścisłe'
    });

    crime ? document.querySelector('.counter-crime').innerHTML = crime.length : ''
    sciFi ? document.querySelector('.counter-sci-fi').innerHTML = sciFi.length : ''
    fantasy ? document.querySelector('.counter-fantasy').innerHTML = fantasy.length : ''
    poetry ? document.querySelector('.counter-poetry').innerHTML = poetry.length : ''
    drama ? document.querySelector('.counter-drama').innerHTML = drama.length : ''
    science ? document.querySelector('.counter-science').innerHTML = science.length : ''
}

export default categoryCounter