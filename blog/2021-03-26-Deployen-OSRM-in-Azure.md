---
slug: deployen-osrm-in-azure
title: Deployen OSRM in Azure
author: Bryan Schoot
author_title: Software Engineer
author_url: https://github.com/bryanschoot
author_image_url: https://avatars.githubusercontent.com/u/18568202?v=4
tags: [azure, osrm, openstreetmap]
---

In dit artikel ga je leren hoe je een OSRM server host binnen de Azure Portal.

<!--truncate-->

## Wat is OSRM

OSRM is een open source routing machine. OSRM gebruik data van OpenStreetMap om de snelste route te berekenen.

In tegenstelling tot de meeste routingservers gebruikt OSRM geen A\*-variant om het kortste pad te berekenen, maar een combinatie van Dijkstra's op meerdere niveaus. Dit resulteert in zeer snelle query-tijden, gewoonlijk minder dan 1 milliseconde voor datasets zoals Europa, waardoor OSRM een goede kandidaat is voor responsieve, webgebaseerde routeringstoepassingen en websites.

Dit maakt OSRM:

- Zeer snelle routing
- Zeer draagbaar
- Eenvoudig dataformaat maakt het gemakkelijk om aangepaste datasets te importeren in plaats van OpenStreetMap-gegevens of verkeersgegevens te importeren
- Flexibele routingprofielen (bv. voor verschillende vervoerswijzen)
- Respecteert afslagbeperkingen, inclusief op tijd gebaseerde voorwaardelijke beperkingen
- Respecteert afslaande rijstroken
- Gelokaliseerde afslag-voor-afslag instructies op basis van OSRM Tekstinstructies

## Voordat we beginnen
