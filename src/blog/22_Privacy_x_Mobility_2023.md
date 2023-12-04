---
layout: layouts/blog.liquid
title: "Privacy & Mobility 2023: Was wir von freemove in die Praxis mitnehmen und weiterdiskutieren"
author: "Markus Sperl"
date: 2023-11-06
thumb_image_path: "/assets/images/blog/post-01_thumb.jpg"
tags: 
    - Gesellschaftlicher Diskurs
    - Mobilitätsdaten
    - Nachhaltige Mobilität
    - Privatsphäre-erhaltende Technologien (PETs)
---

### Privacy & Mobility 2023: Was wir von freemove in die Praxis mitnehmen und weiterdiskutieren

_Lassen sich Mobilitätsdaten mit Privatsphäre vereinbaren? Und können diese Daten gemeinwohlorientiert genutzt werden? Zum Beispiel für eine nachhaltige Mobilitätswende? Diesen Fragen ging [freemove](https://www.freemove.space/) in drei Jahren transdisziplinärer Forschungsarbeit nach. Markus Sperl berichtet vom Projektsymposium und wie sich Erkenntnisse zu Anonymisierungstechnologien in die Praxis übersetzen lassen._

Mobilitätsdaten, Anonymisierung und Privatsphäre-Risiken: Diese Themen beschäftigte das transdisziplinäre Forschungsprojekt freemove, gefördert vom Bundesministerium für Bildung und Forschung (BMBF), in einem Zusammenschluss universitärer und praktischer Partner:innen. Nach drei Jahren Forschung zu Anonymisierungstechnologien für Bewegungsdaten nähert sich das Projekt seinem Abschluss. Beim freemove-Symposium „Privacy & Mobility 2023“ verbrachten wir mit zahlreichen geladenen Gästen aus der Praxis – und Projekten mit ähnlichen Forschungsfragen – einen abwechslungsreichen und gesprächsintensiven Tag in der Technologiestiftung Berlin.

![Abbildung 1](/assets/images/blog/22_1_Bild_Intro_Markus.webp)

### Nachhaltiger Transfer von Forschungsergebnissen in Anwendungsbereiche

Das Ziel für den Tag: Die Erkenntnisse aus unseren entwickelten Prototypen sowie akademischen Veröffentlichungen für Akteur:innen aufzubereiten, die in ihrem Arbeitsalltag mit ähnlichen Herausforderungen konfrontiert sind – und zur Diskussion einzuladen. In drei Jahren Forschung hat sich freemove als transdisziplinäres Projekt auch immer als Austauschformat verstanden: Tiefeninterviews, Workshop-Formate mit der Praxis zur Prototypen-Entwicklung und -Testung sowie Studien und Workshops mit Bürger:innen haben die Erkenntnisse von freemove maßgeblich beeinflusst. Diese nochmals mit der Praxis zu spiegeln und zu evaluieren stand im Fokus des Symposiums.  

Am Ende des Tages nehmen wir folgende Erkenntnisse mit:

**#1: Anonymisierung ist ein Prozess, und kein einmal erreichter Zustand der Daten selbst.**
Angewandte Technologien und deren Parameter müssen in regelmäßigen Abständen neu evaluiert und angepasst werden, da die Risiken und Möglichkeiten potenzieller Angreifer sich stetig ändern können. 

**#2: Angewandte Anonymisierungstechnologien und deren ausreichende Funktion müssen praktisch getestet werden.** 
Dafür braucht es realistische und vielseitige Angriffsszenarien. Erst durch das praktische Erproben werden Lücken sichtbar und Schutz wirksam. 

**#3: Synthetische Datengenerierungsalgorithmen sind im Bereich von Bewegungsdaten noch nicht in einem Entwicklungsstadium, in dem viele Problemstellungen mit ihnen bearbeitet werden können.**
Zugleich gelten hier bisher die Daumenregeln: Je Privatsphäre-schonender der Algorithmus, desto niedriger die Nutzbarkeit der entstandenen Datensätze, je nutzbarer (detailgetreuer) die Datensätze, desto weniger Privatsphäre-schonend. 

**#4: “Vollständige” Anonymisierung ist nur schwerlich erreichbar, zumindest wenn die entstehenden Datensätze noch verlässliche Informationen transportieren sollen.**
Vielversprechend klingen Systeme, in denen Rohdaten nicht übergeben werden, sondern mittels Anfragen (Queries) angezapft werden können, die im Vorhinein auf synthetischen Daten im gleichen Format entwickelt wurden.

Bei Interesse an den gezeigten Präsentationen gibt das Konsortium diese gerne für den internen Gebrauch weiter (Anfrage gerne per E-Mail an markus.sperl[at]ts.berlin). Eine ausführliche Zusammenfassung der Impulse findet sich im Folgenden.

#### Privatsphäre-Risiken von Mobilitätsdaten, Technologien zur Eindämmung und deren Grenzen
Nach einer kurzen Begrüßung ging es direkt tief in die Inhalte mit einer anwendungsorientierten Keynote zur Geschichte und Entwicklung Privatsphäre-erhaltender Technologien durch Theresa Stadler ([Link zur Keynote-Aufnahme](https://www.youtube.com/watch?v=23BdB0EV8fM)). Sie arbeitet für das SPRING Lab (Security & Privacy-Engineering Lab) an der École Polytechnique Fédérale de Lausanne. Das SPRING Lab war unter anderen involviert in die Entwicklung der privatsphäreschonenden CoViD-19-Kontaktverfolgungsmethode, unter anderem der deutschen CoViD-App. Die Weitergabe und Verarbeitung von personenbezogenen Daten geht mit Risiken für Individuen einher, mit deren Minimierung sich Wissenschaft und Praxis schon lange beschäftigen. Ihr Vortrag arbeitete sich an ganz unterschiedlichen Dateitypen ab und lieferte die Vorlage für die darauffolgende Session von HTW (Prof. Helena Mihaljević, Alexandra Kapp) und TU (Prof. Florian Tschorsch, Saskia Nuñez von Voigt).  

Hier wurde der Datentypus Mobilitätsdaten nochmal im Detail eingeführt, deren Nutzungsbereiche dargelegt, aber auch inhärente Privatsphärerisiken bei bestimmten Ausprägungen erklärt. Bewegungsdaten – also Datensätze, die direkt oder indirekte lesbare Informationen über Bewegungsabläufe von Menschen beinhalten – sind hier zu nennen. Darüber hinaus gab es an der Stelle bereits eine Bewertung zweier möglicher Lösungswege um diesen Risiken zu begegnen: Datenminimierung mittels Generalisierung oder Aggregierung, sowie die Einführung einer Privatsphäre-Garantie mittels Differential Privacy, also dem “Verrauschen” oder statistischem Verzerren von Daten. Eine Zusammenfassung der Bewertung der Effektivität: Es kommt immer darauf an.

In dem Zuge wurde insbesondere der freemove-Prototyp zur automatisierten Mobilitätsdatenanalyse [DP Mobility Report](https://github.com/FreeMoveProject/dp_mobility_report/) präsentiert, der klassische Analysen von Trajektoriendatensätzen in einem Python Package bündelt. Ein Beispiel anhand eines Berliner Datensatzes [findet sich hier](https://freemoveproject.github.io/dp_mobility_report/examples/html/berlin.html). 

![Abbildung 2](/assets/images/blog/22_2_Bild_Alexandra_und_Saskia.webp)

#### Nutzer:innenkommunikation und Erklärungen für informierte Zustimmung
Auf diesen Einstieg folgend betrachteten TU und FU Berlin (Human Computer Interaction, Prof. Claudia Müller-Birn, Daniel Franzen und Peter Sörries) das Thema Privatsphäre nochmal stärker gesellschaftlich orientiert. Nach einer Einführung über die Bedeutung von Privatsphäre in Zeiten von Big Data und Datenlecks wurde Differential Privacy als Idee eingeführt, eine formale Privatsphäre-Garantie mit festlegbarer “Stärke” mittels des Parameters ϵ (Epsilon). Tech-Branchengrößen werben damit, mit Differential Privacy für Nutzer:innen Privatsphäre zu garantieren - das Entscheidende hierbei ist aber nicht ob, sondern wie groß hierbei ϵ definiert wird. 

Das Team der FU fuhr damit fort, wie die Werte und Bedürfnisse von Nutzer:innen in die Gestaltung von Web-Anwendungen systematisch einbezogen werden können – in unserem Fall in Mobilitätsdatenspendeplattformen oder Apps, die Daten sammeln. Nutzer:innen sollen mit Blick auf ihre personenbezogenen Daten bewusste Entscheidungen und informierte Zustimmungen zu Sammlung und Weitergabe geben. Entsprechend lag der Fokus darauf, wie sowohl Risiken als auch komplexe Technologien verstehbar erklärt werden können (Daniel Franzen), oder viel grundsätzlicher, wie man “Werte” überhaupt zunächst erhebt (Peter Sörries). In puncto Risikokommunikation bedienten sich die Forschenden für ihr Studiendesign in der Medizin, die an diesen Themen im Bereich Patient:innenkommunikation arbeitet. Unabhängig von den einzelnen Studienergebnissen, wurde augenscheinlich, dass effektive Kommunikation von Risiken und insgesamt Datenschutzhinweisen noch viele offene Fragen mit sich bringt. Klar ist aber, dass der Status Quo in der Praxis informierte Einwilligung nur bedingt ermöglicht. 

#### Re-Identifizierung von anonymisierten Bewegungsdaten und die Technologie Datensynthetisierung

Nach einer sonnigen Mittagspause ging es weiter mit der zweiten Keynote von Prof. Yves-Alexandre de Montjoye. Dieser leitet die Computational Privacy-Forschungsgruppe am Imperial College London und unter anderen Autor eines vielfach zitierten [Nature-Paper zu Privatsphärerisiken von Bewegungsdaten](https://www.nature.com/articles/srep01376). Er ist Harvard-Alumnus und neben akademischen Verpflichtungen beratend für die Europäische Kommission und die belgische Datenschutzbehörde tätig. In seiner Keynote wurde augenscheinlich, was es so schwierig und kontextabhängig macht, Bewegungsdaten wirklich zu anonymisieren. Selbst hoch-aggregierte Statistiken können, mit wenig Vorwissen (bspw. durch später veröffentlichte zusätzliche Datenquellen) zu Rekonstruktionen von Bewegungsprofilen und somit Identitäten führen. Er ging dabei auf alle auch im Projekt angeschnittenen Privatsphäre-erhaltenden Technologien ein: Synthetische Datengenerierung, Verrauschung mittels Differential Privacy, Aggregierung und Generalisierung. Zusammengefasst plädierte auch er zu einem gründlichen Testen von angewandten Methoden, da nur dadurch Sicherheitslecks auffindbar werden, und zeigte sich skeptisch gegenüber “Hypes” im Privacy-Bereich. 

Das war der passende Auftakt für Alexandra Kapps Einführung in die synthetische Datengenerierung anhand von zwei Beispielen und einer Abwägung sowohl in Richtung der Nutzungsmöglichkeiten der generierten Daten als auch der Privatsphäre-schützenden Wirkung. Das Prinzip synthetischer Datengenerierung liegt in der künstlichen Erstellung eines neuen Datensatzes, der die möglicherweise personenbezogenen Ursprungsdaten ersetzt, aber entscheidende statistische Merkmale erhält. Bei Bewegungsdaten liegt hier das entscheidende Problem grob gesagt: Je besser die Merkmale des Datensatzes erhalten bleiben, desto weniger privat ist dieser wiederum, da Merkmale auf exakten Uhrzeit- und Standortdaten fußen. Nichtsdestotrotz gab der Vortrag Einblicke in den Forschungsstand und mögliche übrige Nutzungsszenarien sowie quantitativ berechenbare Gütekriterien für synthetische Datensätze.

#### Wie funktioniert Privatsphäre-freundliches Design?

Wouter Lueks vom CISPA Helmholtz-Zentrum für Informationssichherheit trat nach diesem Exkurs nochmal einen Schritt aus der konkreten Anwendersicht heraus: Anhand mehrerer Beispiele aus seiner bisherigen Arbeit erläuterte er das Design Privatsphäre-freundlicher Systeme mit abwechslungsreichen, anschaulichen Einblicken  – etwa aus dem Bereich kommunikative, globale identitätsschützende Vernetzung investigativer Journalist:innen, die sensible Informationen bereitstellen, oder der privatsphärefreundlichen Verteilung von Entwicklungshilfe. Die Herangehensweise in der Entwicklung der Verfahren lässt sich auf einige zentrale Fragestellungen herunterbrechen: Was ist das Problem, das ich lösen möchte? Ist das der möglichst datenminimierende Weg, um an mein Erkenntnisziel zu kommen? Was für Folgeprobleme erschaffe ich durch den Lösungsweg, für den ich mich entschieden habe? Erschaffe ich durch meine Lösung mehr Probleme und Risiken, als ich eigentlich behebe? Diese Aspekte sind zentral für alle Projekte, deren Umsetzung die Verarbeitung personenbezogener Daten beinhaltet. 

#### Wie helfen rechtliche Innovationen bei der DSGVO-Auslegung?

Als letzter Tagesordnungspunkt des Konsortiums präsentierte Max von Grafenstein mit Valentin Rupp (UdK) nach einem spannenden Problemaufriss von Kilian Spuck (Jelbi/BVG) den von ihnen entwickelten Zertifizierungsansatz für Datenverarbeitungsmethoden.  Durch diesen konnte das Unternehmen Rechtssicherheit erlangen und gleichzeitig Wettbewerbsvorteile generieren. Der Professor für Digitale Souveränität ist derzeit mit Akkreditierungsbehörden im Gespräch, um ein solches Verfahren genehmigen zu lassen. Ziel ist es, Datenschutz zu gewährleisten, aber gleichzeitig die Nutzung der Daten für bestimmte, festgelegte Zwecke rechtlich abzusichern und dadurch bspw. Unternehmen Sicherheit zu gewährleisten. 

Nach diesen doch sehr dichten inhaltlichen Sitzungen, ging es zum lockeren, interaktiven Teil des Tagesprogramms über. Eingeladene Projekte durften mittels knackiger Flash-Präsentationen auf der Bühne ihre Beiträge ankündigen und die Gäste tauschten sich für den verbleibenden Tag im Ausstellungsraum und auf der Dachterrasse zu den gehörten Themen aus. 

### Outro: Danke für drei Jahre intensive Diskussionen und engagierte Projektarbeit

Das Projekt bedankt sich bei allen Gästen für die Teilnahme und daraus entstandene, spannende Diskussionen (weitere Fragen an Projektkoordinator Markus Sperl, markus.sperl[at]ts.berlin). Darüber hinaus gibt es auf der [freemove-Website](https://www.freemove.space/) eine Sammlung der Projektpublikationen sowie einen Blog zu unterschiedlichen Themen. Eine Entscheidungshilfe für Anonymisierungsfragen im Bereich Mobilitätsdaten befindet sich derzeit in der Entwicklung durch das Projektteam und wird voraussichtlich Frühjahr 2024 veröffentlicht.