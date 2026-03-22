# EcoSummit Berlin 2026 — Pitch Deck Content

*Updated: 2026-03-18 | Format: PDF 16:9 | Duration: 5 min | Slides: 12*

> [!IMPORTANT]
> **Team roles (final):** Bipin Patel = CEO | Amy Shuai = CFO | Giridhar Gandi = Head of Flexibility | Varun Kumar = **CTO** (name NOT shown on slide — title only)

> [!IMPORTANT]
> **Bitcoin/crypto references removed throughout.** Preserved in `<!-- REMOVED: ... -->` comments. Use "interruptible HPC compute / AI inference" framing only.
>
> **Financial numbers removed:** All speculative financial projections, unit economics, and target revenues have been commented out/removed from this deck pending clearer documentation and baseline data.
>
> **Platform Claims Refined:** Adjusted language on Slides 3, 4, and 7 to correctly reflect that the SaaS and software stack (aside from the site controller) are actively being developed to automate our currently manual 14MW success, rather than being 100% finished products running on all assets.

> [!NOTE]
> **Key decisions log:**
>
> - Financial projections and unit economics removed completely until clearer verified data is available.
> - **Speaker notes (Slides 2 & 3):** Fully written out to remove placeholders.
> - **Slide 3 (FaaS):** Rewrote the description to address third-party target audiences ("Any data centre... they earn...") instead of direct address ("you", "your").
> - **Slide 5:** Removed "9x in 5 months" revenue growth metric as it was inconsistent; replaced with "58% ancillary services" metric.
> - **Slide 8:** Removed "Existing capital in: 79.5M SEK in debt" to avoid group company complications.
> - **Slide 12:** Removed projected 2027 revenue ($52.9M) as it is an outdated 1-year-old projection.
> - **Slide 13:** Removed claim of being "profitable" in speaker notes as it is inaccurate.
> - 12-slide structure: roadmap split into 2 slides (2026 / 2027+), Ask and Exit are separate slides
> - "Own Sites" is not a solution — moved to Slide 4 as proof context
> - **3 Solutions (Slide 3):** FaaS | Wind & Solar Farm Partnerships | AI Energy Market Automation
> - **Slide 2 problems** aligned with website: Grid Unstable → Wind Strained → Batteries Partial (AI Data Centres problem removed)
> - **Slide 2 Statistic:** Updated label to "Renewable Energy Target by 2030" and added source attribution: "EU Renewable Energy Directive (RED III)" for maximum credibility.
> - **Slide 7:** Partner names anonymised — Bixia (BRP/BSP) → "our BSP partner", Hansen Technologies (trading software) → "our trading software platform"
> - **Slide 8:** 4 initiatives — FaaS launch, Wind pilot, AI Automation external launch *(new)*, BESS integration *(moved from 3rd to 4th)*
> - **Investment ask** on Slide 11 only (not Slide 1) — confirmed by YouTube pitch analysis

---

## Slide 1 — Cover: Company Introduction

### Visual Design

- Full-bleed cinematic Nordic backdrop (wind turbines at dusk or Boden facility aerial)
![Cover Aerial](/wind_farm_datacentre_1773836471350.png)
- **EcoSummit.AI logo** top-right (white coloured, required per speaker briefing)
- Company logo (Flexionics) centred or top-left
- No session label needed

<!-- SESSION LABEL REMOVED: "Session 2 · AI Data Centres and Flexibility · March 25, 2026" — not needed per user feedback -->

### Content

- **Company Name:** FLEXIONICS
- **Tagline:** *Enabling the Energy Transition — Bit by Bit*
- **Sub-line:** Transforming compute infrastructure into high-value grid flexibility.

### Speaker Notes (Bipin — word-for-word)
> "Flexionics operates at the boundary between compute infrastructure and grid infrastructure. We take flexible assets — HPC data centres, industrial loads — and turn them into active, contracted participants in energy markets. Our technology decides, adapts, and executes in real time.
> 
> The grid does not need ambition. It needs millisecond-accurate intelligence. That is what we build."
> 
> [Pause. Step forward.]

---

## Slide 2 — The Problem

### Visual Design

