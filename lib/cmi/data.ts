import { Question, MoneyType, PatternFamily } from "./types";

// ==========================================
// 1. PATTERN FAMILIES (8 Groups)
// ==========================================
export const PATTERN_FAMILIES: Record<string, PatternFamily> = {
  "000": {
    bits: "000",
    name: "The Reflectors",
    essence: "Calm, detached, imaginative — avoids pressure by stepping back.",
    tension: "Disconnection from action.",
    growthDirection: "Move toward gentle engagement.",
    strategy: "Step In Slowly"
  },
  "001": {
    bits: "001",
    name: "The Idealists",
    essence: "Generous, expressive, or moralistic — projects ideals onto money.",
    tension: "Wants to do “good,” but drifts from reality.",
    growthDirection: "Ground vision with small, real steps.",
    strategy: "Ground the Vision"
  },
  "010": {
    bits: "010",
    name: "The Organizers",
    essence: "Precise, structured, safety-focused — finds comfort in control.",
    tension: "Over-manages, fears chaos.",
    growthDirection: "Learn flexibility and trust.",
    strategy: "Trust the Flow"
  },
  "011": {
    bits: "011",
    name: "The Evaluators",
    essence: "Orderly and opinionated — defines worth through discipline or correctness.",
    tension: "Judgmental, inflexible.",
    growthDirection: "Replace judgment with curiosity.",
    strategy: "Ask Before Judging"
  },
  "100": {
    bits: "100",
    name: "The Empaths",
    essence: "Warm, receptive, connection-driven — finds identity in giving or belonging.",
    tension: "Self-worth tied to others’ approval.",
    growthDirection: "Anchor security in self-trust.",
    strategy: "Center Your Generosity"
  },
  "101": {
    bits: "101",
    name: "The Performers",
    essence: "Charismatic, expressive, status-aware — seeks validation through success or lifestyle.",
    tension: "Image over authenticity.",
    growthDirection: "Express creativity without comparison.",
    strategy: "Shine Without Stage"
  },
  "110": {
    bits: "110",
    name: "The Guardians",
    essence: "Responsible, protective, loyal — feels safest when providing or managing.",
    tension: "Overextends, carries too much.",
    growthDirection: "Share control; trust others’ competence.",
    strategy: "Release the Weight"
  },
  "111": {
    bits: "111",
    name: "The Builders",
    essence: "Visionary, driven, innovative — sees money as creation energy.",
    tension: "Overwork and identity fusion with achievement.",
    growthDirection: "Redefine mastery as harmony and meaning.",
    strategy: "Redefine Success"
  }
};

