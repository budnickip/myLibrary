import { books } from './loadBooks'
import deleteBook from './deleteBook'
import editBook from './editBook'

const reloadBooks = () =>{
    localStorage.setItem('table', JSON.stringify(books))
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
    editBook()
}

export default reloadBooks