const foo = new Promise((resolve, reject)=>{
  const flag = true;
  if (!flag) {
    resolve('bob')
  } else {
    resolve('errororororor')
  }
})
const book = {}


foo
  .then((resp)=>{ console.log(resp) })
  .catch((err)=>{ console.log(err) })




function fetchBooks() {
  fetch('http://localhost:3000/books')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
}
const reqObj = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(book)
}

function addBooks() {
  fetch('http://localhost:3000/books', reqObj)
    .then((data) => {
      console.log(data);
    })
    .catch((err)=>{
      console.log('here', err)
    })
}


function main() {
  addBooks()
}

main()

// function addBook(book) {
  // const book_list = document.querySelector("#book-list");
  // const div = makeBookCard(book);
  // book_list.appendChild(div);
// }

// function makeBookCard(book) {
  // const div = document.createElement("div");
  // div.className = "card";

  // const h3 = document.createElement("h3");
  // h3.textContent = book.title;

  // const p = document.createElement("p");
  // p.textContent = book.author;

  add all elements to div
  // div.appendChild(h3);
  // div.appendChild(p);

  // return div;
// }

// function showBooks(bookArray) {
  // bookArray.map(book => {
    // addBook(book);
  // });
// }

what happens when books isn't defined?
// showBooks(books);
