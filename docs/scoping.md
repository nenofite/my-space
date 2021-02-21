---
"layout": "article",
"title": "Scoping",
"date": "2021-02-19"
---

# Scoping

<section>

Here are my thoughts so far on scoping software projects. Don't expect to
find anything groundbreaking here. More experienced people have said this all
in better words already.

</section>

<section>

## Don't doubt that it'll take longer

First, break the project down into features, capabilities, and tickets. Use
your scope inflation of choice<side-note name="mn-est-form">for this project
I used `Points * 2.25`</side-note> to get your total time estimate. If the
estimate seems too high, you're doing it right.

Now translate your time estimate into a ship date. Don't forget about
holidays, run weeks, etc. Make a Gantt chart or similar that includes these
things. Plan with actual calendar dates, not in abstract.

Most likely, that date will be later than you expected. It may shock you.
You'll be tempted to say, "It can't *really* take that long. I'll sound
stupid or lazy if I say it'll take that long to ship. I should look over the
list, probably some tickets should be fewer points."

Instead, ask: "Okay, I guess it'll take this long. Will it still be
worthwhile if it takes this long?"

Consider how important the project is and what the return on investment will
be. If stakeholders agree it's worthwhile despite how long it'll take, that's
a very useful thing. Now you have buy-in, and even if the project takes this
long (spoiler: it will), people will be happy.

If the project wouldn't be worthwhile if it takes that long, then it's time
to cut goals or abandon the project.<side-note name="mn-cut-exp"> I can't
speak to this. So far I've only experienced this in retrospect, ie. realized
*after* doing a project that it wasn't worth the time, and that I could've
known as much if I had read an article like the one I'm writing now.
</side-note>

Every sprint or so, look at what tickets you've completed or added. Update
your time estimates based on the remaining work. Sometimes the remaining work
will go up, not down; that's normal. Complexity is uncovered fractally.

</section>

<section>

## The scope explosion

A ticket that you scoped for two days ends up taking two weeks.

You tell your manager confidently that the project will be done and polished
in a month, in fact it's laughable to imagine it taking any longer than that.
Two months later, the project isn't even shippable yet.

No matter how thorough your technical plans are, your project will hit scope
explosions.

Trying to avoid scope explosions is a fool's errand. Instead, assume they'll
happen, and have a good backup plan.

</section>

<section>

## Design joints to absorb the explosion

Decompose the project into feature sets that are loosely coupled.<side-note name="mn-joints" margin>
<img src="./img/joint.png" alt="Seismic expansion joints between two sections of brick wall" />
Seismic expansion joints give buildings flexibility so they can survive
earthquakes. Similarly, make your feature sets loosely coupled so your
timeline can survive scope explosion.
([schnellcontractors.com](http://schnellcontractors.com/)) </side-note>
That means one feature remains usable regardless to what extent the other
features are implemented. If you need to cut a couple features, you can still
ship the others.

To accomplish this loose coupling, you may need to adjust how the software is
architected, ie. where interface lines are drawn. In my case, we needed to
make sure our new UI components could co-exist with the old ones, in case we
only had time for a partial renovation (and that's exactly what happened).
This involved creating an adapter to keep the new and old data models in
sync.

Once the project is decomposed, publicly prioritize the features so you know
which ones to cut first.<side-note name="mn-prioritization">
An example prioritization system: Each feature gets a rank P0, P1, P2, etc. The set of P0
features describes the minimum viable product, ie. something that sucks to
use but gets the job done. Then P1, P2, etc. will describe levels of polish
and additional functionality.</side-note>
Get your stakeholders/team to commit to this
prioritization, so you won't feel guilty when a low-priority feature is cut.

Now sequence your work so there's a milestone every 1-2 sprints. Each
milestone is the completion of one of these shippable feature sets, plus a
little buffer time between.

If scope explodes and the project takes much longer than expected, you can
rest easy knowing you can just cut some less critical features and still meet
the deadline with a working product.

</section>

<section>

## The end

You draw out your project's goals, features, capabilities. You break it down
into tickets grouped into feature sets. You estimate time, apply scope
inflation, and put it on the calendar. You're shocked at how long it'll take,
but after talking with your team you agree that it's still worthwhile.

You start working towards your first milestone, the P0 feature set. The work
goes calmly, but you uncover some complexity and learn that one of your P1
features will actually be much more complicated. No worries, you update your
timeline and let your team know the project will take a month longer. They
agree it's still worthwhile.

Fast forward a couple months. You've finished your P0 feature set and made a
dent into the P1 set. Scope explodes again, so you adjust and update the
timeline. The project would take another six weeks to finish.

At this point, your team has other priorities. They don't want to spend
another six weeks on this project. This doesn't stress you out; in fact,
you've had a shippable product for a month already. You've just been
incrementally improving it, adding features and polish. You finish the work
you can in the time you have, and release the project. It isn't everything
you had planned from the start, but it's enough.

You wrap the project up with a bow, do a retrospective, and move on to the
next thing.

</section>