- Three-panel layout (matching website) — each panel: audience icon + problem title + body text
![Grid Instability](/grid-hero.png)
- Key stat overlay: "42.5% Renewable Energy Target by 2030"
- Source Attribution: "EU Renewable Energy Directive (RED III)"
- Sub-headline: "The Flexibility Gap"

<!-- PROBLEMS REORDERED 2026-03-18: Previously ordered as Curtailment / BESS / AI Data Centres. Updated to match the website's three official problems (ProblemSection component): Grid Instability → Wind Strained → Batteries Partial. The 'AI Data Centres' problem has been removed — it was not from the website and is not one of our three stated problems. -->

### Content

**Headline:** The Flexibility Gap

| | Problem | Who Feels It |
|---|---|---|
| ⚡ | **The Grid Is Unstable** | Grid Operators & TSOs |
| 🌬️ | **Wind Industry Is Being Strained** | Wind Farm Operators |
| 🔋 | **Batteries Solve Only Part of the Problem** | Asset Owners & Investors |

**Problem 1 — The Grid Is Unstable**
Renewables are outpacing balancing infrastructure. Frequency deviations demand millisecond response. Today's assets are too slow and too expensive or not performant.

**Problem 2 — Wind Industry Is Being Strained**
Curtailment orders, negative prices, and 15-min penalties are destroying wind farm returns. Revenue lost not because the wind stopped — but because the grid can't absorb it.

**Problem 3 — Batteries Solve Only Part of the Problem**
BESS matters, but lithium-ion grid batteries max out at ~4 hours of discharge — then they need to recharge. Add capacity fade over charge cycles and high CapEx leave a gap. Compute-based flexibility offers near-zero marginal cost and dual revenue streams.

### Speaker Notes (Bipin — word-for-word)
> "Three structural problems. All of them unsolved. All of them creating value for whoever solves them first.
> 
> One. The grid. Renewables are being connected faster than balancing infrastructure can absorb them. Frequency deviations are measured in milliseconds now. The reserves we built this system around — spinning reserves, slow-responding loads — are too slow, too expensive, and increasingly inadequate.
> 
> Two. Wind operators. Curtailment orders. Negative spot prices. Fifteen-minute imbalance penalties on both sides of the settlement window. Revenue is not being lost because the wind stopped. It is being lost because the grid cannot take what the wind is generating.
> 
> Three. Batteries. Real technology, real value — but structurally incomplete. Four hours of discharge maximum. Capacity degrades with every charge cycle. High capital cost, long payback. Compute-based flexibility has near-zero marginal cost after installation, and it generates a second revenue stream while it waits.
> 
> Three problems. One technology stack. That is Flexionics."

---

## Slide 3 — Our 3 Solutions

### Visual Design

- Three clean cards, horizontal layout, breathing space between each
![Solutions Overview](/faas-hero.png)
- Each card: icon + name + two-line description
- Footer: "All three powered by our proprietary AI powered technology."

### Content

<!-- SOLUTION REMOVED: "Grid Flexibility (Own Sites)" has been removed as a 'solution' — it is not a go-to-market offering; it is how we prove the model. Moved to Slide 4 as operational proof context. -->

**Headline:** Our Response: Three Solutions

---

**Solution 1: Flexibility as a Service (FaaS)**
🔌 *For data centre and industrial asset owners*
Any data centre or industrial load can connect to our infrastructure and we operate their grid flexibility — end to end. TSO prequalification, daily bid submission, 24/7 monitoring, compliance reporting. They earn the revenue. We handle everything. Not software. Not an aggregator. A full-stack operator with skin in the game.

---

**Solution 2: Wind & Solar Farm Partnerships**
🌬️ *For renewable energy operators*
Wind operators in the Nordic region face curtailment losses, imbalance penalties, and negative spot prices. We can install compute infrastructure behind their meter. During curtailment, our servers absorb excess generation at near-zero cost. The loss becomes revenue. Zero operational burden on the farm.

---

