---
layout: layouts/blog.liquid
title: "Die Mobilität von morgen gestalten: freemove startet in die Erhebungsphase"
author: "Markus Sperl"
date: 2022-09-30
thumb_image_path: "/assets/images/blog/14_preview_image.webp"
tags: 
    - Datensammlung
    - Mobilitätsdaten
    - Nachhaltige Mobilität 
    - Anonymisierung
    - Privatsphäre-erhaltende Technologien (PETs)
---

### Die Mobilität von morgen gestalten: freemove startet in die Erhebungsphase

_Ein Schlüssel zur Mobilitätswende sind unsere Mobilitätsdaten. Wie die sensiblen Daten unter Wahrung der Privatsphäre allen zu Gute kommen können, bewegt unser Verbundprojekt freemove – das jetzt in die Erhebungsphase startet. Projektverantwortlicher Markus Sperl erklärt, was das Projekt so wichtig macht und welche Fragen die Projektbeteiligten über die nächsten Wochen begleiten._

![Abbildung 1](/assets/images/blog/abb_1.webp)

Unser Projekt [freemove](https://www.freemove.space/), welches wir zusammen mit Lehrstühlen der Hochschule für Technik und Wirtschaft (Datenwissenschaft), Freien Universität Berlin (Human-Centered Computing), Technischen Universität Berlin (Datensicherheit) und Universität der Künste (Digitale Souveränität) sowie dem Deutschen Zentrum für Luft- und Raumfahrt durchführen, widmet sich der komplexen Arbeit mit Mobilitätsdaten. Genauer geht es im Falle des vom Bundesministerium für Bildung und Forschung geförderten Projekts um individuelle Bewegungsdaten mit Startzeitpunkt, Ankunftszeit _(timestamps)_, jeweilige Koordinaten _(origin/destination)_ und in einzelnen Fällen genau zurückgelegter Strecke, sowie derer Aggregate. Das Besondere: freemove will diese Daten unter Achtung der Privatsphäre Wissenschaft und Gesellschaft zur Verfügung stellen. 

Dieser Art von Daten wird für unterschiedlichste Anwendungsbereiche ein sehr hohes Erkenntnispotential zugeschrieben. Nimmt man den Anwendungsbereich der Verkehrsplanung im Kontext nachhaltiger urbaner Transformation zum Beispiel, ließe sich mit einer guten, hochgranularen Datenbasis, so die Theorie, ÖPNV und Individualmobilität unterschiedlicher Modi perspektivisch passgenau, effizient und ressourcenschonend abstimmen. Angebote könnten also so optimiert werden, dass ökologische Entscheidungen für Verbraucher:innen naheliegen. Infrastrukturelle Veränderungen wie Parkraumumwidmungen, Verkehrsberuhigung oder Einschränkungen bestimmter Verkehrsmittel ließen sich im Vorhinein modellieren und evaluieren, Bedarfe für Ausbau und Einsparungen empirisch belegen. Bisher müssen Stadtplaner:innen die Verkehrslage aus unterschiedlichen Quellen interpretieren - von klassischen Verkehrszählungen über Studien, die auf Wegetagebüchern (oder Haushaltsbefragungen) basieren bis hin zu dem, was an Mobilitätsdaten als Open Data zur Verfügung steht oder dem Wenigen, was von datensammelnden Unternehmen geteilt wird.

Gleichzeitig werden Bewegungsdaten von mahnenden Stimmen im Privatsphäre-Diskurs als auch der Datenschutzgrundverordnung (DSGVO) als hochindividuell und personenbezogen eingeschätzt und sind somit besonders schützenswert. Und das zu Recht: Nicht nur Bewegungsabläufe, sondern auch aggregierte Standortdaten reichen technisch versierten “Angreifern” in Kombination mit anderen Datensätzen aus, um Einzelpersonen klar zu identifizieren. Nach dem akademischen _state of the art_ verpflichtet das zur Anwendung mathematischer und technischer Anonymisierungsverfahren, welche teils die Auswertbarkeit der Daten stark einschränken. In der Praxis finden diese Verfahren hingegen kaum Anwendung. Von Datenschutzbehörden wird das teils sehr unterschiedlich bewertet, sodass in der Praxis oft einfach zu umgehende Verfahren wie statistische Zusammenfassung oder Abschneiden bestimmter Merkmale bereits als “Anonymisierung” gelten. 

Unser Projekt versucht diesen _Trade-Off_ zwischen dem nötigen Maß an Privatsphäre und der Nutzbarkeit der Mobilitätsdaten genauer zu beleuchten. Welche Anonymisierungsverfahren sind nach neuestem Stand der Technik und Forschung vorhanden? Lassen sich diese auf granulare Bewegungsdaten anwenden, und wenn ja, wie sinnvoll interpretierbar sind die resultierenden Datensätze? Drei Use Cases dienen hier als forschungsleitend.

Neben diesen stärker datenwissenschaftlich geprägten Fragestellungen, die vorwiegend von der HTW und der TU bearbeitet werden, erforscht die Freie Universität Formate, um Datenspender:innen Privatsphäre-Risiken und komplexe Anonymisierungstechnologie transparent zu erklären. So soll ihnen eine reflektierte Entscheidung ermöglicht werden. 

Die UdK mit ihrem Lehrstuhl für Digitale Souveränität unterstützt das Projekt in den datenschutzrechtlichen Fragestellungen und erarbeitet eine Zertifizierung für Anonymisierungstechnologie im Mobilitätsbereich.

### Das Ziel: Ein umfassendes Framework zur Arbeit mit Mobilitätsdaten & Handlungsempfehlungen

Alle Anstrengungen der jeweiligen Teilprojekte werden im Verlauf des Projekts iterativ in einem Framework für faire, sichere, nützliche und verständliche Bereitstellung von Bewegungsdaten zusammengeführt. Auf Basis dieses Frameworks generiert das Projektkonsortium Handlungsempfehlungen, die mit der Stakeholder-Community geteilt und diskutiert werden.

Datenexploration und synthetische Datengenerierung: Das Projekt beschäftigte sich zunächst intensiv mit explorativen Datenanalysen von Mobilitätsdaten sowie deren Automatisierung unter Bereitstellung von Privatsphäre-Garantien mittels dem Verfahren der _Differential Privacy_. Nun arbeitet das Projekt derzeit an der Erprobung von algorithmischer Erstellung synthetischer Daten. Synthetische Daten werden auf Basis eines Ursprungsdatensatzes mithilfe eines Algorithmus erstellt und sollen die gleichen Eigenschaften erfüllen wie dieser - bei gleichzeitig erhaltener Privatsphäre aufgrund unterschiedlicher, einzelner Datenpunkte. 

Man kann es sich vorstellen, wie eine Kopie, nur mit anderen Bausteinen, aus denen sich diese zusammensetzt. In anderen Bereichen wurden solche Verfahren bereits erfolgreich erprobt - synthetische Mobilitätsdaten betreten weitestgehend Neuland.

![Abbildung 2](/assets/images/blog/abb_2.webp)

### Datenerhebung zusammen mit dem Deutschen Zentrum für Luft- und Raumfahrt (DLR)

Wie oben angedeutet, haben Mobilitätsdaten zwar einen gesellschaftlichen Nutzen, sind aber gleichzeitig besonders schützenswert. Gerade in der freien Wirtschaft werden sie besonders häufig erhoben, als Beiprodukt, zur Optimierung von Produkten oder Werbezwecken vielseitig genutzt, teils auch kommerziell weitergegeben, häufig unter Sicherheitsmaßnahmen, die man als unzureichend bezeichnen muss. Der Forschung oder den gemeinwohlorientierten Bereichen werden sie nur bedingt zugänglich gemacht. Unser Projekt möchte gemeinsam mit dem Partner DLR und dessen entwickelter App [Moving Lab](https://movinglab.dlr.de/) mit gutem Beispiel vorangehen und eine Datenerhebung (GPS-Tracking) mit besonderem Augenmerk auf Datenschutz und der Erprobung der Verfügbarmachung der Daten durchführen.

In den ersten beiden Novemberwochen (**31.10.2022** bis **13.11.2022**, **Anmeldung** im **Oktober**) können Interessierte über das Moving Lab ihre alltäglich zurückgelegten Wege mitzeichnen. Die Anmeldung erfolgt im Laufe des **Oktobers** über [unsere Website](https://www.freemove.space/erhebung/), oder direkt per Mail an die movinglab(at)dlr.de (**Betreff: freemove**).

Im Projekt werden die entstandenen Daten dann zu einem größeren Datensatz zusammengefasst und je nach Einwilligung weiterverarbeitet. Sowohl für verkehrswissenschaftliche Auswertungen als auch im Bereich der Erprobung von Anonymisierungstechnologien können wir durch sie Wichtiges lernen, und im besten Fall die Daten zur Weiternutzung in Wissenschaft und Planung teilen.

![Abbildung 3](/assets/images/blog/abb_3.webp)
