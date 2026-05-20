---
sidebar_position: 17
sidebar_label: "Week 17: Stress-Testing the Design"
title: "Week 17: Stress-Testing the Design"
description: "Students stress-test their redesign proposal against real-world constraints and refine based on feedback."
---

# Week 17: Stress-Testing the Design
*Unit 5: The Capstone — From Sketch to Proposal*

This week the proposal gets stressed.

A good engineer never presents a design without breaking it first. Real systems fail in surprising ways: a component fails, a participant doesn't cooperate, an edge case the designer didn't think of shows up. The work this week is to systematically *try to break* the redesign before the audience does it in Week 18.

Two angles of attack: (1) **failure modes** — what mechanically breaks this design? and (2) **stakeholders** — who pushes back, and why? The goal isn't to defend the proposal. The goal is to find the weak points so they can either be fixed, or named honestly as known limitations.

Honest limitations are a sign of engineering rigor, not weakness. A proposal that claims to have no failure modes is a proposal that hasn't been examined.

---

:::info Facilitator Snapshot
- This week's tone is constructive critique, not destructive. The student is trying to make the proposal stronger by finding its weak spots, not to demolish it.
- The stakeholder analysis is *not* "who is wrong" — it is "what legitimate constraints are other people dealing with that make them resistant to this change?"
- Many students will discover their redesign needs a Known Limitations section. That's a success, not a failure.
- By end of week, the Specs Sheet should be revised based on what stress-testing revealed.
:::

