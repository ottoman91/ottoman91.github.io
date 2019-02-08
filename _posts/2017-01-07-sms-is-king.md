---
layout: single
title: "SMS is still King in low tech environments"
author_profile: true
read_time: true
---  


*In this piece,I talk about the science and emotion behind SMS Firebolt, 
an SMS gateway built to democratize information sharing for the poor. I worked
on this project during my time at [iDT Labs](https://idtlabs.xyz)* 

<figure>
  <img src="/images/sms1.jpeg" alt="this is a placeholder image">
  <figcaption>
      Mobile network coverage still outstrips mobile internet coverage in large 
      rural areas of the region. This, coupled with the low cost of sending SMS, 
      makes it a very attractive medium for building up tech based solutions 
      that aim to solve specific issues in the socio-economic space. 
      [Reference image by Ben Lyon]
  </figcaption>
</figure>

## 2G Still the Dominant Technology in West Africa 
Despite the upward trend in smartphone penetration in Sub Saharan Africa 
(expected to reach 80 percent by 2022) in the mostly fragile sub-regional 
block of the Economic Community of West African States (ECOWAS), 2G is still 
the dominant technology, accounting for 90 percent of total mobile connections.

With spectrum availability being a challenge in the mass rolling out of 3G and 
4G services, it is important to revisit the inherent assumptions that are 
currently prevalent in the technology for development space of positioning 
an increasing number of products solely on the smartphone medium. 

## Suitability to Local Contexts 

Quite often, what gets lost amidst the discussions of using mobile phones for 
augmenting the delivery of essential services is not on the potential of the 
technology itself, but rather, on how applicable it would be in the local context.

Given the deplorable state of education in this region, it would be a stretch 
to claim that the standard of digital literacy holds any better. The great 
chunk of people at the base of the pyramid (BOP) are generally not comfortable 
with using applications on smartphones, which limits the potential of these 
applications to deliver a critical service to the end users. 

## Poor Infrastructure to Support Smartphones 

Although smartphones are becoming cheaper by the day due to the influx of 
copycat Android devices, it should be noted that most of these devices are 
ill-equipped to smoothly run anything other than the most basic smartphone 
applications, such as a web browser or an instant messaging service. Therefore, 
this calls into question the assumption that the cheaper smartphone devices 
can usher a mass adoption of mobile based products and services.

Mobile data is generally expensive for the average end users,and is available 
under a pay-as-you-go scheme, thereby forcing the end users to mold their 
internet consumption behavior . This greatly limits the potential of smartphone
 applications to be scaled amongst the end users.

It is also important to understand that in rural areas, people often share cell
 phones, with the younger and more literate members of the community assisting 
 the older community members in everything from making or receiving a call to 
 using mobile money. Generally, smartphone app design is skewed in such a way 
 that the user experience assumes a personalized, one-to-one relationship 
 between a user and his device. Mobile app developers and designers working in 
 the development sector need to appreciate this fact while designing applications 
 that provide a private service to the end users, such as financial credit, on a 
 device which is also actively used by other people. 

## The Evergreen Benefits of Plain Text SMS 
Mobile network coverage still outstrips mobile internet coverage in large 
rural areas of the region. This, coupled with the low cost of sending SMS, 
makes it a very attractive medium for building up tech based solutions that 
aim to solve specific issues in the socio-economic space, since there is a 
high chance that the message is received by the intended recipient at a cost 
that is still manageable.

## The Inherent Challenges with Building Novel SMS Products and Services in the Region
In spite of the advantages that SMS has, building products and services on top 
of the medium is still a challenge, especially for non-tech savvy organizations 
and individuals. These challenges stem from a number of structural realities 
that exist in the SMS ecosystem, which can be summarized as follows: 

* There is a lack of easy to consume application programming interfaces (APIs) 
in the ecosystem. In laymen terms, APIs are boilerplate codes that allow for 
using the functionality of software systems without having to understand their 
underlying architecture in great detail. The major mobile network operators (MNOs) 
in Sub Saharan Africa usually do not have well documented and publicly available 
APIs that can be used by developers to build up SMS based services . As a result, 
it is difficult for small players and new entrants to create novel ways of 
delivering essential services via the SMS medium. 

* The general tech skill of individuals in Sub Saharan Africa, in particular 
around building products that perform well in poor connectivity environments 
is low. It is therefore challenging for local players to hire talent which can 
utilize the underlying SMS infrastructure to build new products.  

<figure>
  <img src="/images/sms2.jpeg" alt="this is a placeholder image">
  <figcaption>
      Photo by Ken Banks, kiwanja.net
  </figcaption>
</figure>

## SMS Firebolt : An SMS Gateway Built for Low Tech Environments 
Keeping in consideration the importance that plain text messages still have as 
an effective mode of communication for any product or service in our part of 
the world, coupled with the inherent difficulty that organizations face in 
incorporating SMS into their offerings, we are currently developing SMS Firebolt, 
an SMS gateway that augments some of the challenges around quickly building 
robust and scalable SMS services via the following: 

* By providing a rich set of well documented APIs in a number of popular programming 
languages, such as Java, Python and PHP. These APIs would encourage developers 
to incorporate the gateway into their software products and allow them to send 
SMS alerts to their end customers in various use cases. 

* By providing a pay-as-you-go service via which organizations can instruct 
our team to send SMS alerts to their end customers at specific events. 
SMS Firebolt has been written in the Spring Java framework, and at the backend 
it is powered by the excellent open source Kannel WAP gateway to send messages 
in real time. 

SMS Firebolt has been written in the Spring Java framework, and at the backend 
it is powered by the excellent open source [Kannel](https://www.kannel.org/) 
WAP gateway to send messages in real time.

## How We Envision SMS Firebolt’s Critical Usage in The Tech for Development Space 
We would be incorporating SMS Firebolt in a wide range of both, our existing 
products as well as in a number of services that we are currently developing 
in the financial inclusion space. 

* Eazy Bank, our suite of core banking software that is based on the MifosX 
project, is currently being used by a number of micro finance organizations 
(MFIs) in Sierra Leone and Uganda to assist them in streamlining their back 
office operations. By linking it with SMS Firebolt, we would enable MFIs to 
send regular alerts directly on the mobile phones of their end users, most of 
whom exclusively use feature phones. We hope that making crucial information 
more readily accessible to the end users would lead to an uptake in the 
adoption of financial instruments. 

* We are currently in the midst of rolling out the pilot for iCommit, a 
conditional cash savings service that uses mobile money and allows subsistence 
farmers to save money from one harvest season to buy inputs for the next 
growing season. iCommit extensively uses USSD codes and has a plain text 
interface to encourage maximum update amongst the end users. SMS Firebolt 
would be handing the flow of messages between the farmers and the service. 

* Widespread usage of mobile money in the rural areas of Sierra Leone is still 
a massive challenge. To try and solve this, we are currently developing iAgent,
 a peer-to-peer cash in and cash out service that adopts the “sharing economy” 
 model by allowing individuals to act as mobile money agents at their leisure. 
 iAgent would have both, a smartphone based interface and a USSD based plain text 
 interface. The text message based communication flow of the application would 
 be routed through SMS Firebolt. 

## The Critical Takeaway Lesson: Follow the Occam’s Razor in Your Solution 
The tech for development space is filled with horror stories about long delayed
 projects and bloated products that aimed to “change the world”, but often ended 
 up causing some unintended negative externalities. Quite often, technologists 
 working in this space tend to overcomplicate the solution at hand, naively 
 assuming that the power of technology is sufficient to circumvent the structural 
 problems that plague developing and underdeveloped communities.

The reality is that technology alone is never a solution; rather, it needs to 
augment existing communication and delivery channels that are working well. 
Despite its age, plain text messages are still critically important for the 
vast majority of people in the world. So the next time you have the urge to 
brainstorm on yet another “app” that will make the world a better place, pause, 
take a step back, and think on how to incorporate your service in less than 
160 plain text characters.