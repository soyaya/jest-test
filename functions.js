const functions = {
  add: (n1, n2) => n1 + n2
};
module.exports = functions;

function Book(tittle, author, year) {
  this.tittle = tittle;
  this.author = author;
  this.year = year;
  this.getSummary = function() {
    return `${this.tittle} was written by ${this.author} in ${this.year}`;
  };
}
const Book1 = new Book('çlamourious', 'Jonny', '2015');
const Book2 = new Book('çlamouriousy', 'Jonnyal', '2012');
console.log(Book1.getSummary);
console.log(Book1.getSummary);
module.exports = Book;
