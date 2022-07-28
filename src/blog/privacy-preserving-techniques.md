---
layout: layouts/blog.liquid
title: "Privacy-preserving techniques and how they apply to mobility data"
author: "Alexandra Kapp (HTW)"
date: 2022-03-14
tags: 
    - xyz
    - sdfdg
    - sdfsdgd
---

What does it actually mean to “anonymize” data? With this blog post, I want to give an overview of different established methods and how they apply to mobility data.
(The survey of Fiore et al., 2020 has been a major source for this overview).

First of all, it should be noted, that there is a difference between privacy principles (abstract definitions), privacy criteria (exact requirements), and mechanisms. For example, the privacy principle ‘indistinguishability’ demands that each record in a database must not be distinguishable from a large enough group of other records. This principle is met by the privacy criterion of k-anonymity which requires that each person in a dataset cannot be distinguished from k-1 other individuals. This, in turn, could be achieved by applying the mechanism of suppression, where each record with a unique combination of identifying attributes (e.g., age, sex, and place of residence) is removed from the dataset.

Let us first have a look at different mechanisms and then at privacy principles and criteria. For demonstration, we use the below example dataset (see Figure 1):

TODO: add pic

### Privacy mechanisms

Mobility data is somewhat special compared to other tabular data for various reasons: while other datasets often only hold a single record for a user, mobility data has potentially many closely linked records of a single user (spatio-temporal points) within a trajectory which makes it harder to anonymize. Additionally, geospatial records cannot (always) be treated as regular numeric values. And last, fine-granular spatio-temporal points are often unique within a dataset, unlike, e.g., a choice from a category like ‘gender’ where multiple users share the same value.

In the following part, we will have a look at the mechanisms of **cloaking**, **suppression**, **aggregation**, **obfuscation**, **swapping**, and **synthetic data generation** and how they apply specifically to mobility data.

### Cloaking (Generalization)

The level of detail can be reduced to improve anonymity, which is also referred to as **generalization**. This is often achieved by creating categories, e.g., a dataset of customers including demographic information can be generalized by replacing the exact age with 5-year categories (15 < age ≤ 20, 20 < age ≤ 25, etc.).

Mobility data can be generalized by reducing the spatial or temporal granularity, also referred to as **cloaking**. The _spatial accuracy can be reduced by truncating latitude and longitude decimals_ (see Figure 2) or by _mapping points onto a tessellation_ (see Figure 3) and replacing coordinates with tile IDs.

TODO: add pics

Another option is the reduction of temporal accuracy by discarding every other point within a trajectory (see Figure 4) or by binning exact timestamps into pre-defined time windows (see Figure 5).

TODO: add pics

Simple applications of cloaking techniques did not provide great protection against attacks, as shown in various research (see Fiore et al., 2020).

### Suppression

Another straightforward privacy mechanism is **suppression**. Entire columns or single sensitive values are thereby removed from the dataset. For example, columns containing the bank account number of users could be entirely discarded.

In the context of mobility data, sensitive locations could be suppressed. For example, all records within a 50-meter radius of hospitals could be removed from the dataset to protect the privacy of patients (see Figure 6).

TODO: add pic

However, sensitive locations that allow easy re-identification are usually user-specific (like home or workplaces). Suppression of such locations thus relies on user-specific information, e.g., the fitness trackers Garmin or Strava allow the declaration of “privacy zones” where all activities within the zones are snapped to the zone perimeter when shared publically.

As a heuristic, it can be assumed that the most sensitive locations usually reside within the origin and destination of a trip and not within the path in-between. Thus, another suppression approach lies in truncating the first and last meters of a trajectory (presuming fine-granular data, e.g., a GPS trajectory). Of course, this is only a suitable technique if the start and end locations are not of interest.

### Aggregation

Mobility data is commonly aggregated spatially, temporally, or a combination of both. Aggregation functions thereby do not only serve analysis purposes but can also be used to provide privacy (see Figure 7).

TODO: add pic

Simple spatial aggregations treat single points of a trajectory individually, without maintaining information on the relation of points within a trajectory. To retain such information, more fine-granular aggregations need to be performed, commonly by origin-destination matrices or by aggregating trip counts per road segment (i.e., traffic volume).

