import {validateTitle, validateAuthor, validatePriority} from './validateForm'
import { books } from './loadBooks'
import reloadBooks from './reloadBooks'

export const addBook = () =>{
    const sendButton = document.querySelector('.contact-form__button')
    sendButton.addEventListener("click", function(event){
        let titleValidation = validateTitle()
        let authorValidation = validateAuthor()
        let priorityValidation = validatePriority()
        let counter = JSON.parse(localStorage.getItem('counter')) || 1
        if(titleValidation && authorValidation && priorityValidation){
            const bookTitle = document.querySelector('#book-title')
            const bookAuthor = document.querySelector('#book-author')
            const bookPriority = document.querySelector('#book-priority')
            const bookCategory = document.querySelector('#book-category')
            
            let book = {
                        index: counter,
                        title: bookTitle.value,
                        author: bookAuthor.value,
                        priority: bookPriority.value,
                        category: bookCategory.value,
                        edit: `<span class="edit fas fa-pen"></span>`,
                        delete: `<span class="delete fas fa-minus-circle"></span>`
                    }
            counter++
            localStorage.setItem('counter', JSON.stringify(counter))
            books.push(book)
            bookTitle.value = ''
            bookAuthor.value = ''
            bookPriority.value = 5
            bookCategory.value = 'kryminał'
            reloadBooks()
            event.preventDefault()
           
        }else{
            event.preventDefault()
        }
       
    })
}

