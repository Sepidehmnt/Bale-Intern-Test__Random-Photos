let numberCount = 50;
const items = document.querySelector(".items");

//random photos in range
randomPhoto();
function randomPhoto() {
  for (let i = 1; i <= numberCount; i++) {
    createItem(i);
  }
}

//create item in container
function createItem(photoNum) {
  const item = document.createElement("div");
  item.className = "item";
  item.addEventListener("contextmenu", deletePicture);

  const imgContainer = document.createElement("img");

  //Use loading = "lazy" for lazy loading images and something like that, when you don't want to load in first loadin page
  imgContainer.loading = "lazy";
  imgContainer.src = `https://picsum.photos/id/${photoNum}/400/200`;

  const pictureFilter = document.createElement("div");
  pictureFilter.className = "pictureFilter";

  const p = createElement("p", `picture ${photoNum}`);
  p.className = "p";

  item.appendChild(imgContainer);
  item.appendChild(pictureFilter);
  item.appendChild(p);
  items.appendChild(item);
}

//create new element with text in it
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}

//delete a picture when you do right click on it
function deletePicture(e) {
  e.preventDefault();
  items.removeChild(this);
}

//add a picture when click on button
document.querySelector("button").addEventListener("click", addPicture);
function addPicture() {
  numberCount++;
  createItem(numberCount);
}
