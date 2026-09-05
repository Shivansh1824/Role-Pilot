import { Cpu, Briefcase, Users, LucideIcon } from 'lucide-react';

export type PanelistConfig = {
  name: string;
  role: string;
  focus: string;
  color: 'blue' | 'purple' | 'emerald';
  icon: LucideIcon;
};

export const PANEL_CONFIGS: Record<string, PanelistConfig[]> = {
  tech: [
    { name: 'Alex', role: 'Technical Lead', focus: 'Architecture & Scaling', color: 'blue', icon: Cpu },
    { name: 'Maya', role: 'Product Manager', focus: 'UX & Customer Impact', color: 'purple', icon: Briefcase },
    { name: 'David', role: 'Hiring Manager', focus: 'STAR & Communication', color: 'emerald', icon: Users },
  ],
  sales: [
    { name: 'Sarah', role: 'VP of Sales', focus: 'Closing & Objections', color: 'blue', icon: Briefcase },
    { name: 'Marcus', role: 'Sales Director', focus: 'Pipeline & Margins', color: 'purple', icon: Users },
    { name: 'David', role: 'Hiring Manager', focus: 'Quota & Resilience', color: 'emerald', icon: Users },
  ],
  hr: [
    { name: 'Elena', role: 'HR Director', focus: 'Policy & Relations', color: 'blue', icon: Briefcase },
    { name: 'Sam', role: 'Culture Lead', focus: 'DEI & Safety', color: 'purple', icon: Users },
    { name: 'David', role: 'Hiring Manager', focus: 'Mediation & Ethics', color: 'emerald', icon: Users },
  ],
  product: [
    { name: 'Maya', role: 'Product Lead', focus: 'Strategy & Roadmap', color: 'purple', icon: Briefcase },
    { name: 'Alex', role: 'Technical Lead', focus: 'Feasibility & Debt', color: 'blue', icon: Cpu },
    { name: 'David', role: 'Hiring Manager', focus: 'Stakeholder Alignment', color: 'emerald', icon: Users },
  ],
};

export type TrackEvaluationConfig = {
  panelist1: {
    name: string;
    roleTitle: string;
    keywords: RegExp;
    strengthTitle: string;
    strengthDesc: string;
    gapTitle: string;
    gapDesc: string;
    cardBlurb: string;
  };
  panelist2: {
    name: string;
    roleTitle: string;
    keywords: RegExp;
    strengthTitle: string;
    strengthDesc: string;
    gapTitle: string;
    gapDesc: string;
    cardBlurb: string;
  };
  panelist3: {
    name: string;
    roleTitle: string;
    keywords: RegExp;
    strengthTitle: string;
    strengthDesc: string;
    gapTitle: string;
    gapDesc: string;
    cardBlurb: string;
  };
};

