import { createError } from './validateForm'

const validateNewCategory = () =>{
    const category = document.querySelector('.category-form__input')

    category.addEventListener('keyup', validateMyCategory)
}

export const validateMyCategory = () =>{
    const category = document.querySelector('.category-form__input')
    const regex = /[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż]{3,}/g

    if(!regex.test(category.value) || category.value.length == 0){
        if(!category.classList.contains('categoryInputError')){
            category.classList.add('categoryInputError')
            let newError = createError('categoryTextError', 'Category field should contain minimum 3 characters.')
            category.parentElement.insertBefore(newError, category.nextElementSibling)
        }
        return false
    }else{
        category.classList.remove('categoryInputError')
        category.value = category.value.trim()
        document.querySelector('.categoryTextError') ? document.querySelector('.categoryTextError').remove() : ''
        return true;
    }
}

export default validateNewCategory
