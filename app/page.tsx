const demoUrl = 'https://calendar.app.google/mx5wAQbN6GmVNvXT7';

const agentTypes = [
  {
    title: 'Form collection agent',
    timing: 'Beginning',
    text: 'Collects approved checklist or form data needed to start a workflow.',
    output: 'Answers, source references, and remaining gaps.',
  },
  {
    title: 'Clarification agent',
    timing: 'Middle',
    text: 'Follows up on missing figures, dates, units, documents, or inconsistent details.',
    output: 'A response pack mapped to each open question.',
  },
  {
    title: 'Renewal changes agent',
    timing: 'Later lifecycle',
    text: 'Checks what changed since last year without assuming old facts are still current.',
    output: 'A dated change, no-change, or unknown summary.',
  },
];

const steps = [
  'Choose an agent and describe the data gap in plain English.',
  'Insuveo resolves the respondent, required information, source context, limits, and delivery format.',
  'Your team reviews the exact plan before any outbound action happens.',
  'The agent collects, follows up inside approved limits, stops on ambiguity, and returns sourced answers.',
];

const safeguards = [
  'No agent contacts anyone before approval.',
  'Unknown or ambiguous contacts block the run.',
  'Every run keeps a plan, approval, status, next action, activity trail, gaps, and sources.',
  'The agent collects facts. It does not make underwriting, claims, or coverage judgments.',
];

const audiences = [
  'Commercial broking teams collecting client information',
  'Account executives and servicing coordinators managing renewals',
  'Operations leads standardizing repeated follow-up work',
  'Insurance teams that need auditable, source-backed responses',
];

const metrics = [
  'Lower operator handling time',
  'Fewer unsupported facts in reports',
  'No unauthorized outbound actions',
  'Reusable templates across multiple workflows',
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
          <a href={demoUrl}>Book demo</a>
        </nav>
      </header>

      <section className="hero" id="product">
        <div className="hero-copy-wrap">
          <p className="eyebrow">AI agents for insurance workflow data</p>
          <h1>
            Create agents that collect the facts.<br />
            <em>Keep humans in control.</em>
          </h1>
          <p className="hero-copy">
            Insuveo turns a plain-English insurance request into a bounded data-collection agent. It uses existing context, contacts approved respondents after approval, asks relevant follow-ups, and returns structured data with gaps and sources.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={demoUrl}>Book a demo</a>
            <a className="button button-secondary" href="#agents">Explore agents</a>
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
        </div>
      </section>

      <section className="section intro-section" id="about">
        <p className="eyebrow">About</p>
        <div className="section-heading-row">
          <h2>Insuveo is an English-first data collection agent for insurance professionals.</h2>
          <p>
            The product standardizes request execution, not insurance judgment. Your team expresses intent, approves meaningful actions, and reviews the returned facts while Insuveo handles the mechanical chase.
          </p>
        </div>
      </section>

      <section className="section" id="agents">
        <div className="section-header">
          <p className="eyebrow">Agent types</p>
          <h2>Three common insurance information loops. One shared engine.</h2>
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
          <h2>Purpose + respondent + context + limits becomes a controlled collection run.</h2>
        </div>
        <ol className="numbered-list">
          {steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <section className="section split muted-section" id="safety">
        <div>
          <p className="eyebrow">Safety boundaries</p>
          <h2>Automation for follow-up, not autonomous insurance decisions.</h2>
        </div>
        <ul className="check-list">
          {safeguards.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Who it is for</p>
          <h2>Built for teams that repeat the same information chase every week.</h2>
        </div>
        <div className="card-grid four">
          {audiences.map((audience) => <article className="mini-card" key={audience}>{audience}</article>)}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Pilot goals</p>
          <h2>Measure useful information returned with less human handling.</h2>
        </div>
        <div className="metric-grid">
          {metrics.map((metric) => <div className="metric" key={metric}>{metric}</div>)}
        </div>
      </section>

      <section className="cta-section" id="demo">
        <p className="eyebrow">Demo</p>
        <h2>See how Insuveo turns a request into an approved agent plan.</h2>
        <p>Book a short demo to walk through form collection, clarification follow-up, and renewal change workflows.</p>
        <a className="button button-primary" href={demoUrl}>Book a demo</a>
      </section>

      <footer className="footer">
        <div>
          <a className="wordmark" href="/">insuveo</a>
          <p>Create agents for getting insurance workflow data.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#agents">Agents</a>
          <a href="#process">Process</a>
          <a href="#safety">Safety</a>
          <a href={demoUrl}>Book demo</a>
        </nav>
      </footer>
    </main>
  );
}
