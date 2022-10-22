function toogleShowHide() {
    // Objets
    let d = document.getElementsByClassName("d1");
    var show = document.getElementById("showprojets");
    var hide = document.getElementById("hideprojets");

    // Affiche ou Cache les projets
    for (var div of d ){
        div.hidden = !div.hidden;
    }

    // Affiche soit plus soit moins
    if(hide.style.display != "none"){
        hide.style.display = "none";
        show.style.display = "block";
    }
    else {
        hide.style.display = "block";
        show.style.display = "none";
    }
}