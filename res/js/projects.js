/* DONNEES */
const data = [
  {
    title: "aSize",
    imgName: "Projet11.JPG",
    type: "Personnel",
    languages: "python",
    tools: "vscode",
    others: "",
    technos: `os 
          matplotlib.colors 
          LinearSegmentedColormap 
          tkinter 
          PIL 
          threading 
          copy 
          time 
          subprocess 
          traceback 
          re`,
    skills: `déploiement-d'application
                  découverte-nouvelle-bibliothéque
                  auto-formation`,
    date: `2024-01-25`,
    littleDescription: `Ce logiciel a pour but d'analiser et d'afficher la 
                              taille des éléments de l'arborescense d'un repertoire choisi.`,
    link: `https://drive.google.com/file/d/1PwqRO_XRj2TQTO80LoRlqUs4_9yZNoIr/view?usp=sharing`,
    titleLink: `Télécharger aSize.exe`,
    bigDescription: `J'avais mon disque C: qui étais plein sur mon ordinateur. 
          J'ai donc développé un logiciel en python afin de pouvoir avoir 
          un apperçu de tout les fichiers et dossier supérieur à une 
          taille donné. Cela permet d'avoir un visuel sur tout ce qui 
          prend de la place dans le répertoire. Cela m'a permis de 
          découvrir des bibliothéque python très intérrésante et de 
          mettre en pratique mes connaissance en algorithmie.`,
    active: true,
  },
  {
    title: "TimePlanner",
    imgName: "Projet12.JPG",
    type: "Scolaire",
    languages: "Java",
    tools: "",
    others: "",
    technos: ``,
    skills: ``,
    date: `2024-09-01`,
    littleDescription: `Site de gestion de planning entre clients et 
                              services.`,
    link: ``,
    titleLink: ``,
    bigDescription: `Dans le cadre d'un projet scolaire, j'ai participé au développement de TimePlanner, un site de gestion de planning entre clients et services. Ce projet m'a permis de mettre en pratique mes compétences en Java et d'explorer les défis liés à la gestion de données de planification et à la conception d'interfaces utilisateur. J'ai également travaillé en équipe pour intégrer différentes fonctionnalités et assurer la fluidité de l'expérience utilisateur.`,
    active: true,
  },
  {
    title: "Simulation CPU",
    imgName: "Projet13.JPG",
    type: "Scolaire",
    languages: "Golang",
    tools: "",
    others: "",
    technos: ``,
    skills: ``,
    date: `2024-01-31`,
    littleDescription: `Conception complexe d'un Processeur en Golang pour 
                              réaliser un jeu entre plusieurs CPU.`,
    link: ``,
    titleLink: ``,
    bigDescription: `Dans ce projet scolaire, j'ai contribué à la conception et à la simulation d'un processeur en Golang pour réaliser un jeu entre plusieurs CPU. Ce projet a été une excellente opportunité pour approfondir mes connaissances en programmation et sur les CPUs. J'ai travaillé sur plusieurs aspects techniques du projet, y compris l'optimisation des performances avec du binaire et la gestion de la communication entre les CPU simulés. Cette expérience m'a permis d'améliorer mes compétences en compréhension et en développement de logiciels complexes.`,
    active: true,
  },
  {
    title: "agar.IUT",
    imgName: "Projet10.PNG",
    type: "Scolaire",
    languages: "javascript, typescript, html, css",
    tools: "",
    others: "",
    technos: `git node babel`,
    skills: `travail-d'équipe 
          découverte-nouvelle-technologie 
          déploiement-d'application`,
    date: `2023-04-14`,
    littleDescription: `Ce projet est un serveur en javascript pour jouer 
                          à un jeu basé sur "agar.io". `,
    link: "",
    titleLink: "",
    bigDescription: `En groupe de 3, nous avons 
          recréé le jeu à partir de zéro pour apprendre javascript, 
          typescript et le système de serveur. Nous avons utilisé 
          une configuration complexe afin que le projet soit le plus 
          maintenable possible. Cela grâce à Babel.rc, package.json, 
          webpack.config.json et à socket.io. J'ai appris beaucoup 
          de chose durant ce projet et il m'a d'ailleurs inspiré 
          un projet en stage de site internet.`,
    active: true,
  },
  {
    title: "Tutorat",
    imgName: "Projet6.jpg",
    type: "Scolaire",
    languages: "",
    tools: "",
    others: "",
    technos: `java javafx json git`,
    skills: `travail-d'équipe 
          découverte-nouvelle-technologie 
          déploiement-d'application`,
    date: `2022-05-31`,
    littleDescription: "Ce logiciel permet de lier un tuteur et un tutoré.",
    link: "https://youtu.be/mbyExsb27oA",
    titleLink: "Vidéo du projet",
    bigDescription: `Il y avait diverses conditions à respecter et
                      plusieurs fonctions à implementer. Durant ce projet, j'ai pu
                      développer mes connaissances en Java. J'ai ainsi utilisé des outils
                      tels que JavaFX pour l'interface, les Graphes pour réaliser les
                      calculs, BufferedWriter, BufferedReader et Gson pour les
                      sauvegardes. A la fin, nous avons rendu un projet fonctionnel et
                      complet.`,
    active: false,
  },
  {
    title: "Classification",
    imgName: "Projet7.jpg",
    type: "Scolaire",
    languages: "",
    tools: "",
    others: "",
    technos: `java javafx csv git`,
    skills: `travail-d'équipe 
          découverte-nouvelle-technologie 
          déploiement-d'application`,
    date: `2022-12-02`,
    littleDescription:
      "Ce logiciel classifie des données avec la méthode kNN et affiche un graphique.",
    link: "",
    titleLink: "",
    bigDescription: `En groupe de 4 nous avons créé ce logiciel afin d'afficher 
                      des données classifiées. Nous avons la capacité d'y ajouter des 
                      données inconnues afin qu'elles soient automatiquement classées dans la
                      catégorie la plus probable en utilisant la méthode kNN. Nous utilisons 
                      également une méthode de test de la robutesse des réglages. Les réglages
                      sont modifiables et donc la méthode de test utilise les données à sa 
                      disposition pour calculer le pourcentage de la robustesse. (généralement
                      kNN obtient de faibles résultats). La difficulté de ce projet a été de 
                      faire en sorte que le programme soit générique et que les données soient 
                      le moins possible affichées par du code en dur.`,
    active: false,
  },
  {
    title: "CHESSCAPE",
    imgName: "Projet1.png",
    type: "Scolaire",
    languages: "",
    tools: "",
    others: "",
    technos: `java agile git`,
    skills: `travail-d'équipe 
          découverte-nouvelle-technologie 
          déploiement-d'application`,
    date: `2022-09-06`,
    littleDescription: `C'est un jeux d'échecs type rogue-like en projet agile avec
                      de la programmation en java.`,
    link: "",
    titleLink: "",
    bigDescription: `Par équipe de 6, nous devions programmer ce jeu en
                      3 jours. De compétences et expériences différentes, nous nous
                      sommes tirés vers le haut. J’ai pu aider mes camarades car certains
                      n'avaient jamais programmé en java. Je pense avoir aidé à la
                      continuité de notre projet et à la bonne humeur de notre groupe.
                      J’ai moi même pu être aidé sur l’utilisation de Git. A la fin de
                      nos Sprints de 2 heures, nous avons pu présenter un jeu d'échecs
                      style rogue-like fonctionnel et intéressant.`,
    active: false,
  },
  {
    title: `SMM: Safe Money Manager`,
    imgName: `Projet3.JPG`,
    type: "Personnel",
    languages: "",
    tools: "",
    others: "",
    technos: `python pygame`,
    skills: `déploiement-d'application`,
    date: `2020-10-01`,
    littleDescription: `J'ai pour objectif de créér un gestionnaire de compte.`,
    link: ``,
    titleLink: ``,
    bigDescription: `C'est un de mes projets personnels les plus
          ambitieux. J'y ai passer beaucoup d'heure en python pour arriver à
          un résultat bien avancer. Seuleument, j'ai beaucoup trop appris sur
          la programmation ce qui ma obligé à recommencer ce code plusieurs
          fois. Au final, j'ai décidé de le passer dans une version java avec
          la bibliothéque JavaFX. Cela me permet d'apprendre par moi même
          dans un logiciel qui un jour pourrai vraiment servir. La version
          java est toujours en cours sur GitHub.`,
    active: false,
  },
  {
    title: `PCDD`,
    imgName: `Projet4.JPG`,
    type: "Personnel",
    languages: "",
    tools: "",
    others: "",
    technos: `python cryptage`,
    skills: `algorithmie interface`,
    date: `2021-03-13`,
    littleDescription: `PCDD est un logiciel de cryptage de mot de passe en Python.`,
    link: ``,
    titleLink: ``,
    bigDescription: `Je l'ai créé en 1ére au lycée lorsque j'ai
          découvert une méthode de cryptage. Je voulais faire par moi même ce
          logiciel afin de profiter de son utilisation. Il est fini et
          fonctionnel. Un jour, je pourrai peut être créé une version en
          JavaFX.`,
    active: false,
  },
  {
    title: `Escape Game Passengers`,
    imgName: `Projet5.JPG`,
    type: "Scolaire",
    languages: "",
    tools: "",
    others: "",
    technos: `genially trello`,
    skills: `travail-d'équipe 
          découverte-nouvelle-technologie 
          déploiement-d'application`,
    date: `2022-05-11`,
    littleDescription: `Ce projet est un escape game réalisé en Genially.`,
    link: `https://view.genial.ly/627bc2a76c53040011928c4f/interactive-content-passengers`,
    titleLink: `Accès Genially`,
    bigDescription: `J'étais dans une
          équipe de 3. Nous avons principalement appris la gestion de projet.
          J'y ai découvert des outils comme Trello pour gérer un projet et
          TeamGantt pour créer un diagramme de Gantt. C'était très
          satisfaisant de travailler sur ce projet. D'autant plus que le but
          final été de le faire tester aux différents groupes de la promo. Je
          me suis donc investie de bon coeur et je suis assez fier de notre
          travail.`,
    active: false,
  },
  {
    title: `Use Heat`,
    imgName: `Projet2.JPG`,
    type: "Scolaire",
    languages: "",
    tools: "",
    others: "",
    technos: `html css`,
    skills: `travail-d'équipe 
          design-site-web`,
    date: `2021-10-08`,
    littleDescription: `En projet de 1re année, nous avons par équipe de 2 créés un
          site web.`,
    link: `res/Use Heat/indexBis.html`,
    titleLink: `Voir le site`,
    bigDescription: `Voir Use
          heat</a> <br>Le site se base sur une entreprise fictive de notre
      création. Mon camarade avais de bien meilleur compétence que moi en
      html, css et javaScript. Néanmoins, nous nous sommes trés bien
      réparti le travail. J'ai donc pu apprendre sur le taf
      l'utilisation de ces languages web. Nous avons créé un site de
      vente de chauffage minant de la cryptommonaie. Nous étions
      passionnés par le sujet de notre travail. Nous nous sommes donc
      donner à fond. Le rendu est beau et donne envie bien qu'il ne
      soit pas fonctionnel car demander dans les consignes.`,
    active: false,
  },
  {
    title: `Veille Info Bot`,
    imgName: `Projet8.PNG`,
    type: "Personnel",
    languages: "python",
    tools: "",
    others: "",
    technos: `tkinter api`,
    skills: `travail-d'équipe
          découverte-nouvelle-technologie`,
    date: `2023-01-10`,
    littleDescription: `Ce logiciel affiche des articles internet 
          utilisant une API afin de faire de la veille informatique.`,
    link: `https://github.com/SolaireFR/VeilleInfoBot`,
    titleLink: `Voir le depot`,
    bigDescription: `C'est un projet personnel qui m'a permis d'en 
                      apprendre plus sur l'utilisation des APIs dans du code.
                      Il avait pour but de me fournir les différentes news en
                      informatique pour faire de la veille. Je ne l'ai pas terminé 
                      ayant découvert d'autres sources plus interéssantes.`,
    active: false,
  },
  {
    title: `Api Pizzeria`,
    imgName: `Projet9.png`,
    type: "Scolaire",
    languages: "",
    tools: "",
    others: "",
    technos: `java tomcat api`,
    skills: `travail-d'équipe 
          découverte-nouvelle-technologie 
          déploiement-d'application`,
    date: `2023-03-06`,
    littleDescription: `Ce projet est une api rest sur une pizzeria 
          avec des get, post, delete, et autres avec le serveur tomcat.`,
    link: ``,
    titleLink: ``,
    bigDescription: `C'est un projet qui m'a permis d'en apprendre beaucoup 
                      sur le système de base de données en API rest.
                      Il a été réalisé en binome. J'ai pu réalisé un exellent travail
                      avec mon partenaire car nous nous sommes bien réparti
                      les tâches et nous avons tous deux progréssés. La découverte de
                      tomcat et très intérréssantes et utile pour un serveur en java.`,
    active: false,
  },
];
/**********************************************************************************/

