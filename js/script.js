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

function detailsProjetAll() {
    document.getElementById("plus1").hidden = true;
    document.getElementById("plus2").hidden = true;
    document.getElementById("plus3").hidden = true;
    document.getElementById("plus4").hidden = true;
    document.getElementById("plus5").hidden = true;
    document.getElementById("plus6").hidden = true;
}

function detailsProjet(id) {
    // Objets
    let detail = document.getElementById(id);

    // Affiche ou Cache les projets
    detail.hidden = !detail.hidden;
}