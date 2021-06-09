class Book {
    constructor(id, name, author, pageCount, isbn, checkoutDate='', checkoutMember='', dueReturnDate='') {
        this.id = id
        this.name = name
        this.author = author
        this.pageCount = pageCount
        this.isbn = isbn
        this.checkoutDate = checkoutDate
        this.checkoutMember = checkoutMember
        this.dueReturnDate = dueReturnDate
    }

    getName() {
        console.log(this.name)
    }

    getAuthor() {
        console.log(this.author)
    }

    updateCheckoutStatus(bookId, checkoutDate, checkoutMember, newReturnDate) {
        this.id = bookId
        this.checkoutDate = checkoutDate
        this.checkoutMember = checkoutMember
        this.dueReturnDate = newReturnDate
    }

    isPastDue() {
        return Date.now() > this.dueReturnDate
    }
}

// 实例化一本 js 书籍
const jsBook = new Book(8,'JS设计模式','Addy',241)

jsBook.getName() // => 'js设计模式'
jsBook.getAuthor() // => 'Addy'

// 这本书被借出，需要更新借出状态
jsBook.updateCheckoutStatus(8, Date.now(), 'zkk', Date.now() + 86400000)

jsBook.isPastDue() // => false

