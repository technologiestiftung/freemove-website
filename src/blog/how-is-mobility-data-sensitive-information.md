---
layout: layouts/blog.liquid
title: "How is mobility data sensitive information"
author: "Alexandra Kapp (HTW)"
date: 2022-04-25
tags: 
    - xyz
    - sdfdg
    - sdfsdgd
---

Political opinions, religious beliefs, sexual orientation, or health issues are typical examples of obvious sensitive information in the need of data protection. While human mobility data is also personal data, it is inherently complex and thus there are different aspects that can be considered sensitive. Is only the information about a person’s home and their child’s school location sensitive or is the exact route choice in between in the need of protection? Is it a privacy breach to reveal the speed at which someone was driving, for example when they caused a car crash? Depending on the information that is classified as critical, anonymization efforts need to be directed accordingly. In this blog post, I want to have a look at different attributes of mobility data that can be considered sensitive and elaborate on how that classification might differ depending on the context.

Let’s consider the following example: _a bike-sharing company provides records of their customers’ movements as open data, thus, an adversary has full data access. Alice is a bike-sharing customer, thus her data is part of the dataset. Note that this is only historic data, i.e., no real-time data stream is provided_.

We will now have a look at which different aspects of this mobility dataset can be considered sensitive. Note that within this post we will only consider **whether** the information should be considered sensitive, **not how** an adversary manages to link a user to the sensitive information (this will be the topic of another post).

### Non-positioning data

Any non-positioning data such as age, gender, income, or billing address can potentially be sensitive. In our bike-sharing example, such information would most likely simply be removed from the dataset before the release. As this information is not mobility specific, we will not have a closer look into it.

### Sensitive locations

It is an intuitive approach not to consider the entire trajectory as sensitive information, but only specific sensitive locations a user has visited. Sensitive locations can either be defined generally or user-specific.

