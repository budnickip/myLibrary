const pdfTable = () =>{
    const printButton = document.querySelector('#print')
    printButton.addEventListener('click', ()=>{
        const tableToPrint = document.querySelector('#print-div')
        const style = `<style>        
        .table-header__item{
            font-size: 1.2em;
            padding: 15px;
        }

        .table-body__item{
            padding: 8px;
            text-align: center;
        }
        </style>`

        let win = window.open('','','height=700, width=700')
        win.document.write(`
            <html><head>
            <title>My Books</title>
            ${style}
            </head><body>
            ${tableToPrint.innerHTML}
            </body></html>
        `) 
        win.document.close()

        win.print()
    })
}

export default pdfTable