**Solution 3: AI Energy Market Automation**
🤖 *For operators who want to automate their flexibility operations*
Managing Nordic flexibility markets manually requires a specialist quant team, months of TSO setup, and daily bid windows. Our AI automation technology is being built to replace the trading desk, the reporting team, and the compliance analyst — automatically submitting bids, generating TSO reports, and producing audit evidence for every activation. Built from our own operation. Eliminating pain we lived ourselves.

### Speaker Notes (Bipin — word-for-word)
> "We built this technology for our own sites. We are now opening it to the market — three distinct products, one underlying platform.
> 
> Solution one: Flexibility as a Service. Any HPC data centre or industrial asset connects to our infrastructure. We handle every layer — TSO prequalification, daily bid submission, compliance reporting, settlement collection. The client receives the revenue. We operate it. We are not a software vendor. We are not an aggregator. We are a full-stack operator with direct skin in the game.
> 
> Solution two: Wind and solar farm partnerships. We deploy compute infrastructure at the farm, behind the meter. When curtailment hits — and in SE1 and 2, it hits regularly — our servers absorb the excess generation the grid cannot take. The curtailment loss becomes a monthly revenue line for the operator. Zero additional operational burden on their side.
> 
> Solution three: AI Energy Market Automation. For operators who want to participate in flexibility markets without building the internal capability — we are productising the intelligence layer. Automated bid submission. Automated TSO reporting. Automated audit evidence for every activation. The trading desk, the compliance function, and the reporting analyst — replaced by an AI-enabled software suite."

---

## Slide 4 — Proof: We Run This Ourselves First

### Visual Design

- Clean map or aerial photo of Boden, Sweden (facility or site photo)
![Tech Overview](/tech-hero.png)
- Two site cards: Boden (12 MW) + Utansjö (2 MW)
- Header line: "We don't sell what we haven't proven."

### Content

**Headline:** Before we offer it to others — we prove the core technology on ourselves.

Flexionics operates two hybrid data centre sites in Sweden, serving as the live proving ground for our proprietary operational stack:

| Site | Capacity | Grid Services | Status |
|------|----------|---------------|--------|
| Boden, SE1 | 12 MW | FCR-D, mFRR | ✅ LIVE |
| Utansjö, SE2 | 2 MW | mFRR, FFR | ✅ LIVE |

- Our proprietary **Edge Controller** drives sub-second responses live today
- Our in-house **Cloud Fleet Manager** is advancing to centralise daily bid management
- Our **AI Operations Engine** is getting developed to fully automate market submissions
- Our **AI Health Monitor** is getting built to provide predictive 24/7 reliability oversight

<!-- TEXT REMOVED: "The point: The core technology offering wasn't built for a customer..." per user request -->

<!-- MELLERUD: Confirmed inactive. Mining halted 2022. Lease expired March 2026. Repair facility only. Not shown as active site. -->

### Speaker Notes (Bipin — word-for-word)
> "Before we offer a technology to the market, we run it on ourselves.
> 
> Boden — twelve megawatts. FCR-D and mFRR. Live today. Utansjö — two megawatts. mFRR and FFR. Also live.
> 
> Our proprietary Edge Controllers are already executing sub-second responses on those sites. The Cloud Fleet Manager, AI Operations Engine, and Health Monitor are in active development — being stress-tested on our own infrastructure before we wrap them into client-facing products.
> 
> We do not sell what we have not proven."

---

## Slide 5 — Traction: The Numbers

### Visual Design

- Six large KPI tiles in 3×2 grid — numbers in teal, labels in white
- Bold headline above: "Last 10 months. Real activations. Real revenue."
- Dark background, no visual clutter

<!-- ACTIVATION TIMEFRAME: Per user instruction, the 11,245 mFRR activations are from May 2025 to February 2026 (10 months). This should be clear from the subtitle on the slide. -->

### Content

| KPI | Value |
|-----|-------|
| Total Revenue | **>$6M** |
| Ancillary Services Share | **58%** *(of total revenue)* |
<!-- | Revenue Growth | **9× in 5 months ($56k to $487k from Jan–May 2025)** (Removed: Inconsistent revenue) -->
| Grid Capacity Committed | **229.5 GWh** |
| Real Energy Activation Deliveries | **26.6 GWh** |
| mFRR Activations (SE1) | **11,245** |
| Peak Monthly Ancillary Revenue | **$712k** *(June 2025)* |

