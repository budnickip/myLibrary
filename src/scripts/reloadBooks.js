import { books } from './loadBooks'
import deleteBook from './deleteBook'
import editBook from './editBook'
import categoryCounter from './categoryCounter'
import dragBook from './dragBook'

const reloadBooks = () =>{
    localStorage.setItem('table', JSON.stringify(books))
    const tableBody = document.querySelector('.table-body')
    let row = ''
    books.forEach((bookItem, index) =>{
        row += `<tr class="table-body__row" draggable="true">
                <td class="table-body__item">${bookItem.index}</td>
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
    editBook()
    categoryCounter()
    dragBook()
}

export default reloadBooks