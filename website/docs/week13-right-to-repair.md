---
sidebar_position: 13
sidebar_label: "Week 13: Designing for Disassembly and Reuse"
title: "Week 13: Designing for Disassembly and Reuse"
description: "Students explore modular design, right-to-repair, and how to design products for end-of-life disassembly and reuse."
---

# Week 13: Designing for Disassembly and Reuse
*Unit 4: Re-Engineering the Interface*

Last week we looked at how to design materials for closed-loop cycles. This week we look at the other major lever: **making things last longer**.

A simple insight: throughput is the product of demand and replacement rate. If a phone lasts 2 years and you buy a new one each cycle, the demand on raw materials is the same as if 5 people each had a phone for 10 years. **Doubling the product lifespan halves the throughput demand**, all else equal.

There are two main ways to extend product life:

1. **Repair.** When something breaks, fix it instead of replacing it. This requires access to parts, manuals, and tools.
2. **Modular design.** Build products from interchangeable parts so a broken or outdated component can be swapped without discarding the whole product.

Both run into a structural problem: **the manufacturer often doesn't benefit from a product that lasts longer**. A phone that lasts 10 years means one phone sold per decade. A phone that lasts 2 years means five phones sold. The shorter product life is more profitable, all else equal.

This week we look at the engineering of long product life, the politics around it (the **right-to-repair** movement), and how product longevity reduces environmental load.

---

:::info Facilitator Snapshot
- The big idea: extending product life is the most leveraged way to reduce throughput. It's often cheaper than recycling.
- Right-to-repair is a real political movement (laws have passed in several US states and the EU). It's controversial because it pits long-life design against manufacturer revenue models.
- The framing throughout should be engineering and incentives, not "corporations are evil."
- Avoid specific brand bashing. Use generic examples ("modern smartphones") rather than singling out companies.
:::

