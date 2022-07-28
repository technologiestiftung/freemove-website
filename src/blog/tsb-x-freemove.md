---
layout: layouts/blog.liquid
title: "„Wir können grundlegende Fragen nicht outsourcen“"
subtitle: "Interview mit Christian J. Larsen (TSB, freemove), geführt von Frauke Nippel (TSB)"
date: 2021-08-03
tags: 
    - xyz
    - sdfdg
    - sdfsdgd
---

Die Diskussion um die Corona App hat es gezeigt: Die Erhebung von Mobilitätsdaten wird besonders kritisch gesehen – verständlicherweise, denn wie Menschen sich durch die Stadt bewegen, wie oft sie bestimmte Ziele ansteuern und wie lange sie dort verweilen, verrät viel über ihre Vorlieben und Gewohnheiten. Gleichzeitig ermöglichen es gerade Mobilitätsdaten, das Zusammenleben besser zu organisieren. Wie gehen wir zukünftig mit diesem Konflikt um? Die Technologiestiftung hat gerade ein Projekt zu automatisierten Verkehrszählungen beendet und mit freemove ein Projekt mit erweiterter Fragestellung gestartet. Ein Interview mit Christian J. Larsen, der als wissenschaftlicher Mitarbeiter beide Projekte begleitet.

TODO: add pic

> Für die meisten Menschen dürfte es einen großen Unterschied machen, ob ihre Daten zum Beispiel – mit einer Löschfrist versehen und unter strengen Auflagen – für Forschungszwecke eingesetzt werden oder ob sie beispielsweise helfen sollen, ein kommerzielles Produkt zu bewerben und anschließend sogar weiterverkauft werden.
> 
> – <cite>Christian Jamal Larsen, Wissenschaftlicher Mitarbeiter Technologiestiftung Berlin</cite>

_**Frauke Nippel**: Die Resonanz auf den Projektabschluss für den Open Traffic Count zeigt das große Interesse an der Erfassung von Mobilitätsdaten. Was würdest Du denen berichten, die sich für den automatisierte Verkehrszählungen interessieren?_

**Christian Jamal Larsen**: Nach den Erfahrungen mit Open Traffic Count glaube ich, dass Verkehrsbeobachtung und -auswertung mit offener Soft- und Hardware-Systemen heute auch für den:die geübte Lai:in möglich ist. Damit werden neue Ansätze im Bereich des Citizen Science bzw. der Exploration der erhobenen Daten aus unterschiedlichen Blickwinkeln möglich. Aber es ergeben sich auch kostengünstige Möglichkeiten für Kommunen, beispielsweise temporäre Zählstellen schnell und unkompliziert aufzubauen und neue Erkenntnisse zu gewinnen - etwa, um den Einfluss von Infrastrukturmaßnahmen auf den Fußverkehr quantitativ zu messen oder um die Daten zu teilen und eine breite Diskussion zu geplanten Maßnahmen anzuregen.

Das zeigt das Open Source Projekt OpenDataCam, welches wir in unserem Projekt eingehend evaluiert haben. Hier wird eine handelsübliche USB-Kamera eingesetzt und mit einer Grafic Processing Unit (GPU) ausgestattet. Wer technisch affin und gewillt ist, sich in die Materie einzuarbeiten, kann diese Konfiguration nachbauen und nutzen.

