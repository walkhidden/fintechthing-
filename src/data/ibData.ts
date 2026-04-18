export const ibFunctionsData = {
  ma: {
    title: "Mergers & Acquisitions (M&A)",
    sub: "Advising companies on buying, selling, and merging",
    body: [
      "M&A is the crown jewel of investment banking. When Tata acquired Air India, or when Reliance bought Future Retail's assets, investment bankers on both sides were working around the clock — valuing the target, structuring the deal, negotiating terms, and managing regulatory approvals.",
      "As an M&A banker, your job is to be the trusted advisor. You tell a CEO whether an acquisition is worth the price, what price to pay, and how to structure the transaction so it creates value for shareholders.",
      "Buy-side: You represent the acquirer — building models to justify the price and find synergies. Sell-side: You represent the seller — running a structured auction process to maximize price."
    ],
    tags: ["Valuation Models", "Deal Structuring", "Due Diligence", "Negotiation", "Regulatory Filings"],
    example: {
      label: "India Example",
      text: "Tata Group's acquisition of Air India (₹18,000 Cr) in 2022 was advised by bankers who built complex valuation models factoring in Air India's debt, fleet value, brand, and route network. JM Financial and Ernst & Young played key advisory roles."
    }
  },
  ecm: {
    title: "Equity Capital Markets (ECM)",
    sub: "IPOs, rights issues, QIPs, follow-on offerings",
    body: [
      "ECM bankers help companies raise equity capital from public markets. This means managing IPOs, rights issues, QIPs (Qualified Institutional Placements), and follow-on offerings. ECM is one of the highest-profile divisions in an Indian IB because of India's booming IPO market.",
      "When Hyundai India raised ₹27,870 Cr in India's largest-ever IPO in October 2024, ECM bankers from Morgan Stanley, Citi, and HDFC Bank structured the offering, priced the shares, managed the bookbuilding process, and allocated shares to institutional investors worldwide.",
      "Key ECM roles: Bookrunner (manages the IPO), co-manager, syndicate desk (sells shares to investors), pricing and allocation committee."
    ],
    tags: ["IPO Management", "Bookbuilding", "QIP / Rights Issue"],
    example: {
      label: "2024 India IPO Record",
      text: "Hyundai India IPO at ₹27,870 Cr surpassed LIC's 2022 record. India had 75+ mainboard IPOs in 2024. ECM bankers are in maximum demand."
    }
  },
  dcm: {
    title: "Debt Capital Markets (DCM)",
    sub: "Bond issuances, NCD structuring, debt advisory",
    body: [
      "DCM bankers help governments and corporations raise debt — bonds, NCDs (Non-Convertible Debentures), commercial paper, and structured finance instruments. Every time Reliance Industries or the Government of India issues a bond, DCM bankers structure and place that debt.",
      "DCM is less glamorous than M&A but extremely large by deal volume. India's bond market is growing rapidly, and DCM bankers are critical in financing the infrastructure push (roads, airports, renewable energy).",
      "Key products: Investment-grade bonds, high-yield bonds, structured finance, infrastructure bonds, masala bonds (rupee-denominated offshore bonds), green bonds."
    ],
    tags: ["Bond Structuring", "NCD Issuances", "Green Bonds"],
    example: {
      label: "India Context",
      text: "India's corporate bond market is ₹43 lakh crore and growing. RBI is pushing bond market development. DCM bankers will be in high demand as India's debt markets mature."
    }
  },
  restructuring: {
    title: "Restructuring & Distressed",
    sub: "Helping troubled companies reorganize their finances",
    body: [
      "Restructuring bankers are called in when a company is in financial distress — unable to pay its debts, facing insolvency, or needing to dramatically reorganize its balance sheet. Under India's IBC (Insolvency and Bankruptcy Code), restructuring advisory has become a major growth area.",
      "Restructuring is counter-cyclical — it booms during economic downturns when other IB divisions slow. During COVID, restructuring teams at every major bank were working non-stop on stressed asset resolutions across aviation, hospitality, and retail.",
      "Key skills: Distressed valuation, creditor negotiation, IBC process management, financial restructuring plans, debt-for-equity swaps."
    ],
    tags: ["IBC Process", "Debt Restructuring", "Counter-cyclical"],
    example: {
      label: "India Growth Area",
      text: "IBC has processed 6,000+ cases since 2016. Resolution of Jet Airways, DHFL, Videocon, Reliance Capital all involved restructuring advisory teams. Growing fast."
    }
  },
  coverage: {
    title: "Industry Coverage Groups",
    sub: "Sector experts: Tech, BFSI, Healthcare, Infra, Consumer",
    body: [
      "Coverage bankers are industry specialists — they cover specific sectors like Financial Institutions Group (FIG), Healthcare, Technology, Infrastructure, Consumer & Retail, and Real Estate. They develop deep expertise in their sector and are the client relationship managers for companies in that industry.",
      "In India, the most important coverage groups are FIG (BFSI generates the most fees), Infrastructure, and Technology. A career in FIG coverage in Mumbai puts you at the center of every major banking, insurance, and NBFC deal in the country.",
      "Coverage vs. Product: Coverage bankers own client relationships. Product bankers (M&A, ECM, DCM) execute the actual transaction. Both work together on every deal."
    ],
    tags: ["FIG / BFSI", "Technology", "Infrastructure", "Healthcare"],
    example: null
  },
  st: {
    title: "Sales & Trading",
    sub: "Market making, institutional client execution, prop desks",
    body: [
      "S&T is the market-facing division of an investment bank. Sales teams develop relationships with institutional investors (FIIs, mutual funds, insurance companies, pension funds) and help them execute large trades. Trading desks make markets, execute client orders, and sometimes take proprietary positions.",
      "In India, S&T at the major foreign banks (Morgan Stanley, Goldman, JPMorgan) is focused on servicing FII investors who trade Indian equities, bonds, and derivatives. Domestic banks have their own treasury and market-making desks.",
      "Career note: S&T has different skills than IB — more real-time, more markets-focused, less model-heavy. Strong for those who love markets but don't want to do 100-hour weeks on pitch books."
    ],
    tags: ["Market Making", "FII Servicing", "Derivatives"],
    example: {
      label: "Algo & Tech Disruption",
      text: "Traditional flow trading is being automated. The best S&T careers now require quantitative skills, programming (Python), and understanding of algorithmic strategies."
    }
  }
};

