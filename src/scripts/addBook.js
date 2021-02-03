import {validateTitle, validateAuthor, validatePriority} from './validateForm'
import { books } from './loadBooks'
import deleteBook from './deleteBook'
import editBook from './editBook'
import reloadBooks from './reloadBooks'

export const addBook = () =>{
    const sendButton = document.querySelector('.contact-form__button')
    sendButton.addEventListener("click", function(event){
        let titleValidation = validateTitle()
        let authorValidation = validateAuthor()
        let priorityValidation = validatePriority()

        if(titleValidation && authorValidation && priorityValidation){
            const bookTitle = document.querySelector('#book-title')
            const bookAuthor = document.querySelector('#book-author')
            const bookPriority = document.querySelector('#book-priority')
            const bookCategory = document.querySelector('#book-category')
            
            let book = {
                        index: books.length+1,
                        title: bookTitle.value,
                        author: bookAuthor.value,
                        priority: bookPriority.value,
                        category: bookCategory.value,
                        edit: `<span class="edit fas fa-pen"></span>`,
                        delete: `<span class="delete fas fa-minus-circle"></span>`
                    }
            books.push(book)
            bookTitle.value = ''
            bookAuthor.value = ''
            bookPriority.value = 5
            bookCategory.value = 'crime'
            reloadBooks()
            event.preventDefault()
           
        }else{
            event.preventDefault()
        }
       
    })
}