// ==========================================
// 2. MONEY TYPES (32 Types)
// ==========================================
export const MONEY_TYPES: MoneyType[] = [
  {
    id: 1,
    bits: "00000",
    name: "The Dreamer",
    tags: "Avoidant · Helpless · Insecure · People-pleasing · Stuck",
    description: "You often imagine a better financial life but feel distant from it. Money feels abstract—something for “later.” Avoidance protects you from shame but delays peace.",
    nextSteps: [
      "List your total cash on hand—no goals, just reality.",
      "Choose one recurring payment to track regularly.",
      "Treat awareness as progress, not pressure."
    ],
    coaching: "Charm eases you into awareness gently. It visualizes your cash flow with warmth, turning numbers into calm clarity. Over time, visibility becomes comfort, not fear."
  },
  {
    id: 2,
    bits: "00001",
    name: "The Explorer",
    tags: "Avoidant · Helpless · Insecure · People-pleasing · Restless",
    description: "You move by instinct—following what feels exciting. Freedom matters more than planning, but inconsistency keeps you anxious. You love beginnings, not follow-through.",
    nextSteps: [
      "Pick one financial rhythm—“Sunday reset,” “Friday reflection.”",
      "Keep one “adventure fund” and one “safety fund.”",
      "Track emotion before purchase: curiosity or escape?"
    ],
    coaching: "Charm adds rhythm without killing freedom. Its visual cycles help you notice spending tides and build light structure around exploration."
  },
  {
    id: 3,
    bits: "00010",
    name: "The Analyzer",
    tags: "Avoidant · Helpless · Insecure · Rigid · Stuck",
    description: "You overthink financial decisions until you freeze. You crave certainty but fear mistakes. Logic becomes protection from the discomfort of risk.",
    nextSteps: [
      "Make one decision without reviewing it twice.",
      "When doubt rises, write: “What’s the smallest truth I can test?”",
      "Reflect weekly on learning, not outcomes."
    ],
    coaching: "Charm reframes hesitation into data. Its decision journals show that imperfection is information, helping you trust learning loops over flawless plans."
  },
  {
    id: 4,
    bits: "00011",
    name: "The Cycler",
    tags: "Avoidant · Helpless · Insecure · Rigid · Restless",
    description: "You oscillate between avoidance and control—budgeting in bursts, then burning out. You crave order but fear rigidity.",
    nextSteps: [
      "Choose one small, repeatable habit (like checking balances weekly).",
      "Allow one “chaos buffer” in your budget.",
      "Celebrate recovery after lapses as much as success."
    ],
    coaching: "Charm helps you see cycles as rhythm, not relapse. It tracks stability trends and reframes repetition as resilience."
  },
  {
    id: 5,
    bits: "00100",
    name: "The Giver",
    tags: "Avoidant · Helpless · Arrogant · People-pleasing · Stuck",
    description: "You find meaning in generosity. Helping others feels natural, but sometimes you give to feel valued rather than secure.",
    nextSteps: [
      "Write down three ways to give without money.",
      "Allocate a “care budget” with limits.",
      "Practice saying, “That’s enough for now.”"
    ],
    coaching: "Charm rebalances care with self-preservation. It shows how giving affects your long-term peace, reinforcing that generosity thrives on groundedness."
  },
  {
    id: 6,
    bits: "00101",
    name: "The Performer",
    tags: "Avoidant · Helpless · Arrogant · People-pleasing · Restless",
    description: "You project confidence and generosity even when uncertain inside. Attention motivates you more than numbers. You thrive on momentum but often overspend to keep the show going.",
    nextSteps: [
      "Track one day’s spending privately—no audience, no post.",
      "Set one rule: applause never decides purchase.",
      "Ask weekly: “Did this choice feed my peace or my image?”"
    ],
    coaching: "Charm links emotions to actions in private space. It rewards authenticity over display, helping you anchor self-esteem in consistency instead of attention."
  },
  {
    id: 7,
    bits: "00110",
    name: "The Idealist",
    tags: "Avoidant · Helpless · Arrogant · Rigid · Stuck",
    description: "You want to live by principles and perfection at once. You judge your own and others’ financial choices through ideals, but this pursuit of purity can isolate you.",
    nextSteps: [
      "List three beliefs about “right” money behavior—question one.",
      "Spend once this week on something that feels joyful, not “correct.”",
      "Practice curiosity when others differ."
    ],
    coaching: "Charm reframes ideals as values, not rules. It visualizes alignment between intention and outcome, helping you practice flexibility without losing integrity."
  },
  {
    id: 8,
    bits: "00111",
    name: "The Presenter",
    tags: "Avoidant · Helpless · Arrogant · Rigid · Restless",
    description: "You manage impressions and performance flawlessly, yet exhaustion hides beneath control. You equate composure with safety, fearing others will see chaos.",
    nextSteps: [
      "Choose one metric you’ll ignore for seven days.",
      "Replace “performing stability” with one act of honest sharing.",
      "Add “rest” to your to-do list."
    ],
    coaching: "Charm notices when performance replaces presence. It reduces data overload, surfacing only essentials, teaching that openness sustains competence."
  },
  {
    id: 9,
    bits: "01000",
    name: "The Responder",
    tags: "Avoidant · Over-controlling · Insecure · People-pleasing · Stuck",
    description: "You adapt quickly to others’ needs and external demands. Structure feels imposed, not chosen. You react to pressure instead of planning ahead.",
    nextSteps: [
      "Create one personal rule: “I’ll check before I agree.”",
      "Set a five-minute daily review to decide what you want first.",
      "Say “I’ll get back to you” when asked for help."
    ],
    coaching: "Charm trains micro-agency. It highlights how even small pre-decisions shift power from reaction to intention, building your sense of authorship."
  },
  {
    id: 10,
    bits: "01001",
    name: "The Perfectionist",
    tags: "Avoidant · Over-controlling · Insecure · People-pleasing · Restless",
    description: "You crave flawless order. Budgets, plans, and spreadsheets promise calm—but the pursuit of precision can become punishment.",
    nextSteps: [
      "Intentionally leave one cell incomplete in your next sheet.",
      "Label one expense “good enough.”",
      "Celebrate adaptability instead of accuracy once this week."
    ],
    coaching: "Charm turns perfection into progression. Its metrics highlight trend over detail, rewarding steadiness, not symmetry."
  },
  {
    id: 11,
    bits: "01010",
    name: "The Protector",
    tags: "Avoidant · Over-controlling · Insecure · Rigid · Stuck",
    description: "You equate saving with safety. Control brings peace, but also limits joy and connection. You guard what you have because the idea of loss feels unbearable.",
    nextSteps: [
      "Assign one small “freedom” amount each week for spontaneous use.",
      "Write: “What am I really protecting myself from?”",
      "Share one financial detail with a trusted person—practice openness."
    ],
    coaching: "Charm shows that security can coexist with flow. It visualizes your liquidity balance—the comfort zone where safety and enjoyment overlap—so you can relax into enoughness."
  },
  {
    id: 12,
    bits: "01011",
    name: "The Steward",
    tags: "Avoidant · Over-controlling · Insecure · Rigid · Restless",
    description: "You manage everything carefully—bills, plans, people—but rarely feel light. You believe diligence earns worth, yet exhaustion often follows responsibility.",
    nextSteps: [
      "Simplify one process you manage manually (auto-pay, automation, or template).",
      "Add a “no-finance” evening weekly.",
      "Track how relaxation impacts clarity."
    ],
    coaching: "Charm lightens your load. It automates repetitive insights, showing that leadership can exist without overmanagement."
  },
  {
    id: 13,
    bits: "01100",
    name: "The Guide",
    tags: "Avoidant · Over-controlling · Arrogant · People-pleasing · Stuck",
    description: "You give sound financial advice to others but avoid your own reflection. Teaching keeps you feeling valuable—and distracts from vulnerability.",
    nextSteps: [
      "Do for yourself what you’ve advised others to do.",
      "Block 30 minutes weekly for “self-guidance.”",
      "Reflect on what part of giving feels safest."
    ],
    coaching: "Charm mirrors your wisdom back to you. It personalizes prompts based on your own advice style—letting your inner mentor guide your own steps."
  },
  {
    id: 14,
    bits: "01101",
    name: "The Planner",
    tags: "Avoidant · Over-controlling · Arrogant · People-pleasing · Restless",
    description: "You build detailed strategies and big visions, but struggle to stop building. You’re addicted to optimization, often mistaking motion for progress.",
    nextSteps: [
      "Set a “completion signal” for one plan—define “done.”",
      "Replace one new idea with refining an existing one.",
      "Schedule breaks as part of your plan, not a failure of it."
    ],
    coaching: "Charm visualizes focus over volume. Its progress analytics reveal how fewer, deeper goals outperform constant planning."
  },
  {
    id: 15,
    bits: "01110",
    name: "The Evaluator",
    tags: "Avoidant · Over-controlling · Arrogant · Rigid · Stuck",
    description: "You judge value in moral terms—what’s right, fair, or wasteful. This structure feels principled but can limit compassion for yourself and others.",
    nextSteps: [
      "Soft one financial rule for a week.",
      "Spend on something purely emotional, not “deserved.”",
      "Ask: “What would generosity look like toward myself?”"
    ],
    coaching: "Charm reframes financial morality as balance. Its reflection insights highlight both discipline and grace, helping you move from judgment to wisdom."
  },
  {
    id: 16,
    bits: "01111",
    name: "The Organizer",
    tags: "Avoidant · Over-controlling · Arrogant · Rigid · Restless",
    description: "You run your finances with structure and precision. Control keeps anxiety low—but joy, spontaneity, and creativity rarely get airtime. You’re excellent at maintaining, hesitant to explore.",
    nextSteps: [
      "Try one “unoptimized” expense—spend for feeling, not function.",
      "Take a day off from tracking and notice what you feel.",
      "Journal: “If everything stayed fine, what else would I want?”"
    ],
    coaching: "Charm invites flexibility within order. It introduces small randomness—micro-reflection prompts that nurture curiosity inside stability."
  },
  {
    id: 17,
    bits: "10000",
    name: "The Nurturer",
    tags: "Anxious · Helpless · Insecure · People-pleasing · Stuck",
    description: "You care deeply about others’ comfort, sometimes more than your own. Money becomes a love language, but giving too much leaves you tired and unseen.",
    nextSteps: [
      "Separate “care” from “cost” by listing 3 non-monetary ways to support others.",
      "Give within limits you can sustain.",
      "Track emotional energy, not just spending."
    ],
    coaching: "Charm visualizes generosity and depletion together. It helps you see when giving strengthens connection and when it quietly erodes well-being."
  },
  {
    id: 18,
    bits: "10001",
    name: "The Romantic",
    tags: "Anxious · Helpless · Insecure · People-pleasing · Restless",
    description: "You use money to create moments of beauty and inspiration. You chase emotion over logic—but fulfillment fades when feelings pass.",
    nextSteps: [
      "Reflect on what experiences truly stay with you.",
      "Pair each indulgence with one grounding ritual (journal, save, or pause).",
      "Budget a “beauty fund” with clear boundaries."
    ],
    coaching: "Charm translates emotion into pattern. It shows which experiences actually nourish you long-term—helping you preserve passion without chaos."
  },
  {
    id: 19,
    bits: "10010",
    name: "The Supporter",
    tags: "Anxious · Helpless · Insecure · Rigid · Stuck",
    description: "You lean on others for security and direction. Dependence provides comfort, but it limits your sense of agency and growth.",
    nextSteps: [
      "Take responsibility for one recurring task—bill, savings, or log.",
      "Reflect: “What belief keeps me from trusting myself?”",
      "Share small progress with pride."
    ],
    coaching: "Charm builds independence safely. It breaks complexity into micro-decisions, rewarding self-management with calm feedback loops that reinforce trust."
  },
  {
    id: 20,
    bits: "10011",
    name: "The Balancer",
    tags: "Anxious · Helpless · Insecure · Rigid · Restless",
    description: "You swing between control and release—saving intensely, then overspending to feel free again. You crave harmony but struggle to stay there.",
    nextSteps: [
      "Set upper and lower limits for one account.",
      "When urges rise, pause and ask, “What emotion wants balance right now?”",
      "Celebrate midpoints, not extremes."
    ],
    coaching: "Charm tracks emotional volatility with compassion. It visually normalizes fluctuations, teaching your nervous system that equilibrium is dynamic, not static."
  },
  {
    id: 21,
    bits: "10100",
    name: "The Connector",
    tags: "Anxious · Helpless · Arrogant · People-pleasing · Stuck",
    description: "You build relationships easily and use charm or collaboration to navigate money. But when social harmony falters, your stability does too.",
    nextSteps: [
      "Track which money decisions depend on others’ approval.",
      "Create one “solo” financial routine that no one else influences.",
      "Reflect: “What kind of connection do I buy, and what kind do I build?”"
    ],
    coaching: "Charm helps you separate belonging from spending. Its reflection tools highlight when connection is mutual and when it costs more than it gives."
  },
  {
    id: 22,
    bits: "10101",
    name: "The Creator",
    tags: "Anxious · Helpless · Arrogant · People-pleasing · Restless",
    description: "You thrive on possibility and expression. You see money as creative material—but consistency bores you, and unfinished projects pile up.",
    nextSteps: [
      "Set one “sustainability” rule for your creative habits (budget, time, or energy).",
      "Link each new idea to an old one before starting.",
      "Add one ritual for closure—completion as creation."
    ],
    coaching: "Charm transforms inspiration into integration. It helps you turn creative surges into sustainable cycles with gentle pacing and milestone tracking."
  },
  {
    id: 23,
    bits: "10110",
    name: "The Guardian",
    tags: "Anxious · Helpless · Arrogant · Rigid · Stuck",
    description: "You see yourself as a protector of values and people. You seek moral clarity around money, but rigidity can make you anxious or judgmental.",
    nextSteps: [
      "Loosen one moral rule you hold about “right” money behavior.",
      "Do one generous act with no “lesson” attached.",
      "Reflect on when safety becomes control."
    ],
    coaching: "Charm invites nuance and grace. It visualizes how flexibility sustains stability, helping you act from care rather than duty alone."
  },
  {
    id: 24,
    bits: "10111",
    name: "The Achiever",
    tags: "Anxious · Helpless · Arrogant · Rigid · Restless",
    description: "You measure progress through performance and productivity. You love goals—but sometimes the chase replaces fulfillment.",
    nextSteps: [
      "Add one non-quantitative goal: “feel calmer,” “enjoy the process.”",
      "Limit yourself to three active money goals at once.",
      "Take one “no-output” day monthly."
    ],
    coaching: "Charm reframes growth as balance. Its dashboard tracks energy, rest, and alignment so you see progress without pressure."
  },
  {
    id: 25,
    bits: "11000",
    name: "The Helper",
    tags: "Anxious · Vigilant · Insecure · People-pleasing · Stuck",
    description: "You instinctively step in to rescue others, even when you’re depleted. Support gives you purpose—but also keeps you from tending to yourself.",
    nextSteps: [
      "Before helping, ask: “Did they ask, or did I offer?”",
      "Write down how each act of helping affects your energy.",
      "Practice saying, “I trust you to handle it.”"
    ],
    coaching: "Charm visualizes energy and emotional flow. It helps you see when care nourishes and when it drains, guiding you to boundaries that feel compassionate, not cold."
  },
  {
    id: 26,
    bits: "11001",
    name: "The Caretaker",
    tags: "Anxious · Vigilant · Insecure · People-pleasing · Restless",
    description: "You manage everyone’s well-being, finances, or emotions before your own. Responsibility feels loving—but constant caretaking turns into quiet exhaustion.",
    nextSteps: [
      "Write a “helping limit” rule: one offer per week unless asked.",
      "Track how often care feels draining instead of connecting.",
      "Reinvest one act of care toward yourself."
    ],
    coaching: "Charm helps you see the balance between care and self-renewal. Its reflection analytics visualize how generosity impacts your energy, turning guilt into clarity."
  },
  {
    id: 27,
    bits: "11010",
    name: "The Sentinel",
    tags: "Anxious · Vigilant · Insecure · Rigid · Stuck",
    description: "You protect through structure and control. Rules make you feel safe, but fear of unpredictability can shrink your world.",
    nextSteps: [
      "Identify one situation you can let unfold without intervening.",
      "Soften a rule that limits spontaneity.",
      "Record what actually happens when you don’t control it."
    ],
    coaching: "Charm normalizes uncertainty. It reframes “unknown” as data waiting to be observed, building trust that safety grows from adaptability, not rigidity."
  },
  {
    id: 28,
    bits: "11011",
    name: "The Analyst",
    tags: "Anxious · Vigilant · Insecure · Rigid · Restless",
    description: "You analyze constantly—budgets, trends, risks—seeking mastery through understanding. Yet your search for precision can mask anxiety about being wrong.",
    nextSteps: [
      "Replace one analysis session with reflection: “What do I feel, not what do I know?”",
      "Simplify one complex system.",
      "Practice “incomplete knowledge” with small bets."
    ],
    coaching: "Charm turns information into intuition. It visualizes the diminishing return of overanalysis, encouraging confident experimentation with small-scale feedback."
  },
  {
    id: 29,
    bits: "11100",
    name: "The Leader",
    tags: "Anxious · Vigilant · Arrogant · People-pleasing · Stuck",
    description: "You feel responsible for outcomes and people alike. You inspire others—but secretly fear losing control or credibility. The weight of leadership isolates you.",
    nextSteps: [
      "Delegate one decision or task you’ve been guarding.",
      "Reflect: “What’s my role when I’m not in charge?”",
      "Create shared goals instead of solo burdens."
    ],
    coaching: "Charm reframes leadership from control to trust. It highlights how shared ownership and distributed effort increase long-term resilience."
  },
  {
    id: 30,
    bits: "11101",
    name: "The Visionary",
    tags: "Anxious · Vigilant · Arrogant · People-pleasing · Restless",
    description: "You think in big pictures and future systems. You see potential everywhere—but execution drains you. Your drive sometimes outruns your foundation.",
    nextSteps: [
      "Choose one dream to finish before starting another.",
      "Break every new idea into a “first 1%” step.",
      "Review what’s working now instead of what’s missing."
    ],
    coaching: "Charm helps you ground vision in rhythm. Its goal system maps ambition into achievable stages, turning inspiration into sustainable flow."
  },
  {
    id: 31,
    bits: "11110",
    name: "The Mastermind",
    tags: "Anxious · Vigilant · Arrogant · Rigid · Stuck",
    description: "You equate control with excellence and wealth with worth. Planning feels natural, but you find it hard to rest unless results are measurable. You lead with logic, yet emotion quietly shapes your choices.",
    nextSteps: [
      "Define success without numbers—peace, creativity, relationships.",
      "Collaborate on one decision where you don’t hold all authority.",
      "Break one self-imposed rule this week and observe how safety feels."
    ],
    coaching: "Charm reflects success beyond accumulation. Its value-alignment tracker connects satisfaction to meaning, not totals—helping you lead from balance instead of dominance."
  },
  {
    id: 32,
    bits: "11111",
    name: "The Builder",
    tags: "Anxious · Vigilant · Arrogant · Rigid · Restless",
    description: "You are relentless in pursuit of vision. Achievement fuels identity, and growth feels essential. But the drive for “more” can crowd out ease and intimacy.",
    nextSteps: [
      "List what you’d keep the same if nothing grew for a year.",
      "Dedicate one day each month to pure maintenance, no expansion.",
      "Ask: “What part of me wants rest but won’t admit it?”"
    ],
    coaching: "Charm turns drive into design. It visualizes harmony between expansion and fulfillment, showing that creation matures when you pause to enjoy what you’ve built."
  }
];

