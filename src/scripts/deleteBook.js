import { books } from './loadBooks'
import reloadBooks from './reloadBooks'

const deleteBook = () =>{
    const deleteIcons = [...document.querySelectorAll('.delete')]
    let copyBooks = []
    deleteIcons.forEach((item, index) =>{
        item.addEventListener('click', ()=>{
              copyBooks = [...books.slice(0, index).concat(...books.slice(index+1))];
              books.length = 0;
              copyBooks.forEach(item =>{
                books.push(item)
              })

              reloadBooks()
              deleteBook()
        })
    })
}
export default deleteBook