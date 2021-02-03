import { books } from './loadBooks'

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

              localStorage.setItem('table', JSON.stringify(books));
              const tableBody = document.querySelector('.table-body')
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
        })
    })
}
export default deleteBook