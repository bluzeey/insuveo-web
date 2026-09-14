type WorkflowIconKind =
  | 'collection'
  | 'clarification'
  | 'renewal'
  | 'broker'
  | 'underwriter'
  | 'claims'
  | 'operations';

export function WorkflowIcon({ kind }: { kind: WorkflowIconKind }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg className="workflow-icon" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="1" y="1" width="62" height="62" rx="15" fill="currentColor" opacity="0.06" />
      {kind === 'collection' && (
        <g {...common}>
          <path d="M22 16h15l7 7v25H22z" />
          <path d="M37 16v8h7M28 31h10M28 37h10M28 43h6" />
          <circle cx="20" cy="45" r="7" fill="#fff" />
          <path d="m17 45 2 2 4-5" />
        </g>
      )}
      {kind === 'clarification' && (
        <g {...common}>
          <path d="M15 20h29v20H28l-8 7v-7h-5z" />
          <path d="M28 27c.3-3.2 2.2-4.7 5-4.7 3 0 5 1.8 5 4.4 0 4-5 4.1-5 7.3M33 37.8v.2" />
          <path d="M39 45h10V29" />
        </g>
      )}
      {kind === 'renewal' && (
        <g {...common}>
          <path d="M46 26a16 16 0 0 0-27-5l-4 5M18 20v7h7" />
          <path d="M18 38a16 16 0 0 0 27 5l4-5M46 44v-7h-7" />
          <path d="M29 25v9l6 4" />
        </g>
      )}
      {kind === 'broker' && (
        <g {...common}>
          <circle cx="25" cy="23" r="6" />
          <path d="M15 45c1-8 5-12 10-12s9 4 10 12M39 22h10v17H39M42 27h4M42 32h4" />
        </g>
      )}
      {kind === 'underwriter' && (
        <g {...common}>
          <path d="M18 18h28v32H18zM25 26h14M25 32h14M25 38h7" />
          <circle cx="41" cy="42" r="8" fill="#fff" />
          <path d="m37.5 42 2.3 2.3 4.8-5" />
        </g>
      )}
      {kind === 'claims' && (
        <g {...common}>
          <path d="M32 14 47 20v11c0 10-6 16-15 20-9-4-15-10-15-20V20z" />
          <path d="M25 31h14M32 24v14" />
        </g>
      )}
      {kind === 'operations' && (
        <g {...common}>
          <rect x="15" y="18" width="14" height="12" rx="2" />
          <rect x="35" y="34" width="14" height="12" rx="2" />
          <path d="M29 24h8c5 0 7 3 7 8v2M35 40h-8c-5 0-7-3-7-8v-2" />
          <path d="m40 29 4 5 4-5M24 35l-4-5-4 5" />
        </g>
      )}
    </svg>
  );
}

