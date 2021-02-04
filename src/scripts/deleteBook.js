import editBook from './editBook'
import { books } from './loadBooks'
import reloadBooks from './reloadBooks'

const deleteBook = () =>{
    const deleteIcons = [...document.querySelectorAll('.delete')]
    let counter = JSON.parse(localStorage.getItem('counter'))
    let copyBooks = []
    deleteIcons.forEach((item, index) =>{
        item.addEventListener('click', ()=>{
              copyBooks = [...books.slice(0, index).concat(...books.slice(index+1))];
              books.length = 0;
              copyBooks.forEach((item,index) =>{
                item.index = index+1
                books.push(item)
              })
              counter--
              localStorage.setItem('counter', JSON.stringify(counter))
              reloadBooks()
        })
    })
}
export default deleteBook