General sensitive locations could be for example hospitals, worship places, or casinos as they potentially reveal information about the health, religious beliefs, or addictive behavior of an individual. Additional data sources are thus needed, e.g., OpenStreetMap or expert knowledge, to identify such locations. For example, [Wang and Kankanhalli (2020)](https://www.sciencedirect.com/science/article/pii/S016740482030225X) propose an approach to protect visits to pre-defined sensitive places. In their experiments, they classified hospitals and worship places as sensitive.

It might sound like a reasonable approach to protect visits to known sensitive locations, though it is doubtful that all such places can easily be identified in practice and it is likely that relevant locations are missed. For example, all hospitals within a city are easily identified, but potentially not every single doctor’s office.

User-specific sensitive locations are different for each user and thus need to be defined individually, for example, places such as home, school, childcare, or work location. User-specific sensitive locations could either be specified by the user or they can be inferred with data mining techniques. For example, the crowdsourcing initiative [OpenBikeSensor](https://www.openbikesensor.org/) which collects bike trajectory data, allows the user to define [“Privacy-zones”](https://www.openbikesensor.org/docs/user-guide/privacy-zones/) to protect their privacy. Any data collected within those privacy zones are removed, thus the dataset does not contain sensitive information anymore.

When the primary purpose of data collection is data sharing, like the mentioned crowdsourcing platform, user input to define sensitive locations is a reasonable approach.

When data is only shared for a secondary purpose, as it is in our bike-sharing example, asking all users to provide information on sensitive locations does not seem to be an advisable approach. Inferring such locations with data mining techniques is technically complex and error-prone, as there are likely a lot of users without enough data for meaningful inferences. Thus, this approach of using sensitive locations does not seem suited for our use case.

### Staypoints

[Naghizade et al. (2020)](https://dl.acm.org/doi/abs/10.1145/3363449) argue that staypoints (stops) are the most sensitive part of the trajectory, thus, to maintain a higher utility, they only distort information on staypoints and not the rest of the trajectory.

A staypoint is any location where a user spent a significant amount of time, unlike only passing it by, and which is meaningful to the user, unlike e.g., waiting at a bus stop. For example, Bob leaves his home place and goes to the supermarket, then picks up his child from daycare and returns home. His trajectory then includes the staypoints ‘home’, ‘supermarket’, ‘daycare’, and again ‘home’.

If the route in-between the start and end location (waypoints) is the relevant information for an analysis task, for example, to compute traffic volumes or average speed on street segments, the privacy can be significantly increased while maintaining a high utility by omitting the start and end location. For example, the crowdsourcing app for bike trajectories [SimRa](https://www.digital-future.berlin/forschung/projekte/simra/) allows the user [to cut the beginning and end of their trajectories](http://www.mcc.tu-berlin.de/fileadmin/fg344/simra/SimRa_Anleitung_IOS.pdf) before submitting their data.

In our bike-sharing example, all start and end locations of the single bike trips can be considered staypoints. If an adversary identifies Alice in our database, they know all locations that Alice has visited with a shared bike. Thus, we should consider staypoints as sensitive information. At the same time, those locations entail valuable information, for example, whether shared bikes are used in combination with public transport, where additional parking areas or docking stations could be useful, or how origin-destination relations are distributed. Thus, generously cutting off the start and end of trajectories would highly compromise the utility, which is why other privacy-preserving techniques than the suppression of records should be considered.

#### Entire trajectory

A more conservative approach considers the entire trajectory as sensitive, i.e., staypoints and waypoints. In our bike-sharing example, this would be the exact route choice from start to end location. It is debatable whether this is sensitive information in our use case or not. Scenarios can be constructed, where such information entails a privacy breach; however, it is questionable how realistic these are:

For example, Alice might have forbiddenly ridden over private property and the owner can identify who trespassed his property. Location-based advertising could be used by companies, i.e., if a coffee shop knows that Alice is passing by regularly, they might direct targeted advertising at her. (However, such techniques are rather applied in the context of location-based service apps than within the analysis of historic bike-sharing data.)

If an adversary knows that Alice passes by a certain street every morning at 8 AM, this information can be used to locate her on the same street in the future. Though, in this context, the exact route is only indirectly the sensitive information that helps to identify the whereabouts of Alice (the actual sensitive information), which brings us to the next category: inference of future locations.

#### Inference of future locations

Patterns of historic mobility can be used to predict future locations. As people tend to have regular mobility patterns and keep visiting the same places (same home, work, supermarket, friends, coffee shop, etc.), and likely also using similar routes every time, any information of historic data is potentially a threat to the inference of future locations.

A rising body of literature deals with machine learning-based approaches for ‘next-location prediction’. Thus, even data of other people that are used to train such an algorithm, could be a threat to Alice’s privacy, if a well-trained algorithm is used to predict her future locations. This issue is discussed under the concept of ‘predictive privacy‘ ([Mühlhoff, 2021](https://link.springer.com/article/10.1007/s10676-021-09606-x)).

#### Temporal patterns

So far we mainly considered spatial attributes. Mobility data also consists of temporal information which can be just as sensitive. Let’s assume Alice uses a shared bike to get to work and back home every workday. The data can reveal how long Alice is working every day (when she is arriving at and leaving work), when she went on holiday (no records in the database for two weeks), or when she took the bike to the swimming pool on a day that she called in sick at work.

#### Mobility features

A car-sharing customer who [caused a lethal crash was convicted (at least partly) on the basis of car data that revealed he was speeding](https://www.sueddeutsche.de/auto/datenerfassung-im-fahrzeug-das-auto-wird-zum-zeuge-der-anklage-1.3097958). This shows, that also mobility features such as speed can be considered sensitive information. (Of course, from an ethical perspective it is debatable whether speeding car drivers should automatically get a fine.)

Especially in the context of car mobility data speeding is a major issue. For our bike-sharing use case, this would likely not be a (very) relevant factor.

#### Social interactions

According to [Cho et al. (2011)](https://dl.acm.org/doi/abs/10.1145/2020408.2020579), social relationships explain about 10% – 30% of human movements as people travel to visit or meet friends. Mobility data can reveal which people were at the same time at the same place and thus can reveal social interactions. The related privacy issue has also recently been debated in the context of contact tracing apps during the COVID-19 pandemic.

Within our bike-sharing example, two users who start and end a trip at the same times and locations have likely traveled together. Even though we can construct such scenarios, a bike-sharing dataset is probably not highly threatening to reveal social interaction information.

#### Membership

Knowing whether a person is present or not in a dataset can already be sensitive information. For example, [a priest resigned after location data was used to identify him as a user of the gay dating app Grindr](https://www.vice.com/en/article/pkbxp8/grindr-location-data-priest-weaponization-app).

Of course, for other use cases like the bike-sharing example, this might not be as sensitive. I can hardly think of a scenario where it would be a privacy breach to know whether a person is a bike-sharing customer. Still, there might also be legal implications: “…, if a service provider is not allowed to release location data, or make it available to third-parties even in aggregate form, one can use membership inference attacks to verify possible misuse of the data” ([Pyrgelis et al., 2017](https://arxiv.org/abs/1708.06145)).

#### Implications

Even though you might be able to make educated guesses about which information is sensitive you can never be sure to have considered every potential individual case in advance. This is why the notion of _uninformativeness_ has received substantial attention in recent times as it makes no assumptions about the sensitive attributes of a database but sees any major additional information an adversary has obtained about a user as a privacy breach (see also [this blog article](https://wordpress.com/post/alexandrakapp.blog/396)).

Another important topic in this context is user communication: good communication about data usage and potential privacy threats is vital so that users can make informed decisions about their own data. This is not as trivial as it might sound and it is still in the need of more research.

_Dieser Text erschien zuerst auf [Alexandras privatem Blog](https://alexandrakapp.blog/)._
