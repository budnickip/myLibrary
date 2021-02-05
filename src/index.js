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
import sortBooks from './scripts/sortBooks'
import pdfTable from './scripts/pdfTable'
import dragBook from './scripts/dragBook'

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
sortBooks()
pdfTable()
dragBook()

