# Flexionics — Technology, Products & Competitive Advantages
*Research compiled: 2026-03-17 | Updated: 2026-03-18*

> [!IMPORTANT]
> **Naming update (2026-03-18):** Per pitch presentation feedback, proprietary product names (Iceberg, Harbour, Northwatch, Polaris, Compass) have been replaced with generic descriptive names in all **pitch-facing text**. Original proprietary names are preserved in `<!-- ORIGINAL NAME: ... -->` comments after each heading. This is for presentation only — one-on-one discussions can use the original names.

> [!NOTE]
> **Bitcoin/mining reference update (2026-03-18):** All direct references to "Bitcoin mining" have been removed from pitch-facing text per feedback. The underlying technology and business model are unchanged — we use interruptible high-performance computing (HPC) load as the flexibility mechanism. Bitcoin was the original implementation; AI/HPC inference is the forward-facing narrative. Original references are preserved in `<!-- BITCOIN REFERENCE REMOVED: ... -->` comments.

---

## Core Innovation: The "FlexBox"

The FlexBox is Flexionics' flagship product. It is a proprietary software-hardware system that converts **interruptible high-performance computing load** into a **fully controllable grid asset** — effectively an unlimited virtual battery with no chemicals.

<!-- BITCOIN REFERENCE REMOVED: "converts interruptible compute load (Bitcoin mining today, AI inference tomorrow)" — replaced with "interruptible high-performance computing load" for pitch presentation. Original phrasing may be used in 1-on-1 discussions. -->

### FlexBox Technical Specs
| Capability | Specification |
|-----------|--------------|
| Response Time | **<0.7s** (sub-second to grid operator signals) |
| Support Duration | **Unlimited** — no battery chemistry limits, no charge cycles |
| Safety | **Zero chemicals / zero fire risk** |
| CapEx | **~$250–$350k per MW** (vs $700k–$2M for BESS) |
| Gross Profit per MW | **~$310k/year** |
| Payback Period | **~18 months** |
| Grid Programmes | FCR-D, FCR-N, mFRR-up, mFRR-down, aFRR, FFR |
| Compliance | First worldwide qualified for FCR-D, mFRR & FFR simultaneously |

---

## The AI Platform — Four Products

Flexionics has built an **in-house, 4-product AI intelligence stack** — the most advanced energy flexibility intelligence stack in Europe:

### Product 1: On-Site & Cloud Controller
<!-- ORIGINAL NAME: Iceberg (Iceberg Edge + Iceberg Harbour) -->
- **On-Site Controller (Edge):** Local controller at each physical site
  - Sub-200ms dispatch execution
  - Local storage for resilience during network interruptions
  - Deep telemetry: power meter readings every 10 seconds, compute logs every 60 seconds
  - 90% ramp tracking accuracy
  - No SLA constraints — unlimited grid participation
- **Cloud Fleet Manager (Harbour):** Centralised cloud layer above all site controllers
  - Fleet-level dashboard (single pane of glass)
  - Bid management with win-rate analytics
  - Evidence & audit trails for SVK, Bixia, Hansen
  - AI-narrative generation (logs → plain English)

### Product 2: AI Operations & Reporting Platform
<!-- ORIGINAL NAME: Compass -->
- Natural language querying ("Ask anything in plain English")
- Automated TSO bid submission and imbalance obligation reporting
- Revenue analytics across FFR, FCR-D, FCR-N, mFRR, aFRR
- TSO-ready compliance output (audit-ready SVK format)
- Prompt-based reporting (no manual log review)
- **Replaces a 3-person manual trading desk + reporting team**

**Metrics:**
- 5 Reserve Markets
- 80% mFRR Activation Rate
- 200+ GWh Delivered Since 2023

### Product 3: AI Health & Reliability Monitor
<!-- ORIGINAL NAME: Northwatch -->
- Early Warning Systems: detects degradation before it costs money
- AI-narrative generation: complex logs → readable event summaries
- Connectivity & stress monitoring
- Audit-ready timelines for regulatory compliance
- 24/7 automated monitoring — no human required

### Product 4: Fleet Deployment & Orchestration
<!-- ORIGINAL NAME: Polaris -->
- Synchronized deployments across fleet without service interruption
- Version control and visibility across all hardware nodes
- Staged rollouts: test → monitor → promote (enterprise cloud discipline)

