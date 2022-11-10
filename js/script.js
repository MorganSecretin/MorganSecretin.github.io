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

function toogleHeader() {
    let link = document.getElementsByClassName("headlink");

    // Affiche ou Cache les liens des sections
    for (var a of link){
        if(a.style.display == "inline-block" || a.style.display == "block"){
            a.style.display = "none";
        }
        else if(window.innerWidth < 750){
            a.style.display = "block";
        }
        else{
            a.style.display = "inline-block";
        }
    }
}

window.onresize = resize;
function resize() {
    if(window.innerWidth < 750){
        document.getElementById("toggleheader").style.display = "inline-block";
        let link = document.getElementsByClassName("headlink");

        for (var a of link){
            a.style.display = "none";
        }
    }
    else{
        document.getElementById("toggleheader").style.display = "none";
        let link = document.getElementsByClassName("headlink");

        for (var a of link){
            a.style.display = "inline-block";
        }
    }
}