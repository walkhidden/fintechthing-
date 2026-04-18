export const fintechPillars = [
  {
    id: 'pay',
    icon: '⚡',
    title: 'Payments & Transfers',
    sub: 'Real-time value movement',
    detailTitle: 'Payments & Transfers',
    pointers: [
      'Bypass legacy SWIFT networks via direct API rails.',
      'Execute instant, near-zero cost global value movement.'
    ],
    tags: ['UPI', 'SWIFT', 'Real-Time Rails', 'Interchange'],
    example: 'Stripe\'s API-first payment gateway.'
  },
  {
    id: 'bank',
    icon: '📱',
    title: 'Digital Banking (Neobanks)',
    sub: 'Branchless financial ecosystems',
    detailTitle: 'Digital Banking (Neobanks)',
    pointers: [
      'Eliminate physical branch overhead via cloud-native architecture.',
      'Deploy consumer infrastructure instantly globally using Video KYC.'
    ],
    tags: ['Video KYC', 'NIM', 'BaaS', 'Super App'],
    example: 'Nubank scaling globally via pure digital onboarding.'
  },
  {
    id: 'wealth',
    icon: '💎',
    title: 'WealthTech & Investing',
    sub: 'Capital markets access',
    detailTitle: 'WealthTech & Investing',
    pointers: [
      'Mathematically automate portfolio growth via Robo-advisors and SIP structures.',
      'Democratize global equity capital access using fractional shares.'
    ],
    tags: ['Robo-Advisory', 'SIP', 'Fractional Shares', 'MPT'],
    example: 'Algorithmic tax-loss harvesting and auto-rebalancing portfolios.'
  },
  {
    id: 'lend',
    icon: '🎯',
    title: 'Lending & Credit',
    sub: 'Alternative data underwriting',
    detailTitle: 'Lending & Credit',
    pointers: [
      'Underwrite default risk systematically using alternative metrics (telemetry/GST).',
      'Deploy highly scalable Sachet Loans, P2P logic, and instant BNPL liquidity.'
    ],
    tags: ['Alt Credit Score', 'BNPL', 'P2P Lending', 'Sachet Loans'],
    example: 'Approving micro-loans via device metadata and GST telemetry.'
  },
  {
    id: 'insure',
    icon: '🧩',
    title: 'InsurTech',
    sub: 'Parametric and usage-based',
    detailTitle: 'InsurTech',
    pointers: [
      'Execute instant claims validation via automated AI risk assessment.',
      'Trigger payouts autonomously using parameter-driven satellite weather data.'
    ],
    tags: ['Parametric', 'UBI', 'Embedded Insurance', 'Claims AI'],
    example: 'Automatically triggering crop payouts via satellite weather data.'
  },
  {
    id: 'reg',
    icon: '👁️',
    title: 'RegTech & Compliance',
    sub: 'Automated AML & KYC',
    detailTitle: 'RegTech & Compliance',
    pointers: [
      'Automate massive-volume eKYC and continuous transaction monitoring.',
      'Filter data-streams algorithmically against global sanctions lists in real-time.'
    ],
    tags: ['KYC', 'AML', 'eKYC', 'Sanctions Screening'],
    example: 'AI severely cutting false-positive AML verification alerts.'
  }
];

export const fintechLandscape = [
  {
    title: 'Payments', icon: '💸', 
    pointers: [
      'Real-time transaction networks.',
      'Displacing legacy correspondent banking.'
    ],
    chips: ['Stripe', 'Razorpay', 'PayPal', 'UPI', 'Wise']
  },
  {
    title: 'Digital Banking', icon: '📲', 
    pointers: [
      'Functioning as entirely branchless platforms.',
      'Utilizing BaaS to rapidly deploy core logic.'
    ],
    chips: ['Nubank', 'Revolut', 'Jupiter', 'Fi Money', 'N26']
  },
  {
    title: 'WealthTech', icon: '🚀', 
    pointers: [
      'Capturing retail liquidity efficiently.',
      'Executing algorithmic and fractional trades.'
    ],
    chips: ['Zerodha', 'Groww', 'Robinhood', 'Betterment']
  },
  {
    title: 'Lending & Credit', icon: '🪙', 
    pointers: [
      'Creating instant market liquidity via BNPL.',
      'Using programmatic cashflow underwriting.'
    ],
    chips: ['Lending Club', 'KreditBee', 'Affirm', 'Slice']
  },
  {
    title: 'InsurTech', icon: '☂️', 
    pointers: [
      'Mathematically automating risk pricing.',
      'Using data-triggered smart contracts.'
    ],
    chips: ['Lemonade', 'Digit', 'Root', 'Acko', 'Next']
  },
  {
    title: 'RegTech', icon: '🔍', 
    pointers: [
      'Creating automated compliance pipelines.',
      'Graphing transactions strictly against global lists.'
    ],
    chips: ['ComplyAdvantage', 'Signzy', 'Actimize', 'Digio']
  }
];

export const architectureConcepts = [
  {
    title: '🕸️ API-First Design',
    pointers: [
      'Standardised REST/GraphQL schemas exposing core banking structures.',
      'Enables Open Banking and Account Aggregator logic.',
      'Allows modular third-party execution directly on top of legacy banks.'
    ],
    code: `// Core Data API
GET /v2/accounts/{id}/tx
Auth: Bearer {token}`
  },
  {
    title: '📡 Event-Driven Architecture',
    pointers: [
      'Asynchronous event publishing (Kafka) decoupling monolithic processes.',
      'Drives instant predictive fraud checks upon payment initiation.',
      'Achieves massive horizontal scaling for sub-100ms execution.'
    ],
    code: `// Kafka Payload
{
  "req": "PAY_INIT",
  "amt": 50000
}`
  },
  {
    title: '🪨 Immutable Ledger Systems',
    pointers: [
      'Deterministic, highly-consistent double-entry tracking logic.',
      'Processes millions of concurrent operations globally.',
      'Maintains cryptographically verifiable zero systemic drift.'
    ],
    code: null
  }
];
