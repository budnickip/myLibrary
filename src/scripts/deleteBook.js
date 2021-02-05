import { books } from './loadBooks'
import reloadBooks from './reloadBooks'

const deleteBook = () =>{
    const deleteIcons = [...document.querySelectorAll('.delete')]
    let counter = JSON.parse(localStorage.getItem('counter'))
    let copyBooks = []
    deleteIcons.forEach(item =>{
        item.addEventListener('click', (e)=>{
              copyBooks = [...books.slice(0, e.target.parentElement.parentElement.children[0].innerHTML-1).concat(...books.slice(e.target.parentElement.parentElement.children[0].innerHTML))];
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