function myFunction() {
    let burger = "\u2630";
    let close = "\u2715";
    let x = document.getElementById("hamburger");
    if (x.innerHTML === burger) {
        x.innerHTML = close;
        document.getElementById('nav-wrapper').classList.toggle("show");
    } else {
        x.innerHTML = burger;
        document.getElementById('nav-wrapper').classList.toggle("show");
    }
}