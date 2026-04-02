---
title: "Mandatory PR Approvals Are an Anti-Pattern"
excerpt: ""
date: "2026-04-02T19:24:07.322Z"
draft: true
---

This post is about something that I think most engineering teams have gotten wrong, or at least haven't questioned in a long time: mandatory pull request approvals. It's not that I don't like code reviews or pull requests; I think PRs are a great mechanism for running automated checks, providing a paper trail, & giving your CI suite a last chance to catch something before code hits main. The problem is specifically the practice of requiring a human to sign off on every merge before it can land, particularly on an internal codebase maintained by a dedicated team. This is a practice that I believe slows teams down far more than it protects them & it's one that most teams adopted without ever really evaluating whether it makes them better.

I want to get the caveats out of the way early. There are cases where mandatory approvals make complete sense: open source projects where you are reviewing code from people you may have never met, contributions from outside your team on a shared codebase, & regulated industries where audit requirements demand it. If you are in one of those situations, this post isn't aimed at you. This is aimed at a team of, say, five developers who work on the same codebase every day & know it inside out. Every one of those developers should have the autonomy to decide whether a given changeset needs another pair of eyes or not.

## How We Got Here

Pull requests weren't always the default way to get code reviewed. GitHub [introduced them in 2008](https://rdnlsmith.com/posts/2023/004/pull-request-origins/) as a lightweight way to manage contributions to open source projects; the original implementation was basically a notification system. Inline commenting on diffs came in 2011, & the merge button arrived shortly after that. Before GitHub popularized this workflow, code review looked different. The Linux kernel used email patches. Google built [Gerrit](https://graphite.com/guides/gerrits-approach-to-code-review) for patch-based review. Many teams I worked with early in my career did code reviews at the end of a sprint or before shipping a feature, not as a gate on every individual merge.

PRs won because GitHub's UX was better than the alternatives, not because gating every merge on human approval was a proven best practice. They were designed for open source, where you genuinely need to vet contributions from strangers. Somewhere along the way that open source workflow got cargo-culted into every internal engineering team & nobody stopped to ask whether it still made sense. [Kent Beck](https://en.wikipedia.org/wiki/Continuous_integration) was advocating for continuous integration in the mid-1990s & [Martin Fowler](https://martinfowler.com/articles/branching-patterns.html) has been writing about trunk-based development for decades; the idea that developers should integrate frequently, automate the safety checks, & trust the people doing the work predates the PR-as-approval-gate pattern by a long time.

## The Cost

The [DORA State of DevOps research](https://dora.dev/capabilities/trunk-based-development/) consistently finds that PR pickup & review time are among the most frequent sources of software delivery inefficiency. More approval steps correlate with longer lead times _without_ corresponding improvements in stability; you're going slower & you're not even getting more reliable software for it. This shouldn't be surprising. Every mandatory approval is a point where work stops moving & waits for someone else's attention. Even teams that pride themselves on fast review turnarounds, the "review within 2 hours" norm, are still pulling someone out of deep focus work every time a review comes in. The cost isn't the 15 minutes spent reviewing; it's the 20 minutes it takes the reviewer to get back into whatever they were doing before the notification pinged. Multiply that across every PR, every day, across every developer on the team & it adds up fast.

Then there's the rubber stamp problem. Be honest with yourself: how many of your PR approvals are a genuine deep read of the code versus a quick scroll & a thumbs up? If a change is trivial, a mandatory review is theater. All that time spent on perfunctory approvals could instead be redirected toward things that actually catch bugs: better unit tests, end-to-end tests, circuit breakers, & observability after deployments.

There is also a trust question here that I think is worth addressing directly. If you have a developer on your team that you don't trust to merge code they believe is safe, the issue isn't the process. It's a conversation about whether that person should be making commits to the codebase in the first place. Mandatory approvals paper over a people problem with a workflow problem & that's never a good trade.

> [!question] What about spreading context across the team?
> This is probably the strongest argument in favor of mandatory reviews & I don't want to dismiss it. But there are better ways to share context: changelogs, release reviews, team demos, or even just a message in your team channel saying "heads up, I refactored the auth module." Context sharing shouldn't be a byproduct of a bottleneck.

## What to Do Instead

The alternative isn't anarchy, it's trusting your team & investing in better safeguards. Give every contributor the autonomy to decide when a change needs review. Some changes are complex, touch shared infrastructure, or introduce a new pattern; those deserve a second pair of eyes & a good developer knows it. Other changes are a config tweak or a copy fix & requiring a review on those is pure overhead.

Take the engineering hours you're currently spending on mandatory reviews & put them into the things that actually prevent production incidents: comprehensive test coverage, feature flags, automated rollbacks, circuit breakers, & robust observability. These catch bugs that code review never would have found anyway; things like race conditions under load, configuration drift, & integration failures. I am also not a fan of manual QA for similar reasons, but that's a separate post.

## The AI Inflection Point

This argument was already strong before AI code generation tools entered the picture, but now it's urgent. With tools like Claude Code, Copilot, & Cursor the bottleneck in software development has shifted dramatically. Writing code is faster than ever; reviewing it is now where the time goes. Even with AI tools speeding up parts of the review process, the cognitive load of reviewing AI-generated code is actually _higher_ than reviewing human-written code. AI produces plausible output that isn't always coherent across a complex change, creating what Pydantic's team described as ["a peculiar new kind of fatigue from the burden of supervision."](https://pydantic.dev/articles/the-human-in-the-loop-is-tired)

The developer piloting an AI tool is already reviewing the code as it's being generated. They're validating intent, checking outputs, & steering the result. Requiring a second mandatory review on top of that isn't adding a safety layer, it's adding friction to a process where the author has already done the verification work. If your development process can't keep pace with how code is being written today, the process is what needs to change.

## The Bottom Line

The question was never "should we review code?" Of course we should. The question is "should every merge require a human gate?" For a team that works together daily, trusts each other, & has invested in automated safeguards, the answer is no. Trust your people, invest in automation, & stop making your team ask for permission to ship.
