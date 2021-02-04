const loadCategories = () =>{
    const contactSelect = document.querySelector('.contact-form__select')
    const categories = JSON.parse(localStorage.getItem('categories')) || ['kryminał', 'sci-fi', 'fantastyka', 'poezja', 'dramat', 'nauki ścisłe'];
    const filterSelect = document.querySelector('.books-filter__select')
    localStorage.setItem('categories', JSON.stringify(categories))
    let filterOption = '<option hidden disabled selected value>Wybierz kategorie</option>'
    let option = ''
    categories.forEach(category=>{
        option += `<option value="${category}">${category}</option>`
    })
    filterOption += option
    contactSelect.innerHTML = option
    filterSelect.innerHTML = filterOption
}

export default loadCategories