---
layout: layouts/blog.liquid
title: "What is Human Mobility Data good for?"
subtitle: "Urban and Traffic Planning"
author: "Alexandra Kapp (HTW)"
date: 2021-12-28
tags: 
    - Mobilitätsdaten
    - Nutzungsszenarien
    - Nachhaltige Mobilität
    - Epidemiologie
    - Disaster Management
---

There is a common misconception by data scientists who are not familiar with privacy measures that anonymization of data happens prior to and is independent of further analyses. The anonymized data can then supposedly be used for any desired use case. But the opposite is true: the better you know your use cases the more precise you can identify and apply suitable privacy-preserving methods to your data (Note: Entirely anonymous data is hard (or even impossible) to achieve as demonstrated repeatedly when personal information is extracted from supposedly anonymous data. _Privacy-enhancing_ or -_preserving_ are “softer” terms used in this context that do not claim to have reached full anonymity).

To give a simplified example: if you want to know where most shared bicycles are rented, your privacy method should preserve the spatial distribution of renting locations but you can remove information on exact trajectories as a part of your privacy enhancement. On the other hand, if you are interested in knowing how fast bikes ride on different streets you should maintain information on the exact route and speed but you can cut off start and end locations to enhance users’ privacy. If you want to keep information about all attributes, either your level of privacy suffers or the utility does.

Thus, to find suitable privacy-enhancing methods, it is vital to specify the use cases for which the data is needed for as a first step. This is also the approach we use to research privacy-preserving methods in our freemove project and which I will use to structure my dissertation.

### So, what is mobility data actually needed for?

It is obvious that mobility data can have positive benefits, e.g., for urban planning. It is less obvious which exact purposes are pursued with which kind of data and what level of granularity is needed. This is why I want to start a collection of urban mobility use cases and examples to obtain a better overview of needed data formats and granularity as a base to define suitable privacy methods. To be specific, I am thereby interested in use cases that serve the interests of citizens, omitting use cases that only serve marketing purposes or company interests. Additionally, the listed use cases are all based on the collection of larger amounts of data for further analyses or modelling, unlike applications that need precise, real-time location information of a single user for their operation, e.g., a navigation app.

As there is a variety of use cases, I will split them into three blog posts, grouped into (preliminary) categories _Urban and Traffic Planning_, _Traffic Management and Routing_, and _Other Use Cases_, starting below with the first.

I do not claim to have created an exhaustive collection and would be pleased to receive hints on further use cases.

