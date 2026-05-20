---
sidebar_position: 8
sidebar_label: "Week 8: How Much Load Can a System Handle?"
title: "Week 8: How Much Load Can a System Handle?"
description: "Students explore carrying capacity — the structural limit to the load an environment can support before the system degrades."
---

# Week 8: How Much Load Can a System Handle?
*Unit 3: System Limits and Load Balancing*

So far we have looked at flows: energy, water, carbon, nitrogen, manufactured objects. This week we look at **limits**.

Every environment has a maximum amount of biological or industrial activity it can support without breaking down. Bridges have a load limit. Electrical circuits have a current limit. So do ecosystems.

The technical term is **carrying capacity** — the largest steady-state population (or industrial throughput) that a given environment can support indefinitely without degrading.

Once carrying capacity is exceeded, the system enters a different operating mode: degradation. Soil becomes depleted. Forests thin. Fisheries crash. Aquifers run dry. The system either recovers slowly (if the load drops back below capacity) or transitions to a new, lower-functioning steady state.

This week we make the concept concrete with examples and simple calculations.

---

:::info Facilitator Snapshot
- The big idea: every system has a load limit. Not opinion, not "we should be careful" — a measurable structural limit.
- The classic dramatic example: deer populations on an isolated island (or in the absence of predators) often overshoot carrying capacity and crash.
- Carrying capacity can be calculated for natural systems (animals, plants) and for industrial systems (e.g., max sustainable fishing yield, max sustainable aquifer drawdown).
- Avoid framing this as "humans are overpopulated." That's a politically loaded claim and not what carrying capacity means in a technical sense. Focus on specific systems and their specific limits.
:::

