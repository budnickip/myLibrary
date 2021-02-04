import { books } from './loadBooks'
import reloadBooks from './reloadBooks'

const sortBooks = () =>{
    const sortAuthor = document.querySelector('#books-author')
    const sortPriority = document.querySelector('#books-priority')
    const sortCategory = document.querySelector('#books-category')
    const sortID = document.querySelector('#books-id')

    sortAuthor.addEventListener("click", ()=>{
        let direction;
        if(sortAuthor.classList.contains('sorted')){
            direction = -1
            sortAuthor.classList.remove('sorted')
        }else{
            sortAuthor.classList.add('sorted')
                direction = 1   
        }
       function compare(a, b) {
            if (a.author.toLowerCase() < b.author.toLowerCase()){
              return -1*direction;
            }
            if (a.author.toLowerCase() > b.author.toLowerCase()){
              return 1*direction;
            }
            return 0;
          }
          
          books.sort(compare);
          reloadBooks() 
    }) 

    sortPriority.addEventListener("click", ()=>{
        let direction;
        if(sortPriority.classList.contains('sorted')){
            direction = -1
            sortPriority.classList.remove('sorted')
        }else{
            sortPriority.classList.add('sorted')
                direction = 1   
        }
        function compare(a, b) {
            if (a.priority < b.priority){
              return -1*direction;
            }
            if (a.priority > b.priority){
              return 1*direction;
            }
            return 0;
          }

          books.sort(compare)
          reloadBooks()
    })

    sortCategory.addEventListener("click", ()=>{
        let direction;
        if(sortCategory.classList.contains('sorted')){
            direction = -1
            sortCategory.classList.remove('sorted')
        }else{
            sortCategory.classList.add('sorted')
                direction = 1   
        }
        function compare(a, b) {
            if (a.category.toLowerCase() < b.category.toLowerCase()){
              return -1*direction;
            }
            if (a.category.toLowerCase() > b.category.toLowerCase()){
              return 1*direction;
            }
            return 0;
          }

          books.sort(compare)
          reloadBooks()
    })

    sortID.addEventListener("click", ()=>{
        let direction;
        if(sortID.classList.contains('sorted')){
            direction = -1
            sortID.classList.remove('sorted')
        }else{
            sortID.classList.add('sorted')
                direction = 1   
        }
        const compare = (a, b) => {
            if (a.index < b.index){
              return -1*direction;
            }
            if(a.index > b.index){
              return 1*direction;
            }
            return 0;
          }
          
        books.sort(compare)
        reloadBooks()
    })
}

export default sortBooks