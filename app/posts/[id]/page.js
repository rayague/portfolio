"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import {
  faCoffee,
  faPhone,
  faEnvelope,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faGithub
  // faPhone,
  // faEnvelope,
  // faMapMarkerAlt
} from "@fortawesome/free-brands-svg-icons";

const posts = [
  {
    id: 1,
    formFirstName: "Ray",
    formLastName: "Ague",
    postDate: "2024-07-12",
    image: "/post1.jpg",
    formThoughts:
      "Nous qui sommes des personnes tout à fait normales, nous n’avons généralement pas eu une vie comblée, une vie désirée. Dans la plupart des cas, notre vie est une succession d’obstacles plus ou moins à notre portée, que l’on pourrait qualifier de “un piège sans fin”. Mais avant tout cela, nous devons tout au moins remercier le Seigneur notre Dieu pour cette vie qu’Il a daigné nous offrir et conserver pendant toutes ces nombreuses années. Remercions-Le pour chaque minute, chaque moment, chaque sourire, et surtout pour notre propre vie, car nous ne savons véritablement pas ce que les autres vivent : vos voisins, vos amis, vos ennemis, même vos familles ; ceux qui sont nés avec la moitié du monde, ceux qui sont nés ennemis du monde, et pire encore, ceux qui ont été arrachés du monde bien avant leur naissance, et j’en passe… Tous ceux-là ne partagent pas vraiment les mêmes avis que vous, encore moins la même vision du monde. Vous ne savez pas ce qu’ils ont vécu, tout ce qu’ils ont dû endurer dans leur vie, car vous ne vivez peut-être pas de la même manière. Vous ne savez pas ce que ça fait de vivre avec la moitié du monde, ce que ça fait d’être arraché du monde avant même la naissance. Tous autant que nous sommes, nous avons nos différences et nous avons eu à vivre des moments difficiles. Laissez-moi vous dire une chose : “Personne sur cette terre n’a une vie normale.” Vous êtes bien quand vous êtes entourés de vos camarades, de vos amis ou de vos meilleurs amis ; souvent devant des délices ou lors d’une promenade, vous partagez vos meilleurs moments, vos meilleurs souvenirs, vous vous envoyez vos meilleures blagues, tout le monde rit et tout va bien… Mais à cet instant-là, vous ne vous rendez pas tout de suite compte du bien que cela vous a fait de sourire, de pouvoir exprimer ses plus beaux moments, ses plus belles aventures. Vous allez rire, mais vous ne savez pas ce que cette personne a enduré pour en arriver à ce moment, ce qu’il a vécu jusqu’à ce jour où il vous partage ses moments cool ou les moments pour lui susceptibles d’être partagés. Mais généralement, l’Homme, dans sa nature, ne vous dira probablement pas tout ce qu’il endure chaque jour, ses peines, à moins que cette personne recherche ses propres intérêts ou qu’elle veuille peut-être se libérer ou trouver des solutions à ses problèmes personnels. Donc, ne pensez jamais, ou plutôt ne vous dites pas, devrais-je dire, que le fait que ceux qui vous entourent, vos amis en particulier, vivent presque les mêmes moments, presque les mêmes aventures que vous, est pareil. C’est une farce en effet, et la vie est purement relative. Ne vous dites pas, de ce fait, que vous êtes différents des autres à cause de ce que vous traversez. Il y a ceux qui vivent des situations très difficiles, mais qui, à l’apparence, vous sembleront tout à fait normales. Le cours de la vie est changeant et parfois peut-être pas."
  },
  {
    id: 2,
    formFirstName: "Ray",
    formLastName: "Ague",
    postDate: "2024-07-13",
    image: "/post2.jpg",
    formThoughts:
      "L’Homme, qu’est-il en réalité ? Il n’est point rare d’entendre dire que “l’Homme est un éternel insatisfait” ou “l’Homme est un loup pour l’Homme”, et j’en passe… Toutes ces affirmations sont vraies, mais la vraie question qu’il faut se poser est celle-ci : “Est-ce qu’on peut connaître l’homme dans toute son entièreté ?” À cette question, moi, je dirais “Non” avec fermeté. On ne peut jamais connaître l’homme à 100 % ; ce n’est pas possible. L’homme est un être multidimensionnel, il ne dispose pas d’une mentalité fixe, il n’a pas de pensée fixe. Il pense à ce qui serait mieux pour lui et est maître de sa conscience, et nul ne peut la cerner. Il recherche le plus souvent son confort, ce qui serait bon pour lui, une vie rêvée dans laquelle les intérêts passent avant tout le reste. Quand les intérêts commencent à monter, il devient gourmand et se laisse emporter par l’esprit de la concurrence et de l’envie. Il se sent bien, mais il en veut toujours plus ; le pouvoir doit être à sa portée, il ne s’arrêtera pas tant qu’il n’aura pas ce qu’il désire. Vous savez, laissez-moi vous dire une chose : le pouvoir et l’argent ne définissent absolument pas qui vous êtes, c’est un leurre. Vous êtes sûrement monté jusqu’à un certain niveau de votre vie où vous avez eu assez d’affluence, mais grâce à qui avez-vous pu atteindre ce niveau ? C’est grâce à l’Homme. Comme je le disais plus tôt, l’homme fait généralement passer ses intérêts avant tout le reste. Il s’inspire de la connaissance et de l’intelligence des autres pour user de sa ruse et construire ses propres actions. N’oubliez pas une chose : on peut vous haïr pour ce que vous êtes ou ce que vous faites. Tous autant que nous sommes, nous ne sommes pas aimés de tous, à cause de nos modes de vie, nos actions, les places que nous occupons dans la société ou encore dans la vie de certaines personnes. Il est bon de faire du bien, de rendre des services importants, mais derrière ce bien-là, savez-vous ce que pense réellement celui ou celle qui vous a tendu la main ? Je ne suis pas sûr que vous vous posiez souvent cette question. Vous êtes plus concentrés sur les intérêts attendus à la fin de ces services… La vraie nature de l’homme ne se révèle pas à l’apparence, mais dans les comportements, certaines habitudes. Laissez-moi vous dire une chose : “Ce qui caractérise un homme, ce n’est pas le pouvoir qu’il possède ou sa place dans la société, mais plutôt ce qu’il s’interdit de faire, sa capacité à respecter les principes qu’il s’est définis.” Le monde n’est parfait pour personne. C’est en même temps qu’il y aura des gens qui vont vous apprécier, vous donner du respect, que d’autres vous détesteront pour ce que vous êtes ou ce que vous faites. Mais à côté de tout cela, il y a les hommes bons, les hommes sages, les véritables hommes de parole… Ceux-là viennent sauver en partie l’honneur des Hommes. Ces hommes se définissent des principes ou des règles pour ne pas refaire face à certaines situations qui ont assombri certains moments de leur parcours. Généralement, nous pensons que ces hommes sont des personnes de caractère, mais non, ce sont eux qui ont le plus beau des sourires. L’Homme reste une créature changeante, incompréhensible. Faites du bien partout où vous irez, soyez des hommes de parole, respectez tout ce que vous faites et tout ce que vous croisez. Soyez vous-même, ne critiquez pas les autres pour obtenir la gloire, ne cherchez d’ennuis à personne, gagnez la confiance de qui vous pouvez, même si celle-ci n’est pas totale. Mais ne laissez jamais ceux qui ont croisé votre chemin tomber. Souriez pour que les autres sachent qu’il est bon de vivre malgré, peut-être, les peines que vous endurez. Ne soyez pas des hommes de caractère, ne soyez pas avares, soyez humbles, gentils et ouverts, car, si j’en crois mes expériences, il y a une chose qui s’appelle la “nature” et qui vous compte chaque seconde, chaque heure, chaque jour, et enregistre tout ce que vous avez eu à dire, tout ce que vous avez eu à faire, tout ce que vous avez eu à construire… et vous allez en répondre de tout cela sur cette terre avant de la quitter, même si cela doit être la dernière heure de votre vie sur terre. On meurt pour une cause, mais quand tu seras là-haut et que tu auras fait le bilan de tout ce que tu auras eu à faire sur cette terre, que voudrais-tu que l’histoire retienne de toi ? Vis donc avec cette mentalité pour arriver à tes fins."
  },
  {
    id: 3,
    formFirstName: "Ray",
    formLastName: "Ague",
    postDate: "2024-07-12",
    image: "/post3.jpg",
    formThoughts:
      "L’amour est ce sentiment profond qu’on éprouve pour une personne et non pour une chose, car pour moi, on ne tombe pas amoureux d’une chose. Je ne définirai peut-être pas l’amour de la même manière que les autres, car chacun de nous a son propre point de vue par rapport au thème. Nous ne disposons que d’une vie, et durant cette vie, nous avons forcément aimé quelqu’un ou même plusieurs personnes, pas peut-être à la fois, mais de façon successive. C’est aussi peut-être la seule personne que vous avez aimée et avec qui vous partagez votre vie actuelle, ou peut-être pas. Quand l’amour naît quelque part, nous le savons. Pourquoi dis-je que nous savons ? C’est justement parce que, quand nous tombons amoureux, nous changeons notre manière d’agir envers cette personne concernée, notre manière de parler d’elle, notre manière d’agir en sa présence, nos pensées qui deviennent uniques. C’est-à-dire que toutes nos pensées convergent vers cette seule personne pour qui vous êtes amoureux. Vous imaginez l’avenir avec elle, vous vous voyez en train d’accomplir vos projets main dans la main. Vous devenez impatient pour chaque minute qui passe dans vos pensées. Apprendre devient presque impossible pour vous. Vous êtes en totale abnégation, prêt à faire tout ce qu’on vous demandera, et vous vous sentez honoré. C’est pour cela qu’on dit que l’amour est le sentiment le plus faible de ce monde. Ce genre d’aventure est souvent connu pour ceux qui sont timides, pas trop bavards. Quand ce type de personne tombe amoureux, vous pouvez le sentir dans ses manières de faire les choses et d’agir. Tout le monde ne vit pas la même aventure. Il y en a qui ne montreront pas qu’ils sont amoureux publiquement, ils agissent avec prudence. Ils guettent seulement des occasions pour avouer leurs sentiments, ce sont généralement des gens de caractère ou colériques. Mais l’amour, en vérité, c’est quoi ? Pour les scientifiques et autres, tomber amoureux n’est qu’une attirance physique, et l’attirance physique n’est rien d’autre que des réactions chimiques dans notre cerveau. Il y en a qui, auprès de qui vous allez parler de l’amour et de vos aventures, vous diront qu’ils n’y croient plus, ou peut-être trouveront des alibis pour vous décourager. Ceux-là, laissez-moi vous dire, ont vécu ce sentiment, mais ne se sont sûrement pas terminés comme ils l’espéraient au départ, car quand on tombe amoureux et qu’on forme un couple, c’est pour la vie, dit-on. Donc, ces gens-là, à ce stade, ne se sentent plus eux-mêmes, car dans leur dernière relation, ils avaient mis tout leur cœur, tout leur temps, tout leur argent pour espérer construire quelque chose de beau. Toutes ces nuits à penser à une seule personne se sont envolées en un clic… Tout cela les laisse dans un sale état mental, avec de la douleur et un peu de haine. Cet état d’esprit leur fait des reproches, les accuse d’avoir perdu leur temps et contrôle leurs pensées. Après ce choc, à chaque fois qu’ils tombent dans une nouvelle relation, entre guillemets, ils ne veulent plus perdre leur temps. C’est juste pour jouir de leurs intérêts ou pour le sexe et disparaître. Ça ne s’est peut-être pas encore reproduit à votre niveau, mais vous y goûterez sûrement. Cela arrive généralement aux hommes. Si vous êtes un homme, vous devez savoir comment vous y prendre avec votre partenaire, car les femmes aiment le confort. Elles aiment ceux qui les traitent avec douceur, gentillesse et tendresse. Quelque part, là où elles se sentiront à l’aise, vous pouvez ne pas être beau pour certaines, mais les manières seules suffisent, et une fille peut réellement vous aimer pour ça. Ce n’est pas comme d’autres ; elles sont juste là pour avoir des intérêts, de l’argent, des cadeaux ou pour avoir de la célébrité. Sinon, elles se fichent de ce que vous ressentez pour elles, et c’est souvent déplorable et triste. Le cœur de la femme est fragile. Ne soyez pas surpris quand une fille vous laisse pour quelqu’un d’autre ou juste comme ça ; c’est toujours pour une ou des raisons. Vous savez, être un homme, ce n’est pas facile, et c’est triste à certains moments, quand vous tombez profondément amoureux d’une fille et que vous décidez de tenter votre chance. Puis, soudainement, même avant que vous n’abordiez cette personne, vous vous rendez compte qu’elle est déjà prise par quelqu’un d’autre. C’est très triste à ce stade, vous êtes perdu et vous ne savez plus trop quoi faire, c’est tout comme si tout s’arrêtait d’un coup pour vous. Mais vous ne devez pas le prendre mal, car, dans leur tête, les filles ne peuvent pas imaginer qu’il y a d’autres personnes, peut-être pas belles, mais avec de belles intentions qui portent de profonds sentiments à leur égard. Elles sont plutôt concentrées à parfaire leur relation avec leur partenaire. Il y en a d’autres qui finissent par le savoir et qui ont en vérité de l’affection en retour, mais elles ne peuvent pas quitter leur relation pour que cela ne paraisse pas bizarre aux yeux de certaines personnes et qu’elles ne soient pas trop critiquées. À ces hommes, je voudrais dire ceci : ne vous découragez jamais, et sachez que la vérité ne reste jamais cachée. Tôt ou tard, elles sauront que vous portiez des sentiments à leur égard et reviendront peut-être."
  },
  {
    id: 4,
    formFirstName: "Ray",
    formLastName: "Ague",
    postDate: "2024-07-13",
    image: "/post10.jpg",
    formThoughts:
      "C’est fait de telle sorte que chaque infime pensée, chaque acte que tu poseras influencera ta destinée. Bien avant même la genèse, ceux qui ont existé avant nous, ceux d’aujourd’hui et ceux qui arriveront, étions tous là, auprès de notre créateur. Chacun de nous a reçu une mission. Nous venons sur terre pour faire évoluer la connaissance et enseigner. Parfois, certaines réponses à nos situations se trouvent en nous-mêmes. Pourquoi avons-nous deux yeux, deux oreilles et pourquoi pas deux bouches ? Tant que tu ne te rendras pas compte des erreurs de ton passé, tu commettras toujours les mêmes erreurs. Qui embrasse trop mal entraîne. La pensée crée et la parole réalise. La parole crée et le mensonge détruit. Les paroles prononcées aujourd’hui affectent le futur de nos relations. On dit que les démons méprisent le royaume des ténèbres, c’est pourquoi ils jubilent à nous mettre, nous autres mortels. Prenez garde, n’allez pas vous réfugier dans les ténèbres, car il ne sera pas aisé d’en ressortir. Nous faisons tous des choix que nous regrettons ; nous faisons tous des choix qui nous définissent. Le manque de discipline mène à la frustration et à la haine de soi. Nous sommes nos meilleurs ennemis, des victimes consentantes de nos désirs, de nos meurtres, de nos pensées. Choisir la vie n’aurait pas de sens à moins que la mort soit une alternative. On raconte qu’il existe des endroits dans le monde où les lois de la nature ne s’appliquent pas, mais où existe une étrange attraction entre le temps et la mémoire. De nombreuses civilisations témoignent de leur présence. La guerre ne se gagne pas par la force du nombre, mais plutôt par la force du courage. Les personnes de talent s’assoient rarement pour laisser les choses leur arriver ; elles sortent et font les choses. Il n’y a rien de plus noble que d’aider son prochain. La mort d’un homme ouvre les portes à la naissance d’un autre homme. Tu as perdu quelqu’un hier, tu en perdras demain. L’essentiel, c’est l’histoire que tu auras écrite avant que ton heure ne sonne. La vraie question est de savoir que, quand tu seras là-haut et que tu feras le bilan de tout ce que tu as eu à faire sur terre, que voudrais-tu que l’histoire retienne de toi ? Le destin a toujours sa part de vérité dans les actions qui se produisent autour de nous. Le destin appartient d’abord à Dieu ; c’est Lui qui saura comment nous guider jusqu’à la rédemption. La tactique la plus évidente est rarement la plus judicieuse. Chaque moment de souffrance fait partie du plan de Dieu. La terre est un globe, et chaque étape qui nous éloigne nous y ramène. Les morts survenues étaient inéluctables, celles qui surviendront demain le seront aussi. Ceux qui réussissent aujourd’hui sont ceux qui ont connu beaucoup d’échecs hier. Celui qui dépend de la présence des autres pour exister est bien plus seul."
  },
  {
    id: 5,
    formFirstName: "Ray",
    formLastName: "Ague",
    postDate: "2024-07-12",
    image: "/post5.jpg",
    formThoughts:
      "Dans la vie, il faut que tu connaisses ta position, que tu suives le tunnel qui te mènera à la réussite, à ton succès, à ton bonheur. Thanos disait dans le film Marvel Endgame : « S’il existe des gens qui s’attachent toujours à leur passé, c’est qu’il existera forcément des gens qui ne seront pas satisfaits de leur futur. » Prenez bien le temps de relire cette phrase et de comprendre son sens ; elle en dit beaucoup. Je laisse le soin à chacun d’en percevoir la profondeur. Cette vie est régie par des règles, et si tu perds, tu tomberas. Ne te laisse pas influencer par quoi que ce soit. Reste concentré sur tes objectifs. Il y aura des gens qui comprendront cela bien assez tôt, tout comme il y aura des gens qui le comprendront bien après. Le temps, lui, n’attend personne. Ce que tu aurais pu faire il y a 5 minutes, tu ne pourras peut-être plus le faire dans 5 minutes, dans 10 minutes, ou peut-être jamais. Qui sait ? Personne ne le sait, mais cette puissante force spirituelle le sait. Tu es peut-être fatigué, tu as de grands objectifs, mais comment y arriver ? Tu te retrouves devant un gros point d’interrogation. Quand chaque jour tu te lèves, tu te dis que cette journée est la bonne, que tu commenceras à travailler pour ton futur, que tu commenceras à travailler sur tes objectifs, mais c’est là qu’une grosse fatigue vient te submerger, c’est là que ta copine ou ton copain trouve un sujet de discussion très intéressant, c’est là qu’une voix apparaît dans ta tête pour te détourner de tes objectifs. Crois-moi, c’est normal que cela arrive, et cela ne cessera jamais de t’arriver. C’est à toi de rester fort mentalement, c’est à toi de combattre ces idées qui pénètrent ton esprit. Tu dois toujours rester fort, ne jamais avoir peur d’aller plus loin, car le meilleur moyen de perdre, c’est d’abandonner. La vie fait beaucoup de cadeaux aux gens, mais en fait moins à certaines personnes. Même les pauvres, les sans-abris que tu aperçois dans la rue, ont aussi un rôle essentiel dans cette vie. Tu te demanderas sûrement pourquoi je dis cela, c’est tout à fait normal. Quand tu vois ce genre de personne dans la rue, tu ne te dis pas que tu deviendras comme eux, que tu marcheras dans la rue à découvert comme eux, ou que tu seras là un jour en train de bavarder avec eux. Bien au contraire, c’est une source de motivation pour toi ; tu te promets de ne pas devenir comme eux. D’ailleurs, ça n’a jamais été le souhait de quelqu’un, et ça ne le sera jamais. Nous nous croyons souvent au-dessus de certaines choses, de certaines personnes, mais il existe toujours certaines situations où nous demeurons faibles. Nous n’envisageons pas toutes les possibilités avant de nous lancer dans une quête, ce qui fait que nous échouons vite. La vie n’est pas longue ; le temps passera vite, mais tu ne t’en rendras pas compte. Et dans cette vie que tu traverseras, les gens ne te considéreront pas comme tu le souhaites, et cela, même si tu es une personne hors du commun. Seuls ceux qui connaissent ta vraie valeur te considéreront et te défendront, même dans ton dos. C’est là une démonstration du mot « amitié » : la considération. Même si tu as été une joie ou un réconfort temporaire pour quelqu’un, sois-en fier, car tu en as aussi profité. J’ai eu la chance dans ma vie de connaître une personne, il s’appelle Giovanius. Je peux le qualifier de vrai ami, et je crois que ceux qui ont eu la chance de croiser son chemin, comme moi, pensent la même chose. Il est confiant et véridique, tolérant et soigneux. C’est le genre de personne qui sait ce qu’il fait et où il va, c’est le genre de personne qui assume ses propos et ses actes, c’est le genre de personne à qui tu peux faire confiance. Mais trop de confiance peut entraîner la trahison et le manque de considération, une de mes propres expériences. Giovanius, lui, par contre, est un homme sérieux et génial, mais ce n’est pas pour autant qu’il ne te dira pas ce que tu mérites d’entendre à certaines occasions."
  },
  {
    id: 6,
    formFirstName: "Ray",
    formLastName: "Ague",
    postDate: "2024-07-13",
    image: "/post6.jpg",
    formThoughts:
      "Qui est Dieu ? Dieu n’est pas une personne, ni un esprit ou quoi que ce soit. Dans notre tête, nous craignons tous quelqu’un ou quelque chose ; nous savons qu’il y a un être suprême au-dessus de cet Univers. Pour moi, c’est l’Homme qui a créé Dieu. Ce sont nos pensées qui ont créé Dieu, d’où le pouvoir de l’Homme qui est Dieu. Donc, l’Homme, en pensant, crée Dieu, et ce Dieu que l’Homme crée agit en retour selon les consignes que nous lui dicterons, toujours à travers ses pensées. C’est là que le principe de la foi intervient. La foi est un principe irréversible et solide par lequel l’Homme accomplit ou démontre des choses extraordinaires ! Le principe de la foi est donc le pouvoir de l’Homme, et le pouvoir de l’Homme est Dieu."
  },

  {
    id: 7,
    formFirstName: "Ray",
    formLastName: "Ague",
    postDate: "2024-07-12",
    image: "/post7.jpg",
    formThoughts:
      "Parfois, il suffit qu’une petite situation se présente pour que nous commencions à nous poser plusieurs questions. Nous nous demandons pourquoi la vie est ainsi, pourquoi nous devons subir à la place des autres, pourquoi nous sommes nés si nous ne pouvons pas être comme les autres. Tu te poseras ces questions quand tu atteindras certains niveaux de ta vie. La réponse ne se trouve pas dans les comportements que tu adopteras à l’avenir, ni dans les pleurs que tu verseras à longueur de journée, seul ou devant tes proches. Tu auras beau crier que tu ressens de la haine pour tout ce que la vie t’a donné jusqu’à présent, c’est juste le moment dans lequel tu te retrouves qui te fait dire cela. Au fond de l’histoire, tu sais que tu en as profité, même si ce n’était que pour quelques instants. La réponse que nous cherchons se trouve si près de nous que nous peinons à la trouver. Le monde dans lequel nous vivons ne nous appartient pas. Tout existait déjà avant même la genèse de notre race. Tout avait été établi dans le temps. Nous ne sommes pas le fruit du hasard ; tout avait déjà été planifié dans le temps. C’est simple et évident : pour trouver des réponses, posons-nous des questions. La hiérarchie gouvernementale de ce monde peut être un indice à certaines de nos questions. Que cela soit personnel ou public, nous craignons tous quelqu’un ou quelque chose. Nous devons prendre conscience d’une chose : rien n’est éternel, pas même le plus fort ni le plus intelligent du monde. L’innocence est bien, mais le manque de connaissances tue. C’est peut-être à cause de ce manque de connaissances que ta vie est telle aujourd’hui, ou c’est peut-être grâce à une abondance de connaissances que ta vie en est à ce stade. Il y a toujours quelque chose à faire dans cette vie. N’attends pas que quelque chose vienne te provoquer. Je compare le succès à une mangue sur son arbre : comment jouiras-tu de cette mangue si tu ne mets pas en œuvre les compétences nécessaires pour l’atteindre ? La vie a beaucoup de sens, mais nous ne nous en rendons pas compte à certains moments. Ceux qui ont toujours la tête baissée et qui sont plongés dans les choses de ce monde diront toujours le contraire ! Nous sommes occupés à répéter ce que l’Homme nous a appris. Nous avons nos yeux sur le présent et sur le futur, mais de manière limitée. Combien de fois te poses-tu des questions concernant ton origine ? Combien de fois t’es-tu demandé pourquoi il y a le jour et la nuit ? Combien de fois dans une journée te questionnes-tu sur la vraie origine du monde ? Pourquoi te contenter seulement de ce que les gens disent alors que nous sommes des êtres vivants comme eux ? Pour être bref, je dirai que ce sont les morts qui ont toutes les réponses. Nous avons tous eu à perdre quelqu’un dans notre vie, qu’il s’agisse d’un proche ou non. S’ils sont sous terre aujourd’hui, c’est qu’ils détiennent toutes les connaissances relatives à l’origine du monde et même à d’autres choses. Un homme ne meurt pas ; tant que nous avons un quelconque souvenir connecté à notre mémoire, cette personne vit toujours en nous et à travers nous. Nous ne sommes pas le fruit du hasard ! Si la science dit que nous sommes le résultat d'un Big Bang, la seule espèce vivante dans notre voie lactée, ou que la religion affirme que nous avons tous été créés à l’image de Dieu et que le péché nous a conduits à notre ère, c’est que nous allons quelque part. Ce n’est peut-être pas notre génération qui le saura, mais quelque chose arrive et une vérité s’y cache. C’est là que tout devient un mystère. Le vrai mystère, je dirais que c’est l’Univers du visible, car c’est l’Univers de l’invisible qui apporte les réponses. Par la foi nous vivons, par la foi nous espérons ! La foi est invisible, mais elle nous apporte beaucoup de réponses. La foi nous fait faire allusion à Dieu pour nous, Chrétiens. Mais qui est réellement Dieu ? Qu’est-ce que Dieu ? Dieu n’est pas une personne, ni un esprit, ni quoi que ce soit… Dans notre tête, nous craignons tous quelqu’un ou quelque chose. Nous savons qu’il y a un être suprême au-dessus de cet Univers. Moi, je dirais que c’est l’Homme qui a créé Dieu. Ce sont nos pensées qui ont créé Dieu ; d’où le pouvoir de l’Homme est Dieu. Donc, l’Homme, en pensant, crée Dieu, et ce Dieu que l’Homme crée agit en retour selon les consignes que nous lui dicterons, toujours à travers ses pensées. C’est là que le principe de la foi intervient. La foi est un principe irréversible et solide par lequel l’Homme accomplit ou démontre des choses extraordinaires ! Le principe de la foi est donc le pouvoir de l’Homme, et le pouvoir de l’Homme est Dieu. Cela ne veut pas dire que je ne crois pas en Dieu ; je crois en Dieu, mais j’ai peur qu’Il m’entende à certains moments. La nuit n’est pas faite pour se reposer. Le plus grand combat de la vie se déroule dans la nuit. Pour nous tous, la meilleure cachette est l’endroit à l’abri de l’œil, un endroit dans l’ombre où l’on ne pourrait pas s’imaginer. Et donc, la nuit peut cacher d’énormes choses, même les morts. C’est quand nous aurons compris le mystère de l’invisible que nous comprendrons le mystère du visible. Et quand nous aurons compris tout cela, nous pourrons retracer le véritable chemin de la vie. Mais tout ceci ne suffira pas, car la vie peut paraître sous plusieurs formes. Par exemple, « La dimension de Ray ». C’est une ligne horizontale stable qui connaît des ramifications ou non dans le temps. Prenons une ligne horizontale, qu’elle soit courte ou non ; cette ligne représente le cours et la durée de ta vie. Cette ligne restera stable et existait même avant que tu ne sois conçu. Supposons que ton destin était de finir ta vie pauvre. Parce que tu as eu un peu de courage pour te battre contre ce destin, pour relever les défis de ce monde, pour garder la foi et l’espérance face aux déceptions et aux coups bas de cette vie, ta Dimension de Ray connaîtra une modification. Une autre ligne sera créée à partir de ta précédente ligne, qui était de finir pauvre. Et maintenant, qui sait où cette nouvelle ligne te mènera ? Ce processus peut se répéter à l’infini, de sorte que tu disposes de plusieurs Dimensions de Ray. Le plus grand défi que la vie te donne est de naître dans une famille riche ! Si tu finis pauvre, les gens diront que tu as gâché ta vie. Mais si tu finis riche et prospère, les gens diront que tes parents sont la cause de ta fortune. Quelles que soient les circonstances, certaines personnes ne reconnaîtront jamais tes propres efforts. La vie sera toujours inégale pour certains ! Nous ne partageons pas tous l’amour. Les animaux, des races inférieures, se comprennent entre eux sans se parler, alors que nous, nous communiquons, nous parlons sans jamais nous comprendre. Je dis et je le dirai toujours : aime tout le monde, ne jalouse personne, aide ceux que tu peux aider et obtiens de la gratitude ou de la haine. Sois fier et courageux. Car tout ce que tu donnes, c’est le Ciel qui te le rend, et tout ce que tu gardes, c’est la terre qui te le prend. C’est la femme qui fait l’homme, et la femme ne vit que par les sentiments de l’homme. La femme est aussi un autre mystère dans l’histoire des Hommes. Un cœur pur, sincère et plein d’amour désirera une personne charmante et courageuse, tandis que celle-ci désirera un cœur fané avec beaucoup d’ego. Et le pire, c’est que celle-ci viendra te raconter les aventures et les mésaventures qu’elle traverse avec son partenaire, alors que toi, tu avais du cœur à donner. Ainsi va la vie : tout ce qui fait mal fait aussi du bien !"
  },
  {
    id: 8,
    formFirstName: "Internet",
    formLastName: "",
    postDate: "2024-07-13",
    image: "/couple4.jpg",
    formThoughts:
      "L'homme a été créé pour exercer son autorité. Il n'aime pas faire le chef, il est CHEF. Il n'aime pas commander, mais il est un commandant. Il n'y a jamais eu de petit mari et il n'y en aura jamais. Peu importe si la femme est plus âgée ou non. Même parmi vos enfants, commencez par observer de près, le comportement de votre petit garçon face à ses grandes soeurs, et vous comprendrez que l'homme détient sa chefferie depuis le ventre. En effet, une chose semble échapper à nos femmes. La plupart d'entre elles n'acceptent pas se soumettre à l'autorité de leur mari. Ce qui fragilise souvent leur foyer et leur mariage finit par voler en éclat. Ne cherchez pas à affronter votre mari. Quand il parle, vous vous taisez, même si vous pensez avoir raison. Cela peut vous paraître bizarre mais c'est la vérité. L'homme n'aime jamais être défié ou contredit dans l'exercice de son autorité. Quel que soit son degré de colère, quand il élève la voix, toi femme, tu gardes ton calme. Laisse-le extérioriser sa colère et tout ce qu'il ressent. Ne pense pas que cela est une faiblesse de ta part. Au contraire, c'est une manière de lui accorder du respect et de ne surtout pas donner l'occasion à Satan de vous disperser. Les hommes qui portent la main parfois sur leur femme, ne le font pas tous sciemment (même si cela est vivement déconseillé). Il y a des femmes qui sont même prêtes à servir des réponses à chaque fois que l'homme sort un mot. Croyez-moi qu'en répliquant de cette manière, vous suscitez plus la colère de votre homme. Les propos que vous n'oserez jamais tenir devant vos grands frères si vous étiez en famille, vous dites pires à l'homme qui est votre mari et à qui vous devez respect plus que vos propres frères. Vous devenez d'office, une femme irrespectueuse à ses yeux. Et ne soyez pas étonnée s'il commence par manquer à ses devoirs conjugaux à cause de ce simple comportement. LA MEILLEURE SOLUTION EST D'ATTENDRE QU'IL SOIT CALME ET VOUS LE FAITES ASSEOIR POUR LUI DIRE AVEC RESPECT, TOUT CE QUE VOUS AVEZ SUR LE CŒUR. ET VOTRE PROBLÈME SERA RÉSOLU POUR LE BONHEUR DE VOTRE FOYER. Une femme qui cherche à égaler ou à disputer l'autorité de l'homme, met du feu à son propre foyer. Mais celle qui sait prendre patience et discuter avec son mari dans le calme, est une reine. Elle préserve son foyer et Dieu la bénira abondamment."
  },

  {
    id: 9,
    formFirstName: "Internet",
    formLastName: "",
    postDate: "2024-07-12",
    image: "/couple8.jpg",
    formThoughts:
      "Depuis des siècles, les femmes ont été manipulées pour croire qu'elles sont « hystériques », « émotives », « folles » et « dépendantes » pour avoir des besoins fondamentaux. C'est pourquoi, chaque fois que vous entendez un homme traiter prématurément son ex de folle, vous devez vous demander : « Était-elle vraiment folle ou a-t-elle été poussée à cela ? Était-elle toujours réactive ou a-t-il cherché à l'agacer mille fois avant qu'elle réagisse enfin de manière valable face à un comportement outrageant ? » Bien qu'il soit vrai que certaines femmes puissent avoir des problèmes de régulation émotionnelle, la plupart du temps, lorsque un homme traite une femme de « folle », « méchante », « dominatrice », « conflictuelle », ce qu'il veut vraiment dire, c'est : « Elle avait des limites de base et s'est affirmée. » Un homme de haute qualité connaît la différence entre quelqu'un qui est réellement émotionnellement instable et une femme qui connaît simplement ses droits. Les soi-disant « femmes folles » sont des femmes sûres d'elles. Elles sont en sécurité dans leurs limites et leurs normes, leurs attentes et leur respect de soi. Elles s'affirment lorsqu'elles sont maltraitées et savent comment aligner et faire respecter leurs limites par leurs actions. Alors, qu'est-ce qui attire les hommes de haute qualité chez une femme assertive, une femme « méchante » comme pourrait l'appeler un homme de basse qualité ? Et pourquoi les « filles cool » qui restent silencieuses sur leurs besoins ne sont-elles jamais choisies par ce type d'homme ? Voici quatre secrets que vous devriez connaître sur les hommes en général dans le domaine des rencontres et comment maintenir vos standards pour n'inviter que des hommes de haute qualité dans votre vie amoureuse. Les hommes aiment et deviennent obsédés par les soi-disant femmes « méchantes », autrement connues sous le nom de femmes assertives, et les hommes de haute qualité sont particulièrement attirés par ces femmes. Les hommes de basse qualité profitent des « gentilles filles ». Vous pouvez penser qu'être une femme qui cherche à plaire et être trop gentille en gâtant un homme le séduira, mais la vérité est que les hommes, qu'ils soient de haute ou de basse qualité, deviennent accros à la chasse des femmes qui les rejettent. Ils veulent de la validation et de l'approbation de la part de la femme qui ne leur en donne pas si facilement. Au fond, ils sont excités par une femme avec des normes élevées, des limites strictes et une femme qui ne les considère pas comme des sous-hommes. Ils sont attirés par une femme qui est difficile à satisfaire. Ils peuvent se plaindre de ces femmes et le nier avec colère autant qu'ils le veulent, mais tout ce que vous avez à faire est d'observer comment ils exploitent et utilisent les femmes qui se plient en quatre pour eux et se soumettent aux femmes qui les remettent à leur place. Ces femmes s'estiment, sont fières d'elles et ne sacrifient jamais leur respect de soi en se contentant de miettes. Les hommes toxiques prennent surtout pour acquis les femmes qui se soucient d'eux, car ils croient que vous serez toujours là ; ils poursuivent et rivalisent pour les femmes qui sortent avec d'autres hommes et rient dans leur visage. Si vous ne me croyez pas, regardez l'historique de conversation d'un homme que vous avez déjà ignoré – il vous enverra des messages à répétition pour essayer de regagner votre attention et craindra que vous soyez passée à autre chose. Cela ne signifie pas que vous devez être réellement méchante avec qui que ce soit – c'est juste un rappel que vous devez cesser de gaspiller tous vos efforts en centrant votre attention sur les hommes. Ne le gâtez pas, ne lui parlez pas, et ne l'amusez pas à moins qu'il ne vous soit bénéfique. Soyez authentiquement si « absorbée » par votre vie que vous ne vous intéressez plus à un homme qui ne fait pas l'effort de vous plaire. Il y a de fortes chances qu'il soit occupé à poursuivre une femme qui s'en fiche. Maintenant, occupez-vous de poursuivre la vie de vos rêves et ne vous contentez que d'un partenaire de rêve qui vous traitera bien. Les hommes peuvent et dépensent de l'argent pour les choses qui comptent pour eux. Ne perdez pas votre temps avec un homme qui n'est pas généreux ou romantique. S'il ne vous emmène pas à des rendez-vous agréables et significatifs, ou s'il n'est pas attentif à ce que vous aimeriez, il ne vous valorise pas comme vous méritez d'être valorisée. « Mais je suis féministe et je peux me débrouiller toute seule ! » pourriez-vous dire. Une véritable féministe sait que le monde n'a pas encore atteint l'égalité, donc essayer d'imposer « l'égalité » dans des circonstances inégales ne conduit qu'à plus d'adversité pour vous. Les hommes de haute qualité sont plus qu'heureux de faire des efforts pour plaire et impressionner les femmes qui les intéressent, donc vous ne devriez jamais sentir que vous devez vous contenter d'être la « fille cool » qui est peu exigeante et « facile » à sortir. Avec tous les fardeaux, l'inégalité et les problèmes de sécurité auxquels les femmes font face, même en sortant avec un homme qui pourrait l'agresser ou la tuer, pourquoi devriez-vous vous contenter de moins ? Une femme qui est habituée à être emmenée et correctement « courtisée » ressentira un « dégoût » naturel envers tout homme qui l'approche et n'a pas de plan de rendez-vous solide et romantique. Certaines femmes peuvent penser que partager 50-50 est « l'égalité », mais un homme qui est d'accord pour ne pas vous impressionner dès le début ne va pas essayer de vous impressionner non plus plus tard et est probablement émotionnellement avare. Définissez tôt le standard pour la façon dont vous voulez être traitée et méritez d'être traitée. Au moins, même si l'homme s'avère toxique, vous ne perdrez pas votre temps et vos ressources sur quelqu'un qui ne peut même pas répondre au minimum requis. J'ai connu des hommes qui m'ont emmenée dans de jolis restaurants romantiques et qui se sont avérés plus tard avoir emmené d'autres femmes dans des musées gratuits ou à des « rendez-vous de marche » parce qu'ils pensaient qu'ils pouvaient s'en tirer avec ces femmes (qu'est-ce qu'un rendez-vous de marche, au fait ? Prenez un chien). Un de ces joueurs sordides m'a appelée sa « préférée ». Voilà un gros dégoût. Mais ce genre de scénario ouvre les yeux sur la façon dont les hommes savent très bien traiter une femme – certains choisissent juste de ne pas le faire du tout, ou le font uniquement pour certaines femmes. Rappelez-vous : certains hommes sortent avec plusieurs femmes à la fois et chercheront un moyen de le faire à bas prix avec des femmes qu'ils ne prennent pas au sérieux ou qu'ils estiment pouvoir traiter moins bien – ne soyez jamais cette femme. Ne vous contentez jamais d'un café ou de rendez-vous peu engageants quand il y a un homme de haute qualité qui ne peut pas attendre de vous gâter (oui, il existe des moyens de rester en sécurité avant de rencontrer quelqu'un, autre que de se contenter d'un rendez-vous café : FaceTime et apprenez à les connaître d'abord avant d'accepter un rendez-vous !). De nombreuses femmes sont gâtées chaque jour par leur partenaire avec des rendez-vous incroyables, des cadeaux, des vacances de luxe, des gestes romantiques – vous ne méritez rien de moins. Si vous avez peur d'être qualifiée de « matérialiste », demandez-vous pourquoi vous sentez que vous ne méritez pas d'être impressionnée par l'homme qui prétend vous aimer. La plupart des hommes dans le domaine des rencontres cherchent à vous faire perdre votre temps. Donc assurez-vous que le temps que vous passez avec eux en vaut la peine et ne passez pas de temps avec des personnes qui n'en valent pas la peine. La meilleure façon d'éloigner un homme caché ? Quand il vous dit inévitablement que son langage de l'amour est le toucher physique, souriez, riez, battez des cils et dites-lui que votre langage de l'amour, c'est l'argent. Ensuite, mesurez sa vitesse de fuite. Considérez ceci : trop d'hommes dans le monde des rencontres espèrent juste vous utiliser pour le sexe et feront perdre votre temps, tout en vous accusant de perdre le leur si vous ne couchez pas avec eux. Alors pourquoi vous sentez-vous mal à l'aise de vous assurer qu'ils investissent en vous tout en risquant de perdre votre temps ? Les hommes s'attendent à avoir des relations sexuelles, qu'ils vous emmènent au restaurant ou qu'ils passent du temps à vous connaître. Donc, si vous n'êtes pas sûre des véritables intentions de quelqu'un, autant vous assurer que les rendez-vous qu'ils vous proposent et les conversations que vous avez valent vraiment votre temps. Le message que vous enverrez aux hommes toxiques dans le monde des rencontres sera clair à travers vos actions : Je n'accepte pas moins. Si vous essayez de me manipuler, vous perdrez votre propre temps et votre argent pendant que j'évalue vos intentions. Élevez vos standards et ne laissez pas les personnes toxiques dans le monde des rencontres vous faire vous contenter de moins que le strict minimum. Il y a des hommes de haute qualité qui montreront leur intérêt authentique de manière constante – si vous ne traitez pas avec l'un d'eux, protégez votre célibat et votre liberté. Trouvez un homme avec un véritable état d'esprit de pourvoyeur qui vous attire physiquement et émotionnellement (oui, les femmes ont le droit de sortir avec des hommes attirants sans être qualifiées de « superficielles » – si vous ne le pensez pas, c'est parce que les médias et les films romantiques vous ont conditionnée à croire à des double standards). Les hommes « protègent » leur liberté tout le temps. Ils explorent leurs options. Ils priorisent leur propre bonheur dans les rencontres. Ils se retirent rapidement des situations qui ne répondent pas à leurs propres besoins et intérêts. Ils cherchent leur « type » physique et émotionnel avec qui s'accoupler. Si vous voulez un homme de haute qualité, vous devriez faire de même."
  },
  {
    id: 10,
    formFirstName: "Internet",
    formLastName: "",
    postDate: "2024-07-13",
    image: "/friend10.jpg",
    formThoughts:
      "Souvent, lorsque nous parlons des relations toxiques que les femmes subissent, nous nous concentrons uniquement sur les hommes malsains qui agissent agressivement envers elles, ce qui est tout à fait justifié. Mais nous parlons rarement d'un autre danger insidieux qui s'infiltre dans nos vies en tant que jeunes femmes, qui normalise et nous conditionne à accepter un comportement inacceptable dans nos relations tout au long de l'adolescence et de l'âge adulte. Voici donc l'amie narcissique « pick-me » qui centre les hommes et les relations au détriment de son propre bien-être, mais aussi de celui de ses amies, jetant fréquemment d'autres femmes sous le bus pour attirer l'attention et l'approbation des hommes. Son obsession pour les relations romantiques et les hommes nuit généralement aux autres femmes, en particulier à ses amies les plus proches. Voici les traits et comportements qui rendent la femme « pick-me » si dangereuse et pourquoi vous devriez choisir vos amies féminines très sélectivement. Les femmes narcissiques qui centrent les hommes vous encourageront à vous contenter de moins juste pour dire que vous avez une relation et à rejoindre leur misère. Considérez les femmes « pick-me » comme des soldats de l'infanterie pour le patriarcat et les systèmes abusifs qui empêchent les femmes de revendiquer leur véritable pouvoir et de se prioriser. Elles sont ici pour vous vendre les messages de leur conditionnement sociétal semblable à une secte, qu'elles n'ont jamais pris la peine de reprogrammer ou d'interroger de près, et si elles ont des traits narcissiques, elles manqueront également d'empathie pour la façon dont ces messages vous affectent. Le message ? Votre relation romantique est la chose la plus importante dans cette vie. Sacrifiez votre santé, votre bien-être, vos standards et vos limites si vous voulez un jour être mariée. Vous devez vous contenter de moins si vous voulez vous établir. Être célibataire et heureuse seule avant de trouver un bon partenaire n'est pas acceptable ! Il y a un sens d'urgence moralement dépravé dans les conseils biaisés de la femme « pick-me » sur les rencontres, car elle se contente souvent de relations toxiques et d'hommes peu intéressants juste pour dire qu'elle « a un homme ». Ce message est très différent de celui qu'une femme dans une relation saine avec des standards communique à ses amies, qui est : « Ne te contente pas de moins à moins que tu ne trouves le bon. Ça ne fera pas de bien, tu ruineras ta vie et tu souffriras si tu te contentes du mauvais homme. La seule relation digne de ce nom est celle qui ajoute de la valeur à ta vie. Prends ton temps. Sois célibataire, explore, amuse-toi ! Je veux que tu rencontres la bonne personne, et si ce n'est pas le cas, tu seras heureuse et prospérera quoi qu'il arrive. » La femme « pick-me » qui centre les hommes, en revanche, fera tout pour rejeter la richesse des recherches et les voix des femmes qui montrent qu'en moyenne, le mariage et l'engagement tendent à désavantager les femmes, leur causant un plus grand stress psychologique que les hommes mariés (probablement en raison de la plus grande charge de travail émotionnel et domestique qu'elles sont forcées de prendre en charge, souvent pour un partenaire incompatible qui les néglige ou les maltraite). Cela est particulièrement vrai pour les relations malsaines, abusives, toxiques et incompatibles. Des amies dangereuses comme celles-ci préfèrent maintenir l'illusion de fausse supériorité entourant le statut relationnel ou marital d'une femme plutôt que la qualité réelle de la relation, même si cela met leurs amies en danger, elles vous encourageront donc à « ne pas être si exigeante » ou « difficile » concernant la personne avec qui vous envisagez de passer le reste de votre vie, en vous faisant honte pour avoir des standards. Elles peuvent même vous encourager à minimiser les incidents de maltraitance, de trahison ou d'efforts minimes, car « aucun homme n'est parfait », et elles sympathiseront souvent avec les perspectives d'hommes violents plutôt qu'avec la violence répandue que subissent les femmes dans le monde entier. Leur choix de partenaires vous mettra dans des situations dangereuses et elles « rivaliseront » avec vous pour l'attention des hommes, poursuivant même vos intérêts amoureux dans une tentative de vous « dépasser ». La femme narcissique et psychopathe « pick-me » va plus loin que de simplement protéger ses relations toxiques et minimales avec les hommes : elle mettra activement ses amies, membres de la famille et proches en danger pour défendre tous les hommes toxiques. C'est la mère narcissique qui prétend ne pas voir son petit ami nuire ou abuser de sa fille juste pour maintenir la relation, ou l'amie narcissique qui permettra à son mari de tenter de vous attaquer verbalement ou physiquement sans rien dire pour vous défendre. Ou leurs habitudes « pick-me » peuvent être si fortes qu'elles essaient activement de flirter avec votre petit ami, ou votre coup de cœur, ou votre ex pour obtenir une validation excessive (ou parce qu'elles ont des traits de personnalité sombres associés au vol de partenaires). Elles peuvent également tenter de voler la vedette et ressentir du ressentiment lorsque vous recevez plus d'attention qu'elles de la part des hommes. Elles ne seront pas fières de vous ou de vos réalisations et essaieront de vous ramener à votre statut relationnel chaque fois que vous essayez de célébrer ces réalisations, car elles sont mal à l'aise avec le fait que les femmes aient d'autres intérêts, ambitions et réussites en dehors des hommes, au lieu de se concentrer sur les hommes comme elles le font. Une amitié avec une femme « pick-me » sera souvent une amitié dangereuse et nuisible, et leurs conversations seront toujours centrées sur les hommes. Comme c'est ennuyeux et insatisfaisant ! Mais la façon dont elles vous traitent et vous font honte dans cette amitié, vous coercant à abaisser vos standards pour les hommes, peut même vous amener à entrer dans des relations abusives, surtout si vous êtes vulnérable et susceptible de leur comportement manipulateur. Rappelez-vous : les femmes qui ont réellement des relations saines et un état d'esprit sain envers les rencontres et les hommes sont différentes, car elles centrent leur propre vie, leurs amies, leur famille et leurs objectifs, et leur relation n'ajoute de la valeur qu'à leur vie déjà stable et nourrissante. Elles ne mettraient pas d'autres femmes en danger simplement pour le bien de leur relation, et elles ne choisiraient pas un homme au détriment de l'intégrité de leurs amitiés. Elles célèbrent leurs relations de manière saine, ne se comportent pas comme si le statut relationnel déterminait la valeur d'une femme et ne conseillent pas les femmes à prendre de mauvaises décisions ou à se contenter de moins juste pour un statut relationnel, car elles se soucient de la santé mentale et du bonheur général de leurs amies. Elles savent faire la différence entre se contenter d'une relation toxique juste pour dire qu'on a quelqu'un et être réellement avec son « âme sœur » — un homme de haute qualité qui est réellement compatible avec vous, qui est respectueux, gentil, et qui aime et chouchoute sa copine avec douceur et générosité. Elles vous aident à vous libérer des relations toxiques, pas à y rester piégée. Plutôt que de dire à leurs amies de tolérer la maltraitance, ces amies féminines saines encouragent d'autres femmes à avoir des standards élevés et des limites solides. Sachez faire la différence et choisissez vos amies avec soin. Entourez-vous d'amies qui vous soutiennent, qui célèbrent vos réalisations en dehors des relations, qui vous rappellent de ne pas vous contenter de moins, qui vous protègent et vous défendent contre les hommes toxiques, qui vous encouragent à avoir des standards élevés, et qui ne soutiennent que vos relations les plus saines. Cela élèvera non seulement votre vie amoureuse (si vous souhaitez l'améliorer), mais aussi votre qualité de vie et votre bonheur en général."
  },
  {
    id: 11,
    formFirstName: "Internet",
    formLastName: "internet",
    postDate: "2024-07-13",
    image: "/couple6.jpg",
    formThoughts:
      "Internet est en émoi depuis que The Times a couvert plus en profondeur l'histoire de Ballerina Farm, une histoire initialement présentée dans The New York Times, à propos d'un couple influent très populaire, comprenant une femme au foyer et mère de huit enfants, Hannah, qui a récemment participé à un concours de beauté pour femmes mariées peu après avoir accouché. L'article est depuis devenu viral, et beaucoup ont souligné les signes d'alerte concernant la façon dont Hannah a rencontré son mari milliardaire (dont le père possède plusieurs compagnies aériennes) et semble avoir été contrainte de renoncer à une carrière potentiellement florissante de ballerine formée à Juilliard à New York pour maintenant endurer des accouchements naturels à domicile sans péridurale ni soulagement de la douleur, tout en étant « épuisée » et en étant alitée en raison des soins apportés à ses huit enfants. Hannah déclare qu'elle n'a pas de nourrices ni d'aide extérieure, à part quelques travailleurs agricoles, une assistante personnelle et une baby-sitter pour des soirées en tête-à-tête hebdomadaires. Voici quelques signaux d'alerte que le public a remarqués dans l'histoire et qui peuvent également vous aider à éviter des situations exploitantes vous-même : Hannah a rencontré son mari à 21 ans et ne voulait pas sortir avec lui, donc il a fabriqué une situation qui l'a essentiellement forcée à sortir avec lui. Selon son mari Daniel, Hannah ne voulait pas sortir avec lui après leur première rencontre par l'intermédiaire d'un ami commun, et ce refus a duré six mois. Mais Daniel a utilisé ses relations chez JetBlue (que son père possède) pour les faire asseoir côte à côte lors d'un vol lorsque Hannah rentrait à New York. Après cela, il voulait se marier dans les mois qui suivaient, malgré son désir d'attendre un an avant le mariage pour qu'elle puisse terminer ses études. Bien que le public ne puisse pas parler de la façon dont cela a personnellement nui à Hannah, car elle seule peut en parler, en général, il est inquiétant de poursuivre quelqu'un aussi assidûment après avoir été rejeté, surtout après six mois, et cela peut être un signe de contrôle coercitif. Se précipiter et avancer rapidement vers le mariage est également généralement un signe de 'love bombing' (où un partenaire vous inonde d'affection, d'attention et d'attention constante, précipitant la relation pour vous gagner), ce qui peut conduire à l'isolement et à des décisions qui ne servent pas nécessairement les meilleurs intérêts de quelqu'un mais plutôt les désirs du poursuivant. En tant que jeune femme, vous êtes également souvent très vulnérable aux comportements manipulateurs qui peuvent changer le cours de votre vie à un stade vulnérable de la vie. Hannah a enduré la naissance de huit enfants principalement sans soulagement de la douleur. L'article de The Times nous informe que la seule fois où Hannah a accepté un soulagement de la douleur lors de l'accouchement, c'est lorsque Daniel était « absent », et elle dit au journaliste, tout en baissant la voix, qu'elle a eu une « péridurale », qu'elle qualifie d'« expérience incroyable ». Étant donné qu'elle a donné naissance à huit enfants, cela est considérablement préoccupant. Bien que nous ne puissions pas parler spécifiquement de ce couple en particulier puisque nous ne savons pas avec certitude comment l'agence de Hannah a été affectée dans cette relation en ce qui concerne la grossesse et l'accouchement, en général, nous devons être prudents face aux signes de coercition reproductive et de contrôle, car c'est un problème significatif pour les femmes en couple. Si un partenaire vous contraint à tomber enceinte à un rythme qui ne vous convient pas, ou essaie de vous faire tomber enceinte tôt ou dans des conditions qui ne vous conviennent pas, cela peut être un potentiel signal d'alerte de comportement coercitif à long terme. Certains partenaires utiliseront délibérément l'épuisement de la grossesse et de l'accouchement pour vous garder sous leur contrôle et conformes à leurs besoins. Lorsque vous êtes trop épuisée par l'éducation et la naissance d'enfants, vous êtes également trop épuisée pour vous défendre et poursuivre d'autres objectifs en dehors de la relation et de l'éducation des enfants. Hannah semble avoir renoncé à son rêve pour réaliser celui de Daniel. Comme le dit Hannah dans l'article original de The Times lorsqu'on lui demande si gérer la ferme avec huit enfants était son rêve, elle répond non, précisant : « Mon objectif était New York. J'ai quitté la maison à 17 ans et j'étais si excitée d'y aller, j'aimais tellement cette énergie. Et j'allais être ballerine. J'étais une bonne ballerine… Mais je savais que lorsque j'allais avoir des enfants, ma vie commencerait à avoir un aspect différent. » Son mari, en revanche, a déclaré que c'était son rêve et qu'il s'attendait à ce qu'Hannah soit davantage à la maison avec les enfants. Pour apporter une nuance à cette conversation, Hannah dit que passer du temps avec ses enfants est satisfaisant et épanouissant, indiquant que le mariage et les enfants auraient été épanouissants pour elle dans le cadre de son rêve aussi. Cependant, il est raisonnable de supposer qu'elle ne s'attendait probablement pas à renoncer entièrement à ses rêves de danseuse pour réaliser ces rêves. Cela nous donne une leçon importante : ne renoncez jamais à vos rêves pour un partenaire romantique ou ne vous précipitez pas dans le mariage avant d'être prête - un partenaire sain vous encouragera généralement à réaliser vos rêves, et il y aura un sens de réciprocité dans la relation en termes de soutien mutuel pour les objectifs personnels de chacun. Hannah et son mari se rendent souvent dans des endroits plus isolés, même lorsqu'ils sont en vacances, et les cadeaux de son mari semblent lui rappeler son rôle de femme et de mère plutôt que d'être des signes d'attention à ses véritables désirs. Bien que nous ne puissions pas savoir avec certitude ce qui se passe derrière des portes closes, les réseaux sociaux supplémentaires du couple ont suscité des soupçons parmi le public, car le mari de Hannah la convainc souvent d'aller dans un lieu plus isolé même lorsqu'ils voyagent vers des endroits comme New York et Hawaï, et le cadeau d'anniversaire de Hannah a consisté en un « tablier à œufs » plutôt qu'un voyage en Grèce (qu'elle souhaitait) malgré les moyens financiers de lui offrir cette escapade de rêve. Lorsque Hannah a semblé légèrement déçue lors de la révélation du cadeau, son mari a été entendu derrière la caméra dire : « De rien », ce que certains spectateurs ont trouvé glaçant. Les lecteurs de l'article et de nombreux abonnés de Ballerina Farm trouvent cela suspect car cela semble isoler Hannah du monde extérieur même lors de leurs voyages, et la vidéo de l'offre de cadeau de l'« tablier à œufs » est depuis devenue virale alors que des gens mettent en garde contre les partenaires qui vous offrent le mauvais cadeau intentionnellement même lorsque vous leur avez dit ce que vous préférez. Nous ne saurons peut-être jamais toute l'histoire de Ballerina Farm, ni à quel point Hannah a vraiment de l'autonomie, ni si elle se voit comme une victime ou une mère et épouse épanouie - ou les deux. La réalité est probablement beaucoup plus nuancée et complexe. Cependant, nous pouvons encore noter les signaux d'alerte potentiels des rencontres et de l'amour que le public a soulignés, et utiliser ce discernement pour guider les jeunes femmes dans la prise de décisions qu'elles jugent les plus saines et les plus sûres pour elles-mêmes, tout en reconnaissant leur propre autonomie."
  }
];