Allerdings ist diese Lösung nicht ausgereift. Zurzeit gibt es noch Sicherheitslücken und Performanz-Probleme, die behoben werden müssen, aber diese Verbesserungen sind technisch möglich. Wir – das sind die Technologiestiftung und die Hochschule für Technik und Wirtschaft – haben jetzt auch eine [wissenschaftliche Publikation](https://www.tandfonline.com/doi/full/10.1080/21650020.2021.1950044?scroll=top&needAccess=true) vorgelegt, welche die Stärken und Schwächen der OpenDataCam ausführlich beschreibt und darstellt, wie der Einsatz im Rahmen eines Beteiligungsprozesses auf kommunaler Ebene möglich wäre.

TODO: add pic

_**Frauke Nippel**: Mit dem neuen Projekt Freemove bleibt Ihr beim Thema. Da geht es grundsätzlich um die Frage, ob und wie man Mobilitätsdaten sammeln kann, ohne Persönlichkeitsrechte zu verletzen. Wie schätzt Du es ein?_

**Christian Jamal Larsen**: Die Frage kann man pauschal nicht beantworten. Wer persönliche Daten gibt, gibt immer etwas von sich preis. Meines Erachtens nach ist es das Recht der Datenspender:innen, die Frage nach einer möglichen Weiterverwertung und den Folgen zu stellen und für unterschiedliche Zwecke differenziert zu beantworten. Für die meisten Menschen dürfte es einen großen Unterschied machen, ob die Daten zum Beispiel – mit einer Löschfrist versehen und unter strengen Auflagen – für Forschungszwecke eingesetzt werden oder ob sie beispielsweise helfen sollen, ein kommerzielles Produkt zu bewerben und anschließend sogar weiterverkauft werden.

Wer, wann, wie von uns Daten sammelt und wie wir persönliche Daten schützen und Datenschutz systematisch implementieren, sind Kernaspekte der digitalen/informationellen Selbstbestimmung. Es ist wichtig, dass wir über solche Fragen unterrichtet sind und befähigt werden bzw. uns im öffentlichen Diskurs auch selbst befähigen, diese Fragen für uns auf persönlicher und auf gesellschaftlicher Ebene zu beantworten.

Im Projekt beschäftigen wir uns damit, wie Mobilitätsdaten technisch verarbeitet und verwertet werden können, um die normativen und rechtlichen Anforderungen an den Datenschutz zu gewährleisten und wie die konzeptionellen Unterschiede im rechtlichen und technischen Anonymisierungsbegriff aufzulösen sind. Zusätzlich gehen wir der Frage nach, wie sich die Werte und Vorstellungen der Bürger:innen in dem Prozess der Verfügbarmachung einbinden lassen. Wir fragen uns beispielsweise, wie technische Verfahren zur Anonymisierung der Daten den Nutzer:innen vermittelt werden können.

Das Projekt läuft bis Ende 2023. Im Ergebnis wollen wir ein Zertifikat für die datenschutzkonforme Verarbeitung von Mobilitätsdaten vorschlagen. Ein solches Zertifikat soll Nutzer:innen helfen, Anbieter:innen von Mobilitätsdienstleistungen unter Beachtung der erhobenen Daten und angegebenen Zwecke zu identifizieren und informierte Entscheidungen zu treffen. Das wäre ein Schritt, um Menschen Entscheidungen rund um ihre Mobilitätsdaten zu erleichtern.

_**Frauke Nippel**: Du weist darauf hin, dass es keine pauschalen Antworten auf die Fragen nach dem Umgang mit Mobilitätsdaten gibt und jeder Mensch sich jeweils von Fall zu Fall informiert entscheiden soll. Also keine grenzenlose Begeisterung für den Einsatz von Mobilitätsdaten bei Dir?_

**Christian Jamal Larsen**: Ich sehe auf jeden Fall die Möglichkeiten, die mit der Digitalisierung von komplexen Systemen wie dem Verkehr verbunden sind. Ich denke da nur an die Flexibilisierung von Verkehrsmanagementmaßahmen und Planungsprozessen, aber auch das Neudenken von Alltagsmobilität und Verkehrsroutinen. Trotzdem sehe ich die Notwendigkeit, dass wir uns vor allem bei Bewegungsdaten den Fragen im Datenschutz stellen müssen, die Teil des Digitalisierungsprozesses sind. Während eine Bewertung der Folgen des Datenpreisgebens kontextabhängig von jeder Person zu leisten ist, geht es gleichzeitig um einen gesellschaftlichen Aushandlungsprozess.

Nach meinem Verständnis ist es notwendig, dass bei der kritischen Frage der informationellen Selbstbestimmung eine breite Bevölkerungsschicht an der Diskussion teilnimmt, diese formt und für sich selbst aus der Diskussion informierte Schlüsse ziehen kann. Wir können diese Fragen, die grundlegend normativer Natur sind, nicht outsourcen.
