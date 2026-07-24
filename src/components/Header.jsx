import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#mapa', label: 'Mapa da rede' },
  { href: '#projeto', label: 'O projeto' },
  { href: '#seguranca', label: 'Governança' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#topo" className="brand">
          <span className="brand-mark" aria-hidden="true" />
          Rede Integrada
        </a>

        <ul className={`main-nav ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li className="nav-cta-item">
            <a href="#mapa" className="nav-cta" onClick={() => setOpen(false)}>Ver o mapa</a>
          </li>
        </ul>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
    </header>
  )
}