These examples already indicate that aggregations of mobility data often remain at a fine-granular level which, by itself, is likely not providing enough privacy (e.g., [Xu et al., 2017](https://dl.acm.org/doi/abs/10.1145/3038912.3052620) or [Pyrgelis et al., 2017](https://sciendo.com/article/10.1515/popets-2017-0043)).

From a utility perspective, aggregation only makes sense if the desired information is known in advance. Once data is aggregated and raw data is discarded, further analyses might not be available anymore. E.g., if data is aggregated spatially it cannot be disaggregated temporally anymore if the underlying raw data was deleted.

### Obfuscation (Noise)

Numerical values can be distorted by adding noise. An age of 24 might then be changed to 26 after applying a noise function (**value distortion** technique, see [Agrawal and Srikant, 2000](https://dl.acm.org/doi/10.1145/342009.335438)).

In the context of mobility data, noise can be added to coordinates, distorting them from their original location. Obviously, this results in unrealistic trajectories with zigzag shapes (see Figure 8). Smarter approaches including smoothing techniques have been proposed in the context of ship trajectories by [Jiang et al. (2013)](https://dl.acm.org/doi/10.1145/2484838.2484846) and [Shao et al. (2013)](https://www.springerprofessional.de/en/publishing-trajectory-with-differential-privacy-a-priori-vs-a-po/4158218).

TODO: add pic

[Duckham and Kulik (2005)](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.105.8415&rep=rep1&type=pdf) formalized a model of obfuscation for location data that does not distort single coordinates; instead, a set of potential locations is provided, including the actual location, though not revealing which one is the true location (see Figure 9). Their model is directed at location-based service apps that query single locations of a user to provide a service (e.g., to return a recommendation for the closest Italian restaurant). The true closest restaurant should still be returned correctly, even when only the imprecise information of a set of potential locations is known.

TODO: add pic

### Swapping

Swapping is an anonymization mechanism where values of a dataset are rearranged so that attributes remain present but do not correspond with their original records (see Figure 10).

For mobility data, this can be applied by swapping trajectory segments where trajectories are close to one another, for example with the technique SwapMob, proposed by [Salas et al. (2018)](https://www.springerprofessional.de/en/swapmob-swapping-trajectories-for-mobility-anonymization/16104138).

TODO: add pic

The utility of such approaches is limited for use cases where origin-destination combinations or the course of the trajectory are relevant.

### Synthetic data generation

Data synthetization techniques have a different approach than the previous mechanisms that aim to alter attributes of raw data. Certain distributions of the raw data are captured instead (e.g., distribution of origin-destination pairs, distribution of trip lengths, temporal distribution of trips, etc.) and new, synthetic data is created based on the learned distributions. There are different approaches to go about this, e.g., WHERE ([Isaacman et al., 2012](https://dl.acm.org/doi/10.1145/2307636.2307659)) defines five input probability distributions that are used to create synthetic data, DP-Star ([Gursoy et al., 2019](https://ieeexplore.ieee.org/ielaam/7755/8821494/8481494-aam.pdf)) uses trip distribution information and creates micro-trajectory data based on Markov chains, while other approaches are based on neural networks that are trained to learn sequences without necessarily specifying which distributions should be captured (e.g., [Rao et al., 2020](https://arxiv.org/abs/2006.10521), [Berke et al., 2022](https://arxiv.org/abs/2201.01139)).

### Combination of mechanisms

Mechanisms can also be combined. For example, noise can be added to spatially aggregated tile visit counts, or information on tile visits is suppressed if the count is below a certain threshold.

### Privacy principles and criteria

Mechanisms can be applied as privacy enhancements without fulfilling a privacy criterion. Though, this makes it difficult to impossible to quantify privacy risks and make statements on privacy guarantees. For example, the reduction of granularity by rounding coordinates to three decimals could provide enough privacy in a dense city but maybe not for the sparsely populated countryside. Maybe travel patterns between cities are sensitive information, thus coarsening on city-level would still reveal unique travel patterns of individuals.

Privacy criteria define requirements that need to be met, thereby allowing a better assessment of the provided privacy. Privacy criteria can be classified according to the privacy principle (an abstract definition of privacy) they fulfill.

Two major privacy principles have been considered in the literature: **indistinguishability** and **uninformativeness**.

### Indistinguishability & k-anonymity

Indistinguishability demands that each record in a database must not be distinguishable from a large enough group of other records. This is usually implemented via the privacy criterion k-anonymity (see Figure 11).

“A release provides k-anonymity protection if the information for each person contained in the release cannot be distinguished from at least k-1 individuals whose information also appears in the release” ([Sweeney, 2002](https://dl.acm.org/doi/10.1142/S0218488502001648)).

K-anonymity is mostly achieved with **generalization** and **suppression**.

TODO: add pic

To provide k-anonymity for mobility data, it must be ensured that any trajectory appears at least k times within the dataset. This is usually achieved by mapping coordinates onto a tessellation (spatial generalization) and/or suppressing unique (segments of) trajectories. This is not trivial as trajectories tend to be rather unique and often only very coarse tessellations and time windows can attain even 2-anonymity, thus coming at a high cost of spatiotemporal accuracy (Figure 12).

TODO: add pic

Of course, this also depends on the characteristics of the data. Generally speaking, the longer and more fine-granular trajectories are, the harder it becomes to provide k-anonymity.

To maintain a higher utility, there are approaches that only view the first and last bit of a trajectory as sensitive information, thus only providing k-anonymity for those parts ([Xu et al., 2021](https://ieeexplore.ieee.org/document/9328113)).

L-diversity and t-closeness build on the concept of k-anonymity by defining further restrictions on sensitive attributes that are allowed to be present within a group. E.g., if all people within a group have been to a hospital, an attacker does not need to know which exact person within this group his target is to know that his target has been to a hospital. With l-diversity and t-closeness criteria requirements of such differences within sensitive attributes can be formulated.

### Uninformativeness & differential privacy

Uninformativeness is a very general principle, enforcing that the difference between the knowledge of the adversary before and after accessing a database must be small. Unlike indistinguishability, it does not make any assumptions on prior knowledge of an attacker and therefore provides much stronger privacy guarantees. Uninformativeness is mostly implemented via differential privacy, which has become the de-facto standard of privacy guarantees ([Dwork et al., 2006](https://link.springer.com/chapter/10.1007/11681878_14)).

“An algorithm is said to be differentially private if by looking at the output, one cannot tell whether any individual’s data was included in the original dataset or not. In other words, the guarantee of a differentially private algorithm is that its behavior hardly changes when a single individual joins or leaves the dataset — anything the algorithm might output on a database containing some individual’s information is almost as likely to have come from a database without that individual’s information” ([Harvard University Privacy Tools Project](https://privacytools.seas.harvard.edu/differential-privacy)).

([See this blog post](https://towardsdatascience.com/understanding-differential-privacy-85ce191e198a) for a more in-depth explanation of differential privacy)

Differential privacy is especially applied in settings of database queries (unlike a data release) by applying noise to the output, e.g., spatially aggregating data and applying noise to each visit count of each zone. The noise is thereby calibrated accordingly (determined by the so-called sensitivity) so that the output guarantees differential privacy according to a defined privacy budget (determined by the parameter ε). For mobility data, differential privacy mechanisms can be applied to any kind of aggregations, just as they would be applied to aggregations of any other tabular datasets.

For the setting of location-based service applications, the concept of _geo-indistinguishability_ ([Andrés et al., 2013](https://dl.acm.org/doi/10.1145/2508859.2516735)) has been established to provide differential privacy for single locations (unlike trajectories) within a defined radius.

[Haydari et al., 2021](https://arxiv.org/abs/2112.08487) make use of the concept of geo-indistinguishability to provide differential privacy for origin and destination locations (the trip inbetween is not considered sensitive information) for the publication of aggregated mobility network data which informs about travel demand on street segments, e.g., for congestion analysis.

For the release of entire trajectories, there is increasing research on differentially private synthetic data generation, e.g., [Mir et al. (2013)](https://ieeexplore.ieee.org/document/6691626), [He at al. (2015)](https://dl.acm.org/doi/10.14778/2809974.2809978), [Gursoy et al. (2018)](https://dl.acm.org/doi/10.1145/3243734.3243741), or [Chen et al. (2020)](https://www.sciencedirect.com/science/article/abs/pii/S1084804520302101).

### Conclusion

The given overview hopefully provides insights into potential privacy mechanisms and criteria. As anonymization techniques are dependent on the context, such as data characteristics, use cases, and privacy threats, there is no one method that fits as a solution to all situations.

_Dieser Text erschien zuerst auf [Alexandras privatem Blog](https://alexandrakapp.blog/)._
