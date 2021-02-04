import { books } from './loadBooks'
import reloadBooks from './reloadBooks'

const sortBooks = () =>{
    const sortAuthor = document.querySelector('#books-author')
    const sortPriority = document.querySelector('#books-priority')
    const sortCategory = document.querySelector('#books-category')
    const sortID = document.querySelector('#books-id')

    const dynamicSort = (property) =>{
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return (a,b) => {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    sortAuthor.addEventListener("click", ()=>{
       let direction = -1;
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
        function compare(a, b) {
            if (a.priority < b.priority){
              return -1;
            }
            if (a.priority > b.priority){
              return 1;
            }
            return 0;
          }

          books.sort(compare)
          reloadBooks()
    })

    sortCategory.addEventListener("click", ()=>{
        function compare(a, b) {
            if (a.category.toLowerCase() < b.category.toLowerCase()){
              return -1;
            }
            if (a.category.toLowerCase() > b.category.toLowerCase()){
              return 1;
            }
            return 0;
          }

          books.sort(compare)
          reloadBooks()
    })

    sortID.addEventListener("click", ()=>{
        const compare = (a, b) => {
            if (a.index < b.index){
              return -1;
            }
            if(a.index > b.index){
              return 1;
            }
            return 0;
          }
          
        books.sort( compare );
    })
}

export default sortBooks