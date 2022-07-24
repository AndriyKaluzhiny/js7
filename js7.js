function fillTable() {
    let liElement = document.getElementsByTagName("li");
    let span = document.getElementById("countOfLiElements");

    for (let i = 0; i < liElement.length; i++) {
        let currentElement = liElement[i];
        if (currentElement.innerHTML == "") {
            currentElement.innerHTML = "qwerty";
        }
    }

    span.innerHTML = liElement.length;
}

function changeColor() {
    let tagsA = document.getElementsByTagName('a');

    for (let i = 0; i < tagsA.length; i++) {
        let currentElement = tagsA[i];
        if (currentElement.href.match("http://") || currentElement.href.match("ftp://")) {
            currentElement.classList.add("external-red");
        }
    }

}