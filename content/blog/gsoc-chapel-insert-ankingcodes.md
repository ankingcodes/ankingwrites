---
path: gsoc_blog_1
date: 2020-06-10T04:25:32.767Z
title: 'GSoC[chapel].insert (@ankingcodes)'
description: A brief recap of pre-GSoC work and Community Bonding Period
---
## In real open source, you have the right to control your own destiny

*by Linus Torvalds*

#### 21 January 2020

 I had already won NWOC'19 and one of my closest mentors there texted me :
_"You're very creative and strong in Javascript. Go for an org with full-stack web development projects, and you'll definitely get selected in GSoC"_. 
I had two choices for GSoC - go for a project I am comfortable to work with(the *easy* choice) or go for a project which would challenge me and am more likely to fail(the *hard* choice). 

*I am glad that I chose the latter.* 

I had opened the Chapel repository 5 times earlier and was intimidated by the huge codebase. I joined the gitter channels and enjoyed reading the long discussions amongst the community members, although I couldn't understand most of the things. Reading through the "Getting started" guide, I started to make a simple project using Mason. I typed `mkdir new`, `cd new` and then `mason init`, out of habit, being a javascript developer and got an error. And there it was, my first idea to contribute to Chapel, a `mason init` command to initialise a Mason project.

#### 26 February 2020
I worked with [Ben Albrecht](https://www.github.com/ben-albrecht) and finally got `mason init` merged ! Ben had been very patient and helpful to me and that's one of the primary reasons I was motivated to work on Chapel everyday after a tiring college day. I made multiple new feature requests, and had also found a long list of pending tasks for Mason. Today, again, I had two choices for GSoC - go for a project from the ideas list of Chapel, or present my own project idea and risk getting selected in GSoC. 

*Once again I'm glad I chose the latter*. 

#### 16 March - 31 March 2020 (Application period)
I made multiple PRs on small to intermediate tasks and created new issues I found on the way. I had also presented a doc with my project idea and started discussing it with Ben. Ben had also invited [Sam Partee](https://www.github.com/spartee) (author of Mason), to take a look at my idea. Both of them were equally excited about the idea and encouraged me to go forward with the proposal. I was extremely happy with my proposal because I had no clue about majority of the tasks I had included in it. I knew I am going to learn a lot in the summer. 

#### 4 May, 2020 - 1 June, 2020 (Community Bonding Period)
My [project](https://summerofcode.withgoogle.com/projects/#6454194829000704) "Improve Mason Package Manager" mentored by Ben Albrecht, Sam Partee and Krishna Kumar Dey was selected in GSOC !! Being from a small university where students pay for an internship certificate, and have absolutely no ecosystem to code or to be a good engineer, I felt it was time things change. I let my closest friends know about my achievement and they couldn't believe it. 

Mostly, students get a head start on their project during the community bonding period. But I spent the month, taking up issues outside my proposal. One of the major issues was "Improving `mason external --setup`". This command sets up the Spack package repository, to allow users to use dependencies from Spack in their project. However, installing it took an extremely long time, about 15-20 minutes. 

After some design discussions with Ben, and a PR, Spack now installs within 9-10 seconds which was a very shocking outcome for me. The trick was that we did a "shallow clone" of the Spack repository, which would get only the latest revision of the Spack repository stripping off the entire history of commits. 

Also, I got to attend CHUIW 2020, which was fortunately online due to Covid-19 situation. Surprisingly, my work was also recognized by [Brad Chamberlain](https://www.github.com/bradcray)(core designer, creator of Chapel) during his introductory talk.

## Conclusion
I am grateful to have been given this opportunity to work with Chapel in Google Summer of Code 2020. I congratulate my fellow GSoCers [Rahul](https://www.github.com/rahulghangas), [Aniket](https://www.github.com/Aniket21mathur) and [Yujia](https://www.github.com/Rapiz1) for getting selected, and wish them good luck to deliver the tasks proposed by them successfully. Most importantly, I hope everyone grow their skills during the summer, and continue to contribute to Chapel post GSoC. 
 
