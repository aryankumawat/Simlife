export type Product = {
  slug: string
  name: string
  tagline: string
  category: 'Cellular' | 'Cognitive' | 'Recovery' | 'Foundations'
  status: 'coming-soon' | 'pre-order' | 'available'
  pricePlanned: number
  shortDescription: string
  longDescription: string
  pillBenefits: string[]
  hero: {
    eyebrow: string
    headline: string
    sub: string
  }
  keyIngredients: { name: string; dose: string; purpose: string }[]
  protocol: string
  servings: string
  research: string[]
  faq: { q: string; a: string }[]
  bgFrom: string
  bgTo: string
  accent: string
}

export const PRODUCTS: Product[] = [
  {
    slug: 'cellular-renewal',
    name: 'Cellular Renewal',
    tagline: 'NAD⁺ precursor protocol',
    category: 'Cellular',
    status: 'coming-soon',
    pricePlanned: 84,
    shortDescription:
      'A precision NAD⁺ precursor protocol designed to support mitochondrial energy, DNA repair signalling, and cellular age resilience.',
    longDescription:
      'Cellular Renewal is engineered around clinical-dose NMN, complemented by trans-resveratrol and TMG for methylation balance. Each capsule is formulated to a single end: restoring the metabolic currency your cells need to function like they did a decade ago.',
    pillBenefits: [
      'Supports NAD⁺ biosynthesis',
      'Reinforces mitochondrial output',
      'Promotes cellular age resilience',
      'Methylation-balanced',
    ],
    hero: {
      eyebrow: 'Longevity · Tier I',
      headline: 'Energy at the source.',
      sub: 'A daily protocol for the engine of every cell.',
    },
    keyIngredients: [
      { name: 'NMN (β-Nicotinamide Mononucleotide)', dose: '500 mg', purpose: 'Direct NAD⁺ precursor' },
      { name: 'Trans-Resveratrol', dose: '250 mg', purpose: 'Sirtuin co-activator' },
      { name: 'Trimethylglycine (TMG)', dose: '500 mg', purpose: 'Methyl donor — balances NMN methylation cost' },
      { name: 'Pterostilbene', dose: '50 mg', purpose: 'Bioavailability + cellular signalling' },
    ],
    protocol: '2 capsules each morning, with or without food.',
    servings: '30 servings per bottle · 60 capsules',
    research: [
      'NMN supplementation has been shown to elevate plasma NAD⁺ within 60 days in healthy adults.',
      'TMG offsets the methylation demand of NAD⁺ precursors, supporting homocysteine balance.',
      'Resveratrol activates SIRT1, a longevity-linked deacetylase, in human tissue assays.',
    ],
    faq: [
      { q: 'When will I feel it?', a: 'Most members report a perceptible shift in steady-state energy and morning clarity within 14–21 days of daily use.' },
      { q: 'Can I stack it?', a: 'Yes — Cellular Renewal is designed to pair with Recovery Matrix in the evening and Cognitive Clarity mid-day.' },
      { q: 'Is it third-party tested?', a: 'Every batch is independently verified for purity, dose accuracy, and absence of heavy metals.' },
    ],
    bgFrom: '#2A0F2E',
    bgTo: '#4A1F44',
    accent: '#C9A876',
  },
  {
    slug: 'cognitive-clarity',
    name: 'Cognitive Clarity',
    tagline: 'Daytime nootropic matrix',
    category: 'Cognitive',
    status: 'coming-soon',
    pricePlanned: 68,
    shortDescription:
      'A clean, stimulant-modulated nootropic stack engineered for sustained focus, working memory, and the cognitive endurance long days require.',
    longDescription:
      'Cognitive Clarity blends adaptogenic precision with neurotransmitter precursors to lift cognitive output without the brittle peaks of caffeine alone. L-Theanine smooths the curve; Lion\'s Mane supports long-term neuroplasticity; Alpha-GPC raises acetylcholine where it matters most.',
    pillBenefits: [
      'Sustained, smooth focus',
      'Working-memory support',
      'Neuroplasticity over time',
      'No mid-day crash',
    ],
    hero: {
      eyebrow: 'Performance · Tier II',
      headline: 'Cognition, sharpened.',
      sub: 'Built for the work that demands the most of your mind.',
    },
    keyIngredients: [
      { name: 'Lion\'s Mane (8:1 extract)', dose: '1,000 mg', purpose: 'Neurogenesis · BDNF support' },
      { name: 'Alpha-GPC', dose: '300 mg', purpose: 'Acetylcholine precursor — attention and working memory' },
      { name: 'L-Theanine', dose: '200 mg', purpose: 'Calm focus — α-wave modulation' },
      { name: 'Rhodiola Rosea (3% rosavins)', dose: '300 mg', purpose: 'Adaptogenic fatigue resistance' },
    ],
    protocol: '2 capsules in the morning or mid-day. Avoid within 6 hours of sleep.',
    servings: '30 servings per bottle · 60 capsules',
    research: [
      'Lion\'s Mane has demonstrated mild improvement in cognitive function in healthy and elderly adults.',
      'Alpha-GPC has shown improvements in reaction time and power output in athletic studies.',
      'L-Theanine + caffeine combinations consistently outperform caffeine alone on attention metrics.',
    ],
    faq: [
      { q: 'Will I feel jittery?', a: 'No. There is no synthetic caffeine in Cognitive Clarity. The matrix is built around adaptogenic and cholinergic pathways.' },
      { q: 'Can I take it daily?', a: 'Yes — it\'s designed for daily, long-term use. Lion\'s Mane in particular compounds with consistency.' },
      { q: 'When does it kick in?', a: 'Acutely within 45–90 minutes; structurally over 4–8 weeks.' },
    ],
    bgFrom: '#3A1840',
    bgTo: '#5A2A55',
    accent: '#DCC59A',
  },
  {
    slug: 'recovery-matrix',
    name: 'Recovery Matrix',
    tagline: 'Evening recovery + sleep architecture',
    category: 'Recovery',
    status: 'coming-soon',
    pricePlanned: 72,
    shortDescription:
      'A nightly recovery protocol designed to deepen restorative sleep, regulate cortisol, and accelerate muscular and neural repair.',
    longDescription:
      'Recovery is where adaptation actually happens. Recovery Matrix combines three forms of magnesium for nervous-system relaxation, glycine for slow-wave sleep, and apigenin for natural cortisol modulation. No melatonin — your body keeps the wheel.',
    pillBenefits: [
      'Deeper restorative sleep',
      'Muscular repair support',
      'Calmer evening cortisol',
      'Melatonin-free',
    ],
    hero: {
      eyebrow: 'Recovery · Tier I',
      headline: 'Repair the body. Reset the mind.',
      sub: 'Engineered for the eight hours your performance actually depends on.',
    },
    keyIngredients: [
      { name: 'Magnesium Glycinate', dose: '300 mg', purpose: 'Nervous-system relaxation' },
      { name: 'Magnesium L-Threonate', dose: '144 mg', purpose: 'Crosses the blood-brain barrier' },
      { name: 'Glycine', dose: '3,000 mg', purpose: 'Slow-wave sleep depth' },
      { name: 'Apigenin', dose: '50 mg', purpose: 'Cortisol modulation, aromatase support' },
    ],
    protocol: '3 capsules 30 minutes before bed.',
    servings: '30 servings per bottle · 90 capsules',
    research: [
      'Magnesium supplementation has demonstrated improvements in sleep efficiency in randomized trials.',
      'Glycine ingestion before bed has been shown to improve subjective sleep quality and reduce daytime fatigue.',
      'Apigenin binds GABA-A receptors, with anxiolytic and sedative effects observed in preclinical work.',
    ],
    faq: [
      { q: 'Is this melatonin-free?', a: 'Yes — entirely. We avoid melatonin because chronic supplementation can suppress endogenous production.' },
      { q: 'Will I feel groggy?', a: 'No. The matrix is designed to deepen sleep architecture, not sedate.' },
      { q: 'Can I stack with Cellular Renewal?', a: 'Absolutely. Cellular Renewal AM, Recovery Matrix PM is the foundational Vivien stack.' },
    ],
    bgFrom: '#1F0922',
    bgTo: '#3A1840',
    accent: '#C9A876',
  },
  {
    slug: 'vitality-foundations',
    name: 'Vitality Foundations',
    tagline: 'Daily micronutrient infrastructure',
    category: 'Foundations',
    status: 'coming-soon',
    pricePlanned: 58,
    shortDescription:
      'The micronutrient floor every other protocol stands on — methylated B-complex, D3/K2, omega-3s, and the trace minerals modern diets quietly miss.',
    longDescription:
      'Most multivitamins are a marketing object. Vitality Foundations is built like a clinical replacement for the dietary blind spots that even disciplined diets carry — properly dosed, properly bound, properly delivered.',
    pillBenefits: [
      'Methylated B-complex',
      'D3 + K2 (MK-7) co-formulation',
      'Omega-3 in triglyceride form',
      'Chelated trace minerals',
    ],
    hero: {
      eyebrow: 'Foundations · Daily',
      headline: 'The floor under everything.',
      sub: 'A serious multinutrient for serious people.',
    },
    keyIngredients: [
      { name: 'Vitamin D3 + K2 (MK-7)', dose: '5,000 IU / 100 mcg', purpose: 'Bone, immune, vascular' },
      { name: 'Methylated B-Complex (B9, B12, B6)', dose: 'Full spectrum', purpose: 'Energy metabolism, MTHFR-friendly' },
      { name: 'Omega-3 EPA/DHA (TG-form)', dose: '1,500 mg', purpose: 'Inflammation, cardiovascular, cognitive' },
      { name: 'Zinc Bisglycinate · Magnesium · Selenium · Iodine', dose: 'Clinical-dose', purpose: 'Trace mineral infrastructure' },
    ],
    protocol: '3 capsules with the first meal of the day.',
    servings: '30 servings per bottle · 90 capsules',
    research: [
      'Methylated folate bypasses the MTHFR enzyme — relevant for the ~40% of people with reduced conversion capacity.',
      'D3 + K2 co-supplementation supports calcium routing to bone rather than vascular tissue.',
      'Triglyceride-form omega-3 demonstrates superior bioavailability vs. ethyl-ester counterparts.',
    ],
    faq: [
      { q: 'Do I still need this if I eat well?', a: 'Probably — modern soils, processing, and lifestyle stack have made several nutrients reliably under-delivered, even in clean diets.' },
      { q: 'Is the fish oil third-party tested?', a: 'Every batch is tested for heavy metals, PCBs, and oxidation.' },
      { q: 'Can I take this with the others?', a: 'Yes — it\'s the base of the Vivien stack. AM with Cellular Renewal.' },
    ],
    bgFrom: '#4A1F44',
    bgTo: '#7A4A6F',
    accent: '#DCC59A',
  },
]

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export const PRODUCT_SLUGS = PRODUCTS.map((p) => p.slug)
