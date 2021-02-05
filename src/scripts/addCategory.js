import categoryCounter from './categoryCounter'
import { validateMyCategory } from './validateNewCategory'

const addCategory = () =>{
    const sendButton = document.querySelector('.category-form__button')

    sendButton.addEventListener('click', (event)=>{
        let categoryValidation = validateMyCategory()
        if(categoryValidation){
            const newCategory = document.querySelector('.category-form__input')
            let categories = JSON.parse(localStorage.getItem('categories'))
            categories.push(newCategory.value)
            localStorage.setItem('categories', JSON.stringify(categories))
            let option = ''
            categories.forEach(category=>{
                option += `<option value="${category}">${category}</option>`
            })
            contactSelect.innerHTML = option
            categoryCounter()
            event.preventDefault()
        }else{
            event.preventDefault()
        }
    })
}

export default addCategory