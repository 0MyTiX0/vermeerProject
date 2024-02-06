document.addEventListener('DOMContentLoaded', function () {
    // Liste des chemins vers les images, des textes et des titres correspondants

    /*
     { 
        cheminImage: 'path/to/img', 
        texte: "Some text", 
        titre: 'Nice title', 
        alt: "This is an alt" 
    }
    { cheminImage: 'img/.jpg', texte: "", titre: "", alt: "" },
    */

    let PaintStuffList = [
        { cheminImage: 'images/laitiere.jpg', texte: "Dans un intérieur, cette solide servante est absorbée dans l’une de ses activités quotidiennes : faire couler du lait dans un plat, ce qui peut être lu comme une métaphore de la peinture. Une nouvelle fois, Vermeer associe des couleurs primaires dans les vêtements de la protagoniste. Il est impossible pour le spectateur de se faire une opinion sur son état d’esprit, ses émotions ou sentiments. Cette œuvre très intimiste est devenue une véritable icône publicitaire en France depuis son utilisation par la marque Nestlé en 1973.", titre: 'La Laitière', alt: "La Laitière" },
        { cheminImage: 'images/diane.jpg', texte: "Il s'agit de l'une des premières œuvres connues de l'artiste. Diane est la déesse de la lune et de la chasse, ainsi qu'un modèle de chasteté. Elle intervient dans divers récits mythologiques, qui ont fait l'objet de nombreuses représentations narratives de peintres néerlandais de l'âge d'or.", titre: 'Diane et ses compagnes', alt: "Diane et ses compagnes" },
        { cheminImage: 'images/officier.jpg', texte: "Le Soldat et jeune fille riant, appelé aussi l'Officier et la jeune fille riant (en néerlandais : De Soldaat en het Lachende Meisje) est une huile sur toile de Johannes Vermeer peinte vers 1657. Mesurant 50,5 cm de haut et 46 cm de large, le tableau est actuellement exposé à la Frick Collection de New York.", titre: "L'officier et la jeune fille riant", alt: "L'officier et la jeune fille riant" },
        { cheminImage: 'images/entremetteuse.jpg', texte: "L'Entremetteuse fait la quasi-unanimité des critiques. Le peintre, par ce troisième tableau, vient de rompre d'une façon définitive avec ses deux premières compositions, Diane et ses compagnes et Le Christ chez Marthe et Marie.", titre: "L'entremetteuse", alt: "L'entremetteuse" },
        { cheminImage: 'images/jesus.jpg', texte: "La composition de ce tableau a souvent été critiquée : le raccourci de l'épaule droite du Christ est maladroite, l'espace trop vaguement indiqué par une cloison, mais l'harmonie claire et chaude des couleurs préfigure un autre Vermeer, celui de la lumière blonde et sereine qui n'annonce jamais le crépuscule, où le temps disparaît doucement, et devenir transparence.", titre: "Le Christ dans la maison de Marthe et Marie", alt: "Le Christ dans la maison de Marthe et Marie"},
        { cheminImage: 'images/luth.jpg', texte: "Ce tableau du milieu des années 1660 est caractéristique de la maturité de Vermeer. La composition a pour thème la tranquilité domestique : le bassin et le pichet d’eau (l’aiguière) sont les symboles traditionnels de la pureté. Cette toile fut la première de treize peintures par Vermeer à entrer aux Etats-Unis entre 1887 et 1919.", titre: "Jeune femme à l'aiguière", alt: "Jeune femme à l'aiguière"},
        { cheminImage: 'images/liseuse.jpg', texte: "Le tableau représente l'intimité d'une scène d'intérieur. Une jeune femme blonde, debout, lit une lettre devant une fenêtre ouverte, en présentant son profil au spectateur. Seuls les murs du fond et de gauche de la pièce sont représentés.", titre: "La Liseuse à la fenêtre", alt: "La Liseuse à la fenêtre" },
        { cheminImage: 'images/sentinelle.jpg', texte: "La scène, à première vue banale, comporte quelques symboles de nature morale. Un chien, qui symbolise les vertus de fidélité et de vigilance, se tient devant une sentinelle endormie, comme un reproche de son attitude. Au-dessus de l'arche, on retrouve une image tronquée de saint Antoine, l'ermite qui préconisait la pauvreté et la chasteté et la résistance aux tentations, ce que ne fait pas la sentinelle qui échappe à son devoir et cède au sommeil.", titre: "La Sentinelle", alt: "La Sentinelle" },
        { cheminImage: 'images/perle.jpg', texte: "Le tableau met en scène une jeune fille, dont l'identité reste un mystère, portant une robe turban bleue et une perle suspendue à son oreille. Ce qui attire immédiatement l'attention, c'est la manière dont Vermeer a capturé la luminosité et la texture de la perle, ainsi que l'expression énigmatique de la jeune fille. La lumière qui éclaire son visage et sa perle crée un contraste saisissant avec l'arrière-plan sombre, ajoutant une profondeur et une sensualité à l'œuvre.", titre: "La Jeune Fille à la perle", alt: "La Jeune Fille à la perle" },
        { cheminImage: 'images/aiguiere.jpg', texte: "Une jeune femme se trouve dans le centre de la composition. L'action se situe dans une chambre d'une riche maison néerlandaise. La femme représentée serait une femme de chambre, comme en témoigne la tête voilée et une cape en coton blanc bien amidonnée", titre: "Jeune Femme à l'aiguière", alt: "Jeune Femme à l'aiguière"},
        { cheminImage: 'images/collier.jpg', texte: "Le tableau représente une femme devant son miroir, en train de mettre un collier de perles. Elle porte une veste de satin jaune bordée de fourrure d'hermine que l'on retrouve sur quatre autres tableaux du peintre", titre: "La Dame au collier de perles", alt: "La Dame au collier de perles"},
        { cheminImage: 'images/piano.jpg', texte: "La peinture montre une femme tournée vers la gauche jouant d'un virginal. Au premier plan à gauche une viole de gambe dont l'archet tient entre les cordes. Un paysage est peint sur le couvercle intérieur du virginal", titre: "Jeune Femme jouant du virginal", alt: "Jeune Femme jouant du virginal"},
        { cheminImage: 'images/leconPiano.jpg', texte: "Dans une pièce éclairée par la lumière du jour, une femme vue de dos est debout à un virginal. Un homme à côté, probablement son professeur, la regarde et l'écoute attentivement. Il aurait été peint entre 1662 et 1665", titre: "La Leçon de musique", alt: "La Leçon de musique"},
        { cheminImage: 'images/amour.jpg', texte: "Le tableau représente une servante et sa maîtresse dans un intérieur domestique à travers une porte située au premier plan. La première vient vraisemblablement d'apporter à la seconde une lettre, que celle-ci tient encore cachetée dans la main droite, alors qu'à gauche elle tient le manche d'un cistre reposant sur ses genoux", titre: "La Lettre d'amour", alt: "La Lettre d'amour"},
        { cheminImage: 'images/concert.jpg', texte: "Le tableau représente une personne jouant du clavecin et un homme de dos, jouant du luth devant une femme debout à ses côtés. Au premier plan apparaissent les détails d'un tapis d'Orient posé sur une table, un violon et une viole de gambe posée sur le sol", titre: "Le Concert", alt: "Le Concert"},
        { cheminImage: 'images/assoupie.jpg', texte: "Le thème pourrait être la désillusion amoureuse : la position de la jeune femme se rapproche en effet des sculptures attiques funéraires (IVe siècle av. J.-C.) et des miniatures gothiques. Le tableau derrière, faiblement éclairé, représente Cupidon avec un masque tragique à ses pieds. Selon le langage des emblèmes en usage à l'époque, cette allégorie symboliserait l'amour trompé : « L'Amour requiert sincérité »", titre: "Une jeune fille assoupie", alt: "Une jeune fille assoupie"},
        { cheminImage: 'images/lettre.jpg', texte: "Le tableau, non signé ni daté, représente, dans un intérieur domestique, une jeune femme en veste bleue absorbée dans la lecture d'une lettre qu'elle tient des deux mains.Il est généralement rapproché de deux autres toiles considérées comme ayant été exécutées à la même période, en raison de similitudes stylistiques et thématiques : La Dame au collier de perles et La Femme à la balance", titre: "La Femme en bleu lisant une lettre", alt: "La Femme en bleu lisant une lettre"},
        { cheminImage: 'images/ruelle.jpg', texte: "Elle représente, selon un perspective frontale, une portion relativement restreinte d'une ruelle typique de Delft, où s'élève notamment à droite une façade qui occupe plus de la moitié du cadre.", titre: "La Ruelle", alt: "La Ruelle"},
    ];

    function getRandomPaintStuff() {
        if (PaintStuffList.length) {
            let index = Math.floor(Math.random() * PaintStuffList.length); // get random index
            let currentStuff = PaintStuffList[index]; // get currentStuff from random index
            PaintStuffList.splice(index, 1); //remove the currentStuff from PaintStuffList
            return currentStuff;
        }
        return null;
    }

    let paintElements = document.querySelectorAll(".randomPaint")

    for (const paintElement of paintElements) {
        let img = paintElement.children[0].children[0]
        let title = paintElement.children[1].children[0]
        let desc = paintElement.children[1].children[1]
        let randomStuff = getRandomPaintStuff();

        img.src = randomStuff.cheminImage;
        img.alt = randomStuff.alt;
        title.innerText = randomStuff.titre;
        desc.innerText = randomStuff.texte;
    }
});

function toggle_visibility() {
    document.getElementById("js-cookie-box").style.display = "none";
}