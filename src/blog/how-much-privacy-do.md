---
layout: layouts/blog.liquid
title: "How much privacy do “Privacy Zones” provide?"
author: "Alexandra Kapp"
date: 2022-09-21
tags: 
    - Privatsphäre
    - Anonymisierung
    - Privatsphäre-erhaltende Technologien (pets)
---
How much privacy do “Privacy Zones” provide?
In this post, I gave an overview of different privacy-enhancing techniques for mobility data. This post is the first to deep-dive into single specific techniques by looking into privacy zones.
Social-network sports apps like Strava are used to track and share personal sporting performances, including pictures and GPS traces. This has led to undesired events: for example, in 2018, bikes worth more than $20,000 were stolen from a guy who had posted pictures of all his bikes on Strava in addition to his bike trips that started and ended at his house. This allowed the thief to easily determine at which house a bunch of expensive bikes were stored.
To protect sensitive locations such as the home location, some of those sports app providers like Garmin or Strava offer a privacy zone functionality. Users can define sensitive locations around which a privacy zone is created according to a preferred radius (see Figure 1 for an example of the privacy zone user interface by Garmin). Any shared routes will be cut off at the boundary of the privacy zone (see Figure 2).
[Figure 1]
Figure 1: Example screenshot by Garmin that shows the user interface for the privacy zone functionality
This method has obvious limitations: in such a basic implementation where all trajectories end at the boundary of the privacy zone which is a perfect circle, it only needs a few points to be able to reconstruct the center of that circle, i.e., the sensitive location.
[Figure 2]
Figure 2: An example of a privacy zone: Left: three routes lead to a location that has been defined as a sensitive location (e.g., home location). The circle indicates the privacy zone around the sensitive location. Right: all routes are cut off at the boundary of the circle. The figure already suggests that the circle, and thus the center of the circle, can be reconstructed given the shortened trajectories.
Hassan et al. (2018) show how such centers can easily be computed mathematically from Strava data while Mink et al. (2022) showed with a user study that no such mathematical capabilities are even necessary, as for the most common privacy zone size, 68% of guesses (i.e., estimating based on the visual map representation) fell within 50 meters of the hidden location when participants were shown just 3 activities.

We can conclude, that privacy zones in their basic implementation do not provide satisfying privacy.
Can Privacy Zones Be Improved?
Hassan et al. (2018) test three different obfuscation techniques to modify privacy zones and compare how much the location reconstruction success is reduced.


	Modify radius size: Enlarge the size of the radius (see Figure 3). According to the authors’ evaluation, this has no real privacy improvement. Only, when the radius was enlarged to such an extent, that a substantial number of trajectories are removed completely, thus highly sacrificing utility.


[Figure 3]
Figure 3: 1) Modify radius. The privacy zone radius is enlarged.


	Fuzzy intersection points: Not the exact intersection with the boundary of the privacy zone is used to cut trajectories, instead, a random number of GPS points is removed additionally (see Figure 4). For a radius of ~400 meters (0.250 miles) and a fuzz value of 40 meters (i.e., the maximum distance removed additionally) the accuracy of correctly determining the sensitive location drops from 96% (without fuzzing) to 32%. For a fuzz value of 200 meters, it drops down to 15%. Thus, the authors conclude that this method can significantly increase privacy, at the same time, the authors note that there are likely more expressive attack models to overcome fuzzing noise than the basic one they used.


[Figure 4]
Figure 4: 2) Fuzzy intersection points. The grey lines are removed from the trajectories in addition to the part that lies within the privacy zone.


	Spatial cloaking by shifting the center: By shifting the center of the privacy zone, a reconstruction of the center will not reveal the true sensitive location. Of course, the true sensitive location still needs to be within the shifted privacy zone (see Figure 5).For example, the OpenBikeSensor makes use of such an implementation.


[Figure 5]
Figure 5: Spatial cloaking by shifting the center. The dotteld line is the original privacy zone and the green circle is the shifted privacy zone.

For this method, the authors run a different attack, because determining the center of the privacy zone is no longer revealing sensitive information. Instead, they use the direction of the trajectories (based on the last two points) as an attack vector: by extending the trajectory (with a straight line) they determine where the trajectories cross paths. The middle of all crossings is used as a prediction and it is considered true if it falls within 50 meters of the true location (see Figure 6).
Even though this is a very simple attack implementation that only takes the two last points of a trajectory to determine the direction and draws a straight light to determine the crossing, they have a success rate of 41.3% for a radius of ~400 meters (0.250 miles).

