import './SocialFooter.css'

export default function SocialFooter() {
  return (
    <footer className="social-footer">
      <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
        <i className="bi bi-github" />
      </a>
      <a href="mailto:example@domain.es" aria-label="Correo">
        <i className="bi bi-envelope" />
      </a>
    </footer>
  )
}
