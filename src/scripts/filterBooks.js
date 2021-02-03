import { books } from './loadBooks'

const filterBooks = () =>{
    const crime = document.querySelector('#category-filter')
    crime.addEventListener("click", ()=>{
        let tempBooks = books.filter(book=>{
            return book.category === "kryminał"
        })
        const tableBody = document.querySelector('.table-body')
        let row = ''
        tempBooks.forEach((bookItem, index) =>{
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

    })
}

export default filterBooks