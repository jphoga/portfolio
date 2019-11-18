---
title: Market Place for Super Cars 
date: "2017-07-28T22:40:32.169Z"
description: Rent your own high class car online
---

Here's to all the people who want to look rich for one day: Rent your high class car and live your dream! 

At least until your money runs out... Super Cars was our first project during the Le Wagon web-developer bootcamp. In a total of 4-5 days we, my three team mates and me, did our first team work after a long (and super fun) seven weeks of solo-coding. There were two goals to this exercise:

**1.  Business goal: Create a marketplace web app (anything like Airbnb) and pitch it to an audience**

This is to make yourself comfortable with coding in a team and to work on your presentation in a really short amount of time (final pitch I see you coming!).

**2.  Coding goal: Combine all the things we learned to create a working prototype from scratch** 

Use design tools, front-end (mainly **CSS, HTML, JavaScript**) and back-end (**SQL and Ruby on Rails**), to create your first fully working web app which you can put on our resume (well, at least if you want someone to see it). 

### The stages of developing a product  

A product sprint until the final pitch has the following steps:

1. Decide on an idea and create a business plan
2. Create a mock-up to determine all functions and the design
3. Create the database schema and the routings
4. Start with back-end and front-end coding
5. Test your prototype back and forth and forth and back again
6. Prepare your pitch 
7. Pitch!

You need an idea to create a working prototype (sounds logical). So, after long discussions and many mugs of coffee, we settled for a car rental site where people can rent & rent out their high class cars (we had also island and airplane rental shops in mind 
<i class="em em-desert_island" aria-role="presentation" aria-label=""></i>
<i class="em em-airplane" aria-role="presentation" aria-label="AIRPLANE"></i>)

The idea (=business model) leads to a first design without coding yet. We used [Figma](https://www.figma.com) to create an actually clickable Powerpoint like version of our app. This stage (and tool) is especially useful when pitching to an audience (e.g. your client) in order to make sure you included all the necessary functions and to propose a nice design. By the way, you can actually use Figma to generate all the front-end code out of your mock-up app but I never tried if it really works (it would take a lot of the coding fun away!).

OK, the design is fixed - what's next? The **database** and **routing design** of course. For people who prefer designing websites and Powerpoints by using shapes, colors and fonts, this is probably the hardest part. Since this web app will be a CRUD (**C**reate, **R**ead, **U**pdate, **D**etele) app, you need to store a lot of things into a database to be able to recall them later. This can be things like car models, pictures (or more specifically their addresses in the web), car prices, user login data and much more.

Designing a database schema is pretty abstract and must be done well in order to link all data that belongs together. Later changes are possible but a nuisance especially in production, so plan and design well!

**Routes** are another topic to plan before the actual coding starts. A route is the address to a page or sub-page of your app which could include the list of all cars, the detailed page of a specific car before booking or the booking process of that car. Ruby on Rails helps you with this process by adding id's of e.g. your car automatically to the route of the specific detailed page, so its not that bad (still sometime deeply confusing). 

### The coding starts

Now we are ready to code, right? Yes, but please make sure you use a project management tool (Excel is fine too!) to keep track of each members tasks. Divide your team into front-end and back-end developers (and a team lead if possible) and start coding! You only have two and a half days left till your pitch. 

To make it quick - we had one front-end developer, one back-end developer, a biz team lead and a developer team-lead (that was me). I had the pleasure of merging all git pull requests into our master. Not always easy and I can fully understand dev-leads who demand to do the testing and merging locally first.

This is how our landing page looks:

![Landing page](./supercar_index.jpg)

You can search for a location and time and get a list of available cars ready to book. Of course this is just a prototype so no real cars in there. That also meant we had to add **seeds** to the database, meaning pictures and prices and stupid comments (I think Chuck Norris wrote some car reviews) and all other necessary data to show a working page. The seeds need to be realistic or otherwise you will not convince investors to give you money in building the real deal (better no Chuck Norris's!).

But the pictures also have to look nice so we chose a lot of probably too expensive cars which might never be listed (or even exist...) in the real world: 

![super car list](./supercarslist.jpg)

Don't forget to test your prototype before the pitch and **DO NOT touch the code on the day of the pitch!** About one hour before our pitch we noticed that the cars are coming out in the wrong order. Not that big of a problem but it disrupted the story of our pitch somehow. Luckily it was an easy fix but you really start getting nervous touching code which will be presented to a hundred people in under one hour...

You can check out our [Super Cars](https://supercarslewagon.herokuapp.com) protoype here - have a look!












