
const library = [
  { code: 1, title: "The Reasons for the Remaining", author: "Adham Sharkawi", year: 2018, available: true, price: 120 },
  { code: 2, title: "White Nights", author: "Fyodor Dostoevsky", year: 1848, available: false, price: 90 },
  { code: 3, title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, available: true, price: 150 }
];

const container = document.getElementById("container");

function displayBooks() {
  
  container.innerHTML = "";

  
    
  library.forEach((book, index) => {
   
    const card = document.createElement("div");
    card.classList.add("card"); 


    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Year:</strong> ${book.year}</p>
      <p><strong>Price:</strong> ${book.price} DH</p>
      <p><strong>Status:</strong> ${book.available ? "✅ Available" : "❌ Borrowed"}</p>
      <button class="delete-btn">Delete</button>
    `;

  
    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
  
      library.splice(index, 1);

      displayBooks();
    });

    container.appendChild(card);
  });
}


displayBooks();

