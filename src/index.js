import './styles/style.scss';

import { addBook } from './scripts/addBook'
import validateForm from './scripts/validateForm'
import loadBooks from './scripts/loadBooks'
import deleteBook from './scripts/deleteBook'
import editBook from './scripts/editBook'
import categoryCounter from './scripts/categoryCounter'

loadBooks()
addBook()
validateForm()
deleteBook()
editBook()
categoryCounter()