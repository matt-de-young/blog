import { define } from "@/utils.ts";
import { Callout } from "@/components/Callout.tsx";
import { BlogPostLayout } from "@/components/BlogPostLayout.tsx";
import { getPostById } from "@/data/posts.ts";

export default define.page(function BlogPost() {
  const post = getPostById("no-project-managers-no-scrum-masters");
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <BlogPostLayout
      title={post.title}
      date={post.date}
      excerpt={post.excerpt}
      draft={post.draft}
    >
      <p>
        This post describes an agile alternative to scrum that I have had a lot
        of success with. This was framework developed collaboratively with a
        group of 9 people developing products including PCBs, firmware, SaaS
        platforms, Mobile Apps, & infrastructure as code at ivy GmbH. It's not
        that scrum doesn't work, but I don't think it allows software
        development teams to do their best work & for high performing teams a
        better way is possible. Even when scrum is working at its best it
        involves a lot of overhead & coordination, at its worst it completely
        separates people making decisions from the consequences of those
        decisions. The purest form of the method proposed here is to just get a
        bunch of smart people together & unleash them on a problem with all the
        context that they need. If your team has already reached that level of
        enlightenment there is no need to mess around with this method. But this
        method attempts to work as a recipe to make the magic repeatable.
      </p>

      <p>
        I want to note here at the top that this is a radical strategy & a
        departure from the seemingly industry standard practice of having a
        product manager decide what to do & then hand it off for developers do
        it. This framework revolves around getting information & context to as
        many relevant people as possible, trusting that it can only improve
        solutions & decision making. I would have called this method the
        anarcho-syndicalist method if I didn't think it would make me
        effectively unemployable by anyone with a business degree. At ivy we
        still had product managers but they are completely a part of the team
        the same way designers or QA testers are in some teams.
      </p>

      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6">Why</h2>

      <p>
        The wide range of talents & experience at ivy allowed for truly
        innovative solutions, but also presents a problem in that not every team
        member is interchangeable. In the end I think that is true of every
        team, but maybe not as pronounced as in this one. Because of the extreme
        vertical integration, we also had the unique problem of having almost as
        many products as we had people, which rules out the product based teams
        approach commonly seen in bigger organizations & why I think this
        framework is better suited to small, efficient teams with ambitious
        goals. After adopting this method, we delivered 90% of our projects at
        or before the target date & most unfinished projects were canceled after
        only a week or two.
      </p>

      <p>
        At ivy we were consistently struggling to organize our work into
        manageable, predictable chunks while still maintaining a consistent
        direction over the long run. Being a small startup, and it being 2023,
        waterfall was naturally out. In the beginning we started with scrum,
        which I still recommend for new & especially inexperienced teams as it
        is familiar & promises a minimum amount of progress towards goals at a
        predictable cadence. But the problems, at lest in environments like
        ours, became very clear very quickly.
      </p>

      <p>
        When priorities & strategy can change from sprint to sprint, it is hard
        to actually finish anything, there is no follow through on any new
        features released. There is also an enormous overhead involved in making
        sure issues are ready to be put into a cycle, especially if your team
        has more ideas than time. It is common in startups for priorities to
        quickly; meaning the chances of any written issue ever being scheduled
        in a sprint are around 50%.
      </p>

      <p>
        Context switching can really inhibit a developers productivity & should
        be avoided as much as possible. Another way to think of the method
        described below is an evolution on the idea of sprint goals which tries
        to keep issues in a sprint cohesive; but it is all to common for a team
        to pick a grab bag of issues & then try to work backwards into a sprint
        goal. This method ensures that it happens the other way around.
      </p>

      <p>
        It is an age old problem that one cannot separate the solution from the
        implementation; writing a solution in an issue must also define the
        implementation or else it's not a complete solution. Plus, the act of
        writing the issue to a standard that anyone else can pick it up brings
        the author an appreciable amount of the way towards actually solving the
        problem itself; only for that context to be lost when another person
        picks up the issue or a month passes before it is picked up. This is a
        general problem in many teams that is worth following up on in a later
        post as it informs some of our other unorthodox approaches to organizing
        work.
      </p>

      <p>
        The last problem scrum teams face is finding out which issues would be
        more impactful together than alone & so should either all be accepted or
        none should. That's where the first process change came in, projects.
      </p>

      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6">
        Projects
      </h2>

      <p>
        It's worth noting at this point that we used Linear to track our issues
        & the{" "}
        <a
          href="https://linear.app/method"
          class="text-blue-600 hover:text-blue-800 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linear Method
        </a>{" "}
        was a huge influence where it wasn't outright stolen. Linear projects
        allows teams to pursue a greater purpose than closing as many issues as
        possible & gives them occasions to celebrate their wins.
      </p>

      <p>
        At ivy, projects normally had around 3 to 5 members which reduces
        collaboration overhead & allows those closest to the problem to solve
        the problem. Each project team was also cross-functional & autonomous.
        We had guidelines & principles (below), but each team was expected to
        figure out how to collaborate based on the unique team make up & the
        problem being solved; teams could decide if they wanted to have a daily
        standup, pair program, use feature branches, etc.
      </p>

      <p>
        Projects had a singular lead who was responsible for pitching the idea,
        managing the project while in progress, reporting it's status to the
        whole organization, & accepting the responsibility for success or
        failure of the project. This role could be, & was expected to be at some
        point, filled by any person with any role in the organization; although
        naturally more senior members led projects more often.
      </p>

      <Callout type="question">
        <strong>Why have a project lead at all?</strong>
        <p class="mt-2 mb-0">
          It is expected that the project lead won't rule like a petty dictator,
          but concentrating decision making can bypass discussions leading
          nowhere & leaves no where to hide from responsibility for a poorly
          planed, poorly executed, project.
        </p>
      </Callout>

      <p>
        This rotating leadership position allowed everyone to practice these
        skills & develops sympathy between those leading & those following. It
        provides a growth path for senior team members & allows them to try out
        leadership without having to make a career change. Even if a person has
        no desire to become a manager, knowing that one likely won't be leading
        the next project curbs some of a leads worst tendencies that can crop up
        in software development projects. It also teaches one what a leader
        expects & what is realistic to expect of a leader.
      </p>

      <p>
        There is a lot more to how we actually ran projects, we had a whole
        playbook which I will put up in a separate post. But below is some more
        information about what happens before a project is started.
      </p>

      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6">
        Starting Projects
      </h2>

      <p>
        Projects start as an idea, everyone has ideas, both good & bad. The
        first step is to write down the basics, about 250 words, including (but
        not limited to) primary & secondary objectives, background, & known
        unknowns. A project could be implementing a new feature, a new product,
        or a specific goal like improving web vitals. They then pitch the idea
        to the whole org, we might have feedback but at this point it should be
        as constructive as possible, not focusing too much on if it would
        provide enough business value.
      </p>

      <p>
        The goal is to encourage people to have as many ideas as possible & to
        feel conformable bringing them to the group. An idea might go through
        several rounds of presenting & feedback, both in meetings &
        asynchronously before it is considered ready to be accepted as a
        project. Stakeholders & product managers are especially encouraged to
        give their feedback on the estimated value of a project at this point.
        However we try not to spend a lot of time on ideas at this stage as the
        majority are never turned into projects that actually start.
      </p>

      <p>
        At the end of every cycle, we will take a look at the team workload,
        technical debt, SLOs, etc. & decide if we should start a project or not.
        If yes, we will choose from the list of ideas ready to be worked on. The
        main way that we do this is that every person has the right to choose if
        they want to work on a project or not. If the lead does not think they
        have enough members to accomplish the project within the defined budget,
        a project will not start. If the lead thinks there are too many people
        to work efficiently, they can also choose their team.
      </p>

      <Callout type="question">
        <strong>
          Does this mean people are always working on projects?
        </strong>
        <p class="mt-2 mb-0">
          No, we also had a backlog of KTLO or small improvement tasks. If
          someone isn't working on a project they will work on those. We tried
          to keep at least one person in that role at all times as they would
          also provide support & act as a first responder to any bugs.
        </p>
      </Callout>

      <p>
        It's very important to note that starting a project is not a commitment
        to finish it. Project leads are encouraged to find out if a project will
        provide value or not as soon as possible & cancel the project if not.
        This avoids us spending too much time on projects before they start
        which is often untracked work & distracts from ongoing projects,
        decreasing their change of success.
      </p>

      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6">
        Budgets
      </h2>

      <p>
        Budgets were another unique process change that helped this recipe work.
        It's important to understand that a budget is not an estimate; in fact
        this was in direct response to the inadequacy of estimating software
        development tasks, which is a whole other blog post in itself. But we
        were still a business & needed to provide some early warning system that
        the project is going to take longer than we thought it would, especially
        since we generally won't do a lot of research before agreeing to start a
        project.
      </p>

      <p>
        Having a budget when the project starts allowed us to meet our business
        needs of not costing more to develop a product or feature than we think
        we can make back in revenue. It also constrains the ideas which are
        considered as viable options when a project team is making a plan,
        helping to avoid decision paralysis.
      </p>

      <p>
        Setting a project budget is the hardest thing about implementing this
        framework successfully. Some analysis on the value derived from a
        project should be done before it is started, & then recorded in the
        project spec so that it can be referenced when making decisions &
        determining if a project was successful or not. The team must really
        work hard here to avoid falling into estimates; not accounting for
        anything unexpected occurring in the project & thus accepting a project
        with thin margins is a recipe for a net loss. Setting the budget at a
        break even point means that the team has put all their eggs into one
        basket & will have no ability to change direction once a project is
        started.
      </p>

      <Callout type="important">
        This seems to be the only downside to this approach; it puts a lot of
        speculative effort onto the business side before a project starts while
        most organizations are used to putting that effort onto developers in
        the form of estimates.
      </Callout>

      <p>
        One would think that the higher the budget, the more likely a project is
        to end successfully, but there is a bit of a paradox here. Having too
        large of a budget can lead to a lack of direction & the larger a task
        is, the harder it is to estimate due to the amount of surprises.
        Shipping early & often helps to mitigate this as having something is
        better than nothing & this helps to uncover the unknown unknowns early.
        Starting with the most complex problems first allows the team to make
        decisions with the most uncertainty out of the way.
      </p>

      <p>
        Milestones are decided early on & are used to track the progress of a
        project, examples are "Beta release" or "API complete". Missing a
        milestone should be occasion to change direction or even cancel the
        project. Increasing the budget is another option, but is generally the
        last resort to avoid slipping into the sunk-cost fallacy. At ivy we had
        even gone as far as to cancel a project just to start another one
        shortly after with the same goals but a different plan. After all, if a
        project is canceled early enough then the time spent isn't wasted, it
        was just spent learning.
      </p>

      <p>
        If the team manages to meet all of its primary objectives for a project
        before the budget they can end a project early, but the project team is
        also encouraged to continue working on the project & producing an even
        better result. A few home run projects with real follow-through are
        often all a startup needs to be successful.
      </p>

      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6">
        Guidelines
      </h2>

      <p>
        There are basically no rules for how to run projects, but these
        guidelines have served ivy well & one should have a very good reason for
        violating any of them.
      </p>

      <ol class="space-y-4 ml-6">
        <li>
          <strong>Don't change project leads.</strong>{" "}
          This just leads to confusion & it never ends well for the same reason
          that having co-leads of a project is a bad idea.
        </li>
        <li>
          <strong>
            People are assigned to no more than 1 project per cycle.
          </strong>{" "}
          This helps us track the amount of effort spent on a project & provides
          focus.
        </li>
        <li>
          <strong>Projects have more than 1 member.</strong>{" "}
          This prevents information from being lost. There is also a huge
          benefit to the quality of ideas that can be generated with more
          people, but diminishing with each additional person making the first
          addition extremely important.
        </li>
        <li>
          <strong>
            Don't add or remove members once a project is in progress.
          </strong>{" "}
          Same as the above but onboarding new people takes time, plus they
          aren't able to contribute to the project plan.
        </li>
        <li>
          <strong>Tackle any technical debt first.</strong>{" "}
          Just like real debt, paying it off as soon as possible means that you
          can get the most value from effort spent on the project.
        </li>
        <li>
          <strong>Projects are worked on in consecutive sprints.</strong>{" "}
          This avoids context switching & minimized un-shipped work at any given
          time.
        </li>
        <li>
          <strong>Projects are a number one priority.</strong>{" "}
          For every member, an in progress project should take priority over any
          other task or meeting not related to the project
        </li>
      </ol>

      <Callout type="question">
        <strong>
          What happens if something really urgent comes up while an unrelated
          project is ongoing?
        </strong>
        <p class="mt-2 mb-0">
          This is what the support person is for; hopefully nothing that large &
          urgent should come out of no where. It's important to let a project
          finish as it as part of the trust agreement been the project team &
          the greater business.
        </p>
      </Callout>

      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6">Future</h2>

      <p>
        This is likely not the final form that this method will take & the team
        at ivy will continue to iterate on the idea. But as far as I can tell we
        have come up with a novel way to organize our work that allows the
        flexibility for teams to do their best work while providing a framework
        that allows for measuring success & providing predictable dates. I hope
        some other teams try this out; if you do, please get in toch & me know
        how it goes.
      </p>
    </BlogPostLayout>
  );
});