### Platform Signal Flow (End-to-End)
```
TSO Signal → API Gateway (Bixia/Hansen) → On-Site Controller (0.7s dispatch) 
→ Cloud Fleet Manager (telemetry) → AI Operations Platform (analytics/bid mgmt) 
→ AI Health Monitor (health/compliance) → Fleet Orchestration (fleet management)
```

---

## AI in the Product (Required for EcoSummit Pitch)

Key AI applications Flexionics currently deploys:
1. **AI Optimizer:** Custom firmware with AI decision-making — instantly prioritises grid revenue or compute work based on price signals
2. **Predictive Analytics:** AI reads market prices, grid data, and weather forecasts to optimise participation without human intervention
3. **Health Monitor AI:** Transforms complex system logs into plain-language operational narratives
4. **Operations Platform NL:** Natural language querying of all operational data — operators ask questions in plain English
5. **Automated Bidding:** AI-driven bid submission via direct API to Hansen and Bixia every morning
6. **Ramp Tracking:** AI-validated setpoint vs. actual activation at 90% accuracy

**Key message:** *"No human trader could match our position or speed."*

---

## Three Revenue-Generating Solutions

Flexionics goes to market through three distinct solutions (all grounded in the FlexBox platform):

### Solution 1: Grid Flexibility (Own Sites)
Operating our own hybrid data centers in Sweden, delivering FCR-D, mFRR, aFRR, FFR services directly to SVK (Swedish National Grid). This is our proven, cash-positive model.

### Solution 2: Flexibility as a Service (FaaS)
We run **your asset's** flexibility. Data center owners and operators connect their assets to our platform. We handle TSO prequalification, daily bid submission, 24/7 monitoring, and compliance reporting. You receive the revenue. Full-stack operator — not software, not an aggregator. We own the market relationship end-to-end.

### Solution 3: Wind Farm Partnerships
Wind operators in Nordic region face curtailment losses, imbalance penalties, and negative spot price exposure. Flexionics installs compute infrastructure **behind your meter** to absorb excess generation. The curtailment loss is eliminated, reversed into passive revenue. We manage all TSO interactions — wind operators need zero grid expertise.

---

## The Market Opportunity

| Metric | Value |
|--------|-------|
| EU flexible consumption (2021) | 330 TWh |
| EU flexible consumption (2030) | 864 TWh (+162%) |
| EU flexible consumption (2050) | 1,350 TWh |
| Ancillary services markets CAGR | >30% |
| Global ancillary services market (2030) | **$300B+** |
| Intermittent energy by 2030 | **42% of global production** |
| AI data center demand surge | Seeking 10s of GW globally in Europe; 3+ year grid wait |

**Flexionics bridges the gap:** Each 1 MW of Flexionics flexibility can enable ~5 MW of imbalance management for both generation AND AI load.

---

## Future Revenue Expansion: The HPC/AI Data Center Opportunity

Current compute use: **High-performance computing & interruptible AI inference** (fungible, interruptible)
Future compute use: **Dedicated AI inference + High-Performance Computing (HPC)**

<!-- BITCOIN REFERENCE REMOVED: "Current compute use: Bitcoin mining (fungible, interruptible)" — replaced with HPC/AI framing. Bitcoin was the original implementation and gave Flexionics its early market entry advantage. This can be discussed in detail in 1-on-1 conversations with sophisticated investors who need to understand the compute substrate. -->

As AI inference revenue per kWh surpasses traditional compute:
- **Convert** existing power infrastructure to AI compute
- **No new permits, no new cables** — same assets, higher value
- Building permits for new data centers in Europe: 3+ year wait
- Flexionics already has the grid connection and certification

---

## International Expansion

- **Current Markets:** Sweden (SE1 & SE2 grid region — Boden, Utansjö)
- **Europe:** Nordic markets (Denmark, Norway, Germany in pipeline)
- **Asia:** Japan — active outreach for partnerships (high renewable penetration, low inertia markets)
- **Colocation Partners:** Seeking wind/solar asset owners to host FlexBox on grid connections

---

## Sustainability + Heat Reuse

- **Zero chemical risk** — no lithium, no hazardous materials
- **Heat reuse** from data centers for agriculture, forestry, district heating
- **Tax reimbursement** of ~$31.2/MWh from heat reuse programmes
- **Potential benefit:** Up to $270k p.a. per MW from heat reuse alone
