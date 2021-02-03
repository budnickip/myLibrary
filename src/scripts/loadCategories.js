const loadCategories = () =>{
    const contactSelect = document.querySelector('.contact-form__select')
    const categories = JSON.parse(localStorage.getItem('categories')) || ['kryminał', 'sci-fi', 'fantastyka', 'poezja', 'dramat', 'nauki ścisłe'];
    localStorage.setItem('categories', JSON.stringify(categories))
    let option = ''
    categories.forEach(category=>{
        option += `<option value="${category}">${category}</option>`
    })
    contactSelect.innerHTML = option
}

export default loadCategories