// ==========================================
// 3. QUESTIONS (Existing)
// ==========================================
export const QUESTIONS: Question[] = [
  // 1. CLOSENESS SCALE
  { id: "cl1", category: "closeness", text: "I often delay opening bills or checking my bank app because I don't want to deal with it.", weight: -1 },
  { id: "cl2", category: "closeness", text: "I prefer to ignore my financial reality and hope things work out on their own.", weight: -1 },
  { id: "cl3", category: "closeness", text: "I check my bank balance constantly, even when I know nothing has changed.", weight: 1 },
  { id: "cl4", category: "closeness", text: "Spending money makes me feel physically nervous, even when I can afford it.", weight: 1 },
  { id: "cl5", category: "closeness", text: "I worry excessively about running out of money, regardless of how much I have saved.", weight: 1 },

  // 2. CONTROL SCALE
  { id: "co1", category: "control", text: "I feel that my financial situation is entirely determined by bad luck or outside forces.", weight: -1 },
  { id: "co2", category: "control", text: "There is no point in making a financial plan because unexpected things always happen.", weight: -1 },
  { id: "co3", category: "control", text: "I have strict spending rules that I cannot bring myself to break, even for special occasions.", weight: 1 },
  { id: "co4", category: "control", text: "If I deviate from my budget even slightly, I feel a strong need to punish myself or cut back immediately.", weight: 1 },
  { id: "co5", category: "control", text: "I struggle to relax because I feel I must monitor every penny to be safe.", weight: 1 },

  // 3. SELF-WORTH SCALE
  { id: "sw1", category: "selfWorth", text: "I often feel 'less than' or ashamed when I compare my possessions to those of my peers.", weight: -1 },
  { id: "sw2", category: "selfWorth", text: "I hide my true financial struggles from others because I fear they will think I am a failure.", weight: -1 },
  { id: "sw3", category: "selfWorth", text: "I secretly feel superior to people who earn less or save less than I do.", weight: 1 },
  { id: "sw4", category: "selfWorth", text: "I believe my net worth is the primary measure of my success and intelligence.", weight: 1 },
  { id: "sw5", category: "selfWorth", text: "I feel that having money makes someone a better or more important person.", weight: 1 },

  // 4. BOUNDARY SCALE
  { id: "bo1", category: "boundary", text: "I often lend money or pay for others just to keep the peace, even when I can't afford it.", weight: -1 },
  { id: "bo2", category: "boundary", text: "I find it extremely difficult to say 'no' to financial requests from family or friends.", weight: -1 },
  { id: "bo3", category: "boundary", text: "I keep my income and spending habits a complete secret from everyone, including close partners.", weight: 1 },
  { id: "bo4", category: "boundary", text: "I dislike accepting gifts or help because I don't want to feel indebted to anyone.", weight: 1 },
  { id: "bo5", category: "boundary", text: "I prefer transaction-based relationships where everything is split evenly so I don't get taken advantage of.", weight: 1 },

  // 5. GROWTH SCALE
  { id: "gr1", category: "growth", text: "I rarely look for new ways to improve my finances because I prefer staying in my comfort zone.", weight: -1 },
  { id: "gr2", category: "growth", text: "I stick to the financial habits I learned years ago, even if there might be better options now.", weight: -1 },
  { id: "gr3", category: "growth", text: "I feel restless and dissatisfied even when I meet my goals because I know I could always optimize further.", weight: 1 },
  { id: "gr4", category: "growth", text: "I spend a significant portion of my free time constantly researching how to maximize returns.", weight: 1 },
  { id: "gr5", category: "growth", text: "I struggle to celebrate financial wins because I am already focused on the next target.", weight: 1 },
];

export const PAGE_SIZE = 5;