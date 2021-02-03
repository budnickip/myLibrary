import './styles/style.scss';

import { addBook } from './scripts/addBook'
import validateForm from './scripts/validateForm'
import loadBooks from './scripts/loadBooks'
import deleteBook from './scripts/deleteBook'

loadBooks()
addBook()
validateForm()
deleteBook()