---
layout: layouts/blog.liquid
title: "Real-Life Privacy Breaches"
subtitle: "Why Mobility Data Needs Protection"
author: "Alexandra Kapp (HTW)"
date: 2022-01-20
tags: 
    - xyz
    - sdfdg
    - sdfsdgd
---

The General Data Protection Regulation (GDPR) from 2016 was a novel and unique law to secure the privacy and security of personal data, but it was not introduced without criticism. Companies see the GDPR as an obstacle that hinders them to pursue their use cases and which poses unrealistically high demands. Privacy threats on the other hand are rather seen as theoretical problems. You’d hear for example: “We are not interested in tracking any of our customers individually. We are only interested in broader patterns, but GDPR hinders us to access such information.”

So I was wondering: When we deal with the topic of privacy of mobility data, what are actual threats that we try to fend off? There is a vast body of research dealing with attack scenarios on mobility data, e.g., this survey by [Fiore et. al. (2020)](https://hal.inria.fr/hal-02968279) on trajectory micro-data or these publications on aggregated data ([Xu et al., 2017](https://dl.acm.org/doi/abs/10.1145/3038912.3052620), [Pyrgelis et al., 2017](https://arxiv.org/abs/1708.06145), [Tu et al., 2018](https://ieeexplore.ieee.org/abstract/document/8356232), [Acs et al., 2021](https://crysys.hu/publications/files/AcsLB2021encyclopediaofcryptography.pdf)). Already the theoretical possibility of such threats makes them valid and critical privacy issues, which on its own should be enough of an argument for respective privacy measures. Yet, attack models in research can appear theoretical and constructed and real-life examples might convey the potential threat more impressively. Thus, I researched actual successful attacks and privacy breaches on mobility data sets. Note that these are only a few examples that are publically known, so this should only be seen as a selection of potential scenarios and not as an attempt to create a comprehensive collection.

### Scenario 1: The employee as the attacker

A company’s goal might not include spying on their customers, but that does not necessarily include all employees with access to data. In 2016 a former employee of Uber reported that other employees spied on “high-profile politicians, celebrities and even personal acquaintances […] including ex-boyfriends/girlfriends, and ex-spouses”, according [to this Guardian article](https://www.theguardian.com/technology/2016/dec/13/uber-employees-spying-ex-partners-politicians-beyonce).

### Scenario 2: Infering personal information from “anonymized” openly available data.

Once any personal identifiers, such as the name, birth date, or MAC address, are removed, a data set is commonly considered anonymous. Anonymous data is then shared with third parties, e.g., as open data or sold.

There are many good reasons for openly sharing data, but data including personal information needs to be treated with care. Only removing personal identifiers does not necessarily make a data set anonymous, as this example shows: In 2015 data from New York City Taxi trips had been released as open data, including start/end locations and times of single taxi rides. As [this article](https://www.gawker.com/the-public-nyc-taxicab-database-that-accidentally-track-1646724546) states, paparazzi photos of celebrities entering taxis have been matched with the data and as the start time and location was known from the image, the celebrities’ destinations could be inferred. [This Blogpost](https://vartree.blogspot.com/2014/04/i-know-where-you-were-last-summer.html) from 2014 explains how single persons can easily be identified from publicly available bike-sharing data in London.

“Anonymized” location data is also widely sold. Companies buy such data, e.g., for marketing purposes or to plan new store openings, but there have also been reports about the [U.S. Customs and Border Protection that bought location](https://www.vice.com/en/article/n7wakg/cbp-dhs-location-data-venntel-apps) data collected from regular smartphone apps ([originally reported in this Wall Street Journal article](https://www.wsj.com/articles/federal-agencies-use-cellphone-location-data-for-immigration-enforcement-11581078600)). [This report from 2020 of Martin Gundersen](https://nrkbeta.no/2020/12/03/my-phone-was-spying-on-me-so-i-tracked-down-the-surveillants/) impressively shows the chain of companies his data has been passed through. He requested all data the company “Venntel” had stored off him. Venntel obtains location data from other apps and sells them to further parties. This is why they had data about him even though he never was a direct customer. Gundersen requested information about his data based on the GDPR right that obligates organizations to provide any personal information they have stored about a person. He provided his Advertising-ID of his smartphone to identify his data. The Advertising-ID is an ID that smartphones send to apps for profiling which allows personalized ads. This setting is turned on by default but can also be disabled in the smartphone settings. All GPS locations certain apps had tracked were visible in Gundersen’s requested data and linked with this unique identifier. Any person could have bought that data set and could have tracked his entire movement. Only knowing a few locations (e.g., by already knowing where he lives, or by observation) one could easily deduce his identifier from the data and thereby obtain his past movements.

This has happened for example only recently to [a priest who was linked to location data from the gay dating app Grindr](https://www.pillarcatholic.com/p/pillar-investigates-usccb-gen-sec) and had to resign thereafter. The Pillar used commercially available data to link the priest to visits to gay bars.

This is also a comprehensive example that only the proof of a person being included within a data set (gay dating app) can already be a privacy threat.

[Vice reported](https://www.vice.com/en/article/xgz4n3/muslim-app-location-data-salaat-first) another example, where location data of a Muslim [prayer app was for sale](https://www.vice.com/en/article/xgz4n3/muslim-app-location-data-salaat-first) which had likely buyers within US governmental organizations like the Immigrations and Customs Enforcement.

### Scenario 3: Disclosing customer data to authorities.

Authorities, such as the police, secret services, or the court can demand data from companies if they can argue that it is relevant for criminal cases. E.g., in 2016, [a carsharing company had to provide customer data for a lawsuit in court](https://www.sueddeutsche.de/auto/datenerfassung-im-fahrzeug-das-auto-wird-zum-zeuge-der-anklage-1.3097958). The data on the route and speed could find the defendant guilty. Of course, one can argue that this is a positive example for storing data, as it helped to attest to a crime. But a company might view this otherwise, as this does not nurture trust from customers.

### Scenario 4: Infering sensitive information from aggregated data.

The previous examples all referred to the disclosure of single locations or trajectories. What if only aggregated data is stored or shared in the first place? Even then, there are potential privacy threats. As [reported by the Guardian](https://www.theguardian.com/world/2018/jan/28/fitness-tracking-app-gives-away-location-of-secret-us-army-bases), in 2018, Strava shared aggregated data on user movements. As soldiers from the US army were using the app, a secret US military base in Helmand Province, Afghanistan was disclosed.

### Scenario 5: Surveillance of employees.

Another threat origins in the surveillance of employees’ location data: For example, [Amazon forced their delivery employees to install a tracking app “Mentor”](https://www.wsws.org/en/articles/2021/05/03/amaz-s04.html) that records all locations on the job, and sometimes even off the job. This is only one effort of Amazon for surveilling their employees which is all directed at exerting power over their workers and suppressing any opposition within the workforce. [Some employees even get fired due to the assessment of machine learning algorithms](https://www.bloomberg.com/news/features/2021-06-28/fired-by-bot-amazon-turns-to-machine-managers-and-workers-are-losing-out) that a driver did not perform well enough on delivering packages on time, even if the reason behind the shortcomings might be beyond the driver’s control.

This final scenario is different from the previous ones in as data is intentionally collected for surveillance. Thus, privacy measures can barely help in this scenario, rather state regulations need to be introduced/enforced.

_Dieser Text erschien zuerst auf [Alexandras privatem Blog](https://alexandrakapp.blog/)._
