---
title: "Require Approvals is an Anti-Pattern"
excerpt: "Mandatory PR approvals is a well-intentioned but outdated practice that slows down internal teams without meaningfully improving quality."
date: "2026-04-03T19:24:07.322Z"
draft: false
---

I think mandatory PR approvals are a well-intentioned but outdated practice that slows down internal teams without meaningfully improving quality. To be clear, I don't have a problem with code reviews or pull requests; I think PRs are a great mechanism for running automated checks, providing a paper trail, & giving your CI suite a last chance to catch something before code hits main. The problem is specifically requiring a human to sign off on every merge before it can land, particularly on an internal codebase maintained by a dedicated team. In my experience that practice slows teams down far more than it protects them, & most teams adopted it without ever thinking about it.

I want to get the caveats out of the way early. Mandatory approvals make complete sense for open source projects where you are reviewing code from people you may have never met, contributions from outside your team on a shared codebase, & regulated industries where audit requirements demand it. If that's you, this post isn't aimed at you. This is aimed at a team of, say, five developers who work on the same codebase every day & know it inside out. Every one of those developers should have the autonomy to decide whether a given changeset needs another pair of eyes or not. The default should be trust, with escalation to review when the author deems it necessary.

## How We Got Here

Pull requests weren't always the default way to get code reviewed. GitHub [introduced them in 2008](https://rdnlsmith.com/posts/2023/004/pull-request-origins/) as a lightweight way to manage contributions to open source projects; the original implementation was a notification system. Inline commenting on diffs came in 2011, & the merge button arrived shortly after that. Before GitHub popularized this workflow, code review looked different. The Linux kernel used email patches. Google built [Gerrit](https://graphite.com/guides/gerrits-approach-to-code-review) for patch-based review. Many teams I worked with early in my career did code reviews at the end of a sprint or before a release, not as a gate on every individual merge.

PRs won because GitHub's UX was better than the alternatives, not because gating every merge on human approval was a proven best practice. They were designed for open source, where you genuinely need to vet contributions from strangers. Somewhere along the way that open source workflow got cargo-culted into every internal engineering team & nobody stopped to ask whether it still made sense. [Kent Beck](https://en.wikipedia.org/wiki/Continuous_integration) was advocating for continuous integration in the mid-1990s & [Martin Fowler](https://martinfowler.com/articles/branching-patterns.html) has been writing about trunk-based development for decades; the idea that developers should integrate frequently, automate the safety checks, & trust the people doing the work predates the PR-as-approval-gate pattern by a long time. We didn't arrive at mandatory approvals through careful reasoning. We arrived at them through inertia.

## The Cost

