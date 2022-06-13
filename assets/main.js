let range = 50;

//random photos in range
randomPhoto();
function randomPhoto() {
  for (let i = 1; i <= range; i++) {
    createItem(i);
  }
}

//create item in container
function createItem(photoNum) {
  let items = document.getElementsByClassName("items")[0];
  let item = document.createElement("div");
  item.className = "item";
  item.addEventListener("contextmenu", deleteMyPic);

  let imgContainer = document.createElement("div");
  imgContainer.className = "myImg";
  imgContainer.style.backgroundImage = `url(https://picsum.photos/id/${photoNum}/400/200)`;

  let picFilter = document.createElement("div");
  picFilter.className = "picFilter";

  let p = createElement("p", `picture ${photoNum}`);
  p.className = "myP";

  item.appendChild(imgContainer);
  item.appendChild(picFilter);
  item.appendChild(p);
  items.appendChild(item);
}

//create new element with text in it
function createElement(tag, text) {
  let element = document.createElement(tag);
  element.textContent = text;
  return element;
}

//delete a picture when you right click on it
function deleteMyPic(e) {
  e.preventDefault();
  document.querySelector(".items").removeChild(this);
}

//add a picture when click on button
function myAddPic() {
  range++;
  createItem(range);
}