export const ibStructure = [
  {
    icon: '⚙', title: 'Front Office',
    body: 'The revenue-generating side. Includes M&A advisory, ECM/DCM, sales & trading, and research. This is where IB analysts and associates live. Extremely high pressure, high pay, high status. Your target zone after MBA from IIM/ISB.',
    chips: ['Analysts', 'Associates', 'VPs → MDs']
  },
  {
    icon: '⚖', title: 'Middle Office',
    body: 'Risk management, compliance, treasury, and financial control. These teams ensure the front office operates within legal and risk limits. Solid career path with better work-life balance than front office.',
    chips: ['Risk Analysts', 'Compliance']
  },
  {
    icon: '⬛', title: 'Back Office',
    body: 'Operations, technology, settlements, and HR. The engine room of the bank. Increasingly tech-driven with automation, making it a great place for finance + tech hybrids. Less glamorous but crucial infrastructure.',
    chips: ['Operations', 'FinTech']
  },
  {
    icon: '★', title: 'Bulge Bracket Banks',
    body: 'The global elite: Goldman Sachs, Morgan Stanley, JP Morgan, Bank of America, Citi, Deutsche Bank, Barclays. These firms have offices in India (GIFT City, Mumbai, Bengaluru) and are the top recruitment targets after IIM A/B/C.',
    chips: ['BB', 'Elite Boutiques', 'MM Banks']
  },
  {
    icon: '◆', title: 'Indian IB Firms',
    body: 'Axis Capital, JM Financial, ICICI Securities, Kotak Investment Banking, IIFL, Edelweiss, Motilal Oswal IB. These are your realistic first targets after BFM + MBA. They run real M&A, IPO, and debt deals across Indian markets.',
    chips: ['Domestic IB', 'Realistic Entry']
  },
  {
    icon: '▲', title: 'Day in the Life',
    body: '8 AM: Markets open, check news. 9 AM: Model updates and pitch deck revisions. 12 PM: Client call. 2 PM: CIM review. 5 PM: MD feedback. 9 PM: Update models. 11 PM: Send materials. Analysts routinely work 80–100 hour weeks on live deals.',
    chips: ['High Intensity']
  }
];

