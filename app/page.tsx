import { HandoffVisual, HeroWorkflowVisual, ReviewShieldVisual, WorkflowIcon } from '../components/insurance-visuals';

const demoUrl = 'https://calendar.app.google/gLMwF9C1Gw6SED4S6';
const linkedinUrl = 'https://www.linkedin.com/in/sahil-maheshwari/';

const agentTypes = [
  {
    icon: 'collection' as const,
    title: 'Client information collection',
    timing: 'Before placement or renewal',
    text: 'Requests required facts and documents, then tracks the gaps.',
    output: 'A usable submission record.',
  },
  {
    icon: 'clarification' as const,
    title: 'Clarification follow-up',
    timing: 'When an answer is incomplete',
    text: 'Follows up when an answer is incomplete, outdated, or unclear.',
    output: 'The answer beside its source.',
  },
  {
    icon: 'renewal' as const,
    title: 'Renewal change check',
    timing: 'During renewal',
    text: 'Compares last year with today and asks what changed.',
    output: 'A dated renewal change record.',
  },
];

const steps = [
  'Choose one repeated request.',
  'Set who can be contacted, what can be asked, and when to stop.',
  'Review the workflow before anything is sent.',
  'Receive the answers, sources, and open items in one place.',
];

const safeguards = [
  'Your team approves each workflow.',
  'Unclear requests return to a person.',
  'Questions, replies, sources, and open items stay together.',
  'Insurance judgement stays with your professionals.',
];

const audiences = [
  { icon: 'broker' as const, text: 'Commercial brokers chasing client information before placement' },
  { icon: 'underwriter' as const, text: 'Underwriters waiting on missing or inconsistent risk details' },
  { icon: 'claims' as const, text: 'Claims teams coordinating documents, insureds, lawyers, and specialists' },
  { icon: 'operations' as const, text: 'Insurance operations teams managing repeated follow-ups across email and spreadsheets' },
];

const metrics = [
  'Time spent chasing',
  'Follow-ups per usable answer',
  'Answers missing context',
  'Requests ready for review',
];

const useCases = [
  {
    title: 'Commercial insurance renewals',
    text: 'Start from last year’s submission, ask the client what changed, request current schedules, and keep each response tied to its source. The broker reviews the resulting change record before it moves to an insurer.',
  },
  {
    title: 'Underwriting information requests',
    text: 'Turn a list of missing risk details into a controlled request. Insuveo can track partial answers and return unresolved questions without making the underwriting decision.',
  },
  {
    title: 'Claims document follow-up',
    text: 'Coordinate approved requests for documents and clarifications while preserving who replied, what was accepted, and what still needs a claims professional’s attention.',
  },
];

const faqs = [
  {
    question: 'What kind of insurance work is Insuveo designed for?',
    answer: 'Insuveo is being designed for repeated information and follow-up workflows in commercial insurance, including renewals, underwriting submissions, and claims coordination.',
  },
  {
    question: 'Does Insuveo make underwriting or claims decisions?',
    answer: 'No. Insurance professionals keep control of judgement and approval. The product direction focuses on gathering information, tracking context, and returning open items for review.',
  },
  {
    question: 'Can a team control who receives a follow-up?',
    answer: 'Yes. A workflow defines who may be contacted, what may be requested, how many reminders are allowed, and when the work must return to a person.',
  },
  {
    question: 'How would an Insuveo pilot begin?',
    answer: 'Start with one narrow workflow that already creates repeated chasing. Map its inputs, approval boundaries, handoffs, and review point before testing any automation.',
  },
];