[Figure 6]
Figure 6: Attack against spatial cloaking: the prediction uses the intersection point of the linear interpolation of all trajectories entering the privacy zone. In this example, the intersection is close to the sensitive location (black point).

Both obfuscation methods, fuzzy intersection points and shifting the center, increase privacy and significantly increase the complexity of the attack. Depending on the use case and the attacker this might provide sufficient protection in practice. Still, it should be noted that such mechanisms can be broken with a bit of effort to a non-negligible success rate.

uch scenarios are used to evaluate the resilience of privacy measures against such attacks and help to prevent them. In the literature, there are many different kinds of attacks under various names. Thus, I hereby try to give an overview of the most common ones.
In the context of mobility data, the adversary can have different objectives which can be summarized as:

	re-identification of a user (or de-anonymization): The “anonymous” records are linked to a user so that the adversary obtains all information about the user within the database.
	retrieve sensitive information: Retrieving sensitive information about a target, without necessarily re-identifying their records.
    learn anything additional about the user (not necessarily pre-defined sensitive information)
	retrieve the exact (current) location of a user: For example, in a location-based service app scenario, the adversary might know which data belongs to which user. But as the data is distorted, the objective is to identify the actual location from the perturbed data.
	membership of a user: Identify whether a particular user is part of the dataset (without necessarily uniquely identifying the data record of the target victim)

According to the objectives, there are respective attacks: re-identification attack, similarity attack, probabilistic attack, location inference attack and membership attack. This blog post provides a rough overview of those attacks. Note, that there are much more attack scenarios than the ones covered here, though usually they can be grouped into one of these relatively broad attack scenarios.

Re-identification Attack
The re-identification (or de-anonymization) is one of the most commonly stated objectives. More specifically, re-identification is usually achieved with a record-linkage attack (Fung et. al, 2010): An adversary has access to some side information (e.g., an additional dataset, or a real-life observation) in addition to the anonymized dataset and links this information to the dataset so that re-identification of a person is possible. For example, as shown in Figure 1, an adversary knows that Alice visited a coffee shop at a certain time, and finds this record in the dataset, thus they can identify all other places Alice visited, revealing the sensitive home address.
[Figure 1]
Figure 1: Record-Linkage Attack
Thus, there are two ways information can be critical to privacy:

	It can be the sensitive information itself, e.g., the home location (see this blog post on different ways mobility data can be sensitive).
	It can be used to re-identify a person in a dataset (linked side information) so that sensitive information can then be linked to the person.

This is the part where the adversary/privacy researcher can get creative: Which side information can be used how to successfully link individual records in the database?

Format of side information:
An adversary obtains information about a subset of spatio-temporal points, for example through a second data source or by observation (they see Alice in the coffee shop). If these spatio-temporal points make up a sub-trajectory of the trajectory within the anonymized database, they can be matched and Alice can be re-identified.

When the adversary knows important locations of Alice, such as her home or work location, they can often be used as quasi-identifiers and allow easy re-identification (Gambs et al., 2014) as location patterns of people are highly unique. One study (de Montjoye et al., 2013) showed that within the researched dataset only four spatio-temporal points were needed to uniquely identify a person. The most visited location during night times is usually the home location while the most visited location during working hours is the work location (assuming a setting with a full-time working person within an office). For example, Drakonis et al. (2019) showed that Twitter users could be de-identified based on their geotagged tweets.
Less obvious side information has also been used to de-anonymize individuals: Rossi et al. (2015) showed that mobility features such as speed or heading direction can be highly unique for individuals. Assuming, an adversary has access to such information about Alice (e.g., an app that “only” collects speed and compass information), they could use those mobility features to re-identify Alice within an anonymized dataset.
De Mulder et al. (2008) assume that the adversary has a location profile (Markovian model) of their target and uses the information about transition probabilities to re-identify them.
Scrivatsa and Hicks (2012) used a social graph as side information: a social network (e.g., Facebook) could be used to obtain information about friendships and create social graphs. As friends tend to have many overlaps in their physical encounters the authors used this information to link trajectories to social network IDs and thus re-identified up to 80% of the users correctly.
Similarity Attack
Unlike a re-identification attack, which is successful when a name can be put onto a single record, a similarity attack (or attribute-linkage attack) is already successful when sensitive information is retrieved (without identifying a user) (Fiore et al. 2019). For example, as shown in Figure 2, the adversary observes Alice at the coffee shop but there are two records in the database matching the time and place. Though, as both potential candidates visit an abortion counseling, the adversary knows that Alice must have been among those two, thus, obtaining sensitive information about Alice without having identified her in the database.

