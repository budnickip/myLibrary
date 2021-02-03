import { books } from './loadBooks'
import deleteBook from './deleteBook'
import reloadBooks from './reloadBooks'

const editBook = () =>{
    const editIcons = [...document.querySelectorAll('.edit')]
    let copyBooks = []
    editIcons.forEach((item, index) =>{
        item.addEventListener('click', (e)=>{
            console.log(e.target.parentElement.parentElement.children[1])

            //var newInput = document.createElement('input')
            let title = `<input id="editTitle" class='editInput' value=${e.target.parentElement.parentElement.children[1].innerText}>`
            let author = `<input id="editAuthor" class='editInput' value=${e.target.parentElement.parentElement.children[2].innerText}>`
            let priority = `<input id="editPriority" class='editInput' value=${e.target.parentElement.parentElement.children[3].innerText}>`
            let category = `<select id="editCategory" value=${e.target.parentElement.parentElement.children[4].innerText}>
                <option value="crime">Kryminał</option>
                <option value="sci-fi">Science Fiction</option>
                <option value="fantasy">Fantastyka</option>
                <option value="poetry">Poezja</option>
                <option value="drama">Dramat</option>
                <option value="science">Nauki ścisłe</option>
            </select>`
            let newButton = `<button id="save">zapisz</button>`
            //e.target.parentElement.parentElement.parentElement.insertBefore(newInput, e.target.parentElement.parentElement)
            e.target.parentElement.parentElement.children[1].innerHTML = title
            e.target.parentElement.parentElement.children[2].innerHTML = author
            e.target.parentElement.parentElement.children[3].innerHTML = priority
            e.target.parentElement.parentElement.children[4].innerHTML = category
            e.target.parentElement.parentElement.children[5].innerHTML = newButton

            const saveButton2 = document.querySelector('#save')
            saveButton2 && saveButton2.addEventListener('click', (e)=>{
                copyBooks = [...books]
                var editedBook = {
                    index: index+1,
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
                console.log(books)
                reloadBooks()
                deleteBook()
            }) 
        })
    })
}
export default editBook