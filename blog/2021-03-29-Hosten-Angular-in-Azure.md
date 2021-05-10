---
slug: hosten-angular-in-azure
title: Hosten Angular in Azure
author: Bryan Schoot
author_title: Software Engineer
author_url: https://github.com/bryanschoot
author_image_url: https://avatars.githubusercontent.com/u/18568202?v=4
tags: [azure, angular]
---

In dit artikel ga je leren over verschillende hosting manieren van een Angular applicatie binnen de Azure Portal.

<!--truncate-->

## Voordat we beginnen

Binnen de Azure Portal zijn er meerdere manieren om een Angular applicatie te hosten,

- App Service
- Static Web App

Echter gaan we het in dit artikel alleen hebben over de App Service en CDN omdat, de Static Web App tijdens het schrijven van dit artikel nog in preview is.

Allereerst gebruiken we het voorbeeld van Angular, Tour of Heroes. Dit voorbeeld kun je downloaden via git
`git clone https://github.com/bryanschoot/angular-tour-of-heroes toh`

Voordat we alle npm packages kunnen installeren moeten we naar de folder `toh`. Daar kunnen we het volgende commando uitvoeren `npm i`.

Als de npm installatie voltooid is kunnen we met behulp van de `angular cli` het volgende commando uitvoeren `ng serve -o`.

Heb je de `angular cli` niet geinstalleerd [klik hier . . .](https://angular.io/cli) Het resultaat moet er als volgt uitzien.

![angular first project](..\static\img\hosten-angular-applicatie\angular-toh.png)

Om de Angular applicatie te Deployen moet er eerst een
build gemaakt worden. Dit doen we met het volgende commando `ng build`. Dit maakt een folder aan genaamd `dist`.

En tot slot openen we de applicatie in `Visual Studio Code` voor meer informatie [klik hier . . .](https://code.visualstudio.com/)

## Deployen van Angular in App Service

Binnen `Visual Studio Code` gaan we gebruik maken van de volgende plugin `Azure App Service` dat er als volgt uitziet.

![angular first project](..\static\img\hosten-angular-applicatie\angular-vscode-service-app-plugin.png)

Vervolgens melden we ons aan via de geinstalleerde plugin. En krijgen we toegang tot onze Azure Portal omgeving.

Daarna doen we een rechtermuisklik op de folder `dist` en dan kiezen we voor de optie `Deploy to Webb App...`

![angular first project](..\static\img\hosten-angular-applicatie\dist-deploy.png)

Als je nog geen webapp hebt maak dan een nieuwe aan. Kies voor `.NET Core 3.1` als runtime stack. Als je vervolgens de `terminal` opent met als tab `OUTPUT` kun je vinden op welke link de applicatie is gedeployed.

![angular first project](..\static\img\hosten-angular-applicatie\deployment-link.png)

Klik op de link en zie vervolgende de Angular Tour of Heroes applicatie in zijn volle glorie.

## Deployen van Angular in CDN

Binnen `Visual Studio Code` gaan we gebruik maken van de volgende plugin `Azure Static Web Apps` dat er als volgt uitziet.

![static web app vstool](..\static\img\hosten-angular-applicatie\static-webb-app-tool.png)

Nog niet aangemeld op Azure met de plugin doe dit dan!

Daarna selecteer via het menu selecteer het Azure icoon en maak een nieuwe static web app aan. Als dit is gelukt wordt er gevraagd in te loggen met Github.

![static web app vstool](..\static\img\hosten-angular-applicatie\static-web-app-deployment.png)

Voor het daadwerkelijk deployen volg de onderstaande stappen:

- Naam van de applicatie
- Kies `angular` als configuratie
- Als standaard codebase laat `/` staan
- Locatie voor azure functie leeg
- Locatie voor applicatie wanneer die gebuild is `dist`
- Resource `West europe`

Dit maakt meteen binnen Github een workflow aan die de Angular applicatie deployed met behulp van CI/CD. Dit ziet er als volgt uit:

![workflow](..\static\img\hosten-angular-applicatie\workflow.png)

Nadat de CI/CD workflow afgerond is kun je in de logs terugvinden waar de Angular applicatie is gedeployed.finished-build-workflow

![workflow](..\static\img\hosten-angular-applicatie\finished-build-workflow.png)

# Conclusie

Het deployen van zowel een App Service als Static Web App is snel en gemakkelijk uit te voeren.
