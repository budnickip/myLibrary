const validateEdit = () =>{
    const title = document.querySelector('#editTitle')
    const author = document.querySelector('#editAuthor') 
    const priority = document.querySelector('#editPriority')

    title && title.addEventListener('change', validateEditTitle)
    author && author.addEventListener('change', validateEditAuthor)
    priority && priority.addEventListener('change', validateEditPriority)
}

export const validateEditTitle = () =>{
    const title = document.querySelector('#editTitle')

    if(title.value.length == 0){
        if(!title.classList.contains('titleInputError')){
            title.classList.add('titleInputError')
        }
        return false
    }else{
        title.classList.remove('titleInputError')
        return true;
    }
}

export const validateEditAuthor = () =>{
    const author = document.querySelector('#editAuthor')
    const regex = /\w{3,}/g;

    if(!regex.test(author.value) || author.value.length == 0){
        if(!author.classList.contains('authorInputError')){
            author.classList.add('authorInputError')
        }
        return false
    }else{
        author.classList.remove('authorInputError')
        return true;
    }
}

export const validateEditPriority = () =>{
    const priority = document.querySelector('#editPriority')
    if(priority.value > 5 || priority.value < 1){
        if(!priority.classList.contains('priorityInputError')){
            priority.classList.add('priorityInputError')
        }
        return false
    }else{
        priority.classList.remove('priorityInputError')
        return true;
    }
}

export default validateEdit