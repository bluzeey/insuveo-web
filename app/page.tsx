const demoUrl = 'https://calendar.app.google/gLMwF9C1Gw6SED4S6';
const linkedinUrl = 'https://www.linkedin.com/in/sahil-maheshwari/';

const agentTypes = [
  {
    title: 'Client information collection',
    timing: 'Before placement or renewal',
    text: 'Collects the facts and documents your team already knows it needs, then keeps track of what is still missing.',
    output: 'A clear list of what came back, where it came from, and what still needs attention.',
  },
  {
    title: 'Clarification follow-up',
    timing: 'When an answer is incomplete',
    text: 'Follows up when a figure has no period, a document is outdated, or an answer creates another obvious question.',
    output: 'The clarification alongside the original answer, so the context does not disappear in the email thread.',
  },
  {
    title: 'Renewal change check',
    timing: 'During renewal',
    text: 'Uses last year as context, asks what changed, and avoids quietly treating old information as current.',
    output: 'A dated record of what changed, what stayed the same, and what is still unknown.',
  },
];

const steps = [
  'Start with one real request your team already handles: missing turnover, a claims document, renewal changes, or another repeated chase.',
  'Insuveo turns it into a clear collection workflow: who can be contacted, what can be asked, what context matters, and when to stop.',
  'Your team reviews the plan before anything is sent.',
  'Insuveo follows up within those limits and brings the answers, sources, and remaining gaps back to the person making the insurance decision.',
];

const safeguards = [
  'Nothing is sent until your team has approved the workflow.',
  'If the right person or next question is unclear, the workflow comes back to a human.',
  'Every request keeps the original question, replies, sources, open items, and activity in one place.',
  'Insuveo handles coordination around the decision. Your brokers, underwriters, claims professionals, and risk teams keep the judgement.',
];

const audiences = [
  'Commercial brokers chasing client information before placement',
  'Underwriters waiting on missing or inconsistent risk details',
  'Claims teams coordinating documents, insureds, lawyers, and specialists',
  'Insurance operations teams managing repeated follow-ups across email and spreadsheets',
];

const metrics = [
  'How much time the team spends chasing each request',
  'How many follow-ups it takes to get a usable answer',
  'How often information arrives without the context needed to use it',
  'How many requests can move forward without somebody reconstructing the email thread',
];

export default function MarketingPage() {
  return (
    <main className="site-shell">
      <header className="top-nav">
        <a className="wordmark" href="/">insuveo</a>
        <nav aria-label="Primary navigation">
          <a href="#product">Product</a>
          <a href="#agents">Workflows</a>
          <a href="#process">How it works</a>
          <a href="#safety">Control</a>
          <a href="#founder">Founder</a>
          <a href="/blog">Blog</a>
          <a href={demoUrl}>Share a workflow</a>
        </nav>
      </header>

      <section className="hero" id="product">
        <div className="hero-copy-wrap">
          <p className="eyebrow">For insurance teams that are tired of chasing the same information twice</p>
          <h1>
            Keep the insurance judgement with your team.<br />
            <em>Take the repeated follow-up off their plate.</em>
          </h1>
          <p className="hero-copy">
            A broker should not spend half the day asking whether the client sent the turnover split. An underwriter should not have to reconstruct three email threads to understand one answer. Insuveo is being built to handle the coordination around submissions, renewals, and claims while keeping people in control of what gets sent and what gets used.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={demoUrl}>Show us a workflow</a>
            <a className="button button-secondary" href="#process">See how it could work</a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Example insurance workflow">
          <p className="panel-label">A familiar renewal problem</p>
          <h2>The client replied, but the renewal still cannot move forward.</h2>
          <dl>
            <div><dt>Missing</dt><dd>This year&apos;s turnover, reporting period, and supporting schedule</dd></div>
            <div><dt>Who knows</dt><dd>Finance contact already approved by the client team</dd></div>
            <div><dt>Follow-up</dt><dd>One email, one reminder, then return to the broker</dd></div>
            <div><dt>Back to you</dt><dd>Answer, source, and anything still unresolved</dd></div>
          </dl>
          <a className="button button-primary panel-demo-button" href={demoUrl}>Talk through your version</a>
        </div>
      </section>

      <section className="section intro-section" id="about">
        <p className="eyebrow">The problem we are working on</p>
        <div className="section-heading-row">
          <h2>Insurance work often slows down before the actual insurance decision begins.</h2>
          <p>
            The client sent most of the form, but two answers are unusable. The supporting document is from last year. The underwriter asks one more question and the broker has to find the right person at the insured. None of this is the core judgement, but it is real work. Insuveo is focused on making that coordination easier to run and easier to inspect.
          </p>
        </div>
      </section>

      <section className="section" id="agents">
        <div className="section-header">
          <p className="eyebrow">Where we think it can help</p>
          <h2>Start with the parts of insurance work that already repeat every week.</h2>
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
          <h2>Bring the workflow you already have. We start there.</h2>
        </div>
        <ol className="numbered-list">
          {steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <section className="section split muted-section" id="safety">
        <div>
          <p className="eyebrow">Human control</p>
          <h2>The aim is less chasing, not autonomous insurance decisions.</h2>
        </div>
        <ul className="check-list">
          {safeguards.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Who we want to learn from</p>
          <h2>If part of your job is getting the right information from the right person, we would like to understand it.</h2>
        </div>
        <div className="card-grid four">
          {audiences.map((audience) => <article className="mini-card" key={audience}>{audience}</article>)}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">What a useful pilot should prove</p>
          <h2>Not whether AI looks impressive. Whether a real insurance workflow gets easier.</h2>
        </div>
        <div className="metric-grid">
          {metrics.map((metric) => <div className="metric" key={metric}>{metric}</div>)}
        </div>
      </section>

      <section className="section split muted-section" id="founder">
        <div>
          <p className="eyebrow">About the founder</p>
          <h2>I&apos;m Sahil Maheshwari. Right now, a large part of building Insuveo is listening to insurance professionals describe the work software usually misses.</h2>
        </div>
        <div>
          <p>
            My background is in building software and AI products. I am not trying to pretend that makes me an insurance expert. I&apos;m learning from brokers, underwriters, claims teams, insurance operators, and corporate risk teams about where information gets delayed, repeated, misunderstood, or lost between people.
          </p>
          <p>
            If there is a workflow your team complains about every week, I would genuinely like to hear it. It does not have to be a polished product idea. The messy version is usually more useful.
          </p>
          <a className="text-link" href={linkedinUrl} target="_blank" rel="noreferrer">Message Sahil on LinkedIn</a>
        </div>
      </section>

      <section className="cta-section" id="demo">
        <p className="eyebrow">Have a frustrating insurance workflow?</p>
        <h2>Show us the part your team keeps chasing, copying, checking, or explaining again.</h2>
        <p>We can spend the conversation understanding how it works today. If Insuveo is relevant, we will map what a small pilot could look like. If it is not, that is useful for us to learn too.</p>
        <a className="button button-primary" href={demoUrl}>Share the workflow with us</a>
      </section>

      <footer className="footer">
        <div>
          <a className="wordmark" href="/">insuveo</a>
          <p>Less chasing around insurance decisions. More time for the work that needs judgement.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#about">Problem</a>
          <a href="#agents">Workflows</a>
          <a href="#process">How it works</a>
          <a href="#safety">Control</a>
          <a href="#founder">Founder</a>
          <a href="/blog">Blog</a>
          <a href={demoUrl}>Share a workflow</a>
        </nav>
      </footer>
    </main>
  );
}
