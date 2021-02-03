export const books = JSON.parse(localStorage.getItem('table') || '[]');

const loadBooks = () =>{
    const tableBody = document.querySelector('.table-body')
    let row = ''
    books.forEach((bookItem, index) =>{
        row += `<tr class="table-body__row">
        <td class="table-body__item">${index}</td>
        <td class="table-body__item">${bookItem.title}</td>
        <td class="table-body__item">${bookItem.author}</td>
        <td class="table-body__item">${bookItem.priority}</td>
        <td class="table-body__item">${bookItem.category}</td>
        </tr>` 
    }) 

    tableBody.innerHTML = row
}

export default loadBooks