_You can find a tabular overview of all use cases in this [GitHub Repository](https://github.com/AlexandraKapp/blog/blob/main/use_cases/readme.md)._

### Urban and Traffic Planning

One of the most stated purposes for the need for fine granular human mobility data in urban and traffic planning. So let’s have a deeper look at what that actually means.

### Traffic simulation

Traditionally, city and traffic planners use simulation software to test different scenarios, e.g., the impact of a construction site, the opening of a new shopping mall (which attracts many people), or a new bus line on the traffic? Software like [PTV Visum](https://www.ptvgroup.com/en/solutions/products/ptv-visum/) implements the [traditional four-step travel demand model](https://www.transitwiki.org/TransitWiki/index.php/Four-step_travel_model) that uses information on origin-destination connections between traffic cells of a regular workday for simulations. Such origin-destination information is traditionally gathered through surveys of representative samples like [“Mobilität in Deutschland”](http://www.mobilitaet-in-deutschland.de/), which is conducted every four years.

Newer approaches include agent-based simulations like [MatSim](https://www.matsim.org/about-matsim). They need [day plans as input data for their agents](https://svn.vsp.tu-berlin.de/repos/public-svn/publications/vspwp/2014/14-20/user-guide-0.6.0-2014-09-12.pdf). Day plans include detailed information of a list of activities with temporal information and traffic mode. The plans describe the intentions of agents which might not be realized if they are too optimistic, e.g., due to traffic jams. Such day plans are usually also based on survey data (see, e.g., [Kickhöfer et al., 2016](https://svn.vsp.tu-berlin.de/repos/public-svn/publications/vspwp/2016/16-02/KickhoeferEtAl2016MatsimSantiago.pdf)) or data on commuting statistics (see, e.g., [Ziemke et al., 2019](https://svn.vsp.tu-berlin.de/repos/public-svn/publications/vspwp/2017/17-12/ZiemkeNagel2017BerlinScenario.pdf)).

Another example for a new simulation approach is the project [bikeSim](https://www.bmvi.de/SharedDocs/DE/Artikel/DG/mfund-projekte/bikeSim.html) which uses real trajectories of cyclists as input data to create an affordable and easy-to-use planning tool for bike infrastructure.

### Bike infrastructure

With the stronger focus on climate protection and a shift from private cars to more climate-friendly mobility alternatives (“Verkehrswende”), the promotion of cycling is becoming an increasingly important (political) topic. This especially includes the expansion of bike infrastructure. The analysis of the status quo is stated to be an important step to detect current shortcomings in the bike infrastructure and help city planners prioritize fields of action.

[SimRa](https://www.digital-future.berlin/forschung/projekte/simra/) is a project that crowd-sources data on almost accidents. The [OpenBikeSensor](https://www.openbikesensor.org/en/) is a citizen science project, that crowd-sources measurements on passing distances of cars. [Movebis](https://www.movebis.org/das-projekt/) uses GPS tracks from a bike app to provide cities with bike traffic volumes and average speeds that are aggregated on street levels. Lu et al. have [compared actual bike trajectories with shortest paths](https://www.sciencedirect.com/science/article/abs/pii/S0966692318300875) to identify why cyclists avoid certain routes. Brauer et al. investigated [bike traffic fluency](https://www.sciencedirect.com/science/article/pii/S0198971520302866?via%3Dihub) to provide insight into the quality of city cycling. Various research and application projects use sensors to identify bumpy roads (e.g., see this [survey](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6263868/), this [“Sensorbike”](https://nationaler-radverkehrsplan.de/de/aktuell/nachrichten/sensorbike-fahrrad-zur-erforschung-des) project, this [proof-of-concept](https://www.esentri.com/combining-machine-learning-iot-and-cycling-for-low-cost-infrastructure-monitoring/), or this [hackathon](https://hackaday.com/2015/08/17/hackaday-prize-entry-project-dekoboko-凸凹-maps-bumpy-roads-on-a-bike/)).

All these projects use GPS trajectories and sensor data to map shortcomings in the bike infrastructure onto the streets, e.g., low speed, dangerous situations, low fluency, avoided routes, or bumpiness. A different approach looks at high-demand origin-destination connections to optimize the bike infrastructure for those routes. For example, the [Propensity to Cycle Tool](https://www.pct.bike/m/?r=london) is a web interface that uses origin-destination commuting data to visualize highly frequented routes and the share of cyclists and routes where cycling has the greatest potential to grow.

Even though there are many citizen science and research projects that deal with the question of identifying shortcomings in bicycle infrastructure, little is known about how such information is actually used by city planners in public administrations. It would be interesting to obtain more insights into actual planning processes and whether such data sources are considered or needed. Of course, next to planning practices, quantifying shortcomings in the bicycle infrastructure is a valuable source to support political arguments.

Determining accurate counts of bicycle volumes is necessary for city planners, e.g., to receive fundings based on reports of bicycle use and safety improvements ([Nordback et al., 2013](https://journals.sagepub.com/doi/abs/10.3141/2339-10)). In Germany, such counts can be used for a rededication of a street to a bicycle street. Cities usually use stationary counters, though they are expensive. The [Open Traffic Count](https://www.technologiestiftung-berlin.de/en/projects/open-traffic-count/) is a project that implements a video-based approach for a cheaper and more privacy-sensitive alternative, using the [OpenDataCam](https://opendata.cam/).

Also, for a reliable and representative indication of traffic volumes counters need to be placed mindfully. [This project](https://findingspress.org/article/10828-where-to-put-bike-counters-stratifying-bicycling-patterns-in-the-city-using-crowdsourced-data) uses GPS trajectory data from Strava to identify good locations for such counters.

### Public transport offer

As there are not unlimited resources for the operation of public transport, they need to be used smartly. Public transport offers, such as routes of lines, frequencies, and service times, can be optimized by considering demand data.

Public transport companies, therefore, make use of traffic models (see above) as well as analyses of mobile phone data, or automatic passenger counting (e.g., with sensors by providers like [Dilax](https://www.dilax.com/en/products/automatic-passenger-counting) or [Iris](https://www.iris-sensing.com/)). Routing queries to public transport applications also give insights into demands and can be used to evaluate current public transport offers (e.g., providers like [Hacon](https://www.hacon.de/en/solutions/mobility-analysis/?L=5'A%3D0) offer such services). Researchers also investigate how machine learning models can be used to predict public transport demand for special events and evaluate system performance ([Santanam et al., 2021](https://arxiv.org/pdf/2106.05359.pdf)). Others research demand-based real-time adjustments for autonomous vehicles ([Cao et al., 2019](https://www.researchgate.net/profile/Zhichao-Cao/publication/336915749_Real-time_schedule_adjustments_for_autonomous_public_transport_vehicles/links/5dba840d299bf1a47b0273e3/Real-time-schedule-adjustments-for-autonomous-public-transport-vehicles.pdf)).

### Shared mobility

Public transport and private vehicles are increasingly complemented by shared mobility offers (bike-, e-scooter, moped, or car-sharing). Mobility data can help with the [demand-based positioning of docking stations](https://ideas.repec.org/a/eee/transa/v82y2015icp216-227.html) and [positioning of parking spots](https://www.sciencedirect.com/science/article/abs/pii/S1361920921003795), or the [(re-)distribution of vehicles based on demands](https://www.researchgate.net/publication/344503514_Effective_Heuristics_for_Distributing_Vehicles_in_Free-floating_Micromobility_Systems).

Even though a demand-based approach can help to grow these services, a city should be careful to not only base its strategy on current demand but, e.g., also complement the public transport offer in poorly connected regions. Also, demand data only reflects the status quo and might change if other factors, e.g. better infrastructure, change. Therefore, fine-granular demand data might be important for profit-oriented mobility service providers but should be used carefully for strategic purposes by city planners.

City administrations gather information about the use of shared micro-mobility usage behavior and monitor its development over time. [The mobility data specification (MDS)](https://www.openmobilityfoundation.org/about-mds/) has been established as a standard for micro-mobility that more and more mobility service providers use to share data. The specification includes start and end locations of rentals but also goes beyond human mobility data (e.g., charging status of vehicles or definition of prohibited parking zones. For a use case overview see [this article](https://www.openmobilityfoundation.org/tag/mds-use-cases/) and this MDS [use case gallery](https://airtable.com/shrPf4QvORkjZmHIs/tblzFfU6fxQm5Sdhm)). Service providers such as [Vianova](https://de.vianova.io/), [Populus](https://www.populus.ai/), or [Remix](https://www.remix.com/) collect this data from the providers and offer tools to cities that can access the combined data of multiple providers for monitoring, analytical, and managing purposes.

_Dieser Text erschien zuerst auf [Alexandras privatem Blog](https://alexandrakapp.blog/)._
