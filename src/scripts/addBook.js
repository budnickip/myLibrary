import {validateTitle, validateAuthor, validatePriority} from './validateForm'
import { books } from './loadBooks'
import deleteBook from './deleteBook'

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
            const tableBody = document.querySelector('.table-body')
            let book = {
                        index: books.length+1,
                        title: bookTitle.value,
                        author: bookAuthor.value,
                        priority: bookPriority.value,
                        category: bookCategory.value,
                        edit: `<span class="edit fas fa-pen"></span>`,
                        delete: `<span id=${books.length+1} class="delete fas fa-minus-circle"></span>`
                    }
            books.push(book)
            bookTitle.value = ''
            bookAuthor.value = ''
            bookPriority.value = 5
            bookCategory.value = 'crime'
            localStorage.setItem('table', JSON.stringify(books));
            let row = ''
            books.forEach((bookItem, index) =>{
                row += `<tr class="table-body__row">
                <td class="table-body__item">${index+1}</td>
                <td class="table-body__item">${bookItem.title}</td>
                <td class="table-body__item">${bookItem.author}</td>
                <td class="table-body__item">${bookItem.priority}</td>
                <td class="table-body__item">${bookItem.category}</td>
                <td class="table-body__item">${bookItem.edit}</td>
                <td class="table-body__item">${bookItem.delete}</td>
                </tr>` 
            }) 
            tableBody.innerHTML = row
            deleteBook()
            event.preventDefault()
           
        }else{
            event.preventDefault()
        }
       
    })
}

