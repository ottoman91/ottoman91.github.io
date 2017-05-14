---
layout: single 
author_profile: true
share: true 
comments: true
read_time: true
title: Data Visualisation Research — Impact of Democracy on Quality of Life Metrics
---  

*This post was originally published on [Medium](https://medium.com/@ottoman91/data-visualisation-research-impact-of-democracy-on-quality-of-life-metrics-e506397a7b8f)*

As a part of the Data Management and Visualisation course on Coursera, I shall be working on the following hypothesis and trying to test it from the GapMinder Dataset:

> What effect does the “level of democracy” in a country have on the “quality of life” of the country’s citizens?

In short, I want to test a simple idea related to how effective democracy really is in improving the lives of the citizen’s of a country. A major argument made by proponents of capitalism and Western democracy is that empowering people to make a more informed decision in the running of their country ultimately leads to improvement in all streams of life. While on surface, this argument has a lot of substance, it is important to look beyond the philosophical arguments and measure the metrics.

For this assignment, I shall be testing the Gapminder Dataset. Basically, I would be measuring the correlation between the “polityscore” variable in the dataset against the following variables

* incomeperperson(2010 GDP per capita in constant US$ 2000) 

* alconconsumption(2008 alcohol consumption per adult) 

* breastcancerper100TH(breast cancer new cases per 10,000)

* co2emissions(2006 cumulative co2 emissions)

* femaleemployrate(2006 female employment rate) 

* employrate(2007 total emloyees over 15+) 

* HIVrate(2009 estimated HIV prevalence) 

* lifeexpectancy(2011 life expectancy at birth)

* suicideper100TH(suicide rate adjusted over 10,000 people)

* urbanrate(Urban population)

The polityscore is a measurement form -10 to +10, and is a summary measurement of a country’s democratic nature.

A substantial amount of research work has been done to find the relationship between “democratic” a country is and how well it is progressing. A [paper](http://www.nber.org/papers/w4909.pdf), “Democracy and Growth” by Robert J. Barro of the National Bureau of Economic Research (NBER) analysed that the favourable metrics of growth initially affected by democracy are the rule of law, free markets, small government consumption, and high human capital. However, once these baseline metrics have been achieved and the initial level of real per-capita GDP are held constant, the overall effect of democracy on growth is weakly negative. Thus, this study shows that the overall effect of democracy on growth is weakly non linear, and democracy has a greater effect on growth at the lower metrics, but once a country has achieved relatively modest levels of growth, democracy does not lead to a greater amount of improvement in the standard of living of the country.

Another [paper](http://www.sciencedirect.com/science/article/pii/S0014292100000933), “How Democracy Affects Growth” by Tavares and Wacziarg published in the European Economic Review shows that democracy fosters growth by improving the accumulation of human capital, and , less robustly, by reducing income inequality. The paper again states that once the lives of the poor have been moderately improved, further improvements in how democratic a country is have limited effects on the standard of living in the country.

Based on the literature review as well as my own knowledge in the subject, I would expect that an improvement in the polityscore of different countries would result in an improvement against all the measurements. However, there would be small clusters of countries where inspite of a low polityscore, some of the metrics, such as life expectancy and the urban population, would be high. A reason for this is that a lot of autocratic countries, especially in the Middle East, are characterised by good healthcare and other basic facilities for their people.

Nevertheless, it would be interesting to see how the hypothesis would fare in the face of data from the Gapminder dataset.