/* SKILLS */
function toggleCategory(header) {
  const card = header.parentElement;
  card.classList.toggle("expanded");
}

function showBubble(element, text) {
  const bubble = document.getElementById("infoBubble");
  const bubbleText = document.getElementById("bubbleText");

  // Retirer la classe active de tous les éléments
  const allSkills = document.querySelectorAll('.skills-list li');
  allSkills.forEach(skill => skill.classList.remove('active'));

  // Ajouter la classe active à l'élément cliqué
  element.classList.add('active');


  bubbleText.textContent = text;
  bubble.style.display = "block";
}

function hideBubble() {
  const bubble = document.getElementById("infoBubble");
  bubble.style.display = "none";

  // Retirer la classe active de tous les éléments
  const allSkills = document.querySelectorAll('.skills-list li');
  allSkills.forEach(skill => skill.classList.remove('active'));
}
/*****************************************************************************/

/* PROJECTS */
function renderProject(project) {
  return;
}
const html = data.reduce((accumulator, project) => {
  return (
    accumulator +
    `
      <div class="col col-sm col-md col-lg">
          <div class="card project-card">
              <div class="project-img-section">
                  <img src="./res/img/projects/${project.imgName}" class="card-img-top clickable-image" alt="${project.title}">
                  <div class="info-aggrandir">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="img-aggrandir" height="24" width="24" viewBox="0 0 24 24"><path d="M9.3 14.7c.3.2.3.5 0 .8L5 19.9h3.2a.6.6 0 010 1.1H3.6a.6.6 0 01-.5-.2.6.6 0 01-.1-.4v-4.6a.6.6 0 011.1 0V19l4.4-4.3c.3-.3.6-.3.8 0zm6.2 0l4.4 4.3v-3.2a.6.6 0 011.1 0v4.6a.6.6 0 01-.2.5.6.6 0 01-.4.1h-4.6a.6.6 0 010-1.1H19l-4.3-4.4a.6.6 0 01.8-.8zm5-11.7a.6.6 0 01.4.2.6.6 0 01.1.4v4.6a.6.6 0 11-1.1 0V5l-4.4 4.3a.6.6 0 01-.8-.8L19 4.1h-3.2a.6.6 0 010-1.1h4.6zM8.1 3a.6.6 0 010 1.1H5l4.3 4.4a.6.6 0 01-.8.8L4.1 5v3.2a.6.6 0 11-1.1 0V3.6a.6.6 0 01.2-.5.6.6 0 01.4-.1h4.6z"></path></svg>
                  </div>
              </div>
  
              <div class="card-body project-card-body">
                  <h2 class="card-title">${project.title}</h2>
                  <time class="text-muted projectDate">${project.date}</time>
                  <p class="card-text">${project.littleDescription}</p>
                  <p class="detailButton" onclick="showBubble(this, \`${project.bigDescription}\`)">Des details ?</p>
              </div>
          </div>
      </div>
          `
  );
}, "");
const projectsResult = document.querySelector("#projects-result");
projectsResult.innerHTML = html;

