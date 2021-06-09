 // https://blog.csdn.net/userkang/article/details/104675177?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522162320428816780271593939%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=162320428816780271593939&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-2-104675177.first_rank_v2_pc_rank_v29&utm_term=js+%E4%BA%AB%E5%85%83%E6%A8%A1%E5%BC%8F&spm=1018.2226.3001.4187
 // 内部状态：name（名字）、author（作者）、pageCount（总页数），isbn（国际标准书号）
 // 外部状态：id、checkoutDate（借出日期）、checkoutMember（借出人）、dueReturnDate(归还时间)
 class Book {
     constructor(name, author, pageCount, isbn) {
         this.name = name
         this.author = author
         this.pageCount = pageCount
         this.isbn = isbn
     }

     getName() {
         console.log(this.name)
     }

     getAuthor() {
         console.log(this.author)
     }
 }

 class BookFactory {
     static existBooks = {}

     static createBook(name, author, pageCount, isbn) {
         if(this.existBooks[isbn]) {
             console.log('exist')
             return this.existBooks[isbn]
         } else {
             console.log('new')
             const book = new Book(...arguments)
             this.existBooks[isbn] = book
             return book
         }
     }
 }

 class bookRecordManager {
     static recordList = []

     static addRecord (id, name, author, pageCount, isbn, checkoutDate, checkoutMember, dueReturnDate) {
         const book = BookFactory.createBook(name, author, pageCount, isbn)

         this.recordList[id] = {
             checkoutDate,
             checkoutMember,
             dueReturnDate,
             book
         }
     }

     static updateCheckoutStatus(bookId, checkoutDate, checkoutMember, newReturnDate) {
         this.recordList[bookId].checkoutDate = checkoutDate
         this.recordList[bookId].checkoutMember = checkoutMember
         this.recordList[bookId].dueReturnDate = newReturnDate
     }

     static isPastDue(bookId) {
         return Date.now() > this.recordList[bookId].dueReturnDate
     }
 }

 // 测试
 bookRecordManager.addRecord(1, 'js设计模式', 'Addy', 241, 123456, Date.now(), 'zkk', Date.now() + 86400000)
 bookRecordManager.addRecord(2, 'js设计模式', 'Addy', 241, 123456, Date.now(), 'yy', Date.now() + 86400000)

 bookRecordManager.recordList[1].book.getName()
 bookRecordManager.recordList[2].book.getName()

 bookRecordManager.isPastDue(1)

 // 至此，我们的优化就做完了，虽然增加了一点复杂性，但是却从设计上解决了性能上的问题。如果有30本相同的书，我们现在只需要存储它一次。