export default function MarketingPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <main className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <header className="top-nav">
        <a className="wordmark" href="/">insuveo</a>
        <nav aria-label="Primary navigation">
          <a href="#product">Product</a>
          <a href="#agents">Workflows</a>
          <a href="#process">How it works</a>
          <a href="#safety">Control</a>
          <a href="#founder">Founder</a>
          <a href="/blog">Blog</a>
          <a className="button button-primary nav-cta" href={demoUrl}>Book a demo</a>
        </nav>
      </header>

      <section className="hero" id="product">
        <div className="hero-copy-wrap">
          <p className="eyebrow">AI workflow automation for commercial insurance</p>
          <h1>
            Keep insurance work moving.<br />
            <em>Without chasing every answer.</em>
          </h1>
          <p className="hero-copy">
            Insuveo helps brokers, underwriters, and claims teams collect missing information, follow up within approved limits, and return a clear record for review.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={demoUrl}>Book a demo</a>
            <a className="button button-secondary" href="#process">See how it works</a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Example insurance workflow">
          <HeroWorkflowVisual />
          <p className="panel-label">A familiar renewal problem</p>
          <h2>The client replied, but the renewal still cannot move forward.</h2>
          <dl>
            <div><dt>Missing</dt><dd>Current turnover and schedule</dd></div>
            <div><dt>Contact</dt><dd>Client finance team</dd></div>
            <div><dt>Limit</dt><dd>One email and one reminder</dd></div>
            <div><dt>Return</dt><dd>Answer, source, and open items</dd></div>
          </dl>
        </div>
      </section>

      <section className="section intro-section" id="about">
        <p className="eyebrow">The operational bottleneck</p>
        <div className="section-heading-row">
          <h2>Insurance decisions wait on missing context.</h2>
          <div>
            <p>
              Forms arrive incomplete. Documents are outdated. Follow-up moves across clients, brokers, and underwriters. Insuveo keeps the request and its context together.
            </p>
            <p>
              The goal is simple: keep insurance work moving without chasing every answer by hand. Each reply should remain connected to the question, the respondent, the source document, and the items that are still open.
            </p>
          </div>
        </div>
        <div className="section-visual-wrap">
          <HandoffVisual />
          <p className="visual-caption">Keep each request, answer, source, and unresolved item connected through the handoff.</p>
        </div>
      </section>

      <section className="section" id="agents">
        <div className="section-header">
          <p className="eyebrow">Insurance workflows</p>
          <h2>Three workflows that repeat every week.</h2>
        </div>
        <div className="card-grid three">
          {agentTypes.map((agent) => (
            <article className="card" key={agent.title}>
              <WorkflowIcon kind={agent.icon} />
              <p className="card-kicker">{agent.timing}</p>
              <h3>{agent.title}</h3>
              <p>{agent.text}</p>
              <strong>Result: {agent.output}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="process">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>Start with one workflow. Set the limits.</h2>
        </div>
        <ol className="numbered-list">
          {steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <section className="section split muted-section" id="safety">
        <div>
          <p className="eyebrow">Human control</p>
          <h2>People make the insurance decision. Insuveo handles approved follow-up.</h2>
          <ReviewShieldVisual />
        </div>
        <ul className="check-list">
          {safeguards.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section" id="use-cases">
        <div className="section-header">
          <p className="eyebrow">Where it can fit</p>
          <h2>Start with a narrow commercial insurance workflow.</h2>
          <p>
            Insuveo is still an early product direction. These examples describe the kinds of operational work we are exploring with insurance teams, not finished capabilities or promised results.
          </p>
        </div>
        <div className="card-grid three">
          {useCases.map((useCase) => (
            <article className="card" key={useCase.title}>
              <h3>{useCase.title}</h3>
              <p>{useCase.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Who it is for</p>
          <h2>Built with insurance professionals, for insurance work.</h2>
        </div>
        <div className="card-grid four">
          {audiences.map((audience) => (
            <article className="mini-card" key={audience.text}>
              <WorkflowIcon kind={audience.icon} />
              <span>{audience.text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Pilot measures</p>
          <h2>A pilot should make the workflow measurably easier.</h2>
        </div>
        <div className="metric-grid">
          {metrics.map((metric) => <div className="metric" key={metric}>{metric}</div>)}
        </div>
      </section>

      <section className="section split muted-section" id="founder">
        <div>
          <p className="eyebrow">About the founder</p>
          <h2>Built by Sahil Maheshwari, with insurance professionals.</h2>
        </div>
        <div>
          <p>
            I build software and AI products. With Insuveo, I am learning from brokers, underwriters, claims teams, and risk managers before deciding what to automate.
          </p>
          <p>
            If your team repeats a frustrating workflow every week, I would like to see it.
          </p>
          <a className="text-link" href={linkedinUrl} target="_blank" rel="noreferrer">Message Sahil on LinkedIn</a>
        </div>
      </section>

      <section className="section faq-section" id="questions">
        <div className="section-header">
          <p className="eyebrow">Common questions</p>
          <h2>How Insuveo approaches insurance workflow automation.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-section" id="demo">
        <p className="eyebrow">Bring one real workflow</p>
        <h2>Where does insurance information get stuck?</h2>
        <p>Show us the request, handoff, or follow-up that slows your team down.</p>
        <a className="button button-primary" href={demoUrl}>Book a demo</a>
      </section>

      <footer className="footer">
        <div>
          <a className="wordmark" href="/">insuveo</a>
          <p>Workflow automation for insurance teams.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#about">Problem</a>
          <a href="#agents">Workflows</a>
          <a href="#process">How it works</a>
          <a href="#safety">Control</a>
          <a href="#founder">Founder</a>
          <a href="/blog">Blog</a>
          <a href={demoUrl}>Book a demo</a>
        </nav>
      </footer>
    </main>
  );
}
