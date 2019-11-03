---
title: Object Detection on the Edge with Tensorflow
date: "2019-09-06T23:46:37.121Z"
description: "Detecting objects and reading signs while driving on the highway."
---

I always thought that the realms of Deep Learning and Data Science were reserved for PhD students and super smart computer science students calculating complex models on high-end computers. 

Well, for the ongoing research in Deep Learning this is definitely true. But if you use certain freely available tools and methods to apply Deep Learning to real world problems it is actually comparatively easy to get started with and a lot of fun! Google's **Tensorflow** or Facebooks **Pytorch** are pretty handy and well build frameworks to start with. Combine this with **Transfer Learning** (train an existing model to recognize additional stuff e.g. Pokemon) your boundaries are just your imagination (of course there are some drawbacks but still it works really well). 

![ML](./machine-learning-piano.jpg)

### A whole new world of detection

The project I got assigned to uses Deep Learning for Object Detection, a method to detect pre-trained objects inside a frame while also telling you where these objects are by applying a bounding box around it. There are other Deep Learning methods like Image Classification (classifying the whole image to a category e.g. "National Park", "Desert" etc.) or Natural Language Processing (detecting words and sentences out of spoken or written language). 

Also Deep Learning is just one part of a broader world of Machine Learning with many more applications. But you have to start somewhere and Object Detection is definitely a really interesting way to deep dive into Deep Learning. 

I won't go too much into the details of my project here (and I can't due to disclosure issues), but in general we built an _edge-server_ (as opposite to a _cloud-server_) connected to a camera (drive-recorder) and a GPS-card to recognize objects on the road while driving in your car. This can be signs on the road like kiloposts or stop signs but also other cars, their number plates or fallen objects blocking the road. The really fun thing is to combine this with an OCR model to actually read what it says on the signs (e.g. "30 miles to Tokyo").

Training the model took me sometime to figure out how Transfer Learning works especially with Tensorflow (different versions in basically all necessary programs from Linux to Pyhton to CUDA drove me mad...!). But then you finally completed the training environment setup (I used an **AWS Ec2 instance** with a nice big GPU attached), you just need soem data and the fun begins (haha, you wish!). 

### Annotation hell

First you need data, which means in our case: lot's of pictures while driving down the highway. My colleague took up the challenge and recorded some parts of his way to his weekend camping trip. I took the video, split it into 24 frames (= jpgs) per second and classified the pictures into different categories by hand (this is of course what we want to let the model do for you in the future, but we need to tell it what it needs to know to do so, respectivly, train it).

I remember it took me nearly half a day to take each picture, draw the annotation box around the object and name the file (this pretty awesome annotation tool came really in handy). Then I finally could train the model and after a few tries (be careful of OpenCV's color handling of RGB!) it finally worked. 

I had a fully functioning model trained in just a few days without much prior knowledge of Machine Learning and Deep Learning. A great feeling!

### Into Robotics

Another cool part of the project was that I got in touch with an awesome framework called ROS (Robotic Operating System). We didn't use any robotic arms or self-drving capacities in our project but nevertheless ROS is sometimes a great option in case you want your application to run autonomously. This meant in our case switch it on and let it run without any user control (there wasn't even a UI to control the app while it ran). 

So because of this project I got into Deep Learning and Robotics at the same time - _how cool is that_? 

I could even visit this years ROS Con (yes, there is a big community around ROS) to meet all kinds of people and learn about projects using ROS in commercial robots and science around the world. In case you still wonder what this ROS is all about: in short, ROS makes it possible to create robotic applications and robots more easily since it is open source. This means you don't have to spend your first million to create a functioning framework for your robot yourself. 

![RosCon](./roscon.png)

Happy Deep Learning and robot development everyone!









