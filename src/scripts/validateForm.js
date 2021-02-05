const validateForm = () =>{
    const title = document.querySelector('#book-title')
    const author = document.querySelector('#book-author')
    const priority = document.querySelector('#book-priority')

    title.addEventListener('keyup', validateTitle)
    author.addEventListener('keyup', validateAuthor)
    priority.addEventListener('keyup', validatePriority)
}

export const validateTitle = () =>{
    const title = document.querySelector('#book-title')

    if(title.value.length == 0){
        if(!title.classList.contains('titleInputError')){
            title.classList.add('titleInputError')
            let newError = createError('titleTextError', 'Book title should not be empty.')
            title.parentElement.insertBefore(newError, title.nextElementSibling)
        }
        return false
    }else{
        title.classList.remove('titleInputError')
        title.value = title.value.trim()
        document.querySelector('.titleTextError') ? document.querySelector('.titleTextError').remove() : ''
        return true;
    }
}

export const validateAuthor = () =>{
    const author = document.querySelector('#book-author')
    const regex = /[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż]{3,}/g

    if(!regex.test(author.value) || author.value.length == 0){
        if(!author.classList.contains('authorInputError')){
            author.classList.add('authorInputError')
            let newError = createError('authorTextError', 'Field book author should contain minimum 3 characters.')
            author.parentElement.insertBefore(newError, author.nextElementSibling)
        }
        return false
    }else{
        author.classList.remove('authorInputError')
        author.value = author.value.trim()
        document.querySelector('.authorTextError') ? document.querySelector('.authorTextError').remove() : ''
        return true;
    }
}

export const validatePriority = () =>{
    const priority = document.querySelector('#book-priority')
    if(priority.value > 5 || priority.value < 1){
        if(!priority.classList.contains('priorityInputError')){
            priority.classList.add('priorityInputError')
            let newError = createError('priorityTextError', 'Priority should be a number between 1 and 5.')
            priority.parentElement.insertBefore(newError, priority.nextElementSibling)
        }
        return false
    }else{
        priority.classList.remove('priorityInputError')
        document.querySelector('.priorityTextError') ? document.querySelector('.priorityTextError').remove() : ''
        return true;
    }
}

export const createError = (className, text) =>{
    let newError = document.createElement('p')
    newError.className = className
    newError.appendChild(document.createTextNode(text))
    return newError
}

export default validateForm