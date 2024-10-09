# The Client - Website

**De opdracht**

De afgelopen 3 weken heb ik gewerkt aan de opdracht _Mediahuis_ van Triple. Deze opdracht luidt als volgt: creëer een radioguide (een webapp) die informatie geeft over programma's, DJ's, en een persoonlijke ervaring biedt voor elke luisteraar. 

Ik heb me tijdens deze sprint gericht op het 'namaken' van de huidige programmering van radio Veronica. En ik heb hierbij een aantal functionaliteiten toegevoegd en een aantal onderdelen herontworpen. 

**Over Triple & Mediahuis**

Mediahuis, met wortels in België, is uitgegroeid tot een invloedrijke speler in de Europese mediamarkt. Het bedrijf, actief in de Benelux, Duitsland en Ierland, heeft een divers portfolio van nieuwsmerken, online platforms en radiostations. Sinds 2023 heeft Mediahuis haar bereik verder uitgebreid door de overname van verschillende populaire radiostations, waaronder Radio Veronica, SLAM!, Sublime, Sunlite en 100% NL. 

Triple is verantwoordelijk voor het ontwikkelen en onderhouden van de web apps en mobiele apps voor al deze radiozenders. Dit omvat zowel de front-end ontwikkeling, die zorgt voor de gebruikersinterface en -ervaring, als de back-end ontwikkeling, die de technische infrastructuur en functionaliteiten van de apps ondersteunt. Door deze uitgebreide samenwerking draagt Triple bij aan het succes van de digitale kanalen van Mediahuis en zorgt het ervoor dat luisteraars een optimale ervaring hebben.

<!-- De instructie van deze leertaak staan in de [INSTRUCTIONS.md](https://github.com/fdnd-task/the-client-website/blob/main/docs/INSTRUCTIONS.md) -->

## Inhoudsopgave Readme

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

Bekijk hier de website: https://julia-stevens.github.io/the-client-website/

<img width="200" alt="image" src="https://github.com/user-attachments/assets/f9c9efef-e1fe-4c61-921b-a73dc14c9f2c">

Wanneer de website opent, wordt direct naar het huidige radio programma gescrold én wordt de card van dit programma gehighlight. Onderaan het scherm staat een player met het nummer dat wordt afgespeeld, en kan de gebruiker direct zien bij welk programma dit nummer hoort. 

https://github.com/user-attachments/assets/c9b1e9f6-78be-47d7-845c-69dd81432deb

Wanneer de gebruiker verder omlaag scrolt, worden de sub-menu's verborgen, om meer ruimte te creëren op het scherm. Wanneer er omhoog wordt gescrold, worden deze menu's weer zichtbaar. 

https://github.com/user-attachments/assets/e8381e0b-67b8-4ba7-a255-74fceee5d38a

Middels een hamburger menu kan een gebruiker zich naar de andere pagina's navigeren 

https://github.com/user-attachments/assets/f8db6d73-eaca-46dc-a821-1684d1ee9c2c

En de player verschuift zich bij een grotere browser naast de programmering

https://github.com/user-attachments/assets/6137c2d6-5edd-4ba2-82eb-13968a51af5f

Daarnaast zijn er een aantal hover transitions toegevoegd:  

https://github.com/user-attachments/assets/78991bc1-1b9a-4dd5-b48e-a2b40dfba4b6

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

**HTML**

Bekijk hier de [index.html](https://github.com/julia-stevens/the-client-website/blob/main/index.html)

Dit is de structuur: 

```
<header>
<nav> Hier staat de blauwe navigatie balk & het hamburger menu </nav>
<ul> Hier staat het sub-menu: Programmering, DJ's, Frequenties, Playlists </ul>
<ul> Hier staat het menu met de dagen van de week </ul>
</header>

<main>
<article> Iedere aparate programmering is een article </article>
</main>

<section> In deze section staat de player </section>

```

**CSS**

Bekijk hier de [styles.css](https://github.com/julia-stevens/the-client-website/blob/main/styles/styles.css)

De programma cards zijn gemaakt met een grid: 
```
.programma-card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: .2fr .3fr 1fr .3fr;
}
```

**JS**

Bekijk hier de [script.js](https://github.com/julia-stevens/the-client-website/blob/main/scripts/script.js)

**Hamburgermenu**: De hamburgermenu-knop schakelt de `clicked`-klasse op het `primaryMenu` in of uit wanneer erop wordt geklikt, waardoor het menu zichtbaar of verborgen wordt.

**Programma cards**: Het controleert het huidige uur, voegt een `active`-klasse toe aan elke `programma-card` waarvan het uur in de `id` overeenkomt, en scrollt de eerste overeenkomstige kaart in beeld, waarbij elke minuut wordt ververst.

Scrollgedrag voor sub-menu's: Wanneer er omlaag wordt gescrold voorbij de sub-menu's, worden beide menu's verborgen; bij omhoog scrollen verschijnen ze weer.

## Bronnen

https://jsfiddle.net/mariusc23/s6mLJ/31/
...

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