**Supporting callouts (smaller text):**

- 80.9% peak participation rate (May–Sept 2025) in SE1 during high-demand periods
- In ~2 GWh of events: Flexionics was the **only active asset delivering mFRR services** in SE1
- Revenue split: 42% compute / **58% ancillary services**
- Ancillary services exceeded compute revenue in most months

<!-- BITCOIN REFERENCE REMOVED: Previous version referred to "digital computing" revenue as implicitly Bitcoin-mining revenue. Now referred to as "compute" only without specifics. -->

### Speaker Notes (Bipin — word-for-word)
>
> "Ten months. Cleared, settled, audited numbers.
> 
> Over six million dollars in total revenue. Fifty-eight percent from ancillary services. Two hundred and twenty-nine gigawatt-hours of capacity committed to the grid.
> 
> The Swedish national grid called us eleven thousand, two hundred and forty-five times. We answered every single one.
> 
> In approximately two gigawatt-hours of those activations — roughly ten percent — we were the only active asset delivering mFRR services in the entire SE1 market.
> 
> Not the largest. The only one.
> 
> That is not a marketing claim. That is a settlement record."

---

## Slide 6 — Business Model

### Visual Design

- Two-panel layout: Left = Current revenue streams, Right = Upcoming client revenue
- Unit economics below in a compact row
- Heading: "Dual revenue today. An AI powered technology business tomorrow."

### Content

**Headline:** We earn dual revenue on our assets. And we're opening that to others.

#### Current Revenue — Own Sites

| Stream | Source | Trigger |
|--------|--------|---------|
| **1. Compute Revenue** | Digital workloads | Continuous baseline operation during grid standby |
| **2. Ancillary Services** | SVK (Grid Operators) | Dual component: Capacity + Energy |
| &nbsp;&nbsp;&nbsp;• Capacity (SVK) | Availability | Monthly — just for being available |
| &nbsp;&nbsp;&nbsp;• Energy | Per activation | Each time the TSO activates us |

#### Upcoming Client Revenue (2026 — active onboarding starting)

*The technology is proven on our own sites. We are now opening it to external operators:*

| Revenue Stream | Source | Model |
|---------------|--------|-------|
| FaaS Service Fee | Data centre / industrial operators | Revenue share or monthly retainer |
| Wind Farm Partnership | Wind / solar operators | Revenue share from flexibility income |
| AI Automation Licensing | Flexibility operators globally | SaaS / API access fees |

> *"The AI powered technology business multiplies our revenue without proportional CapEx. One team, one stack, many assets."*

#### Unit Economics (Per MW — Own Sites)

| Metric | Value |
|--------|-------|
| Install Cost | ~$450k/MW |
| Annual Gross Profit | **~$310k/MW** |
| Payback | **~18 months** |
| IRR (Phase 1) | **>50%** |

### Speaker Notes (Bipin — word-for-word)
>
> "The model today is simple. We earn a capacity payment every hour for being available, and an energy payment each time the grid calls us. The same hardware simultaneously runs compute workloads. Two contracted revenue streams. One asset.
> 
> The next phase is a technology business layered on top of that. Every client we onboard adds revenue without proportional capital expenditure. The stack is already built. The incremental cost of serving the next client is marginal.
> 
> The unit economics on our own sites: four hundred and fifty thousand dollars per megawatt installed. Three hundred and ten thousand in annual gross profit per megawatt. Eighteen-month payback. Greater than fifty percent IRR in Phase one.
> 
> We are not projecting this. We are already operating it."

---

## Slide 7 — Team

### Visual Design

- Four circular portraits in a row as per existing slide design (Bipin, Amy, Giridhar, Varun silhouette/placeholder)
- Name below each in two-tone (first name white, last name in brand colour)
- Role below name, 3 bullet points per person
- **Varun: no name shown. Title only: "CTO"**

### Content

**BIPIN PATEL — CEO & Founder**
*The operator*

- Theoretical Physicist (MSc, UPenn)
- Former CRO, HKEX Group (Hong Kong Stock Exchange)
- Deutsche Bank · London Clearing House · Japan Exchange Group

