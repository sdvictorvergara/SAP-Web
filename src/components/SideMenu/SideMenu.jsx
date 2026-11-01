import { NavLink } from 'react-router-dom'
import userIcon from '../../assets/user-icon.png'
import StatusSummary from '../StatusSummary/StatusSummary.jsx'
import SocialFooter from '../SocialFooter/SocialFooter.jsx'
import './SideMenu.css'

const LINKS = [
  { to: '/', label: 'Home', icon: 'bi-house', end: true },
  { to: '/servers', label: 'Servers', icon: 'bi-hdd' },
  { to: '/services', label: 'Services', icon: 'bi-archive' },
]

export default function SideMenu({ open, onClose, servers }) {
  return (
    <aside className={`side-menu ${open ? 'side-menu--open' : ''}`} aria-hidden={!open}>
      <div className="side-menu__panel">
        <button className="side-menu__close" onClick={onClose} aria-label="Cerrar menú">
          <i className="bi bi-list" />
        </button>

        <div className="side-menu__user">
          <img src={userIcon} alt="" />
          <div>
            <p className="side-menu__name">Usuario</p>
            <p className="side-menu__email">example@domain.es</p>
            <span className="side-menu__role">Admin</span>
          </div>
        </div>

        <hr />

        <nav className="side-menu__nav">
          {LINKS.map(({ to, label, icon, end }) => (
            <NavLink key={to} to={to} end={end} onClick={onClose}>
              <i className={`bi ${icon}`} /> {label}
            </NavLink>
          ))}
        </nav>

        <div className="side-menu__bottom">
          <hr />
          <StatusSummary servers={servers} />
        </div>

        <SocialFooter />
      </div>
    </aside>
  )
}
