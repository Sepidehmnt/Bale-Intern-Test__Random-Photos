const range = 50;
function randomPhotos() {
  for (let i = 1; i <= range; i++) {
    let items = document.getElementsByClassName("items")[0];
    let item = document.createElement("div");
    let imgElement = document.createElement("img");
    let colorOverlay = document.createElement("div");
    let text = document.createElement("p");
    let innerTxt = document.createTextNode(`picture ${i}`);

    item.style.position = "relative";
    colorOverlay.style.width = "100" + "%";
    colorOverlay.style.height = "200" + "px";
    colorOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    colorOverlay.style.position = "absolute";
    colorOverlay.style.top = "0";

    text.style.position = "absolute";
    text.style.bottom = "8" + "px";
    text.style.left = "8" + "px";
    text.style.color = "#faebd7";

    text.appendChild(innerTxt);
    item.appendChild(imgElement);
    item.appendChild(colorOverlay);
    item.appendChild(text);

    imgElement.setAttribute("src", `https://picsum.photos/id/${i}/400/200`);
    items.appendChild(item);
  }
}
randomPhotos();