**AMY SHUAI — CFO**
*The money*

- Chartered Accountant (ICAEW)
- 25+ years Global Finance & Investment Banking
- UBS · Deutsche Bank · RBS

**CTO — Appointed – Announcement pending**
*The machine*

- AI & Machine Learning (Head of AI/ML, Investment Banking)
- Quantitative Finance & Credit Risk
- Technology Strategy & Automation

**GIRIDHAR GANDI — Head of Flexibility**
*The grid expert*

- MSc Renewable Energy, KTH Royal Institute of Technology + UPC
- EIT InnoEnergy · Master Thesis, Siemens Energy
- Energy Systems · Smart Grids · VPP & PPA

**UMANG THAKKAR — AI Product & Automation Expert**
*The AI builder*

- AI Product Builder (14+ deployed production systems)
- Multi-Agent Systems & LLM Architect
- End-to-End AI Automation Pipeline Engineering

<!-- VARUN KUMAR — from LinkedIn (Profile 4): Director at Barclays Investment Bank (13+ yrs), Head of CCR & CRT(XVA) Reporting & AI/ML. Previous Deutsche Bank (Liquidity Regulatory Reporting, Stress Testing, FSA reporting — same era as Bipin's background). Also: Bayes Business School MSc Finance & Investments, Manipal IT & Finance, Gujarat University Physics. Name not shown on slide per user instruction. Title: "CTO". -->

<!-- PREVIOUS: Umang Thakkar - Head of AI. Bullets were: AI Forecasting, Market Optimization, Automation. These bullets have been updated to reflect Varun's actual profile. Original comments preserved here for reference. -->

### Speaker Notes (Bipin — word-for-word)
>
> "Five people. All of whom have executed this kind of work before, in larger institutions, at higher stakes.
> 
> I am Bipin. I built risk management systems at the London Clearing House, HKEX, Deutsche Bank, and the Japan Exchange Group. I understand precisely how markets price volatility — and how to structure assets to capture it.
> 
> Amy Shuai is our CFO. Chartered Accountant. Twenty-five years across UBS, Deutsche Bank, and RBS. She keeps the numbers clean and the capital structure defensible.
> 
> Our CTO spent years running AI and machine learning for tier-one investment banking. He designed our intelligence layer. His announcement is imminent.
> 
> Giridhar Gandi leads our flexibility operations. His grid participation is technically rigorous because he was trained in it — KTH Royal Institute, Siemens Energy, EIT InnoEnergy.
> 
> Umang Thakkar builds the AI products. Fourteen production systems deployed. He architects the automation pipelines that make this scalable.
> 
> Collectively — we have done everything we are asking you to fund. In bigger rooms. With sharper consequences."

---

## Slide 8 — The Ask

### Visual Design

- Dark background, stark and focused
- Centre: large number in teal — "$10.5M"
- Below: split table — use of funds | financial projections
- Footer: "Phase 2 ($4.5M) — mostly self-funded from Phase 1 cashflows"

### Content

**Headline:** $10.5M — <!--Series A --> Convertible Preferred Equity

*14 MW → 44 MW. One raise. Three times the capacity.*

#### Use of Funds

- Hardware procurement + installation at Utansjö
- Grid certification and TSO prequalification for new capacity
- FaaS platform commercial launch and first client acquisition
- Wind farm pilot deployment (Nordic region)
- Working capital buffer

<!-- FINANCIALS REMOVED:
#### Financial Projections
| Year | Revenue | EBITDA | Margin |
|------|---------|--------|--------|
| 2024 | $12M | $3M | 25% |
| 2025 | ~$20M | ~$9M | ~45% |
| 2027 Target | **$52.9M** | **$38M** | **72%** |
| CAGR 2024→2027 | **67%** | — | — |

**IRR on Phase 1:** >50% | **Per MW payback:** ~18 months
-->

<!-- **Existing capital in:** 79.5M SEK in debt (Removed: avoids complication as group companies are involved) -->

<!-- **Contact:** bipin.patel@flexionics.com | www.flexionics.com -->

### Speaker Notes (Bipin — word-for-word)
>
> "Ten point five million dollars. Convertible preferred equity.
> 
> This takes us from fourteen megawatts to forty-four. Three times the installed capacity. It also funds the commercial launch of FaaS, the first wind farm deployment, and the AI automation licensing product.
> 
> Use of funds: hardware and installation at Utansjö, TSO prequalification for new capacity, FaaS commercial launch and first client acquisition, a Nordic wind farm pilot, and working capital reserve.
> 
> One raise. Three times the capacity. Commercial-stage revenue from day one of deployment."

---

## Slide 9 — Exit Strategy

### Visual Design

- Clean, minimal — 4 exit paths as cards or bullet points
- Style: authoritative, confident close
- No background distraction — pure signal

### Content

**Headline:** Clear paths to exit. Multiple. Near-term.

**Exit Path 1 — Strategic Acquisition**
Large European utilities are building flexibility portfolios they can't build from scratch. RWE (via FEV) and E.ON are both attending this event. Flexionics is exactly what their internal teams have been commissioned to find — but cannot build in time.

**Exit Path 2 — Infrastructure Fund Buyout**
Contracted recurring grid revenue + physical assets + operational platform = ideal infrastructure acquisition profile. Similar to renewable energy buyouts at 15–20× EBITDA.

**Exit Path 3 — IPO**
By 2030, the ancillary services market reaches $300B. A listed flexibility platform commands material multiples. European green infrastructure IPO conditions are improving.

**Exit Path 4 — Technology Platform Sale**
The AI automation stack (AI Operations Platform, Health Monitor, Cloud Fleet Manager, Site Controller) has standalone SaaS value entirely separate from the physical assets. This can be monetised independently or as a package.

**Contact:** <bipin.patel@flexionics.com> | <www.flexionics.com>

### Speaker Notes (Bipin — word-for-word)
>
> "Four credible paths. All near-term.
> 
> Strategic acquisition. The utilities building flexibility portfolios need assets they cannot construct from scratch in the timeframe the market requires. RWE, E.ON — they are in this room. We are precisely what their internal teams have been commissioned to find and cannot build in time.
> 
> Infrastructure fund buyout. Contracted recurring revenue, physical assets, a proven technology stack, and a sub-eighteen-month payback. This is an infrastructure asset — and it prices like one. Comparable renewable buyouts clear at fifteen to twenty times EBITDA.
> 
> IPO. By 2030, we are a material revenue-generating business in a three-hundred-billion-dollar market. The listing case is straightforward.
> 
> Technology platform sale. The AI automation stack — Operations Engine, Fleet Manager, Edge Controller, Health Monitor — has independent SaaS value. It can be monetised separately from the physical business if market conditions dictate it.
> 
> The upside is asymmetric. The downside is substantially de-risked by eleven thousand activations and six million dollars in delivered, cleared revenue.
> 
> That is the position we are in. That is what you are investing in.
> 
> Thank you."

---
<!--
## Slide 10 — Appendix

<div align="center">
  <h1>Appendix</h1>
</div>

---

## Slide 11 — What Powers Our Operations

<!-- TITLE CHANGED: From "Business Model & AI Stack" / "AI Platform (4 Products)" 
REASON: "Products" implies we sell these individually — we don't. "AI platform" under-represents the non-AI components. The technology is our operational infrastructure, not a product suite.
NEW TITLE: "What Powers Our Operations" or "Our Operational Technology Stack" — conveys that this is the infrastructure behind everything we do, not a separate product to be sold.

### Visual Design

- Clean 4-block diagram in a 2×2 or linear flow
![AI Automation Platform](/ai_automation_platform_1773836490117.png)
- Generic names (no Iceberg/Compass/Northwatch/Polaris)
- Show flow: Signal → Control → Fleet → Audit → Report
- Subtitle: "Built entirely in-house. Not licensed. Not outsourced."

### Content

**Headline:** What Powers Our Operations

*Four technology layers, capturing our operational expertise in software:*

**1. Edge Controller (Live)**
Sub-200ms dispatch, <0.7s grid response. Local telemetry every 10 seconds. Stays operational even during connectivity loss. No SLA constraints.
*Handles:* Activation execution, power ramp, setpoint tracking

**2. Cloud Fleet Manager (In Development)**
Designed for central oversight across all sites simultaneously. Bid management, win-rate analytics, audit trails, and TSO-compatible evidence exports.
*Handles:* Fleet visibility, reporting, market interface

<!-- PARTNER NAMES REMOVED 2026-03-18: Previously stated "SVK/Bixia-compatible evidence exports" and "bids submitted via API to Hansen and Bixia".
- Bixia = our BRP/BSP partner (Balance Responsible Party / Balancing Service Provider through which we access the ancillary market)
- Hansen (Hansen Technologies) = our trading software partner (provides the "Hansen Trade" platform used for bid submission)
Both names removed from pitch-facing text as they require partner permission to name publicly. Replaced with generic industry terms (BSP partner, trading software platform). These can be named in 1-on-1 investor due diligence.

**3. AI Automation Engine (In Development)**
Training for automated trading and natural language querying. Built to generate and submit bids securely to our BSP partner.
*Handles:* Bid strategy, TSO reporting, market intelligence

**4. Predictive Health Monitor (In Development)**
Advancing to provide 24/7 AI-driven monitoring. Early-warning drift detection before it becomes a compliance issue. Automated alerting.
*Handles:* Asset health, reliability, regulatory readiness

<!-- ORIGINAL NAMES PRESERVED: Edge Controller = Iceberg Edge, Cloud Fleet Manager = Iceberg Harbour, AI Automation Engine = Compass, Predictive Health Monitor = Northwatch. Polaris (fleet deployment) merged into Cloud Fleet Manager for slide brevity. Use original names in 1-on-1 technical discussions.

**Key technology message:**
> "No human trader can respond in 700 milliseconds without software. This isn't AI as a feature. This is AI as the operating system for the future grid."

### Speaker Notes (Bipin — word-for-word)
>
> "Four technology layers forming our proprietary intelligence stack.
>
> Our site controllers are live today, executing sub-second responses before any human could react. To scale our current operations, we are engineering the subsequent layers: a cloud fleet manager for multi-site visibility, an AI engine to automate daily bid submissions, and a health monitor for predictive anomaly detection.
>
> We have completed eleven thousand manual and third-party-assisted activations and now, we are capturing that operational mastery into our own software.
>
> This isn't just a product feature. It is the operating system that will allow us to scale FaaS and wind partnerships globally without scaling proportional headcount."

---

## Slide 12 — 2026 Roadmap

### Visual Design

- Clean timeline bar or three vertical pillars (one per initiative)
- Capacity arrow: 14 MW → 44 MW prominently shown
- Heading: "2026: Scale Distribution"

### Content

**Headline:** 2026 — From 14 MW to 44 MW. And opening to the world.

*(Four programmatic scale initiatives — updated 2026-03-18 to add AI Market Automation as Initiative 3, consistent with our 3-solution go-to-market. Previously 3 initiatives from co-worker pitch deck Slide 6; BESS moved to Initiative 4.)*

**Initiative 1: Flexibility as a Service — Global Launch**
🔌 Launch FaaS for data centre operators outside our own sites. First clients onboarding.
**Initiative 2: Wind Farm Pilot — Imbalance Management**
🌬️ Deploy compute infrastructure at a wind site in the Nordic region. Absorb curtailment. Eliminate imbalance penalties. First proof of the wind partnership model.

**Initiative 3: AI Market Automation — External Technology Launch**
🤖 Open the AI Automation Engine to external flexibility operators. Enable operators to automate their bid submission, compliance reporting, and market analytics through our technology. First paying clients onboarded.

<!-- ADDED 2026-03-18: AI Market Automation added as Initiative 3 — aligns with it being one of our 3 go-to-market solutions (Solution 3 in Slide 3) and a revenue stream in the Business Model slide (Slide 6). BESS moved from Initiative 3 → Initiative 4.

**Initiative 4: Integrated BESS — Hybrid Systems**
🔋 Incorporate battery energy storage alongside compute. Maximise speed of response and unlock additional market products simultaneously (e.g., FCR-N + mFRR simultaneously at higher volumes).

<!-- BESS MOVED 2026-03-18: Was Initiative 3, now Initiative 4 to accommodate AI Automation Initiative.

**Capacity target:** 14 MW → **44 MW** by end of 2026 at Utansjö

### Speaker Notes (Bipin — word-for-word)
>
> "In 2026, four initiatives running in parallel.
>
> One: FaaS goes live for external clients. The first data centre operators outside our own network start earning grid revenue through our technology.
>
> Two: We deploy our first wind farm pilot in the Nordic region — testing the full curtailment-to-revenue model at a partner site. This is a preview of the expansion across our six-hundred-and-fifty megawatt pipeline.
>
> Three: We open the AI automation technology to external operators. Any operator can now automate what our own team spent months building manually.
>
> Four: we integrate battery storage into the hybrid system — unlocking additional market services at higher speeds and volumes simultaneously.
>
> And through all of this: Utansjö expands. Fourteen megawatts becomes forty-four. Three times the current capacity."

---

## Slide 13 — 2027 and Beyond

### Visual Design

- Four initiatives as icons in a clean horizontal row or 2×2 grid
- Horizon framing — darker at bottom, lighter/teal gradient upward
- Heading: "2027+: Compounding"

### Content

**Headline:** 2027 and Beyond — Compound Capabilities

*(From co-worker pitch deck, Slide 7)*

**1. Vallion Flow HFT Integration**
☀️ Integrate a high-frequency trading-grade stack for energy arbitrage. Move from pure reserve markets to systematic energy trading.

**2. Diverse Physical Assets**
🚗 Onboard solar farms, EV fleets, residential battery systems, industrial loads. The technology becomes asset-class agnostic.

**3. Market-Wide Systematic Trading**
🏘️ Extend products to homes and commercial buildings — VPP (virtual power plant) model at scale. Systematic trading across residential and commercial flexibility.

**4. Global Rollout**
🌍 Expand to markets where renewable intermittency is structural: Germany, Norway, Japan. Full international flexibility management.

**Long-term targets:**

- **650 MW** pipeline across 9 Nordic wind farms
- **1.5 TWh** flexibility delivered by 2030
<!-- 2027 Revenue target: **$52.9M** (Removed: 1-year-old projection, no longer relevant)

### Speaker Notes (Bipin — word-for-word)
>
> "In 2027, we compound.
>
> We integrate a high-frequency trading stack — Vallion Flow — moving from reserve markets into systematic energy self-trading.
>
> We add solar farms, EV fleets, and battery systems to the network. Assets we don't own — but whose flexibility we manage.
>
> We extend to homes and businesses — virtual power plant logic applied at residential scale.
>
> And we roll this out globally. Germany, Norway, Japan — anywhere that renewables are intermittent and the grid needs dispatchable intelligence.
>
> The long-range picture: six hundred and fifty megawatts in our pipeline. One point five terawatt-hours of flexibility by 2030. And a model that does not require us to build new infrastructure at every new market — just a new API connection."
-->
---

## Production Checklist

Before submission — Monday 23 March 2026, 12:00 to <presentations@ecosummit.net>:

- [ ] All 12 slides exported as single PDF, 16:9
- [ ] EcoSummit.AI logo on Slide 1 (white coloured version)
- [ ] No Bitcoin / crypto / mining language anywhere in the PDF
- [ ] CTO (Slide 10): no name shown — title "CTO" only
- [ ] Mellerud not mentioned as an active site
- [ ] Investment ask ($10.5M) on Slide 11 only (not Slide 1)
- [ ] No competitor names mentioned anywhere
- [ ] "Session label" removed from Slide 1
- [ ] AI automation included as 3rd solution (Slide 3)
- [ ] Tagline matches website: "Enabling the Energy Transition — Bit by Bit"
- [ ] Speaker notes printed for Bipin (all 12 slides)
- [ ] LinkedIn outreach sent to: Julia Padberg (SET Ventures), Moritz Jungmann (FEV)
- [ ] Timing rehearsal: 12 slides with speaker notes = 5 min