The [DORA State of DevOps research](https://dora.dev/capabilities/trunk-based-development/) consistently finds that PR pickup & review time are among the most frequent sources of software delivery inefficiency. More approval steps correlate with longer lead times _without_ corresponding improvements in stability. Which means your team going slower & you're not getting more reliable software for it. Every mandatory approval is a point where work stops & waits for someone else's attention. Even teams that are on top of it, the "review within 2 hours" crowd, are still pulling someone out of deep focus work every time a review comes in. The cost isn't the 15 minutes spent reviewing, it's the 20 minutes it takes the reviewer to get back into whatever they were doing before the notification pinged.

Then there's the rubber stamp problem. I think most people know what I mean here. How many of your PR approvals are a genuine deep read of the code versus a quick scroll & a thumbs up? If a change is trivial, a mandatory review is theater. All that time spent on perfunctory approvals could instead go toward things that catch bugs: better unit tests, end-to-end tests, & observability come to mind. DevOps maturity is a capital investment that amortizes across all future changesets, but manual review is a sunk cost that liquidates the moment a PR is merged.

> [!question] What about junior developers?
> A less experienced developer is probably going to request a review on every one of their PRs, & that's the right call. The difference is that it's _them_ exercising that judgment, not a policy making the decision for them. That's how you build engineers who understand when code needs a second opinion, rather than engineers who assume the process will catch everything for them.

There's also a trust question here that I think is worth addressing directly. If you have a developer on your team that you don't trust to judge whether a changeset would benefit from a second opinion, the issue isn't the process. It's whether that person should be making commits to the codebase at all. Mandatory approvals paper over a people problem with a workflow problem & that's never a good trade. But even if you do trust your developers, the policy itself sends the opposite signal. It tells every person on the team that their judgment isn't sufficient, that no matter how well they understand the codebase or how trivial the change, they need someone else's permission before their work can ship. Over time that erodes exactly the kind of ownership & autonomy you want from a high-performing team.

> [!question] What about spreading context across the team?
> This is probably the strongest argument in favor of mandatory reviews & I don't want to dismiss it. But there are more effective ways to share context: changelogs, release reviews, team demos, or even a message in your team channel saying "heads up, I refactored the auth module." Context sharing shouldn't stand in the way of shipping.

## It'll Be Fine

I get that this sounds scary if your team has always had mandatory approvals. But the data is unambiguous. [An analysis of nearly 3,000 development teams](https://linearb.io/blog/cycle-time) found that the average cycle time is about 7 days, with PRs sitting in the review process for 4 of those 7 days. More than half of your cycle time evaporating while code waits for someone to look at it. Organizations practicing trunk-based development [deploy 4.2 times more frequently](https://dora.dev/guides/dora-metrics/) than teams using gated branching strategies, without a corresponding increase in failure rates. Your application is not going to fall apart because you removed a mandatory approval step.

What happens when you remove the gate is that your developers start shipping faster, context switching less, & spending more of their day in flow state instead of watching a PR queue. [44% of teams](https://dev.to/vitalii_petrenko_dev/the-hidden-cost-of-slow-code-reviews-data-from-8-million-prs-5fei) report slow code reviews as their single biggest delivery bottleneck, & Meta's own research found that slow review times correlated directly with engineer dissatisfaction. This isn't about velocity alone; people are unhappy sitting around waiting for approvals. Fix the process & you fix both problems at once.

The safety net isn't the approval gate. It never was. It's your test suite, your CI pipeline, your observability stack, your feature flags, & your team's judgment about when a change warrants a second opinion. Default to trust, escalate to review.

## The AI Inflection Point

This argument was strong before AI code generation tools showed up, but now it's absurd to ignore. With tools like Claude Code, Copilot, & Cursor the bottleneck in software development has shifted dramatically. On my team, I can have a PR ready for a small change in about 15 minutes with Claude Code, CI checks finish in 12 minutes, & then we wait an average of 3.5 hours for a first review. That's not unusual; [LinearB's analysis of 8.1 million PRs](https://linearb.io/blog/pull-request-pickup-time) found that the median time to first review sits between 7 & 12 hours, with half of all PRs sitting idle for over 50% of their lifespan. Meanwhile developers are [producing nearly twice the code](https://www.greptile.com/state-of-ai-coding-2025) they were a year ago with AI assistance. The generation side of the equation has gotten radically faster; the review side hasn't moved.

What makes this worse is that the cognitive load of reviewing AI-generated code is _higher_ than reviewing human-written code. AI produces plausible output that isn't always coherent across a complex change, creating what Pydantic's team described as ["a peculiar new kind of fatigue from the burden of supervision"](https://pydantic.dev/articles/the-human-in-the-loop-is-tired). The cost to produce code is going down but the cost to review has, if anything, gone up! The mandatory review policy makes even less sence than it did 2 years go.

> [!question] Should we use AI to review AI-generated code?
> Maybe, & tools for this are improving fast. But that's a separate conversation from whether you need a _human_ approval gate on every merge. AI-assisted review as an automated check in your CI pipeline is a fine idea. Requiring a human to also sign off on top of that is the part I'm pushing back on.

The developer piloting an AI tool is already reviewing the code as it's being generated. They're validating intent, checking outputs, & steering the result. A second mandatory review on top of that isn't a safety layer, it's bureaucracy. If your development process can't keep pace with how code is being written today, the process is what needs to change.

## The Bottom Line

The question was never "should we review code?" Of course we should. The question is "should every merge require a human gate?" For a team that works together daily, trusts each other, & has invested in automated safeguards, I think the answer is clearly no. Trust your people, invest in automation, & stop making your team ask for permission to ship.