[Figure 2: Similarity Attack]
Figure 2: Similarity Attack
Localization Attack (Location Inference)
The setting for a localization attack (or location inference attack) is a little different: the adversary knows which information belongs to their target but the location information is perturbed by some anonymization technique (Li et al., 2022). Their objective is to infer the actual location of the user. This is often within the context of a (real-time) location-based service app.

For example, a restaurant recommendation app uses a privacy-preserving technique where not only the true user location is sent to the server but a set of multiple candidates, thus the actual user location is “hidden in the crowd”. The server retrieves the best restaurant recommendation for all candidates combined, which will be very likely also the best recommendation for the user.
An adversary could use information about the road network to remove all unlikely locations (i.e., those that are placed in inaccessible places, e.g., in a lake), thus increasing his probability of detecting the true user location (Xu et al., 2021) or use the semantics of places to identify the most probable true location (Tian et al., 2021).
Membership-inference attack
A membership-inference attack is successful if an adversary correctly identifies whether their target is a member of the dataset. Membership in a dataset might already be enough to reveal sensitive information (e.g., if someone is part of a database of a medical, religious, or dating app). As this is a dichotomous (yes or no) outcome the baseline for such attacks is commonly 50%, i.e., guessing by chance.
Pyrgelis et al. describe a membership-inference attack where a machine learning classifier is trained based on prior knowledge about the target’s membership in known aggregated datasets. This classifier is used to determine the membership of the user in the target dataset.

Probabilistic Attack
The probabilistic attack (or inference attack) is successful if anything additional is learned about a user by accessing the target database. Thus, the notion of a probabilistic attack is much broader than that of a similarity attack, as any information about a user is considered sensitive (Fiore et al. 2019).

Dieser Text erschien zuerst auf Alexandras privatem Blog.











Attack scenarios are used in privacy research to describe how an adversary potentially obtains sensitive information about a person. Such a scenario entails assumptions on **side information** available to an adversary, which **sensitive information** the adversary wants to retrieve, and **how they use the side information to retrieve the sensitive information.**

Such scenarios are used to evaluate the resilience of privacy measures against such attacks and help to prevent them. In the literature, there are many different kinds of attacks under various names. Thus, I hereby try to give an overview of the most common ones.
In the context of mobility data, the adversary can have different objectives which can be summarized as:

- **re-identification of a user (or de-anonymization):** The “anonymous” records are linked to a user so that the adversary obtains all information about the user within the database.
- **retrieve sensitive information:** Retrieving sensitive information about a target, without necessarily re-identifying their records.
- **learn anything additional about the user** (not necessarily pre-defined sensitive information)
- **retrieve the exact (current) location of a user:** For example, in a location-based service app scenario, the adversary might know which data belongs to which user. But as the data is distorted, the objective is to identify the actual location from the perturbed data.
- **membership of a user:** Identify whether a particular user is part of the dataset (without necessarily uniquely identifying the data record of the target victim)

According to the objectives, there are respective attacks: _re-identification attack, similarity attack, probabilistic attack, location inference attack_ and _membership attack_. This blog post provides a rough overview of those attacks. Note, that there are much more attack scenarios than the ones covered here, though usually they can be grouped into one of these relatively broad attack scenarios.

### Re-identification Attack

