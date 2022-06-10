import axios from "axios";
// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// <div class="card">
//   <div class="headline">{ headline }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ authorPhoto }>
//     </div>
//     <span>By { authorName }</span>
//   </div>
// </div>
//
const Card = (articles) => {
  // creating DOM elements
  // articles.forEach(element => {

  // });
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  const headlineDiv = document.createElement("div");
  headlineDiv.classList.add("headline");
  headlineDiv.textContent = articles.headline;

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("img-container");

  const image = document.createElement("img");
  image.src = articles.authorPhoto;

  const span = document.createElement("span");
  span.textContent = `By ${articles.authorName}`;

  //appending elements to partents
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imageDiv);
  imageDiv.appendChild(image);
  authorDiv.appendChild(span);

  cardDiv.addEventListener("click", (e) => {
    console.dir(e.target.textContent);
  });

  return cardDiv;
};

// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//
const cardAppender = (selector) => {
  axios.get("http://localhost:5001/api/articles").then((res) => {
    console.log(res);
    const bigArray = [];
    bigArray.push(Object.values(res.data.articles));
    const flattenedArray = bigArray.flat(2);
    flattenedArray.forEach((element) => {
      document.querySelector(selector).appendChild(Card(element));
    });
  });
};
export { Card, cardAppender };
