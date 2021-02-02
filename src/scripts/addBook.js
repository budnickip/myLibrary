export const books = []

export const addBook = () =>{
    const sendButton = document.querySelector('.contact-form__button')

    sendButton.addEventListener("click", function(event){
        const bookTitle = document.querySelector('#book-title')
        const bookAuthor = document.querySelector('#book-author')
        const bookPriority = document.querySelector('#book-priority')
        const bookCategory = document.querySelector('#book-category')
        const tableBody = document.querySelector('.table-body')
        let book = {title: bookTitle.value,
                    author: bookAuthor.value,
                    priority: bookPriority.value,
                    category: bookCategory.value,

                }
        books.push(book)
        bookTitle.value = ''
        bookAuthor.value = ''
        bookPriority.value = 5
        bookCategory.value = 'crime'
        console.log(books)
        
        const row = `<tr class="table-body__row">
        <td class="table-body__item">${books.length}</td>
        <td class="table-body__item">${book.title}</td>
        <td class="table-body__item">${book.author}</td>
        <td class="table-body__item">${book.priority}</td>
        <td class="table-body__item">${book.category}</td>
        </tr>`
        tableBody.innerHTML += row
        event.preventDefault()
    })
}