export const peCycle = [
  { num: '01', title: 'Fundraise', sub: 'Raise a fund from LPs: pension funds, endowments, family offices, sovereign wealth funds' },
  { num: '02', title: 'Source Deals', sub: 'Identify acquisition targets through proprietary sourcing, auctions, IB relationships' },
  { num: '03', title: 'Acquire', sub: 'Buy the company — typically using a mix of equity from the fund and debt (leverage)' },
  { num: '04', title: 'Create Value', sub: 'Improve operations, cut costs, grow revenue, make add-on acquisitions over 3–7 years' },
  { num: '05', title: 'Exit', sub: 'Sell via IPO, strategic sale to another company, or secondary sale to another PE fund' }
];

export const valuationData = {
  dcf: {
    title: 'Discounted Cash Flow (DCF)',
    desc: "A DCF values a company by forecasting its future free cash flows (the actual cash it generates) and discounting them back to today's value using a discount rate (WACC). The logic: a rupee today is worth more than a rupee next year because of the time value of money and risk.",
    formula: `Enterprise Value = Σ [FCF_t / (1+WACC)^t] + Terminal Value\nFCF = EBIT × (1–Tax) + D&A – CapEx – ΔNWC\nWACC = [E/(E+D)] × Ke + [D/(E+D)] × Kd × (1–T)\nTerminal Value = FCF_n × (1+g) / (WACC–g)`,
    exampleLabel: "India Example — HDFC Bank DCF Logic",
    exampleText: "When analysts valued HDFC Bank pre-merger, they projected Net Interest Income growth of ~15% for 5 years, applied a cost of equity of ~11% (risk-free rate 7% + beta-adjusted premium), and used a terminal growth rate of 5–6%, reflecting India's long-term GDP potential. This gave a per-share intrinsic value which they compared against the market price.",
    steps: [
      "Project 5–10 years of revenue, EBITDA, and Free Cash Flow (FCF) based on historical trends and management guidance",
      "Calculate WACC — weighted average of cost of equity (using CAPM) and after-tax cost of debt",
      "Discount each year's FCF back to present value using WACC as the discount rate",
      "Calculate Terminal Value — the value of all cash flows beyond the projection period using Gordon Growth Model",
      "Sum PV of FCFs + PV of Terminal Value = Enterprise Value. Subtract net debt to get Equity Value.",
      "Divide Equity Value by shares outstanding to get intrinsic value per share",
      "Run sensitivity tables: vary WACC ±1% and growth rate ±1% to show a valuation range"
    ]
  },
  comps: {
    title: 'Comparable Company Analysis (Comps)',
    desc: "Comps values a company by benchmarking it against similar publicly listed peers. The assumption: similar companies with similar growth and margins should trade at similar multiples. It's the most market-grounded of the three methods because it reflects what public markets are currently paying.",
    formula: `EV/EBITDA Multiple = Enterprise Value ÷ EBITDA\nP/E Multiple = Share Price ÷ Earnings Per Share\nEV/Revenue = Enterprise Value ÷ Revenue\nEV/EBIT = Enterprise Value ÷ EBIT\n\nTarget EV = Median Peer Multiple × Target EBITDA`,
    exampleLabel: "India Example — Zomato Comps",
    exampleText: "When valuing Zomato, analysts looked at global food delivery peers: DoorDash (US), Delivery Hero (Germany), Meituan (China). They compared EV/Revenue multiples since Zomato was pre-profit. Indian analysts had to apply a discount for emerging market risk and Zomato's specific unit economics profile.",
    steps: [
      "Identify 6–10 truly comparable public companies — same industry, similar size, similar geography and growth profile",
      "Calculate key multiples for each peer: EV/EBITDA, P/E, EV/Revenue, P/Book (for banks)",
      "Build a \"football field\" showing the range — median, 25th, 75th percentile of peer multiples",
      "Apply the median (or relevant range) of peer multiples to the target company's own financials",
      "Apply a control premium (15–30%) if the transaction involves acquiring control of the business",
      "Triangulate with DCF — if comps and DCF give similar answers, you have conviction in your valuation",
      "Document and justify every comp inclusion and exclusion — MDs will challenge your universe"
    ]
  },
  precedent: {
    title: 'Precedent Transaction Analysis',
    desc: "Precedent transactions look at what acquirers actually paid for similar companies in past M&A deals. Unlike comps, this already includes the control premium — what a strategic buyer pays above market price to gain control. This method answers: \"what have buyers historically paid for companies like this?\"",
    formula: `Transaction Value = EV Paid in Deal\nDeal Multiple = Transaction EV ÷ Target's LTM EBITDA\nControl Premium = (Deal Price – Pre-announcement Price) ÷ Pre-announcement Price\n\nLTM = Last Twelve Months financials`,
    exampleLabel: "India Example — HDFC-HDFC Bank Merger",
    exampleText: "The merger of HDFC Ltd into HDFC Bank was valued at a share swap ratio of 42 HDFC Bank shares for every 25 HDFC Ltd shares. Analysts studied precedent bank mergers in India (Kotak-ING Vysya, IndusInd-Bharat Financial) to benchmark the swap ratio against historical deal multiples.",
    steps: [
      "Search for M&A transactions in the target's industry over the past 3–5 years (use Bloomberg, Refinitiv, Capitaline for India)",
      "Screen for deal size, geography, and business model similarity — keep only truly comparable transactions",
      "For each deal, find: transaction EV, target's LTM EBITDA/Revenue, implied multiple, and control premium paid",
      "Build a table showing the range of multiples across precedent deals, with deal context annotations",
      "Apply to current target — this gives an \"M&A market\" value including control premium",
      "Compare against comps — precedents should be higher because comps reflect minority trading, not control",
      "Discuss strategic rationale: synergy-driven buyers pay more; financial buyers (PE) pay less"
    ]
  },
  lbo: {
    title: 'LBO Analysis — PE\'s Core Tool',
    desc: "An LBO (Leveraged Buyout) model is used by PE firms to determine the maximum price they can pay for a company while still generating a target return (typically 20–25% IRR). The PE firm buys with mostly debt, uses the company's own cash flows to repay that debt, and exits at a higher valuation. The leverage amplifies equity returns.",
    formula: `Entry EV = Debt + Equity Invested\nExit EV = Exit EBITDA × Exit Multiple\nEquity Proceeds = Exit EV – Remaining Debt\nMOIC = Equity Proceeds ÷ Equity Invested\nIRR: Solve for r where NPV of equity = 0\n\nTarget: 20–25% IRR, 2.0–3.0x MOIC over 5 years`,
    exampleLabel: "Why LBO Drives IB Valuation",
    exampleText: "LBO analysis sets the \"floor\" of valuation — the minimum a PE buyer would pay. The LBO model asks: at what entry price can I still generate 20% IRR if I use 60–70% debt? This floors the valuation range. If the LBO can support ₹100 entry, comps say ₹110, DCF says ₹115, bankers pitch ₹105–115.",
    steps: [
      "Set the entry price (EV) and capital structure: typically 60–70% debt, 30–40% equity from PE fund",
      "Project 5 years of EBITDA, interest expense, debt repayment, and FCF — the company pays down debt with its own cash flows",
      "At exit (year 5), assume sale at same or higher EV/EBITDA multiple as entry",
      "Calculate exit equity proceeds: Exit EV minus remaining debt balance",
      "Calculate MOIC (Multiple on Invested Capital): exit equity divided by initial equity invested",
      "Calculate IRR: the annualized return rate that makes initial equity investment equal to exit equity in present value terms",
      "Iterate: if IRR is too low, you've paid too much. If IRR is high, you have room to bid higher."
    ]
  }
};