:::tip Quick Navigation
- [Facilitator Preparation](#facilitator-preparation)
- [Guided Session 1: Find the Failure Modes](#guided-session-1)
- [Guided Session 2: Who Pushes Back?](#guided-session-2)
- [Independent Practice](#independent-practice)
:::

## Week at a Glance

| | |
|---|---|
| **Prep time** | ~10 minutes |
| **Materials** | Week 16 Specs Sheet, paper for failure-mode worksheet, pencils, the Systems Log |
| **Key vocabulary** | failure mode, edge case, second-order effect, stakeholder, known limitation |
| **Difficulty** | Moderate — requires intellectual honesty |

## Facilitator Preparation

:::info Before You Begin
- Pull the Specs Sheet from Week 16. The stress-test operates on it directly.
- Be willing to play the role of "skeptical reviewer" — ask the hard questions even if it feels uncomfortable.
- Prepare a list of common stakeholders for the student's specific redesign topic (family members, school staff, neighbors, etc.).
- Have the Systems Log handy.
:::

:::tip Facilitation Mindset
**Stress-testing isn't pessimism — it's preparation.** Every weakness the student finds *now* is one they don't get blindsided by during the pitch. Frame it as: "Let's break this on purpose, before someone breaks it for us."

**Stakeholder pushback usually has a real basis.** When the student identifies someone who would resist the change, push them to articulate the strongest version of that person's reasoning, not the weakest. Engineers improve their designs by taking objections seriously.
:::

## For Younger Learners (Ages 8–9)

:::info Adapting This Week
**Simplest version of the concept:** "We're going to play 'what could go wrong?' We'll think about all the ways our plan might not work, and what we'd do about each one. Then we'll think about who might say 'no' to this idea, and why."

**What to shorten or skip:**
- Skip the second-order effects analysis. Stick to direct failure modes ("what if no one remembers to empty the bin?").
- Use only one or two stakeholders. Family members are the most concrete.
- Skip the formal Known Limitations section. Use "things we still need to figure out" instead.

**Adapting the activities:**
- Use storytelling. "Imagine it's three months from now. Something has gone wrong with our compost bin. What is it?"
- Role-play the resistant family member. Have the student practice answering objections out loud.

**Journal alternatives:** A list of "three things that could go wrong" with one sentence each for what to do about each.

**What success looks like:** The learner can name at least one thing that might fail in their plan and one person who might push back.
:::

:::info For Ages 10–12
- Push for at least five distinct failure modes.
- Require an explicit Known Limitations section in the revised proposal.
- For the stakeholder analysis, the student must articulate the *most reasonable* version of the objection, not a strawman version.
- Add: "What's a second-order effect I haven't anticipated?" Discuss systems behaviors that emerge over time (does composting attract pests? does reusing paper mean lower paper quality?).
:::

---

## Guided Session 1
### Find the Failure Modes
#### Learning Goal
By the end of this session, the student can:

- systematically identify failure modes in their redesign
- consider what happens when one component or participant fails
- anticipate second-order effects and edge cases

---

#### Activities

**1. The Failure Mode Checklist**

Lay out the Specs Sheet. Then, for each component and operating parameter, ask:

```
FAILURE MODE WORKSHEET

Component or step: _____
  What happens if it fails: _____
  Likelihood (low / medium / high): _____
  Severity (minor / serious / catastrophic): _____
  How to detect early: _____
  How to recover: _____
```

The student works through every major component. Examples for the composting redesign:

| Component | Failure mode | Likelihood | Severity | Recovery |
|---|---|---|---|---|
| Kitchen pail | Forgotten to empty for a week | Medium | Minor (smell, fruit flies) | Set weekly reminder, empty into outdoor bin |
| Outdoor bin | Fills up faster than expected | Medium | Minor | Switch to two bins or larger size |
| Outdoor bin | Carbon-to-nitrogen ratio off (too wet) | Medium | Serious (rot, smell, no compost) | Add brown matter (leaves, paper) regularly |
| Outdoor bin | Pest invasion (rodents) | Low-Medium | Serious | Use a sealed bin design, no meat/dairy |
| Family participation | One member doesn't separate scraps | High | Minor | Clear labeling, easy access, no enforcement needed for partial compliance |
| Family participation | All members stop participating | Low | Catastrophic | Designate one person as system operator, doesn't depend on full participation |
| Garden application | No garden / no use for compost | Low (if planned) | Catastrophic | Pre-arrange handoff: neighbor's garden, community garden, etc. |

This is the heart of the stress test. The student should find at least 5 failure modes for any moderately complex redesign.

---

**2. The "What If One Person Doesn't Cooperate" Test**

Many household and school redesigns depend on multiple people doing the right thing. The student asks:

> "What is the minimum participation level for this redesign to still close the loop?"

If the answer is "everyone must participate every time," the redesign is fragile. Real systems need to tolerate partial compliance.

Robust designs:
- Continue working if one person opts out
- Have a single "system operator" who can run it even if others don't help
- Default to working (i.e., harder to get *wrong* than right)

The student rewrites their participation spec to be robust. Example:

> "Old version: All four family members will separate food scraps into the compost pail."
>
> "Robust version: Any family member may deposit scraps in the compost pail. One designated person (rotating monthly) is responsible for emptying it. The system tolerates anyone not participating; it only fails if no one operates the outdoor bin."

---

**3. Second-Order Effects**

First-order effects are the obvious consequences: less waste to landfill, more compost for garden. Second-order effects are what happens *because* of the first-order effects — often surprising.

The student lists at least three possible second-order effects:

Examples for the composting redesign:
- Compost bin attracts pests → may require sealed design or relocation
- Garden produces more vegetables → less grocery shopping → smaller upstream agricultural footprint (positive cascade)
- Reduced trash means less frequent garbage day trips → small time savings, but also less monitoring of household waste overall
- Family talks about composting with friends → social spread → possible neighborhood-wide effect
- Reusing paper means lower paper quality on important projects → minor friction unless paper is sorted by reuse-fitness

Some second-order effects are *amplifying* (the small change cascades into bigger changes), and some are *balancing* (the system pushes back against the change). The student labels each as amplifying, balancing, or unknown.

---

**4. Edge Cases**

Edge cases are the unusual conditions the design has to handle. The student lists at least three:

- What about holiday weeks when waste volumes are higher than normal?
- What about vacation weeks when the household is empty?
- What about extreme weather (very cold, very hot, heavy rain)?
- What about temporary disruptions (move, renovation, illness)?
- What about scale-up — what if the household grows or shrinks?

For each edge case, write a one-line plan:

- "Holiday weeks: store excess scraps in freezer until bin has capacity."
- "Vacation: pause the system; pail can sit empty without issue."
- "Cold weather: outdoor bin will slow down significantly in winter, but resume in spring."

---

## Guided Session 2
### Who Pushes Back?
#### Learning Goal
By the end of this session, the student can:

- identify the stakeholders affected by the proposed redesign
- articulate the strongest, most reasonable version of each stakeholder's objection
- adjust the proposal to address legitimate stakeholder constraints

---

#### Activities

**1. The Stakeholder Map**

The student lists everyone affected by the redesign — directly or indirectly. For a household composting program:

- Family members (directly: must change behavior)
- Neighbors (indirectly: may be affected by smell, pests, visual change)
- Landlord (if rental)
- Municipal trash service (slightly less load, no real impact)
- Visitors to the house (briefly: must figure out the new bin)

For a school paper-reduction program:

- Students (directly: new habits)
- Teachers (directly: must coordinate)
- Custodial staff (affected: change in trash composition)
- Administrators (affected: must approve)
- Parents (affected: may have opinions)
- Paper suppliers (slightly less business)

The student writes a name for each stakeholder and notes whether they're affected directly, indirectly, or only marginally.

---

**2. The Steel-Manned Objection**

For each stakeholder, the student asks: *what's the strongest, most reasonable version of their objection?*

This is **steel-manning** — the opposite of strawmanning. Strawmanning is picking the weakest version of someone's argument to defeat. Steel-manning is picking the strongest version, because you respect the person's actual reasoning.

Examples of steel-manned objections:

| Stakeholder | Steel-manned objection |
|---|---|
| Family member who doesn't want to compost | "I already manage many household tasks; this adds a small but real cognitive load to my day, and the benefit to the system is small relative to industrial-scale waste. My limited attention is better spent on other things." |
| Landlord | "Compost bins can attract pests, smell in summer, and create disputes with neighbors. My liability is for property condition, not for environmental optimization. I have legitimate reasons to limit modifications to the property." |
| School administrator | "I'm responsible for instructional time, custodial logistics, and parent satisfaction. A new system requires teacher training, possible policy changes, and ongoing oversight. Even if the cause is good, I have to weigh it against many other priorities." |

Notice: each of these is a *real* argument with real reasoning behind it. The point isn't to agree with the objection — it's to understand it as the holder of the objection would.

---

**3. The Response to Each Objection**

For each steel-manned objection, the student writes a brief response:

- Does the objection require changing the proposal? (If yes, how?)
- Does the objection require an explanation in the proposal? (If yes, what?)
- Does the objection point to a genuine limitation the proposal can't solve? (If yes, name it.)

Three possible outcomes for each objection:

1. **Addressable** — the proposal can be adjusted to handle this objection. Update the Specs Sheet.
2. **Explainable** — the proposal already addresses this; the response needs to be clear in the pitch. Write the explanation now.
3. **Honest limitation** — the objection is valid and the proposal doesn't fully solve it. Add to the Known Limitations section.

---

**4. The Reasonableness Check**

Pick the *most* resistant stakeholder. Pretend the student has 30 seconds to give them one sentence that would make them more willing to support the redesign — not by guilt or pressure, but by addressing their actual concern.

Examples:

- To a busy family member: "This adds about 30 seconds per meal to scrape plates into one bin instead of another. I'll handle the bin maintenance. You don't have to do anything else."
- To a landlord: "We'll use a sealed bin with no meat or dairy, which eliminates pest risk. We'll keep it in this specific location, out of view from neighbors. We'll remove it when we move out, no permanent change to the property."

The 30-second response is honed in Week 18's pitch. This week, it's drafted.

---

## Independent Practice

### Goal

Revise the proposal based on Sessions 1 and 2 findings. Write the Known Limitations section.

### Activities

**1. Update the Specs Sheet**

Go back to the Week 16 Specs Sheet. Update it to reflect:

- New failure-tolerance design choices (e.g., robust participation model, sealed bin, designated operator)
- New edge-case handling (e.g., freezer storage during holidays)
- New scope adjustments based on stakeholder objections (e.g., excluding meat/dairy to satisfy landlord constraint)

The updated Specs Sheet is **Version 2.0**. Save it.

---

**2. Write the Known Limitations Section**

Add a new section to the proposal:

```
KNOWN LIMITATIONS

This proposal does not solve:
  - _____ (e.g., the system depends on at least one household member being committed to running it)
  - _____ (e.g., compost output isn't fully utilized if no garden is available)
  - _____ (e.g., this redesign doesn't address the upstream agricultural system that produces the food)

Second-order effects we're uncertain about:
  - _____ (e.g., long-term effect on family food habits)
  - _____ (e.g., whether the system will be sustained beyond initial enthusiasm)

What would require a bigger redesign to fix:
  - _____ (e.g., to handle all food waste from neighborhood, would need community-scale composting infrastructure)
```

The Known Limitations section is what makes the proposal credible. A proposal without one looks naive. A proposal with one looks like it was written by someone who has actually thought about it.

---

**3. The Stakeholder Brief**

Pick the *single most resistant stakeholder*. Write a one-paragraph brief specifically for them:

- What this proposal asks them to do (clearly, no hedging)
- What it costs them
- What it gains for the system
- The strongest counter-argument to their best objection

This becomes the most important page of the pitch deck for Week 18.

---

**4. Terrarium Check**

Week 14 of terrarium observation. Open the Systems Log:

- Day count: __
- Condensation, soil, plants — any changes?
- Notice: the terrarium has had failure modes too. Maybe a leaf has died, or condensation patterns have shifted, or there's some mold. The system adapts. Closed loops are not static — they self-correct around small failures. That's also what a well-designed redesign should do.

### Systems Log

> **Top 3 failure modes:** ____
>
> **How each is mitigated in the updated design:** ____
>
> **Steel-manned objection from most resistant stakeholder:** ____
>
> **30-second response to that objection:** ____
>
> **Known limitations of the proposal (3 bullets):** ____
>
> **What I changed in the Specs Sheet:** ____
>
> **Terrarium update:** ____

**Sentence starters for younger learners:**
- "One thing that might go wrong is ___."
- "If that happens, we can ___."
- "[Name] might not like this because ___."

### Reflection Questions

- What's a failure mode you didn't anticipate before this week?
- Was the steel-manned objection harder or easier than you expected? Did it change how you see the resistant stakeholder?
- If you had to name the one weakness in your proposal that you're least sure how to fix, what is it?

---

## Check for Understanding

After this week, check whether the learner can:

1. **Name failure modes:** "What are three ways this design might fail?" (Looking for: at least three specific failure modes with mitigation plans.)
2. **Steel-man an objection:** "Pick someone who would resist this. What's their *strongest* reason — not their weakest?" (Looking for: a real argument with reasoning, not a strawman.)
3. **Acknowledge a limitation:** "What does your proposal NOT solve?" (Looking for: honest acknowledgment of at least one real limitation.)

If the learner can do all 3, the proposal is ready to present in Week 18.

---

## Pause and Notice

:::note What Matters Here
Ask:

> "Look at the proposal now compared to two weeks ago. It's harder to break. You found failure modes and patched them. You took the strongest objections from other people seriously instead of dismissing them. You added a Known Limitations section that admits what the design can't do."

Counterintuitive but true: the proposal is *stronger* now because it admits more weakness. A proposal that admits limitations is one the reader can trust on everything else it claims. A proposal that claims no weaknesses is one the reader has to fact-check from scratch.

> "This is what engineering rigor looks like. Stress-test the design. Name what works. Name what doesn't. The result is a design you can stand behind because you already know where it's vulnerable."

**This week's takeaway:** Honest limitations are a sign of rigor, not weakness. The strongest proposal is the one that has already survived its own stress-test.
:::

---

## Spiral Review

:::tip Connecting to Earlier Weeks
- **From Week 9 (population dynamics):** Failure modes are how systems collapse. Identifying them in your design is the same skill as identifying collapse risk in real ecosystems.
- **From Week 10 (the depletion game):** The "what if one player doesn't cooperate" question is the tragedy of the commons in miniature. Your design has to tolerate partial cooperation.
- **From Week 14 (the sketch):** You showed the sketch to one person back then. This week scaled that up: many stakeholders, deeper objections, structured analysis.
- **From Week 16 (specs):** The updated Specs Sheet reflects what stress-testing revealed. This is how real engineering documents evolve through review cycles.
:::

---

:::tip Simplify (Ages 8–9)
Three questions are enough: "What might go wrong?" "What would we do if it did?" "Who might not like this idea?" Keep answers short and concrete.
:::

:::tip Extend (Ages 10–12)
Read about pre-mortems — the engineering practice of imagining a project has already failed, then working backwards to figure out why. Apply this to your redesign: "Imagine it's six months from now and the redesign has stopped working. What happened? Why?" The pre-mortem often surfaces failure modes the failure-mode checklist misses.
:::

:::tip Vocabulary This Week
**Failure mode** • **Edge case** • **Second-order effect** • **Steel-man** • **Stakeholder** • **Known limitation**
:::

## Preview of Next Week

Next week is the capstone presentation. You'll prepare a five-minute pitch — current state, why it matters, the proposed solution, what it requires, expected outcomes — and present it to a real audience. The eighteen weeks of engineering thinking get used for what they were built for: making the case for a specific change to a specific system, to a specific person who matters.
