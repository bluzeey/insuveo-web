const demoUrl = 'https://calendar.app.google/gLMwF9C1Gw6SED4S6';
const linkedinUrl = 'https://www.linkedin.com/in/sahil-maheshwari/';

const agentTypes = [
  {
    title: 'Form collection agent',
    timing: 'Beginning',
    text: 'Starts a workflow by collecting the checklist or form data your team has approved.',
    output: 'Answers with their sources and any missing items.',
  },
  {
    title: 'Clarification agent',
    timing: 'Middle',
    text: 'Follows up when a figure lacks a date or unit, a document is missing, or two answers conflict.',
    output: 'A response mapped to each open question.',
  },
  {
    title: 'Renewal changes agent',
    timing: 'Later lifecycle',
    text: 'Asks what changed since the last renewal and checks old information before reusing it.',
    output: 'A dated record of what changed, stayed the same, or remains unknown.',
  },
];

const steps = [
  'Describe the missing information and choose the person or team who can answer.',
  'Insuveo turns the request into a plan with questions, source context, contact method, limits, and output.',
  'Your team reviews the plan before Insuveo contacts anyone.',
  'The agent follows up within those limits and returns each answer with its source. It flags anything still missing.',
];

const safeguards = [
  'Your team approves the plan before the agent contacts anyone.',
  'If the intended contact is unclear, the run pauses for review.',
  'Each run records the plan, approval, status, activity, unanswered questions, and sources.',
  'The agent gathers and organises information. Your team makes the underwriting, claims, and coverage decisions.',
];

const audiences = [
  'Commercial broking teams collecting client information',
  'Account executives and servicing coordinators managing renewals',
  'Operations leads standardizing repeated follow-up work',
  'Insurance teams that need answers with clear sources',
];

const metrics = [
  'Time spent handling each request',
  'Unsupported facts found in the result',
  'Outbound actions sent without approval',
  'Templates reused for another workflow',
];

export default function MarketingPage() {
  return (
    <main className="site-shell">
      <header className="top-nav">
        <a className="wordmark" href="/">insuveo</a>
        <nav aria-label="Primary navigation">
          <a href="#product">Product</a>
          <a href="#agents">Agents</a>
          <a href="#process">Process</a>
          <a href="#safety">Safety</a>
          <a href="#founder">Founder</a>
          <a href="/blog">Blog</a>
          <a href={demoUrl}>Book demo</a>
        </nav>
      </header>

      <section className="hero" id="product">
        <div className="hero-copy-wrap">
          <p className="eyebrow">Data collection agents for insurance teams</p>
          <h1>
            Describe the information you need.<br />
            <em>Review the plan before it runs.</em>
          </h1>
          <p className="hero-copy">
            Insuveo turns a plain-English insurance request into a data collection plan. It uses the context your team provides, contacts approved people, follows up on incomplete answers, and returns the result with gaps and sources.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={demoUrl}>Book a demo</a>
            <a className="button button-secondary" href="#process">See how it works</a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Example agent plan">
          <p className="panel-label">Example plan</p>
          <h2>Ask finance for the missing renewal figures.</h2>
          <dl>
            <div><dt>Who</dt><dd>Approved finance contact</dd></div>
            <div><dt>Collect</dt><dd>This year&apos;s turnover, period, and units</dd></div>
            <div><dt>Method</dt><dd>Email, one reminder, no calls</dd></div>
            <div><dt>Deliver</dt><dd>Summary with unanswered items and source links</dd></div>
          </dl>
          <a className="button button-primary panel-demo-button" href={demoUrl}>Book a demo</a>
        </div>
      </section>

      <section className="section intro-section" id="about">
        <p className="eyebrow">About</p>
        <div className="section-heading-row">
          <h2>Insuveo helps insurance teams collect missing information across forms and email.</h2>
          <p>
            Your team sets the purpose, chooses who can be contacted, and approves the plan. Insuveo handles requests, reminders, and clarification while keeping the source of each answer attached.
          </p>
        </div>
      </section>

      <section className="section" id="agents">
        <div className="section-header">
          <p className="eyebrow">Agent types</p>
          <h2>Use an agent at the start, when an answer is incomplete, or during renewal.</h2>
        </div>
        <div className="card-grid three">
          {agentTypes.map((agent) => (
            <article className="card" key={agent.title}>
              <p className="card-kicker">{agent.timing}</p>
              <h3>{agent.title}</h3>
              <p>{agent.text}</p>
              <strong>{agent.output}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="process">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>A plain-English request becomes a plan your team can inspect.</h2>
        </div>
        <ol className="numbered-list">
          {steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <section className="section split muted-section" id="safety">
        <div>
          <p className="eyebrow">Safety boundaries</p>
          <h2>Your team sets the limits for every collection run.</h2>
        </div>
        <ul className="check-list">
          {safeguards.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Who it is for</p>
          <h2>For teams that spend time chasing missing information.</h2>
        </div>
        <div className="card-grid four">
          {audiences.map((audience) => <article className="mini-card" key={audience}>{audience}</article>)}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Pilot goals</p>
          <h2>A pilot should show whether the workflow saves time and improves the returned information.</h2>
        </div>
        <div className="metric-grid">
          {metrics.map((metric) => <div className="metric" key={metric}>{metric}</div>)}
        </div>
      </section>

      <section className="section split muted-section" id="founder">
        <div>
          <p className="eyebrow">About the founder</p>
          <h2>I&apos;m Sahil Maheshwari. I&apos;m building Insuveo by starting with the workflow, not the AI demo.</h2>
        </div>
        <div>
          <p>
            I&apos;m a product-focused engineer and founder. Before Insuveo, I built AI products and research workflows used at meaningful scale. With Insuveo, I&apos;m spending time with brokers, underwriters, claims teams, insurance operators, and corporate buyers to understand where information gets lost, delayed, or repeatedly chased.
          </p>
          <p>
            The goal is simple: find a narrow insurance workflow where better collection and follow-up creates measurable value, then build the product around that reality.
          </p>
          <a className="text-link" href={linkedinUrl} target="_blank" rel="noreferrer">Connect with Sahil on LinkedIn</a>
        </div>
      </section>

      <section className="cta-section" id="demo">
        <p className="eyebrow">Demo</p>
        <h2>Bring one recurring information request to the demo.</h2>
        <p>We will map how it starts, who answers, where follow-up happens, and what your team needs to review.</p>
        <a className="button button-primary" href={demoUrl}>Book a demo</a>
      </section>

      <footer className="footer">
        <div>
          <a className="wordmark" href="/">insuveo</a>
          <p>Data collection agents for insurance teams.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#agents">Agents</a>
          <a href="#process">Process</a>
          <a href="#safety">Safety</a>
          <a href="#founder">Founder</a>
          <a href="/blog">Blog</a>
          <a href={demoUrl}>Book demo</a>
        </nav>
      </footer>
    </main>
  );
}