export function HeroWorkflowVisual() {
  return (
    <svg className="hero-workflow-visual" viewBox="0 0 520 250" role="img" aria-labelledby="hero-workflow-title hero-workflow-desc">
      <title id="hero-workflow-title">An insurance information workflow moving toward human review</title>
      <desc id="hero-workflow-desc">Documents and email answers are organized, checked for gaps, and returned to a person for review.</desc>
      <defs>
        <linearGradient id="hero-wash" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ffedbe" />
          <stop offset="0.55" stopColor="#cdffea" />
          <stop offset="1" stopColor="#e7d4ff" />
        </linearGradient>
        <filter id="hero-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodOpacity="0.11" />
        </filter>
      </defs>
      <rect width="520" height="250" rx="18" fill="url(#hero-wash)" />
      <path className="visual-dash" d="M97 125h74M280 125h68" />
      <circle cx="97" cy="125" r="4" />
      <circle cx="171" cy="125" r="4" />
      <circle cx="280" cy="125" r="4" />
      <circle cx="348" cy="125" r="4" />
      <g filter="url(#hero-shadow)">
        <rect x="28" y="70" width="118" height="110" rx="12" fill="#fff" stroke="#000" />
        <path d="M57 101h32l12 12v39H57zM89 101v13h12M68 126h22M68 136h17" fill="none" stroke="#000" strokeWidth="1.5" />
        <circle cx="111" cy="151" r="13" fill="#ffedbe" stroke="#000" />
        <path d="M105 151h12M111 145v12" stroke="#000" strokeWidth="1.5" />
      </g>
      <g filter="url(#hero-shadow)">
        <rect x="171" y="45" width="109" height="160" rx="54" fill="#000" />
        <circle cx="225.5" cy="91" r="22" fill="#cdffea" />
        <path d="m215 91 7 7 14-16" fill="none" stroke="#000" strokeWidth="2" />
        <path d="M202 129h47M202 142h36M202 155h42" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
        <circle cx="225.5" cy="176" r="5" fill="#e7d4ff" />
      </g>
      <g filter="url(#hero-shadow)">
        <rect x="348" y="70" width="144" height="110" rx="12" fill="#fff" stroke="#000" />
        <circle cx="389" cy="117" r="23" fill="#e7d4ff" stroke="#000" />
        <path d="M377 117h24M389 105v24" stroke="#000" strokeWidth="1.5" />
        <path d="M425 102h42M425 116h32M425 130h37M425 144h25" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <path d="m158 119 13 6-13 6M335 119l13 6-13 6" fill="#fff" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export function HandoffVisual() {
  return (
    <svg className="handoff-visual" viewBox="0 0 1120 330" role="img" aria-labelledby="handoff-title handoff-desc">
      <title id="handoff-title">A connected insurance handoff</title>
      <desc id="handoff-desc">Information moves from a client through a broker to an underwriter while missing items stay visible.</desc>
      <rect width="1120" height="330" rx="20" fill="#f7f7f4" />
      <path d="M250 164h145M725 164h145" stroke="#000" strokeWidth="1.5" strokeDasharray="7 8" />
      <path d="m380 155 17 9-17 9M855 155l17 9-17 9" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <g>
        <rect x="55" y="71" width="195" height="186" rx="16" fill="#fff" stroke="#000" />
        <circle cx="152" cy="123" r="30" fill="#ffedbe" />
        <circle cx="152" cy="116" r="9" fill="none" stroke="#000" strokeWidth="1.5" />
        <path d="M135 143c2-12 8-18 17-18s15 6 17 18" fill="none" stroke="#000" strokeWidth="1.5" />
        <path d="M101 183h102M115 202h74M127 221h50" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <g>
        <rect x="395" y="39" width="330" height="250" rx="20" fill="#000" />
        <rect x="431" y="74" width="258" height="180" rx="12" fill="#fff" />
        <rect x="455" y="101" width="88" height="76" rx="8" fill="#cdffea" stroke="#000" />
        <path d="M472 122h54M472 137h43M472 152h49" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="604" cy="139" r="38" fill="#e7d4ff" stroke="#000" />
        <path d="m586 140 12 12 24-29" fill="none" stroke="#000" strokeWidth="2" />
        <path d="M455 207h210" stroke="#000" strokeWidth="1.5" />
        <circle cx="474" cy="228" r="6" fill="#ffce54" stroke="#000" />
        <path d="M491 228h82M596 228h49" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <g>
        <rect x="870" y="71" width="195" height="186" rx="16" fill="#fff" stroke="#000" />
        <path d="M914 106h106v91H914z" fill="#e7d4ff" stroke="#000" />
        <path d="M934 130h66M934 147h52M934 164h59" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="1005" cy="207" r="20" fill="#cdffea" stroke="#000" />
        <path d="m996 207 6 6 12-14" fill="none" stroke="#000" strokeWidth="1.7" />
      </g>
      <circle cx="324" cy="164" r="12" fill="#ffedbe" stroke="#000" />
      <circle cx="796" cy="164" r="12" fill="#cdffea" stroke="#000" />
    </svg>
  );
}

export function ReviewShieldVisual() {
  return (
    <svg className="review-shield-visual" viewBox="0 0 390 260" role="img" aria-labelledby="review-title">
      <title id="review-title">A protected workflow with a human approval point</title>
      <rect width="390" height="260" rx="18" fill="#fff" stroke="#000" />
      <path d="M195 37 298 76v70c0 48-34 76-103 96-69-20-103-48-103-96V76z" fill="#cdffea" stroke="#000" strokeWidth="1.5" />
      <rect x="130" y="80" width="130" height="105" rx="12" fill="#fff" stroke="#000" />
      <circle cx="195" cy="117" r="20" fill="#e7d4ff" stroke="#000" />
      <path d="m185 117 7 7 14-17" fill="none" stroke="#000" strokeWidth="1.8" />
      <path d="M154 154h82M169 169h52" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="85" cy="126" r="8" fill="#ffedbe" stroke="#000" />
      <circle cx="305" cy="126" r="8" fill="#e7d4ff" stroke="#000" />
      <path d="M93 126h36M261 126h36" stroke="#000" strokeWidth="1.5" strokeDasharray="5 5" />
    </svg>
  );
}

export function BlogHeroVisual() {
  return (
    <svg className="blog-hero-visual" viewBox="0 0 470 420" role="img" aria-labelledby="blog-visual-title">
      <title id="blog-visual-title">Connected field notes about insurance workflows</title>
      <rect x="65" y="44" width="324" height="296" rx="18" fill="#e7d4ff" stroke="#000" transform="rotate(7 227 192)" />
      <rect x="37" y="61" width="324" height="296" rx="18" fill="#ffedbe" stroke="#000" transform="rotate(-5 199 209)" />
      <rect x="72" y="45" width="324" height="310" rx="18" fill="#fff" stroke="#000" />
      <circle cx="116" cy="91" r="17" fill="#cdffea" stroke="#000" />
      <path d="M146 83h126M146 99h84" stroke="#000" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M106 140h256M106 161h210M106 182h240" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="106" y="215" width="113" height="87" rx="9" fill="#cdffea" stroke="#000" />
      <rect x="238" y="215" width="124" height="87" rx="9" fill="#f7f7f4" stroke="#000" />
      <path d="M122 238h79M122 254h56M122 270h68M254 238h90M254 254h66M254 270h78" stroke="#000" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M397 112c28 15 37 42 29 69M405 95l-8 17 18 4" fill="none" stroke="#000" strokeWidth="1.6" />
      <circle cx="424" cy="199" r="22" fill="#000" />
      <path d="M414 199h20M424 189v20" stroke="#fff" strokeWidth="1.8" />
    </svg>
  );
}

function visualVariant(slug: string) {
  if (slug.includes('approved') || slug.includes('approval')) return 'approval';
  if (slug.includes('underwriter')) return 'underwriting';
  if (slug.includes('renewal')) return 'renewal';
  if (slug.includes('handoff')) return 'handoff';
  if (slug.includes('missing')) return 'missing';
  if (slug.includes('collection')) return 'collection';
  return 'workflow';
}

export function BlogPostVisual({ slug, category }: { slug: string; category: string }) {
  const variant = visualVariant(slug);

  return (
    <div className={`blog-post-visual visual-${variant}`} aria-hidden="true">
      <svg viewBox="0 0 520 310" preserveAspectRatio="xMidYMid slice">
        <rect width="520" height="310" className="visual-ground" />
        <circle cx="420" cy="58" r="54" className="visual-sun" />
        {variant === 'approval' && (
          <>
            <path d="M260 44 390 91v82c0 62-43 98-130 123-87-25-130-61-130-123V91z" className="visual-white" />
            <rect x="194" y="92" width="132" height="123" rx="13" className="visual-accent" />
            <circle cx="260" cy="139" r="28" className="visual-dark" />
            <path d="m246 139 10 10 21-25" className="visual-light-stroke" />
            <path d="M220 184h80M235 199h50" className="visual-stroke" />
          </>
        )}
        {variant === 'underwriting' && (
          <>
            <rect x="116" y="47" width="288" height="218" rx="16" className="visual-white" />
            <path d="M150 91h118M150 116h176M150 141h148M150 166h127M150 214h216" className="visual-stroke" />
            <circle cx="355" cy="139" r="44" className="visual-accent" />
            <path d="m335 140 13 13 27-33" className="visual-stroke" />
          </>
        )}
        {variant === 'renewal' && (
          <>
            <circle cx="260" cy="155" r="95" className="visual-white" />
            <path d="M331 121a79 79 0 0 0-132-23l-18 23M194 97v27h27" className="visual-stroke" />
            <path d="M189 188a79 79 0 0 0 132 23l18-23M326 212v-27h-27" className="visual-stroke" />
            <path d="M260 103v56l38 24" className="visual-stroke" />
          </>
        )}
        {variant === 'handoff' && (
          <>
            <rect x="54" y="91" width="116" height="130" rx="12" className="visual-white" />
            <rect x="202" y="61" width="116" height="190" rx="58" className="visual-dark" />
            <rect x="350" y="91" width="116" height="130" rx="12" className="visual-white" />
            <path d="M170 156h32M318 156h32" className="visual-dashed" />
            <circle cx="112" cy="135" r="22" className="visual-accent" />
            <path d="M82 184h60" className="visual-stroke" />
            <circle cx="260" cy="122" r="25" className="visual-accent" />
            <path d="M231 176h58M231 192h44" className="visual-light-stroke" />
            <path d="M376 126h64M376 146h49M376 166h58" className="visual-stroke" />
          </>
        )}
        {variant === 'missing' && (
          <>
            <rect x="99" y="54" width="250" height="210" rx="15" className="visual-white" />
            <path d="M139 98h166M139 126h112M139 154h151M139 210h164" className="visual-stroke" />
            <rect x="139" y="176" width="104" height="16" rx="8" className="visual-accent" />
            <circle cx="363" cy="206" r="61" className="visual-dark" />
            <path d="M363 170v47M363 234v2" className="visual-light-stroke" />
          </>
        )}
        {variant === 'collection' && (
          <>
            <path d="M137 53h179l65 65v142H137z" className="visual-white" />
            <path d="M316 53v66h65" className="visual-stroke" />
            <path d="M177 130h120M177 160h160M177 190h105M177 220h143" className="visual-stroke" />
            <circle cx="389" cy="226" r="49" className="visual-accent" />
            <path d="m367 226 15 15 30-37" className="visual-stroke" />
          </>
        )}
        {variant === 'workflow' && (
          <>
            <circle cx="98" cy="155" r="48" className="visual-white" />
            <circle cx="260" cy="155" r="70" className="visual-dark" />
            <circle cx="422" cy="155" r="48" className="visual-white" />
            <path d="M146 155h44M330 155h44" className="visual-dashed" />
            <path d="M80 155h36M242 155h36M404 155h36" className="visual-stroke" />
          </>
        )}
      </svg>
      <span>{category}</span>
    </div>
  );
}
