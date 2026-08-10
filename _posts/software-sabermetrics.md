---
title: "Software Sabermetrics"
excerpt: ""
date: "2025-12-12T15:06:07.322Z"
draft: true
---

“Sabermetrics”, named after the Society for American Baseball Research (SABR) were brought to mainstream attention in 1997 by Billy Beane, general manager of the Oakland Athletics. It was baseball’s huge sample size & nature as a series of discrete, repeatable events that lends itself to this kind of analysis. The metric I always end up thinking about is “wins above replacement” (WAR). This is an attempt to quantify how many more wins a player is worth than a "replacement-level" player, expressed in “wins per season” A replacement-level player is defined as a player who is readily available to a team for a minimal cost, such as a top minor league player or a player available on the free-agent market.

But how much of sabermetrics can we apply to modern software development? It’s a commonly accepted axiom that attempting to measure individual performance on a software development team is a fool’s errand [citation needed]. But that is also true of baseball where the majority of “discrete events” involve another player, often from an opposing team.

Being able to measure impact isn’t just something you should be able to do as a competent manager; you owe that opportunity for growth to every member of your team. Expectations should be clearly communicated & each developer should be aware of how they are measuring up.

Rowing is a sport that is as much about team coordination as individual strength & fitness, which might sound familiar. I don’t know much abut rowing but I had a great CTO who was really into rowing. He described how his rowing coach would measure individual impact on the overall speed of the boat. During practice the coach would replace one person at a time with his bagged lunch before making them do a pass. He could tell which members were having the most impact by how much slower the boat would go without them. The worst case scenario would be if the boat went faster without you.

Thinking about that "replacement level player" for a second though; the costs of swapping out a 3rd baseman for another 3rd baseman are relatively minimal. Really really big organizations might have some developers waiting for a project to work on, but for everyone else hiring is extremely time consuming & expensive, not to mention the months it takes for someone to learn the tech stack and the product well enough to be truly productive.

But here's where the baseball analogy gets interesting: sabermetrics treats plays as discrete events, but that's not really true either. A pitcher facing a power hitter with the bases loaded in the 9th inning isn't just executing a generic "pitch" - they're managing risk, reading the batter's psychology, and deciding whether to throw their best pitch or their most unpredictable one. The decision tree is complex and deeply contextual. Similarly, a developer reviewing a pull request isn't performing a discrete "code review" action. They're weighing technical debt against shipping speed, considering team morale, evaluating whether this pattern will spread, and deciding if this is worth spending political capital.

The difference is that baseball's structure makes the "discrete events" abstraction sustainable. Innings end. At-bats reset. A 95mph fastball is still a 95mph fastball regardless of context. And crucially, the sample size is enormous - over a 162-game season, contextual variations tend to average out into meaningful patterns.

Software development has none of these luxuries. Technical decisions don't reset; they compound indefinitely. Context isn't statistical noise to be averaged out; it's often the entire signal. And our sample sizes are tiny. How many times does a developer "ship a major feature" in a year? How do you compare someone who prevented a catastrophic architectural mistake in a single meeting to someone who closed 50 tickets?

Yet here's the thing: no one treats WAR as truth. It's a useful abstraction, a framework for having structured conversations about trades and salaries. It's baseball's version of what sprints and story points are supposed to be for us - not a measurement of reality, but a tool for making decisions under uncertainty.

So where does this leave us with DORA metrics, cycle time, velocity, and all the other abstractions we've borrowed or invented for software development? They're flawed. Deeply flawed. Velocity can be gamed. Cycle time doesn't capture whether you built the right thing. DORA metrics can push teams toward frequent, low-risk deploys while avoiding the gnarly infrastructure work that actually needs doing.

But here's what I've learned: flawed abstractions are better than no abstractions at all. A baseball GM who ignores sabermetrics because WAR isn't perfect will make worse decisions than one who uses it as one input among many. An engineering leader who refuses to track anything because "you can't measure developer productivity" will make worse decisions than one who thoughtfully uses imperfect metrics.

The key is being explicit about what you're measuring and why. Clear is kind. When your team understands that you're tracking deployment frequency not because you think faster is always better, but because you want to spot when the deploy process becomes painful enough that people avoid it - that's useful. When they know cycle time is a proxy for "are we getting stuck?" rather than a performance review metric - that's actionable.

This is where engineering leadership earns its salary: not in finding the perfect metric, but in choosing useful abstractions and getting the team bought in. Involve people in deciding what to measure. Explain the reasoning. Show them the data. Let them poke holes in it. The rowing coach could use his bag-of-lunch test because everyone on that boat agreed they were optimizing for speed. What's your team optimizing for? Do they know? Do they agree?

In baseball, no one pretends that WAR captures the full richness of a player’s value. It can’t tell you who’s a clubhouse leader, who makes everyone else better, or who kept a rookie from spiraling after a bad week. But teams use WAR anyway because it gives them a shared language for understanding impact — a way to reason under uncertainty, not a universal truth.

Engineering metrics work the same way. DORA, cycle time, velocity — none of them will ever tell you who prevented a bad architectural decision, who quietly mentors half the juniors, or who consistently asks the question that saves the team three weeks. But if they help you spot bottlenecks, celebrate progress, or notice when things start to drift, then they’re doing their job.

The goal isn’t to find the perfect metric. It’s to choose the right imperfect ones, be honest about their limitations, and use them to spark clearer conversations, not shut them down. If your team understands what you’re measuring — and just as importantly, what you’re not — you’ll make better decisions together.

**Measure what matters, admit what doesn’t, and make sure everyone understands the difference.**
