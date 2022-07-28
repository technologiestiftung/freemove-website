---
layout: layouts/blog.liquid
title: "What is Human Mobility Data good for? (Part 2)"
subtitle: "Routing and Traffic Management"
author: "Alexandra Kapp (HTW)"
date: 2022-02-02
tags: 
    - xyz
    - sdfdg
    - sdfsdgd
---

This is the second part of the series on use cases based on human mobility data. After part 1 about urban and traffic planning, we will have a closer look at routing and traffic management in this post. Unlike the mid- to long-term planning use cases in part 1, routing and traffic management applications optimize the navigation within the existing infrastructure.

### Bicycle routing (speed & preferred routes)

The shortest route is not necessarily the fastest route for a bicycle. Bumby roads, cobblestone, or pedestrians can slow down cyclists. Data on the speed of actual bicycle trips can help to determine the fastest routes. This information can then be used for bicycle routing.

Also, cyclists do not necessarily want to take the fastest route but might prefer safer ones, i.e., streets with a seperate bike lane to keep distance from car traffic, or greener routes going through a park. Cyclist trajectories can be used to infer (less) preferred routes which in turn can again be used for routing purposes.

[Cyclers](https://cyclers.tech/) is an example of a bicycle routing app that claims to use such data.

### Public transport routing (passenger load forecast)

Especially during times of the COVID-19 pandemic people try to avoid full public transport vehicles. Historic passenger load data is used by public transport companies and routing applications to estimate future passenger load and display this information alongside routing suggestions so that passengers can choose routes where busses and subways aren’t too crowded. Among many others, for example, the public transport companies [Deutsche Bahn](https://www.bahn.de/service/buchung/auslastungsinformation), [BVG](https://go.bvg.de/auslastungsanzeige), or [RMV](https://www.rmv.de/c/de/informationen-zum-rmv/der-rmv/rmv-aktuell/auslastungsprognose) provide such information.

### Car routing (traffic jams)

Traffic jams – one of the biggest pains for car drivers. Thus navigation systems compete for the most accurate congestion detection and avoidance. Modern applications such as [Google Maps](https://support.google.com/maps/answer/3092439?hl=en&co=GENIE.Platform%3DiOS#zippy=%2Ctraffic), [TomTom](https://www.tomtom.com/de_de/navigation/), [HERE](https://developer.here.com/documentation/traffic/dev_guide/topics/what-is.html), or [INRIX](https://inrix.com/press-releases/inrix-launches-xd-traffic/) usually rely on data collected from sensors in vehicles or smartphones to identify traffic jams. See [this article](https://www.pcwelt.de/ratgeber/Stau-Warnung-Google-Maps-Tomtom-Verkehrslage-Echtzeitverkehrsinformationen-373385.html) for a detailed evaluation of different providers and their data sources. The obtained traffic information can then be displayed for each road segment and, more importantly, be incorporated into routing algorithms to navigate the driver along the fastest route.

### Car parking

The second biggest pain for car drivers: finding a parking spot. A variety of different companies (e.g., [INRIX](https://inrix.com/blog/ultrasonic-sensor-parking-availability-technology/), [Bosch](https://www.bosch.com/stories/artificial-intelligence-community-based-parking/), or [Bliq](https://medium.com/bliq/denso-and-bliq-team-up-to-shape-the-future-of-city-parking-f214e25fd367)) aim to use sensors in cars and smartphones placed as dashcams on the windshield, to detect free parking spots. That information is then provided to car drivers searching for parking opportunities. Even though the movement of the car (and thereby the driver) that collects this data is not of interest here, the information is still (potentially) contained within the data.

### Smart traffic management system

Smart traffic management systems adjust traffic lights and manage traffic flows according to real-time traffic data (e.g., acquired through sensors) to optimize traffic (e.g., [Ritzwan et al., 2017](https://ieeexplore.ieee.org/abstract/document/7873660), [Iqbal et al., 2018](https://ieeexplore.ieee.org/abstract/document/8323770), or [Saikar et al. 2017](https://ieeexplore.ieee.org/abstract/document/7977008)).

### Electric car charging recommendation

As charging opportunities for electric cars are often sparse and take more time than conventional refueling there is a need for intelligent charging. Some approaches make use of historic mobility data – for large fleets ([Wang et al. 2020](https://dl.acm.org/doi/pdf/10.1145/3381003)) as well as for individuals ([Zhang et al., 2021](https://arxiv.org/pdf/2102.07359.pdf)).

### Ridesharing

In most cars, there is only one passenger. Carpooling could be an effective measure to reduce the number of cars. To simplify the tedious process of inserting every single daily trip into an app, there are efforts to predict future trips based on historic behavior for automatic matching of drivers and passengers (e.g., [Liu et al., 2013](https://journals.sagepub.com/doi/full/10.1155/2013/615282), [Li et al., 2015](https://ieeexplore.ieee.org/document/7355390), or [Roor et al., 2018](https://hal.archives-ouvertes.fr/hal-01693691/document)).

_Dieser Text erschien zuerst auf [Alexandras privatem Blog](https://alexandrakapp.blog/)._
