import './styles/style.scss';

import { addBook } from './scripts/addBook'
import validateForm from './scripts/validateForm'
import loadBooks from './scripts/loadBooks'
import deleteBook from './scripts/deleteBook'
import editBook from './scripts/editBook'
import categoryCounter from './scripts/categoryCounter'
import filterBooks from './scripts/filterBooks'
import loadCategories from './scripts/loadCategories'
import addCategory from './scripts/addCategory'
import validateNewCategory from './scripts/validateNewCategory'

loadCategories()
loadBooks()
addBook()
validateForm()
validateNewCategory()
deleteBook()
editBook()
categoryCounter()
filterBooks()
addCategory()
