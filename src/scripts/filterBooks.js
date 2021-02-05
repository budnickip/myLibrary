import { books } from './loadBooks'
import reloadBooks from './reloadBooks'
import deleteBook from './deleteBook'
import editBook from './editBook'
import categoryCounter from './categoryCounter'

const filterBooks = () =>{
    const bookFilter = document.querySelector('#book-filter')
    const filterSelect = document.querySelector('.books-filter__select')
    const filterAuthor = document.querySelector('#books-filter__author')
    const filterPriority = document.querySelector('#books-filter__priority')
    const deleteFilters = document.querySelector('#delete-filters')
    const showFilters = document.querySelector('#show-filters')
    const filterDiv = document.querySelector('.books-filters')

    showFilters.addEventListener("click",()=>{
        filterDiv.style.display = "block"
        showFilters.style.display = "none"
    })

    bookFilter.addEventListener("click", ()=>{
        let tempBooks
        if(filterSelect.value){
            tempBooks = books.filter(book=>{
                return book.category === filterSelect.value
            })
        }
        if(filterAuthor.value){
            if(tempBooks){
                tempBooks = tempBooks.filter(book=>{
                    return book.author === filterAuthor.value
                })
            }else{
                tempBooks = books.filter(book=>{
                    return book.author === filterAuthor.value
                })
            }
        }
        if(filterPriority.value){
            if(tempBooks){
                tempBooks = tempBooks.filter(book=>{
                    return book.priority === filterPriority.value
                })
            }else{
                tempBooks = books.filter(book=>{
                    return book.priority === filterPriority.value
                })
            }
        }
        if(tempBooks) {
            const tableBody = document.querySelector('.table-body')
            let row = ''
            tempBooks.forEach((bookItem, index) =>{
                row += `<tr class="table-body__row">
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

            filterSelect.value = ''
            filterAuthor.value = ''
            filterPriority.value = ''

            filterDiv.style.display = "none"
            showFilters.style.display = "block"
        }
    })

    deleteFilters.addEventListener("click", reloadBooks)
}

export default filterBooks