:::tip Quick Navigation
- [Facilitator Preparation](#facilitator-preparation)
- [Guided Session 1: What Is a Load Limit?](#guided-session-1)
- [Guided Session 2: Calculating Capacity](#guided-session-2)
- [Independent Practice](#independent-practice)
:::

## Week at a Glance

| | |
|---|---|
| **Prep time** | ~10 minutes |
| **Materials** | A chair (for the load demo), a small bag of dried beans or candy, paper and pencils, Systems Log |
| **Key vocabulary** | carrying capacity, load limit, overshoot, steady state, regenerative capacity |
| **Difficulty** | Moderate |

## Facilitator Preparation

:::info Before You Begin
- Find a sturdy chair (you'll use it to talk about static load limits).
- Have a small pile of dried beans, marbles, or pennies — about 50 items.
- Optional: print or have ready a brief account of the **deer-on-an-island** case study, or the **St. Matthew Island reindeer** case study (both classic carrying-capacity examples).
- Pull out the Systems Log.
:::

:::tip Facilitation Mindset
Carrying capacity feels intuitive once students see one good example. The deer-and-island story or the reindeer-on-St.-Matthew story usually does the trick.

Do *not* lecture about human population. That's a different discussion and tends to derail the engineering frame. Focus on natural ecosystems and on specific industrial systems (a fishery, an aquifer).
:::

## For Younger Learners (Ages 8–9)

:::info Adapting This Week
**Simplest version of the concept:** "Every place has a maximum number of animals (or people, or fish) it can keep alive. If there are more than that, the place starts to break down, and then there are fewer."

**What to shorten or skip:**
- Skip the formal math of carrying capacity. Use the deer story and intuition.
- Skip industrial examples — focus on natural ones.

**Adapting the activities:**
- Use the candy demonstration: a jar can fit a certain number of candies. After that, candies spill out (the system can't hold more).

**Journal alternatives:** A drawing of a forest with too many deer, then the same forest a year later with fewer deer and no leaves.

**What success looks like:** The learner can say "if too many animals live in one place, they run out of food and a lot of them die."
:::

:::info For Ages 10–12
- Calculate: a 100-acre forest can support roughly X deer per year sustainably (depending on the food available). Above X, the deer eat the forest faster than the forest can regenerate. Below X, the population grows.
- Discuss the logistic growth equation conceptually: dN/dt = rN(1 − N/K), where K is carrying capacity. (No need to do calculus, just understand the shape: growth slows as N approaches K.)
- Discuss "overshoot": real populations often shoot above K, crash below K, oscillate, sometimes settle near K, sometimes collapse below where they started.
:::

---

## Guided Session 1
### What Is a Load Limit?
#### Learning Goal
By the end of this session, the student can:

- describe carrying capacity as a structural limit on system load
- distinguish a system in steady state from one in overshoot
- recognize that exceeding carrying capacity damages the system itself

---

#### Activities

**1. The Chair Example**

Point to a chair. Ask:

> "How much weight can this chair hold before breaking?"

The student probably doesn't know the exact number, but they know there is one. The chair has a structural load limit. Below the limit, it's stable. Above the limit, it breaks.

Now extend the metaphor:

> "A forest has a similar limit. So does a fishery. So does an aquifer. We can't always see the limit until we get close to it — but it's there."

The technical name for that limit, when applied to a living system, is **carrying capacity**.

---

**2. The Deer-on-an-Island Story**

Tell this story (it's a classic example because the numbers were measured):

Around the turn of the 20th century, in the Kaibab Plateau of Arizona, a deer herd lived in a forested area of about 1 million acres. Predators — wolves, cougars, coyotes — kept the deer population at around 4,000 animals.

Starting around 1907, the U.S. government deliberately killed off most of the predators to "protect" the deer. By 1923, the predators were nearly gone. The deer herd grew rapidly — from 4,000 to about 100,000 animals by 1924.

Then disaster. With no predators and no other limits, the deer ate everything they could. They stripped the forest. They ate young saplings. They ate bark off mature trees. In the winters of 1924-1926, with most of the food gone, tens of thousands of deer starved. The population crashed from ~100,000 down to ~20,000, and the forest itself was damaged — fewer young trees, less ground cover, eroded soil.

The forest's carrying capacity for deer was probably around 30,000. The herd had overshot that by 3x. The crash was not "natural" — it was the system enforcing its own limit.

> "Carrying capacity isn't a guideline. It's a structural limit. The system pushes back when it's exceeded."

(Note for facilitators: the exact numbers in the Kaibab story have been debated by ecologists. The general pattern of overshoot-and-crash, however, is well-established in many systems.)

---

**3. The Same Pattern Elsewhere**

Walk through one more example to drive the pattern home.

**Algae blooms.** When extra nutrients (Haber-Bosch nitrogen from Week 6) enter a lake, algae multiply rapidly. The lake's carrying capacity for algae is briefly enormous. But when the algae die and decompose, they consume all the oxygen, suffocating the fish. The lake's carrying capacity for fish suddenly drops to near zero.

**Bacterial cultures in a petri dish.** Bacteria fed unlimited food will multiply explosively until either food runs out or waste products build up to toxic levels. Then the colony collapses.

**Yeast in a bottle of beer or wine.** Yeast eat sugar and produce alcohol as a waste product. They thrive as long as sugar is available and alcohol concentration is below their tolerance. Eventually, alcohol levels exceed what yeast can tolerate and they die. The fermentation process literally ends when the system's load limit (for the yeast's own waste) is hit.

> "The pattern is universal: every population in every system has a carrying capacity. Below it, populations grow. At it, populations stabilize. Above it, the system degrades and the population crashes."

---

## Guided Session 2
### Calculating Capacity
#### Learning Goal
By the end of this session, the student can:

- calculate a simple carrying capacity from inputs and consumption rates
- recognize that the limit can be set by food, water, space, waste handling, or any other limiting factor
- understand "Liebig's Law of the Minimum" — the smallest input determines the limit

---

#### Activities

**1. The Simple Calculation**

Pose a scenario:

> "A field produces 10,000 pounds of grass each year. Each deer eats 1,000 pounds of grass per year. The field has plenty of water and plenty of space. What is the deer carrying capacity of this field?"

Walk through: 10,000 pounds of grass ÷ 1,000 pounds per deer = **10 deer**.

If more than 10 deer live there, they will collectively eat more than 10,000 pounds — overshooting what the field can produce. The grass will be eaten faster than it regrows. Eventually some deer will starve.

If fewer than 10 deer live there, the field will produce more grass than they eat, the leftover grass will grow back, and the deer population can grow.

The carrying capacity is the point of balance between consumption and production.

---

**2. The Liebig Principle**

Now complicate it. Suppose the same field has:

- Enough grass for 10 deer
- Enough water for only 5 deer

What's the carrying capacity? **5 deer.**

> "The carrying capacity is set by whatever is in shortest supply. If you have plenty of food but not enough water, water is the limit. If you have plenty of food and water but no space, space is the limit."

This is called **Liebig's Law of the Minimum**. In ecology and agriculture, the limit on growth is set by whatever resource is most scarce relative to need — not by what's most abundant.

Examples:

- For most terrestrial plants, fixed nitrogen is the limiting factor (which is why fertilizer matters so much).
- For ocean phytoplankton, iron is often the limit (we'll see this in the geoengineering optional week).
- For polar bear populations, sea ice (their hunting platform) is becoming a limit as ice melts.

---

**3. The Waste Side of the Equation**

Carrying capacity isn't only about inputs. It's also about **outputs**:

> "A system can also be limited by how fast it can absorb or remove its own waste."

Examples:

- A bottle of fermenting yeast is limited by alcohol — its own waste product.
- A polluted river is limited by how fast oxygen-using bacteria can break down sewage and replenish oxygen for fish.
- A city's carrying capacity for cars is partly limited by parking, traffic congestion, and air quality — all output problems.
- The atmosphere's carrying capacity for excess CO₂ is set by how fast oceans, soils, and plants can absorb it. (We saw this in Week 5.)

The full equation:

> **Carrying capacity = min(input rate, output handling rate)**

If either is exceeded, the system overloads.

---

## Independent Practice

### Goal

Identify a load limit in your immediate environment and continue terrarium observations.

### Activities

**1. Spot a Load Limit**

Find three load limits in your everyday life. Examples to model:

- **An elevator** has a posted weight limit. What happens if too many people get on? (It either won't move, or breaks.)
- **A road** has a traffic capacity. What happens if too many cars try to use it at once? (Gridlock, accidents.)
- **A classroom** has a student capacity. What happens if too many are added? (Hard to learn, can't move.)
- **A wifi network** has a bandwidth limit. What happens if too many devices try to use it? (Everything slows down.)
- **Your own attention** has a limit. What happens if too many things demand it at once? (You can't focus on any of them.)

For each, write what the limit is and what happens when it is exceeded.

---

**2. The Carrying-Capacity Sketch**

Pick one natural system in your area: a local pond, a neighborhood park, a backyard, a stream. List what creatures and plants live there. Then ask:

- What might be limiting their population? (Food? Water? Predators? Space? Pollution? Climate?)
- If something changed (more rain, fewer predators, paving of a nearby area), how might the carrying capacity change?

---

**3. Terrarium Check**

Week 5 of terrarium observation. Open the Systems Log:

- Day count: __
- Condensation, soil, plants — any changes?
- This week, look at your terrarium with carrying-capacity eyes. What is the limit on how many plants can live in there? (Probably light, plus the small amount of nutrients in the soil, plus the small CO₂ pool.) If you crammed in 10 more plants today, would they all live?

### Systems Log

> **Today's System:** Load limits and carrying capacity
>
> **Sketch:** [Draw a graph: population on y-axis, time on x-axis. Draw the line going up, leveling off, or overshooting and crashing.]
>
> **A carrying-capacity calculation I did:** ____
>
> **Three load limits I spotted in real life:**
>
> **Terrarium update:** ____

**Sentence starters for younger learners:**
- "Too many ___ in one place means ___."
- "The thing that limits how many ___ can live here is ___."

### Reflection Questions

- What's the difference between "we should have fewer deer" (a value statement) and "the forest has a deer carrying capacity of 30,000" (a system measurement)?
- Some systems can have their carrying capacity *increased* (by adding food, water, or space). Others have hard limits. What determines which is which?
- For a closed system like the terrarium, can the carrying capacity be increased? (Mostly no — without adding inputs from outside.)

---

## Check for Understanding

After this week, check whether the learner can:

1. **Define carrying capacity:** "What does 'carrying capacity' mean?" (Looking for: the most that a system can support without breaking down.)
2. **Identify the limiting factor:** "If a forest has plenty of food for deer but not enough water, what determines the maximum deer population?" (Looking for: water — the limiting factor.)
3. **Describe overshoot:** "What happens when a population goes above the system's carrying capacity?" (Looking for: degradation of the system and a population crash.)

If the learner can do at least 2 of these, they're ready for Week 9.

---

## Pause and Notice

:::note What Matters Here
Ask:

> "Carrying capacity isn't a moral rule. The deer didn't 'deserve' to crash because they were 'too greedy.' They just hit a structural limit and the system rebalanced."

This is the engineering view of system limits. Limits are real, measurable, and impersonal. A population doesn't know it's about to crash; the system simply enforces the math.

**This week's takeaway:** Every system has a limit. Above the limit, the system degrades. Below the limit, it can recover. The limit is set by inputs, outputs, or both — whichever runs out first.
:::

---

## Spiral Review

:::tip Connecting to Earlier Weeks
- **From Week 6 (nitrogen):** Eutrophication is exactly this pattern. Algae overshoot carrying capacity, then crash, taking the local ecosystem with them.
- **From Week 5 (carbon):** The atmosphere's "carrying capacity" for CO₂ (in terms of how much can be added without significantly warming the planet) is being exceeded. Output-handling rate is too slow.
- **From Week 4 (water):** An aquifer has a carrying capacity for pumping. Above that rate, the water table drops faster than rain can refill it. Sound familiar? It's the same pattern.
- **From Week 3 (terrarium):** Your terrarium has a maximum plant load it can support. The limits are light, CO₂, and soil nutrients — all bounded inside the jar.
:::

---

:::tip Simplify (Ages 8–9)
Use only the deer story and the simple grass calculation. Skip Liebig's Law. The takeaway: "Every place has a limit on how many living things it can support. Going past the limit breaks the place."
:::

:::tip Extend (Ages 10–12)
Read about the **St. Matthew Island reindeer**: in 1944, 29 reindeer were introduced to the previously reindeer-free Alaskan island. By 1963, the herd was 6,000. The island's lichen (their main winter food) was stripped. In one harsh winter (1963-1964), the herd crashed to 42 animals. The carrying capacity, based on lichen regrowth rates, was probably around 1,500. They overshot by 4x.
:::

:::tip Vocabulary This Week
**Carrying capacity** • **Load limit** • **Overshoot** • **Limiting factor** • **Liebig's Law of the Minimum** • **Regenerative capacity**
:::

## Preview of Next Week

Next week we look more closely at **population dynamics** — what happens during overshoot, why some systems oscillate and others crash, and what predator-prey loops look like in action.
