import { books } from './loadBooks'
import deleteBook from './deleteBook'
import reloadBooks from './reloadBooks'
import {validateEditTitle, validateEditAuthor, validateEditPriority} from './validateEdit'
import validateEdit from './validateEdit'

const editBook = () =>{
    const editIcons = [...document.querySelectorAll('.edit')]
    let copyBooks = []
    editIcons.forEach((item, index) =>{
        item.addEventListener('click', (e)=>{

            //var newInput = document.createElement('input')
            let title = `<input id="editTitle" class='editInput' value=${e.target.parentElement.parentElement.children[1].innerText}>`
            let author = `<input id="editAuthor" class='editInput' value=${e.target.parentElement.parentElement.children[2].innerText}>`
            let priority = `<input id="editPriority" class='editInput' value=${e.target.parentElement.parentElement.children[3].innerText}>`
            let categories = JSON.parse(localStorage.getItem('categories'))
            let categoryList = ''
            categories.forEach(item=>{
              categoryList += `<option value="${item}">${item}</option>`      
            })
            let category = `<select id="editCategory" value=${e.target.parentElement.parentElement.children[4].innerText}>
                ${categoryList}
            </select>`
            let newButton = `<button id="save" class="save-button">zapisz</button>`
            //e.target.parentElement.parentElement.parentElement.insertBefore(newInput, e.target.parentElement.parentElement)
            e.target.parentElement.parentElement.children[1].innerHTML = title
            e.target.parentElement.parentElement.children[2].innerHTML = author
            e.target.parentElement.parentElement.children[3].innerHTML = priority
            e.target.parentElement.parentElement.children[4].innerHTML = category
            e.target.parentElement.parentElement.children[5].innerHTML = newButton

            const saveButton2 = document.querySelector('#save')
            saveButton2 && saveButton2.addEventListener('click', (e)=>{
                validateEdit()
                let titleValidation = validateEditTitle()
                let authorValidation = validateEditAuthor()
                let priorityValidation = validateEditPriority()
                if(titleValidation && authorValidation && priorityValidation){
                    copyBooks = [...books]
                    var editedBook = {
                        index: e.target.parentElement.parentElement.children[0].innerHTML,
                        title: document.querySelector('#editTitle').value,
                        author: document.querySelector('#editAuthor').value,
                        priority: document.querySelector('#editPriority').value,
                        category: document.querySelector('#editCategory').value,
                        edit: `<span class="edit fas fa-pen"></span>`,
                        delete: `<span class="delete fas fa-minus-circle"></span>`
                    }
                    copyBooks[index]=editedBook
                   
                    books.length = 0;
                    copyBooks.forEach(item =>{
                         books.push(item)
                    })
                    reloadBooks()
                }
            }) 
        })
    })
}
export default editBook