function formatDateToFR(dateString) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', options);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const dateElements = document.getElementsByClassName('projectDate');
    for (let i = 0; i < dateElements.length; i++) {
      const dateElement = dateElements[i];
      const date = dateElement.textContent.trim();
      if (date) {
        const formattedDate = formatDateToFR(date);
        dateElement.textContent = formattedDate;
      }
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".clickable-image");
  var modal = document.getElementById("image-modal");
  var modalImg = document.getElementById("modal-img");
  var captionText = document.querySelector(".caption");
  var closeBtn = document.querySelector(".close");
  var mc = new Hammer(modalImg);
  var currentScale = 1;

  images.forEach(function (img) {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
      currentScale = 1; // Réinitialisation du zoom
      modalImg.style.transform = "scale(1)";
    });
  });

  images.forEach(function (img) {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
      currentScale = 1; // Réinitialisation du zoom
      modalImg.style.transform = "scale(1)";
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  mc.get("pinch").set({ enable: true }); // Activer les gestes de pincement

  mc.on("pinch", function (ev) {
    var newScale = Math.max(0.1, Math.min(currentScale * -ev.scale, 5)); // Limiter le zoom entre 10% et 500%
    modalImg.style.transform = "scale(" + newScale + ")";
    currentScale = newScale;
  });

  // Ajouter la prise en charge de la molette de la souris pour le zoom sur PC
  modalImg.addEventListener("wheel", function (ev) {
    ev.preventDefault();
    var delta = Math.max(-0.05, Math.min(ev.deltaY * 0.001, 0.05)); // Définir la vitesse du zoom
    var newScale = Math.max(0.1, Math.min(currentScale + -delta, 5)); // Limiter le zoom entre 10% et 500%
    modalImg.style.transform = "scale(" + newScale + ")";
    currentScale = newScale;
  });
});
/*********************************************************************/
