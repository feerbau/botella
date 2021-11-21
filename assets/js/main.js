function changeImage() {
    var img = document.getElementById("image");
    var button = document.getElementById("clickme");
    console.log(button.innerHTML)
    if (button.innerHTML == "Botella Feliz!") {
        button.innerHTML = "Botella Triste :(";
        img.src = "assets/img/botella_triste.jpg";
    } else {
        button.innerHTML = "Botella Feliz!";
        img.src = "assets/img/botella_feliz.jpeg";
    }

    return false;
}