// TASK 1
// ---------------------
// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
//  <div class="header">
//    <span class="date">{ date }</span>
//    <h1>{ title }</h1>
//    <span class="temp">{ temp }</span>
//  </div>
//
const Header = (title, date, temp) => {
  //creating DOM elements,assigning classes and text content
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const dateSpan = document.createElement("span");
  dateSpan.classList.add("date");
  dateSpan.textContent = date;

  const headerTitle = document.createElement("h1");
  headerTitle.textContent = title;

  const tempSpan = document.createElement("span");
  tempSpan.classList.add("temp");
  tempSpan.innerHTML = temp;

  //Appending elements to parents
  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(headerTitle);
  headerDiv.appendChild(tempSpan);

  return headerDiv;
};

// TASK 2
// ---------------------
// Implement this function taking a css selector as its only argument.
// It should create a header using the Header component above, passing arguments of your choosing.
// It should append the header to the element in the DOM that matches the given selector.
//

const headerAppender = (selector) => {
  document
    .querySelector(selector)
    .appendChild(Header("BloomTech Times", "June 10, 2022", "86&deg F"));
};

export { Header, headerAppender };