The re-identification (or de-anonymization) is one of the most commonly stated objectives. More specifically, re-identification is usually achieved with a _record-linkage attack_ [(Fung et. al, 2010)](https://dl.acm.org/doi/10.1145/1749603.1749605): An adversary has access to some side information (e.g., an additional dataset, or a real-life observation) in addition to the anonymized dataset and links this information to the dataset so that re-identification of a person is possible. For example, as shown in Figure 1, an adversary knows that Alice visited a coffee shop at a certain time, and finds this record in the dataset, thus they can identify all other places Alice visited, revealing the sensitive home address.

![Figure 1: Record-Linkage Attack](/assets/images/blog/figure1_record_linkage_attack.png)

Thus, there are two ways information can be critical to privacy:

1. It can be the **sensitive information** itself, e.g., the home location (see [this blog post](https://www.freemove.space/blog/how-is-mobility-data-sensitive-information/) on different ways mobility data can be sensitive).
2. It can be used to re-identify a person in a dataset **(linked side information)** so that sensitive information can then be linked to the person.

This is the part where the adversary/privacy researcher can get creative: Which side information can be used how to successfully link individual records in the database?

**Format of side information:**

An adversary obtains information about a **subset of spatio-temporal points**, for example through a second data source or by observation (they see Alice in the coffee shop). If these spatio-temporal points make up a sub-trajectory of the trajectory within the anonymized database, they can be matched and Alice can be re-identified.

When the adversary knows **important locations** of Alice, such as her home or work location, they can often be used as quasi-identifiers and allow easy re-identification [(Gambs et al., 2014)](https://www.sciencedirect.com/science/article/pii/S0022000014000683) as location patterns of people are highly unique. One study [(de Montjoye et al., 2013)](https://www.sciencedirect.com/science/article/pii/S0022000014000683) showed that within the researched dataset only four spatio-temporal points were needed to uniquely identify a person. The most visited location during night times is usually the home location while the most visited location during working hours is the work location (assuming a setting with a full-time working person within an office). For example, [Drakonis et al. (2019)](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01A-6_Drakonakis_paper.pdf) showed that Twitter users could be de-identified based on their geotagged tweets.

Less obvious side information has also been used to de-anonymize individuals: [Rossi et al. (2015)](https://epjdatascience.springeropen.com/counter/pdf/10.1140/epjds/s13688-015-0049-x.pdf) showed that **mobility features** such as speed or heading direction can be highly unique for individuals. Assuming, an adversary has access to such information about Alice (e.g., an app that “only” collects speed and compass information), they could use those mobility features to re-identify Alice within an anonymized dataset.

[De Mulder et al. (2008)](https://dl.acm.org/doi/10.1145/1456403.1456409) assume that the adversary has a **location profile** (Markovian model) of their target and uses the information about transition probabilities to re-identify them.

[Scrivatsa and Hicks (2012)](https://dl.acm.org/doi/10.1145/2382196.2382262) used a **social graph** as side information: a social network (e.g., Facebook) could be used to obtain information about friendships and create social graphs. As friends tend to have many overlaps in their physical encounters the authors used this information to link trajectories to social network IDs and thus re-identified up to 80% of the users correctly.

### Similarity Attack

Unlike a re-identification attack, which is successful when a name can be put onto a single record, a similarity attack (or attribute-linkage attack) is already successful when sensitive information is retrieved (without identifying a user) [(Fiore et al. 2019)](https://arxiv.org/abs/1903.12211). For example, as shown in Figure 2, the adversary observes Alice at the coffee shop but there are two records in the database matching the time and place. Though, as both potential candidates visit an abortion counseling, the adversary knows that Alice must have been among those two, thus, obtaining sensitive information about Alice without having identified her in the database.

![Figure 2: Similarity Attack](/assets/images/blog/figure2_similarity_attack.png)

### Localization Attack (Location Inference)

The setting for a **localization attack** (or location inference attack) is a little different: the adversary knows which information belongs to their target but the location information is perturbed by some anonymization technique [(Li et al., 2022)](https://cloud.freemove.space/index.php/s/BKZ29D9tgao99LX?dir=undefined&path=%2FPost%2012%3A%20Attack%20Scenarios%20-%20How%20Adversaries%20Retrieve%20Sensitive%20Information&openfile=80417). Their objective is to infer the actual location of the user. This is often within the context of a (real-time) location-based service app.

For example, a restaurant recommendation app uses a privacy-preserving technique where not only the true user location is sent to the server but a set of multiple _candidates_, thus the actual user location is “hidden in the crowd”. The server retrieves the best restaurant recommendation for all candidates combined, which will be very likely also the best recommendation for the user.

An adversary could use information about the road network to remove all unlikely locations (i.e., those that are placed in inaccessible places, e.g., in a lake), thus increasing his probability of detecting the true user location [(Xu et al., 2021)](https://www.mdpi.com/2076-3417/11/10/4594/htm) or use the semantics of places to identify the most probable true location [(Tian et al., 2021)](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9395611).

### Membership-inference attack

A membership-inference attack is successful if an adversary correctly identifies whether their target is a member of the dataset. Membership in a dataset might already be enough to reveal sensitive information (e.g., if someone is part of a database of a medical, religious, or dating app). As this is a dichotomous (yes or no) outcome the baseline for such attacks is commonly 50%, i.e., guessing by chance.

[Pyrgelis et al.](https://arxiv.org/abs/1708.06145) describe a membership-inference attack where a machine learning classifier is trained based on prior knowledge about the target’s membership in known aggregated datasets. This classifier is used to determine the membership of the user in the target dataset.

### Probabilistic Attack

The probabilistic attack (or inference attack) is successful if anything additional is learned about a user by accessing the target database. Thus, the notion of a probabilistic attack is much broader than that of a similarity attack, as any information about a user is considered sensitive [(Fiore et al. 2019)](https://arxiv.org/abs/1903.12211).

Dieser Text erschien zuerst auf [_Alexandras privatem Blog_](https://alexandrakapp.blog/).