export const TRACK_EVALUATIONS: Record<string, TrackEvaluationConfig> = {
  tech: {
    panelist1: {
      name: 'Alex',
      roleTitle: 'Technical Lead',
      keywords: /cache|database|sql|api|system|server|latency|scale|redis|postgres|index|concurrency|queue|microservice|cluster|sharding/i,
      strengthTitle: 'Technical Architecture & Systems Depth',
      strengthDesc: 'Demonstrated concrete understanding of system components, trade-offs, and operational bottlenecks.',
      gapTitle: 'Technical Specificity & Depth',
      gapDesc: 'Answer was high-level; could benefit from specifying exact data structures, protocols, and latency targets.',
      cardBlurb: 'High marks for caching architecture, SQL write-sharding, and Big-O awareness.',
    },
    panelist2: {
      name: 'Maya',
      roleTitle: 'Product Manager',
      keywords: /user|customer|metric|conversion|retention|impact|ux|tradeoff|business|product|checkout|sla/i,
      strengthTitle: 'Customer Value & Impact Articulation',
      strengthDesc: 'Explicitly connected engineering implementation to user experience and measurable business KPIs.',
      gapTitle: 'Customer UX & Business Metric Gap (PS11)',
      gapDesc: 'Identified gap (PS11): Technical solution was accepted, but candidate omitted proactive explanation of customer checkout drop-offs and SLA guarantees.',
      cardBlurb: 'Adapted well after challenge, but could proactively highlight user checkout friction earlier.',
    },
    panelist3: {
      name: 'David',
      roleTitle: 'Hiring Manager',
      keywords: /team|conflict|disagree|deadline|manager|leadership|lead|collaborate|mentor|culture|stakeholder/i,
      strengthTitle: 'STAR Methodology & Communication Clarity',
      strengthDesc: 'Structured responses with clear context, action taken, and measurable resolution under deadline pressure.',
      gapTitle: 'Cross-Functional STAR Depth',
      gapDesc: 'Provided general overview; could strengthen with concrete measurable outcomes from past team challenges.',
      cardBlurb: 'Clear STAR structure with concise Situation-Action-Result examples of resolving deadlines.',
    },
  },
  sales: {
    panelist1: {
      name: 'Sarah',
      roleTitle: 'VP of Sales',
      keywords: /deal|discount|cfo|budget|close|closing|objection|value|roi|contract|price|negotiat/i,
      strengthTitle: 'Executive Deal Navigation & Objections',
      strengthDesc: 'Maintained value-based framing without caving to premature price concessions during CFO pushback.',
      gapTitle: 'Objection Handling & Value Defense',
      gapDesc: 'Offered price concessions quickly; could strengthen with multi-year commitments or scope adjustments before discounting.',
      cardBlurb: 'Strong objection handling on pricing and enterprise procurement hurdles.',
    },
    panelist2: {
      name: 'Marcus',
      roleTitle: 'Sales Director',
      keywords: /pipeline|meddic|margin|retention|churn|forecast|velocity|quota|expansion|onboard/i,
      strengthTitle: 'Pipeline Velocity & Gross Margin Protection',
      strengthDesc: 'Articulated complete MEDDIC qualification criteria and protected post-sale gross margin metrics.',
      gapTitle: 'Margin & Retention Risk Awareness',
      gapDesc: 'Focused on closing immediate revenue but overlooked how deep discounts impact onboarding SLAs and gross margins.',
      cardBlurb: 'Demonstrated rigorous pipeline qualification and expansion strategy.',
    },
    panelist3: {
      name: 'David',
      roleTitle: 'Hiring Manager',
      keywords: /quota|resilience|rejection|pressure|team|ownership|culture|leadership|target/i,
      strengthTitle: 'Quota Ownership & Professional Resilience',
      strengthDesc: 'Demonstrated exceptional composure and ownership when analyzing lost deals and high-quota quarters.',
      gapTitle: 'Resilience & Pipeline Recovery',
      gapDesc: 'Could provide clearer examples of prospecting discipline when facing a stalled enterprise deal.',
      cardBlurb: 'High marks for quota ownership, team coaching, and deal post-mortems.',
    },
  },
  hr: {
    panelist1: {
      name: 'Elena',
      roleTitle: 'HR Director',
      keywords: /investigation|policy|compliance|legal|relation|conduct|fairness|documentation|hr/i,
      strengthTitle: 'Compliance & Fact-Finding Rigor',
      strengthDesc: 'Applied systematic, unbiased investigative methodology with rigorous documentation and confidentiality standards.',
      gapTitle: 'Investigation Objectivity & Due Process',
      gapDesc: 'Answer assumed intent too early; needs deeper emphasis on neutral evidence gathering and HR policy standards.',
      cardBlurb: 'Sound understanding of employee relations, compliance, and investigative rigor.',
    },
    panelist2: {
      name: 'Sam',
      roleTitle: 'Culture Lead',
      keywords: /psychological|safety|morale|culture|dei|inclusion|trust|retention|burnout|wellbeing/i,
      strengthTitle: 'Psychological Safety & Team Restitution',
      strengthDesc: 'Proactively championed psychological safety, restorative dialog, and team morale after workplace conflict.',
      gapTitle: 'Team Cultural Restitution Gap',
      gapDesc: 'Addressed the individual disciplinary step but missed repairing the emotional safety and trust of junior observers.',
      cardBlurb: 'Empathetic focus on team belonging, DEI, and organizational health.',
    },
    panelist3: {
      name: 'David',
      roleTitle: 'Hiring Manager',
      keywords: /mediation|executive|leadership|ethics|conflict|stakeholder|manager|alignment/i,
      strengthTitle: 'Executive Mediation & Ethical Leadership',
      strengthDesc: 'Balanced organizational operational continuity with strict ethical integrity during complex stakeholder disputes.',
      gapTitle: 'Leadership Escalation Protocol',
      gapDesc: 'Could articulate clearer criteria for when to escalate personnel crises to executive leadership vs handling in-team.',
      cardBlurb: 'Pragmatic executive communication and ethical alignment under pressure.',
    },
  },
  product: {
    panelist1: {
      name: 'Maya',
      roleTitle: 'Product Lead',
      keywords: /roadmap|metric|retention|user|customer|priorit|north star|kpi|discovery|mvp|experiment|churn/i,
      strengthTitle: 'Product Strategy & Outcome Prioritization',
      strengthDesc: 'Framed product decisions strictly in terms of user value hypotheses, retention loops, and North Star metrics.',
      gapTitle: 'Metric-Driven Prioritization Depth',
      gapDesc: 'Prioritization leaned heavily on subjective features; needs clearer RICE/MoSCoW scoring and user discovery proof.',
      cardBlurb: 'Exceptional product sense, customer problem discovery, and metric trade-offs.',
    },
    panelist2: {
      name: 'Alex',
      roleTitle: 'Technical Lead',
      keywords: /feasibility|api|debt|latency|scale|architecture|offline|sync|database|eng|timeline/i,
      strengthTitle: 'Technical Feasibility & Debt Navigation',
      strengthDesc: 'Constructively engaged engineering on architectural constraints, API latency budgets, and tech debt payback.',
      gapTitle: 'Engineering Feasibility & Sync Constraints',
      gapDesc: 'Designed user features without accounting for backend data sync latency, offline state, or database schema migration burdens.',
      cardBlurb: 'Strong cross-functional empathy and pragmatic technical scoping.',
    },
    panelist3: {
      name: 'David',
      roleTitle: 'Hiring Manager',
      keywords: /stakeholder|influence|alignment|leadership|conflict|executive|communication|culture/i,
      strengthTitle: 'Influence Without Authority & Alignment',
      strengthDesc: 'Demonstrated mature cross-functional diplomacy when aligning conflicting demands from Sales, Engineering, and Execs.',
      gapTitle: 'Executive Stakeholder Management',
      gapDesc: 'Could show clearer frameworks for managing pushy executive requests that threaten quarterly sprint commitments.',
      cardBlurb: 'High emotional intelligence in balancing engineering reality with revenue goals.',
    },
  },
};
