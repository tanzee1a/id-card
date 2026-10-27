import './App.css'

const contact = {
  linkedin: 'https://www.linkedin.com/in/tanzeela-nizami/',
  resume: '/resume.pdf',
  email: 'tanzeelanizami@gmail.com',
  github: 'https://github.com/tanzee1a',
}

function App() {
  const links = [
  { label: 'LinkedIn', href: contact.linkedin },
  { label: 'Resume', href: contact.resume },
  {
    label: 'Email',
    href: contact.email ? `mailto:${contact.email}` : '',
  },
]

  return (
    <main className="page">
      <article className="browser-card" aria-labelledby="card-name">
        <div className="window-bar" aria-hidden="true">
          <span>✿</span>
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
        </div>

        <header className="profile">
          <div className="portrait-placeholder" aria-hidden="true">
            <span className="portrait-initials">TN</span>
          </div>

          <h1 id="card-name">Tanzeela Nizami</h1>
          <p>Computer Science · University of Houston</p>
        </header>

        <nav className="connection-links" aria-label="Connect with Tanzeela">
          {links.map(({ label, href }) =>
            href ? (
              <a key={label} href={href}>
                {label}
              </a>
            ) : (
              <button key={label} type="button" disabled>
                {label}
              </button>
            )
          )}
        </nav>
      </article>
    </main>
  )
}

export default App