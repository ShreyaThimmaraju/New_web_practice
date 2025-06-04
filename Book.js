class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    getDetails() {
       return  `Title: ${this.title}, Author:  ${this.author}, Price: $${this.price}`
}
}
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 10.99);
const book2 = new Book("1984" , "George Orwell", 15.49);

console.log(book1.getDetails());
console.log(book2.getDetails());