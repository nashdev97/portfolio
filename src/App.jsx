import React, { useEffect, useState } from 'react'

const projects = [
  {
    title: 'SnapNature',
    type: 'Product',
    description: 'A computer-vision project that identifies plant species from images through a simple web experience.',
    tags: ['Python', 'FastAPI', 'PyTorch'],
    year: '2026',
    accent: 'lilac',
    url: 'https://github.com/nashdev97/snapnature',
  },
  {
    title: 'TrailSafe',
    type: 'Platform',
    description: 'A safety-focused trail companion that helps people plan outdoor routes with more confidence.',
    tags: ['JavaScript', 'Maps', 'Web app'],
    year: '2025',
    accent: 'mint',
    url: 'https://github.com/nashdev97/trailsafe',
  },
  {
    title: 'Plainly Form Explainer',
    type: 'Community',
    description: 'Consent-first plain-language explanations for school, rental, and benefits form wording.',
    tags: ['JavaScript', 'Accessibility', 'Plain language'],
    year: '2026',
    accent: 'blue',
    url: 'https://github.com/nashdev97/plainly-form-explainer',
  },
]

const capabilities = [
  ['01', 'Product thinking', 'I turn fuzzy problems into focused, testable product decisions.'],
  ['02', 'Frontend craft', 'Interfaces that feel considered, fast, and easy to use with a keyboard.'],
  ['03', 'Systems mindset', 'Pragmatic foundations that keep teams moving as the product grows.'],
]

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [copied, setCopied] = useState(false)

  const filters = ['All', 'Product', 'Platform', 'Community']
  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.type === activeFilter)

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  const copyEmail = async () => {
    const email = 'hello@nash.build'
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Nash home">
          <span className="wordmark-dot" aria-hidden="true" />
          nash<span className="wordmark-period">.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <span className="menu-icon" aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="primary-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setDarkMode((mode) => !mode)}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <span aria-hidden="true">{darkMode ? '☼' : '☾'}</span>
          </button>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> Available for thoughtful work</p>
            <h1>I build digital tools that make complex things feel clear.</h1>
            <p className="hero-intro">Nash is a software engineer who cares about the space where strong systems, useful interfaces, and good people meet.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Projects <ArrowIcon /></a>
              <a className="text-link" href="#contact">Start a conversation <ArrowIcon /></a>
            </div>
          </div>
          <div className="signal-orbit" aria-label="Abstract orbit illustration" role="img">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="orbit-core"><span>n</span></div>
            <span className="orbit-label label-top">build with care</span>
            <span className="orbit-label label-bottom">ship with clarity</span>
          </div>
          <div className="hero-footnote">
            <span>01 / 04</span>
            <span className="line" />
            <span>Scroll to explore</span>
          </div>
        </section>

        <section className="intro-section section-light" id="about">
          <div className="section-kicker">A little context</div>
          <div className="intro-grid">
            <h2>Good software is a team sport.</h2>
            <div>
              <p className="large-copy">I like working close to the problem: listening carefully, asking better questions, and making the smallest useful thing first.</p>
              <p>My sweet spot is early product work and the systems that support it — translating ambitious ideas into interfaces people understand and foundations teams can trust.</p>
              <a className="inline-link" href="#contact">More about how I work <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="work-section section-light" id="work">
          <div className="section-heading">
            <div>
              <div className="section-kicker">Projects</div>
              <h2>Things I’ve shipped.</h2>
            </div>
            <p>Product experiments and engineering work that show how I think, build, and collaborate.</p>
          </div>
          <div className="filter-row" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                className={`filter-button ${activeFilter === filter ? 'is-active' : ''}`}
                type="button"
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="project-list">
            {visibleProjects.map((project, index) => (
              <article className="project-row" key={project.title}>
                <div className={`project-index project-index-${project.accent}`}>0{index + 1}</div>
                <div className="project-main">
                  <div className="project-topline"><span>{project.type}</span><span>{project.year}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities-section">
          <div className="section-kicker">How I contribute</div>
          <div className="capabilities-grid">
            <h2>From first sketch to steady state.</h2>
            <div className="capability-list">
              {capabilities.map(([number, title, copy]) => (
                <div className="capability-item" key={number}>
                  <span className="capability-number">{number}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section section-light">
          <div className="section-heading">
            <div>
              <div className="section-kicker">The path so far</div>
              <h2>Curious by default.</h2>
            </div>
            <p>Growing through a mix of product teams, open source, and self-directed experiments.</p>
          </div>
          <div className="timeline">
            <div className="timeline-row"><span>2023 — now</span><strong>Independent software engineer</strong><p>Building product experiments, helping teams find clarity, and contributing to open source.</p></div>
            <div className="timeline-row"><span>2021 — 23</span><strong>Product engineer · Studio North</strong><p>Shipped customer-facing tools from first workshop to reliable production systems.</p></div>
            <div className="timeline-row"><span>2019 — 21</span><strong>Frontend engineer · Fieldwork</strong><p>Learned to make accessible interfaces and healthy collaboration feel like one practice.</p></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-signal" aria-hidden="true">✦</div>
          <div className="section-kicker">Open channel</div>
          <h2>Have a problem worth solving?</h2>
          <p>Tell me what you’re working on. I’m always interested in thoughtful products, kind teams, and ambitious constraints.</p>
          <div className="contact-actions">
            <button className="button button-light" type="button" onClick={copyEmail}>
              {copied ? 'Email copied' : 'Copy my email'} <ArrowIcon />
            </button>
            <a className="button button-ghost" href="mailto:hello@nash.build">hello@nash.build</a>
          </div>
          <span className="sr-only" aria-live="polite">{copied ? 'Email copied to clipboard' : ''}</span>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            <a href="https://www.nash.build/" target="_blank" rel="noreferrer">Resume <ArrowIcon /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Nash. Built with care.</span>
        <span>Made with GitHub Copilot for Global Hack Week</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
