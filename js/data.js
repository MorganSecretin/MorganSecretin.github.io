import TypeProject from './TypeProject.js';

const data = [
	{
		title: 'agar.IUT',
		imgUrl: 'img/Projet/Projet10.PNG',
		type: TypeProject.SCOLAIRE,
		languages: 'javascript, typescript, html, css',
		tools: '',
		others: '',
		technos: `git node babel`,
		skills: `travail-d'équipe 
		découverte-nouvelle-technologie 
		déploiement-d'application`,
		date: `2023-04-14`,
		littleDescription: `Ce projet est un serveur en javascript pour jouer 
						à un jeu basé sur "agar.io". `,
		link: '',
		titleLink: '',
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
		title: 'Tutorat',
		imgUrl: 'img/Projet/Projet6.jpg',
		type: TypeProject.SCOLAIRE,
		languages: '',
		tools: '',
		others: '',
		technos: `java javafx json git`,
		skills: `travail-d'équipe 
		découverte-nouvelle-technologie 
		déploiement-d'application`,
		date: `2022-05-31`,
		littleDescription: 'Ce logiciel permet de lier un tuteur et un tutoré.',
		link: 'https://youtu.be/mbyExsb27oA',
		titleLink: 'Vidéo du projet',
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
		title: 'Classification',
		imgUrl: 'img/Projet/Projet7.jpg',
		type: TypeProject.SCOLAIRE,
		languages: '',
		tools: '',
		others: '',
		technos: `java javafx csv git`,
		skills: `travail-d'équipe 
		découverte-nouvelle-technologie 
		déploiement-d'application`,
		date: `2022-12-02`,
		littleDescription:
			'Ce logiciel classifie des données avec la méthode kNN et affiche un graphique.',
		link: '',
		titleLink: '',
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
		title: 'CHESSCAPE',
		imgUrl: 'img/Projet/Projet1.png',
		type: TypeProject.SCOLAIRE,
		languages: '',
		tools: '',
		others: '',
		technos: `java agile git`,
		skills: `travail-d'équipe 
		découverte-nouvelle-technologie 
		déploiement-d'application`,
		date: `2022-09-06`,
		littleDescription: `C'est un jeux d'échecs type rogue-like en projet agile avec
					de la programmation en java.`,
		link: '',
		titleLink: '',
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
		imgUrl: `img/Projet/Projet3.JPG`,
		type: TypeProject.PERSONNEL,
		languages: '',
		tools: '',
		others: '',
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
		imgUrl: `img/Projet/Projet4.JPG`,
		type: TypeProject.PERSONNEL,
		languages: '',
		tools: '',
		others: '',
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
		imgUrl: `img/Projet/Projet5.JPG`,
		type: TypeProject.SCOLAIRE,
		languages: '',
		tools: '',
		others: '',
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
		imgUrl: `img/Projet/Projet2.JPG`,
		type: TypeProject.SCOLAIRE,
		languages: '',
		tools: '',
		others: '',
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
    répartie le travail. J'ai donc pu apprendre sur le taf
    l'utilisation de ces languages web. Nous avons créé un site de
    vente de chauffage minant de la cryptommonaie. Nous étions
    passionnés par le sujet de notre travail. Nous nous sommes donc
    donner à fond. Le rendu est beau et donne envie malgrés qu'il ne
    soit pas fonctionnel car demander dans les consignes.`,
		active: false,
	},
	{
		title: `Veille Info Bot`,
		imgUrl: `img/Projet/Projet8.PNG`,
		type: TypeProject.PERSONNEL,
		languages: 'python',
		tools: '',
		others: '',
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
		imgUrl: `img/Projet/Projet9.png`,
		type: TypeProject.SCOLAIRE,
		languages: '',
		tools: '',
		others: '',
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
					avec mon partenaire car nous nous sommes extrêmement bien réparti
					les tâches et nous avons tous deux progréssés. La découverte de
					tomcat et très intérréssantes et utile pour un serveur en java.`,
		active: false,
	},
];

export default data;