:::tip Quick Navigation
- [Facilitator Preparation](#facilitator-preparation)
- [Guided Session 1: The Math of Longevity](#guided-session-1)
- [Guided Session 2: Designed for Repair](#guided-session-2)
- [Independent Practice](#independent-practice)
:::

## Week at a Glance

| | |
|---|---|
| **Prep time** | ~10 minutes |
| **Materials** | A broken or fixable household item (optional), a screwdriver if you can take something apart, paper, pencils, Systems Log |
| **Key vocabulary** | designed obsolescence, right-to-repair, modular design, product longevity, planned obsolescence, throughput reduction |
| **Difficulty** | Moderate |

## Facilitator Preparation

:::info Before You Begin
- Optional: have a small, broken or near-broken household item the student can examine (a remote control, a broken toy, an old lamp).
- Optional: a screwdriver, in case you want to actually take something apart and look at how it's constructed.
- Pull out the Systems Log.
- Optional reading: look up your state or country's status on right-to-repair legislation. As of 2025, several U.S. states (NY, MN, CA, CO, OR, ME, and others) have passed laws requiring manufacturers to provide repair information and parts to customers.
:::

:::tip Facilitation Mindset
This is the closest the curriculum gets to a politically active topic. Stay engineering-focused:

- The engineering question: does this product give signals about how long it will last? Can it be repaired?
- The incentive question: do manufacturers benefit from longer lives? Why or why not?
- The system question: what would change the incentives?

Avoid taking sides on specific policy questions.
:::

## For Younger Learners (Ages 8–9)

:::info Adapting This Week
**Simplest version of the concept:** "If we use things for longer, we don't need to make as many. Some things are made to last a long time. Some things are made to break quickly so we'll buy a new one."

**What to shorten or skip:**
- Skip the math of throughput reduction. Use intuition.
- Skip the right-to-repair discussion. Just talk about "things that can be fixed vs. things you have to throw out."

**Adapting the activities:**
- Find one fixable and one unfixable item at home. Compare them.

**Journal alternatives:** Draw a picture of a thing that lasts a long time and a thing that gets thrown away quickly. Talk about why.

**What success looks like:** The learner can name something that's been in their family for a long time and something that gets replaced often, and explain what's different.
:::

:::info For Ages 10–12
- Calculate throughput reduction. If average phone life doubled from 2 years to 4 years, global phone production would halve. What would that mean for the global supply chain of rare earths, cobalt, lithium, etc.?
- Look up **iFixit.com**, a website dedicated to repair guides and "repairability scores" for consumer electronics. Have students look up a product they own.
- Discuss the **EU Right to Repair Directive** (2024) and the **U.S. state laws**. What do they require?
:::

---

## Guided Session 1
### The Math of Longevity
#### Learning Goal
By the end of this session, the student can:

- explain why product lifespan directly affects throughput
- calculate the throughput reduction from doubling product life
- describe designed obsolescence as an engineering and business choice

---

#### Activities

**1. The Lifespan Math**

Pose the question:

> "Let's say every person needs a phone. There are about 8 billion people on Earth. If a phone lasts 2 years, how many phones does the world need to manufacture every year just to keep up?"

Walk through the math: 8 billion ÷ 2 years = **4 billion phones per year**.

Now: if the average phone lasted 4 years instead of 2 years?

> "4 billion ÷ 4 = 2 billion phones per year. We just cut the production rate in half."

If the average phone lasted 8 years?

> "8 billion ÷ 8 = 1 billion per year. Quarter the rate."

Each doubling of product life **halves** the throughput demand on every raw material that goes into phones: cobalt mines in Congo, lithium ponds in Chile, neodymium mines in China, silicon refineries, plastic factories, and the energy systems powering all of them.

> "Product longevity is the highest-leverage variable in throughput reduction. More than recycling. More than efficiency. Just making things last longer."

---

**2. The Old vs. New Comparison**

Ask the student:

> "What's the oldest thing in your house that still works?"

Likely candidates:
- A cast iron pan (potentially 50+ years)
- A wooden chair or table
- An old hand tool
- A grandparent's watch
- A family photo album

Ask: *why* did that thing last so long?

Usually some combination of:
- Built from simple, durable materials (metal, wood, glass).
- Repairable. If something breaks, parts are standard.
- Modular. Components are interchangeable, or there are few components.
- Made before designed obsolescence became common.

Now ask:

> "What's something you've owned in the last 5 years that broke or stopped working?"

Likely candidates:
- An electronic device
- A toy made of bonded plastic
- A pair of headphones
- A cheap kitchen gadget
- A specific clothing item

Ask: why didn't that last? Often:
- Made of fragile materials.
- Sealed shut (can't be opened without breaking).
- Custom parts not available outside the manufacturer.
- Battery glued in place.
- Designed-in failure points.

---

**3. Designed Obsolescence**

Introduce the term:

> "**Designed obsolescence** is when a product is deliberately designed to fail, become outdated, or be impossible to repair within a relatively short time — so the consumer has to buy a replacement."

Forms of designed obsolescence:

- **Mechanical:** glued-in batteries, soldered components, fragile parts that fail predictably.
- **Software:** new software versions that don't run on older hardware; gradual slowing of older devices; ending security updates.
- **Stylistic:** marketing cycles that make last year's product look "out of date" even though it still functions.
- **Parts unavailability:** discontinuation of replacement parts so repair becomes impossible.

Frame this carefully:

> "Designed obsolescence isn't 'evil' in the moral sense. It's the result of a market system where companies are rewarded for selling more units. From a pure business perspective, a product that lasts forever is bad for revenue. But from a systems perspective, designed obsolescence multiplies throughput on every raw material — and on every waste output."

The question is whether the system that rewards designed obsolescence is the right system. That's where right-to-repair comes in.

---

## Guided Session 2
### Designed for Repair
#### Learning Goal
By the end of this session, the student can:

- distinguish products designed for repair from products designed for replacement
- explain right-to-repair as a policy lever for changing the incentive structure
- recognize modular design as the engineering foundation for product longevity

---

#### Activities

**1. The Anatomy Test**

If you have a fixable household item nearby, look at it together. Check:

- Are the screws visible and standard? (Phillips head, hex, Torx — all are common and repairable. Custom screws are designed to keep you out.)
- Can you open it without destroying it?
- Are the components labeled, modular, and replaceable?
- Is there documentation (a manual, a parts diagram)?

Compare to a typical modern smartphone:

- Screws are often custom or hidden behind glue.
- Opening the phone often cracks the screen or back glass.
- The battery is glued in.
- Replacement parts are often only available to authorized repair centers.
- The schematic is rarely public.

This is the difference between **designed for repair** and **designed for replacement**.

---

**2. Right-to-Repair**

Introduce the movement:

> "Right-to-repair is the political and economic movement to require manufacturers to provide repair information, parts, and tools to customers. The basic principle: if you bought it, you should be able to fix it."

Specific demands typically include:

- Access to **service manuals** (so you or a local technician can figure out what's wrong).
- Access to **replacement parts** at fair prices (not just to "authorized" repair shops).
- Access to **tools** needed to do the repair (including any special tools).
- Removal of **software locks** that prevent third-party parts from working.

As of 2025, several U.S. states (New York, Minnesota, California, Colorado, Oregon, Maine, and others) have passed right-to-repair laws, mostly for consumer electronics and farm equipment. The EU passed its **Right to Repair Directive** in 2024.

The arguments for right-to-repair:

- Reduces e-waste (a major and growing waste stream).
- Lowers consumer costs (repair is usually cheaper than replacement).
- Preserves local repair businesses.
- Increases product lifespan, reducing throughput.

The arguments against (from manufacturer perspective):

- Safety concerns (untrained repair could be dangerous for some products).
- Intellectual property concerns (schematics are trade secrets).
- Revenue impact (longer-lived products mean fewer sales).
- Warranty complications.

Both sides have engineering points. The debate is real.

---

**3. Modular Design**

Introduce modular design:

> "**Modular design** means building a product out of separable parts that can each be replaced or upgraded individually. A modular product has a long life because you only have to swap the broken part, not the whole product."

Examples of modular design done well:

- A desktop computer: when the hard drive fails, you swap the hard drive. When you want more memory, you add RAM. The chassis can last decades.
- An IKEA bookshelf: replacement parts are available indefinitely; you can rebuild it.
- A bicycle: every part can be replaced individually with standard parts.
- A car engine: complex, but every component is theoretically serviceable.

Examples of modular design not used (or actively avoided):

- Most smartphones (battery, screen, ports all integrated and sealed).
- Many wearable devices.
- Many home appliances (washing machines often have control boards that fail and aren't economically replaceable).

The **Fairphone** (a Dutch company) is a deliberate modular-design counterexample for smartphones. Most major phone makers don't follow that pattern because it conflicts with the replacement-driven revenue model.

---

## Independent Practice

### Goal

Audit product longevity in your environment and continue terrarium observations.

### Activities

**1. The Longevity Audit**

Walk through your home. Find 10 products you regularly use. For each, estimate:

- How long it has been in use.
- How long you expect it to last total.
- Whether it can be repaired if it breaks.
- Whether it's modular (parts replaceable) or sealed.

Sample table:

| Product | Years owned | Expected total life | Repairable? | Modular? |
|---------|-------------|---------------------|-------------|----------|
| Cast iron pan | 5 | 50+ | Yes (re-season) | N/A |
| Smartphone | 2 | 3-4 | Limited | No |
| Bicycle | 8 | 30+ if maintained | Yes | Yes |
| Kitchen toaster | 6 | 8-10 | Hard to fix | No |
| Wooden chair | 20 | 50+ | Yes | Sort of |

Tally the results. How many of the products you use are designed for long life vs. short life?

---

**2. Find a Repair Story**

Talk to a parent, grandparent, or family friend. Ask: "What's something you've owned for more than 20 years that still works? What's the story?"

Often this story includes some repair history — a part replaced, a refurbishment, a refinish. That's the longevity story in action.

---

**3. Terrarium Check**

Week 10 of terrarium observation. Open the Systems Log:

- Day count: __
- Condensation, soil, plants — any changes?
- Reflect: how long can the terrarium last if you don't open it? (Properly built sealed terrariums have been documented to last for decades — the most famous example, David Latimer's bottle garden, has been sealed since 1972.) The terrarium is the ultimate longevity demonstration.

### Systems Log

> **Today's System:** Product longevity and right-to-repair
>
> **Lifespan math:** If we doubled the average lifespan of [pick a product], we would halve the manufacturing demand on ____.
>
> **The oldest thing in my house that still works:** ____
>
> **Why it lasted:** ____
>
> **Something I own that's hard to repair:** ____
>
> **Why it's hard:** ____
>
> **Terrarium update:** ____

**Sentence starters for younger learners:**
- "This thing has lasted a long time because ___."
- "This thing broke easily because ___."

### Reflection Questions

- If you could redesign one product you use to last 10x longer, what would you choose? What would you have to change about it?
- Why do you think manufacturers don't all design for long product life? (Hint: the answer is about incentives, not morality.)
- If everyone in your town suddenly started repairing instead of replacing, who would gain and who would lose? What about the environment?

---

## Check for Understanding

After this week, check whether the learner can:

1. **Explain the math:** "Why does product lifespan affect throughput?" (Looking for: longer-lasting products mean fewer manufactured per year.)
2. **Recognize designed obsolescence:** "Can you give an example of a product that's designed to be replaced rather than fixed?" (Looking for: any reasonable example.)
3. **Describe right-to-repair:** "What is right-to-repair?" (Looking for: the idea that owners should be able to fix what they buy, with access to parts, manuals, and tools.)

If the learner can do at least 2 of these, they're ready for Week 14.

---

## Pause and Notice

:::note What Matters Here
Ask:

> "We have an entire industry built around making things that don't last. That's not because the engineers don't know how to make things last — they absolutely do. It's because the system rewards short-lived products."

This is a structural observation. The engineers, the executives, and the customers are all responding to the same set of incentives. Changing the system requires changing the incentives — which is exactly what right-to-repair laws try to do.

> "Whether or not you support those laws is up to you. What's not in dispute is that product longevity is one of the most leveraged ways to reduce environmental load. Each year a product lasts is a year of avoided extraction and a year of avoided disposal."

**This week's takeaway:** Throughput equals demand divided by lifespan. Doubling lifespan halves throughput. Long product life is an engineering and policy lever — not just a personal habit.
:::

---

## Spiral Review

:::tip Connecting to Earlier Weeks
- **From Week 12 (circular design):** Right-to-repair extends product life *before* recycling becomes necessary. It's the loop-closing step that comes earlier in the lifecycle.
- **From Week 11 (linear API):** A linear API has no incentive to extend product life — replacement is the business model.
- **From Week 7 ("away" audit):** Many of the items in your audit were probably designed for short life. Imagine your audit if everything were designed to last 10x longer.
:::

---

:::tip Simplify (Ages 8–9)
Use the longevity audit and the family story. Skip the right-to-repair politics. The takeaway: "Some things are made to last; some things are made to break. Things that last need less manufacturing, less throwing away."
:::

:::tip Extend (Ages 10–12)
Look up the **Fairphone** project. It's a smartphone designed for repairability — modular components, screws instead of glue, replacement parts available. Look at its specifications and compare them to a more typical phone. Why isn't every phone built this way?
:::

:::tip Vocabulary This Week
**Designed obsolescence** • **Right-to-repair** • **Modular design** • **Product longevity** • **Throughput reduction**
:::

## Preview of Next Week

Next week is a practice run for the capstone. Each student picks one specific open-loop process in their environment and sketches a redesign. It's a small version of what the next four weeks (the capstone) will be.
