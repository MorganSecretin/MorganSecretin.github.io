
// Affiche ou cache les projets et un des boutons (plus/moins)
function toggleProjects() {
    let d = document.getElementsByClassName("d1");
    var show = document.getElementById("showprojets");
    var hide1 = document.getElementById("hideprojets1");
    var hide2 = document.getElementById("hideprojets2");

    // Affiche ou Cache les projets
    for (var div of d ){
        div.hidden = !div.hidden;
    }

    // Affiche soit plus soit moins
    if(hide1.style.display != "none"){
        hide1.style.display = "none";
        hide2.style.display = "none";
        show.style.display = "block";
    }
    else {
        hide1.style.display = "block";
        hide2.style.display = "block";
        show.style.display = "none";
    }
}

// Affiche ou cache la totalité des détails pour les projets
function toggleDetailsProjetAll() {
    // L'inverse de la situation présente (affiché/caché)
    var show =  Boolean(!document.getElementById("plus1").hidden);

    document.getElementById("plus1").hidden = show;
    document.getElementById("plus2").hidden = show;
    document.getElementById("plus3").hidden = show;
    document.getElementById("plus4").hidden = show;
    document.getElementById("plus5").hidden = show;
    document.getElementById("plus6").hidden = show;
}

// Affiche ou cache la totalité des détails pour les projets selon la situation présente
function setHideDetailsProjetAll(boolean) {
    if(document.getElementById("plus1").hidden != boolean){
        toggleDetailsProjetAll();
    }
}

// Affiche ou cache selon l'id fournie le détail d'un projet
function detailsProjet(id) {
    let detail = document.getElementById(id);
    detail.hidden = !detail.hidden;
}

// Affiche ou Cache les liens de la navBar
function toggleHeader() {
    if (document.getElementById("toggleheader_img").getAttribute("src") == "img/OpenMenuBar.png") {

        document.getElementById("toggleheader_img").src = "img/CloseMenuBar.png";

    } else {
        document.getElementById("toggleheader_img").src = "img/OpenMenuBar.png";
    }

    let link = document.getElementsByClassName("headlink");

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

// Changement de taille de l'écran
window.onresize = doOnResize;

function doOnResize() {
    // Element lien de la navBar et bouton navBar
    if(window.innerWidth <= 750){
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

    let boutonsDetails = document.getElementsByClassName("boutondetail");

    // Cache les boutons détails et Affiche les details
    if(window.innerWidth >= 1000){
        setHideDetailsProjetAll(false);

        for (var bouton of boutonsDetails){
            bouton.hidden = true;
        }
    }
    // Affiche les boutons détails et Cache les details
    else{
        setHideDetailsProjetAll(true);

        for (var bouton of boutonsDetails){
            bouton.hidden = false;
        }
    }
}

