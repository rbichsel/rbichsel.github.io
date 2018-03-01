function toggleMenu() {
    var x = document.getElementById("navigation");

    if (x.classList == "show-nav") {
        x.classList.remove("show-nav");
        x.classList.add("hide-nav");
        
    } else if (x.classList == "hide-nav") {
        x.classList.remove("hide-nav");
        x.classList.add("show-nav");
    }

}