export default function Page() {
  const { id } = useParams(); // Récupérer l'ID du post à partir des paramètres de l'URL
  const router = useRouter();
  const [post, setPost] = useState(null);
  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    const fetchPost = () => {
      const postId = parseInt(id, 10); // Convertir l'ID en nombre
      const foundPost = posts.find((p) => p.id === postId);
      if (foundPost) {
        setPost(foundPost);
      } else {
        console.log("Aucun post trouvé !");
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full min-h-screen font-sans transition ease-in bg-slate-950">
        <h3 className="flex flex-col text-5xl font-extrabold text-center text-white ">
          Loading...
        </h3>
      </div>
    ); // Afficher un message de chargement pendant que les données sont récupérées
  }

  return (
    <div className="flex flex-col items-center min-h-screen font-sans transition ease-in bg-slate-950">
      <div className="flex flex-row items-center justify-between w-full h-auto gap-6 px-3 py-6 mb-5 shadow-2xl backdrop-blur-md bg-white/5 sm:px-5 lg:px-20 md:px-10 ">
        <button
          onClick={handleBack}
          className="text-4xl font-black text-gray-50"
        >
          &larr;
        </button>
        <nav className="flex flex-row justify-end gap-4 font-extrabold text-gray-200 decoration-none text-md/6 ">
          <Link href="/home" className="hover:text-gray-50">
            Home
          </Link>
          <Link href="/projects" className="hover:text-gray-50">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-50">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-gray-50">
            Blog
          </Link>
        </nav>
      </div>
      <div className="container px-5 sm:px-8 md:px-12 xl:px24 2xl:px44 lg:px16">
        <div className="flex flex-col w-full h-auto gap-6 my-11">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 1,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.3
                }
              }
            }}
          >
            <h1 className="text-6xl font-black text-gray-50">Posts</h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 1,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.8
                }
              }
            }}
          >
            <p className="text-xl text-white leading-relaxed">
              Welcome to the posts page! Here, I share insights, ideas, and
              experiences that nurture our growth and creativity. Join me as we
              explore various themes, reflect on the challenges we face, and
              celebrate our learning journey together.
            </p>
          </motion.div>
        </div>
        <div className="w-full h-px my-16 bg-gray-800"></div>
        <div className="container grid items-center justify-center w-full grid-cols-1 pb-40 text-white/65">
          <div className="w-full h-auto p-5 mx-auto delay-150 shadow-2xl bg-slate-900/60 rounded-xl shadow-slate-800/50 ">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 1,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 1.2
                  }
                }
              }}
            >
              <Image
                src={post.image}
                width={500}
                height={500}
                alt="Picture"
                className="object-cover mx-auto mb-5 lg:w-1/2 md:w-full sm:w-full rounded-t-xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 1,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 1.6
                  }
                }
              }}
            >
              <h1 className="mb-4 text-3xl font-bold tracking-tighter">
                {post.formFirstName} {post.formLastName}
              </h1>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 1,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 2
                  }
                }
              }}
            >
              <h2 className="mb-2 text-xl">
                Posté le : {new Date(post.postDate).toLocaleDateString()}
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 1,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 2.4
                  }
                }
              }}
            >
              <p className="mx-3 mb-4 text-xl font-base">{post.formThoughts}</p>
            </motion.div>
          </div>
        </div>

        {/* <h1 className="mb-4 text-3xl font-bold">
        {post.formFirstName} {post.formLastName}
      </h1>
      <h2 className="mb-2 text-xl">
        Posté le : {new Date(post.postDate).toLocaleDateString()}
      </h2>
      <p className="mb-4">{post.formThoughts}</p>
      <button
        onClick={() => router.back()}
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
      >
        Retour
      </button> */}

        <div className="relative bottom-0 flex flex-row items-center justify-center w-full h-auto gap-3 p-3 ">
          <Link
            href="https://www.facebook.com/profile.php?id=100084755843013"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white "
          >
            <FontAwesomeIcon className="size-8" icon={faFacebook} />
          </Link>
          <Link
            href="https://www.instagram.com/rayague03?igsh=MTg3eWNnN2hzdnI0Zg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white "
          >
            <FontAwesomeIcon className="size-8" icon={faInstagram} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ray-ague-2066b4247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white "
          >
            <FontAwesomeIcon className="size-8" icon={faLinkedin} />
          </Link>
          <Link
            href="https://wa.me/22960932967"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FontAwesomeIcon className="size-8" icon={faWhatsapp} />
          </Link>
          <Link
            href="https://github.com/rayague"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FontAwesomeIcon className="size-8" icon={faGithub} />
          </Link>
        </div>
      </div>
      <p className="mt-4 mb-8 text-sm text-center text-white">
        © copyright -{" "}
        <Link href="https://portfolio-cnkp.vercel.app">Ray Ague</Link> All
        rights reserved.
      </p>
    </div>
  );
}
