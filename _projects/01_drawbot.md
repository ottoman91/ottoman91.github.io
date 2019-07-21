---
layout: single
title: "Drawbot"
excerpt: "A Deep Learning algorithm that turns bad sketches into (almost) drop-dead masterpieces"
header:
  teaser: drawbot/drawbot_teaser.png
sidebar:
  - title: "Team Members"
    text: "Jimmie Harris,Tayo Falase, Usman Khaliq"
author_profile: true 
comments: true
read_time: true
--- 

> How might we design and develop a deep learning application that takes as its input a rough(or badly) made sketch and transforms it into a drop-dead masterpiece?  

## Background 

I worked on this project as part of the Deep Learning course taught at Stanford by Andrew Ng.
In our team, as designers, two of us have often struggled to bring our ideas
to life in an aesthetically pleasing manner, while all three of us would dearly 
love to have a tool that makes it easy for us to churn out beautiful sketches. 

The input to our algorithm is a bad sketch of a face. We then use a MUNIT network 
to output a much cleaner and aesthetically accurate image of a face. We found 
that while the model was able to learn large parameters (face shape and size), 
it was unable to learn finer details (nose shape, smiling/frowning). 
We believe that with better data, this model could be used to create more accurate
sketches.

## Project Poster 

<figure>
<a href="/pdfs/DrawBot_Poster.pdf" target="_blank">
  <img src="/images/drawbot/drawbot_poster.jpg" alt="this is a placeholder image">
</a>
</figure>    

## Project Report 

[Click here](/pdfs/draw_bot_report.pdf){:target="_blank"} to access the full report for the project 
