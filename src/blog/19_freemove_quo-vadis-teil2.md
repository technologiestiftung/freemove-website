---
layout: layouts/blog.liquid
title: "Quo Vadis Mobilität? Der freemove - Jahresrückblick 2022. Teil 2: Was unser Projekt bewegt"
author: "Markus Sperl"
date: 2023-01-16
thumb_image_path: "/assets/images/blog/post-18_stock1.jpg"
tags: 
    - Privatsphäre-erhaltende Technologien (PETs)
    - Mobilitätsdaten
    - Anonymisierung
---

### Was im Forschungsbetrieb von freemove geschah

Bei der in [Teil 1 unseres Jahresrückblicks](https://www.freemove.space/blog/18_freemove_quo-vadis/) beschriebenen Ereignisdichte wirken die Erkenntnisse unseres bescheidenen Forschungsprojektes klein, allerdings spiegeln uns viele Gespräche und die allgemeinen Entwicklungen immer wieder ganz deutlich die Relevanz unserer Arbeit. Detailreiche Mobilitätsdaten bergen ein großes Erkenntnispotential. Gleichzeitig ist deren Personenbezug teils groß und die Möglichkeiten, datenschutzzentriert damit zu arbeiten in der deutschen Praxis eher unbekannt. “Datenschutzzentriert” heißt in unserer Definition die Privatsphäre der Datenspendenden in den Vordergrund zu stellen, über alle Schritte des Datenlebenszyklus hinweg, und in der transparenten Kommunikation zu Nutzenden auch darüber hinaus – dies umfasst technische, organisatorische und kommunikative Maßnahmen. Es geht nicht um die bloße Erfüllung von Verpflichtungen, sondern auch um die Befähigung von Nutzenden, informierte Entscheidungen zu treffen. Der Bereich bedarf weiterer Exploration und einer gemeinsamen, ganzheitlichen Betrachtung durch alle Disziplinen sowie einer praxisfreundlichen Aufbereitung.

![Abbildung 1](/assets/images/blog/post-19_workshopMai.jpg)
_Stakeholder-Workshop in der Technologiestiftung_

Mit unseren Arbeiten sind wir in unterschiedlichsten Foren an verschiedenen Orten vertreten gewesen. FU und HTW reisten für akademische Konferenzbesuche und Paper-Präsentationen in die USA, nach Australien und nach München. Wir als Technologiestiftung und CityLAB waren bei der diesjährigen Re:Publica, auf der Bits & Bäume sowie mit der UdK auf dem Tagesspiegel Future Mobility Summit. Im transdisziplinären Experimentierraum der TU Berlin Mall Anders im WILMA Shopping-Center in Wilmersdorf durften wir mit Bürger:innen in ihrem Alltag zum Thema Datenschutz und Smartphone-Tracking ins Gespräch gehen.

![Abbildung 2](/assets/images/blog/post-19_mallanders.jpg)
_CityLAB-Projekttage im Mall-Anders-Experimentierraum der TU Berlin_

In Bad Belzig in Brandenburg, im gewollt nicht-urbanen Raum, widmeten wir uns zwei Tage lang intensiv unseren Forschungsfragen.

![Abbildung 3](/assets/images/blog/post-19_retreat.jpg)
_Forschungsaufenthalt in Brandenburg_

Auf der inhaltlichen Seite haben uns drei große Themenblöcke beschäftigt. Die (Weiter-)Entwicklung eines Prototypen zur standardisierten Mobilitätsdatenexploration mit Privatsphäregarantien (1.), synthetische Datengenerierung im Mobilitätsbereich (2.), sowie die gemeinsame Datenerhebung mit dem DLR (3.).

![Abbildung 4](/assets/images/blog/post-19_LBS.jpg)
_Vortrag auf der Location-Based Services Conference 2022_

### Analyse von Mobilitätsdaten mit Privatsphäregarantien

Im Zuge von Interviews mit Branchenvertreter:innen 2021 trat wenig überraschend deutlich zutage, dass sich in den ersten, explorativen Erkundungen von Datensätzen häufig ähnliche Abläufe wiederholen. Um sich einen Überblick über Größe, Qualität und Eigenschaften der Daten zu machen, führt man quasi “Routine-Untersuchungen” durch. Aus anderen datenwissenschaftlichen Bereichen sind automatisierte Anwendungen zur Erstellungen von Dataset Reports bereits bekannt. HTW und TU entwickelten zu Beginn des Jahres ein [angepasstes Tool für den Mobilitätsdatenbereich](https://github.com/FreeMoveProject/dp_mobility_report) mit Differential-Privacy-Garantien.* Das Tool ist als Python Package implementiert und führt in einem automatisierten Schritt unterschiedliche statistische Auswertungen durch, die in einem statischen Bericht zusammengefasst werden. Ein solches Tool ergibt aus datenschutzzentrierter Perspektive in mehrerlei Hinsicht Sinn: Direkte Zugriffe auf Datensätze lassen sich so reduzieren, repetitive Arbeitsschritte automatisieren und mithilfe des Reports Kerneigenschaften der Datensätze sowohl an Kolleg:innen als auch nach außen kommunizieren.

Die systematische “Verrauschung” der Daten und die Messbarkeit durch Differential Privacy gewährleistet Privatsphäre - gleichzeitig verändert sich allerdings auch die Interpretation der Ergebnisse. Von maximaler Genauigkeit muss sich bei der Wahrung der Privatsphäre von Einzelnen wohl verabschiedet werden. Beim Test-Workshop im Mai konnten wir mit unterschiedlichsten Praxisvertreter:innen Anwendungsszenarios entwerfen und Verbesserungsvorschläge einholen. Mit diesen wertvollen Insights sind wir in die Überarbeitung und weitere Testphase in puncto Datensicherheit gegangen.

_"Selbst aggregierte Daten können ein Risiko für die Privatsphäre darstellen. Durch gezieltes Verrauschen versuchen wir, Privatsphäre-Garantien zu geben und untersuchen die Auswirkung auf den Privacy-Utility Trade-off (Siehe Erklärung zu Differential Privacy). Durch smarte Verteilung des Privacy Budgets kann hier versucht werden, den Trade-off zu optimieren."_ (Alexandra Kapp, HTW Berlin)

### Synthetische Daten - Silver Bullet in Sicht?

In vielen Bereichen gilt die algorithmische Erstellung “künstlicher” Datensätze als kostengünstige, Privatsphäre-wahrende Lösung, um Trainingsdatensätze für Machine-Learning-Anwendungen zu kreieren. Auf Basis der Originaldaten kreieren Algorithmen Datensätze, die ähnliche statistische Eigenschaften aufweisen, jedoch keinen direkten Link zum originalen Datenpunkt zulassen. Im besten Fall ähnelt der synthetische Datensatz den Rohdaten und ermöglicht eine Speicherung über Löschfristen hinaus bei Berücksichtigung der Privatsphäre der im originalen Datensatz enthaltenen Individuen, oder sogar eine Verfügbarmachung für Dritte.

Mobilitätsdatensätze (aus Bewegungsdaten) sind hierbei speziell und stellen besondere Herausforderungen sowohl an die letztendliche Nutzbarkeit als auch an die zu ergreifenden Privatsphäre-Schutzmaßnahmen. Diese Eigenschaften machen den Bereich für Datensynthetisierung sehr kompliziert, sodass eine allgemeine Aussage zur Verwendbarkeit dieser Technologie im Mobilitätsbereich schwierig zu treffen ist ­– sowohl im Bereich der tatsächlichen “utility” synthetischer Daten als auch in der Bewertung des Privatsphäreversprechens. Einen synthetischen Datensatz zu erstellen, der ausreichend privat ist, aber Verteilungen von Orten, Trajektorien und Zeit realistisch beibehält, scheint zum jetzigen Zeitpunkt schwierig umsetzbar. Wenn dieser dem Originaldatensatz quasi gleicht, leidet die privatsphäre-erhaltende Funktion. Wenn entscheidende Dimensionen verändert werden und beispielsweise bei einem Datensatz von ÖPNV-Fahrten über Zeiträume die jeweiligen Uhrzeiten gänzlich verloren gehen, ist fraglich, wie nützlich der übrige Datensatz für einen Planungszweck noch sein kann.

freemove beschäftigt sich derzeit mit einer Evaluation des Forschungsstandes in dem Bereich, arbeitet Studien anderer Peers auf und experimentiert mit den jeweiligen Tools und Methoden. Das Feld ist im Bereich noch sehr vielfältig und wenig konsolidiert, weswegen wir unter anderem an Möglichkeiten arbeiten, verwendete Modelle systematisch zu bewerten und zu vergleichen.

_"Synthetische Daten mit Privatsphäre-Garantien können nicht alle statistischen Zusammenhänge adäquat abbilden. Die Wahl des Synthetisierungsalgorithmus ist daher entscheidend."_ (Saskia Nuñez von Voigt, TU Berlin)

### Data Crowdsourcing via App mit Studierenden

Teil des Projektes ist eine Datenerhebungsstudie mit einer Smartphone-Applikation, welche vom Deutschen Zentrum für Luft- und Raumfahrt (DLR) dem Projekt zur Verfügung gestellt wird. Für zwei Wochen wurden Teilnehmende mittels GPS getrackt und vor sowie nach der Erhebung durch Fragebögen befragt. Mit der Planung, Organisation und Bewerbung sowie der schlussendlichen Durchführung der Kampagne haben wir uns insbesondere in den letzten Monaten beschäftigt. Der Erhebungszeitraum im November liegt nun hinter uns und wir versuchen die Ergebnisse sowohl aus verkehrswissenschaftlicher Perspektive als auch hinsichtlich unserer zugrundegelegten Forschungsfrage bestmöglich aufzubereiten. Die allgemeine Datenknappheit im Mobilitätsforschungsbereich ist groß und wir wollten dies nun zumindest für einen Teilbereich der Mobilität in Berlin ändern.

Für die Studie haben wir unterschiedliche Materialien vorbereitet, die über involvierte Risiken bei einer Spende von Bewegungsdaten via GPS, informieren. Diese Materialien wurden zufällig eingeteilten Gruppen unter den Teilnehmenden zu Beginn der Erhebung gezeigt, und insbesondere das Teilprojekt der FU (Mensch-Computer-Interaktion) bewertet nun Zusammenhänge zwischen Qualität der Information und Spendenbereitschaft, und allgemeines Erleben des Spendevorgangs. Die Teilnehmenden konnten aus verschiedenen Stufen auswählen, welche Rechte sie uns zur Weiternutzung an den Daten überlassen möchten. Überraschend hoch ist übrigens bereits jetzt absehbar der Anteil der Teilnehmenden, der eine Datenfreigabe als Open Data bei einer vollständigen Anonymisierung unterstützen würde.

Mit der Frage zur Gestaltung von Transparenz-fördernden Maßnahmen (Information, Gewährleistung informierter Zustimmung) steht die Erhebung inhaltlich in engem Zusammenhang mit den [bisherigen Arbeiten der FU zur Erklärbarkeit komplexer Technologien wie Differential Privacy](https://arxiv.org/abs/2204.04061), und der Nützlichkeit von Methoden der Risiko-Kommunikation aus anderen Feldern und Disziplinen.

Teilnehmen konnten an der Studie alle Studierenden der Berliner Hochschulen, und unsere Werbung via Social Media der Universitäten und CityLAB/TSB, Flyer und Campus-Werbung trug Früchte. Wir hoffen, zügig Einblicke in die Ergebnisse und den weiteren Verlauf geben zu können.

_"Durch die Erhebung mit dem DLR MovingLab liegt uns nun eine sehr wertvolle Datenbasis vor - zu einem Themenkomplex, in dem Daten knapp sind und der noch viele offene Fragen aufwirft. Der Datensatz beantwortet Fragen der Urbanen Mobilität, hilft uns aber auch, die Wahrnehmungen der Informationen zum Datenschutz und der Risiken unserer Studienteilnehmenden zu verstehen. Wir hoffen, nun besser einschätzen zu können, wie sich guter Datenschutz und verständliche Info-Texte auf die Bereitschaft zur Teilnahme auswirken. Wir sind gespannt auf die Auswertung."_ (René Kelpin, DLR)

### Ausblick

Ein ereignisreiches Jahr geht zu Ende, ein neues steht vor der Tür und damit einhergehend schon Vorfreude auf unsere Projektkonferenz im Juni, Arbeiten an unserem dritten Fallbeispiel zur Gestaltung von Datenspendeplattformen und einer Workshop-Reihe mit Bürger:innen zum Thema Mobilitätsdatenspende. Stillstand gibt es bei uns nicht! Für alle, die am Projektkontext interessiert sind, stellen wir in regelmäßigen Abständen Informationen aus den Teilprojekten in unserem Blog zur Verfügung. Direkt zum Projekt in Kontakt treten können Sie gerne mit mir, Markus Sperl (markus.sperl[at]ts.berlin). Ich freue mich auf den Austausch!

_*Differential Privacy (differentielle Privatsphäre) ist eine Herangehensweise Privatsphäreschutz mathematisch darzustellen und durch statistisches “Verrauschen” von Daten zu garantieren. Durch das Rauschen (noise) kann jemand, der Teil des Datensatzes ist, dies plausibel bestreiten. Differential Privacy schützt die Daten, erschwert aber auch die Interpretation (Privacy-Utility Trade-Off)._