import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(250,247,242,0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(90,70,50,0.15)',
      padding: '0 2rem', height: '64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '36px', height: '36px', background: 'var(--wood-dark)',
          borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--cream)">
            <path d="M3 18 L12 4 L21 18 Z M7 18 L12 10 L17 18" />
          </svg>
        </div>
        <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', color: 'var(--wood-dark)', fontWeight: 600 }}>
          סדנת העץ של כהן
        </span>
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
        {['מוצרים', 'סדנאות', 'אודות', 'צור קשר'].map(item => (
          <a key={item} href="#" style={{
            fontSize: '0.9rem', color: 'var(--text-mid)',
            textDecoration: 'none', transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = 'var(--wood-mid)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-mid)'}
          >{item}</a>
        ))}
        <a href="#workshops" style={{
          background: 'var(--green)', color: 'var(--cream)',
          padding: '8px 20px', borderRadius: '4px',
          textDecoration: 'none', fontSize: '0.85rem',
        }}>הרשמה לסדנה</a>
      </div>

      <button onClick={() => setOpen(!open)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}
        className="mobile-menu-btn">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div style={{
          position: 'fixed', top: '64px', right: 0, left: 0,
          background: 'var(--cream)', borderBottom: '1px solid rgba(90,70,50,0.15)',
          padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem',
        }}>
          {['מוצרים', 'סדנאות', 'אודות', 'צור קשר'].map(item => (
            <a key={item} href="#" style={{ fontSize: '1rem', color: 'var(--text-mid)', textDecoration: 'none' }}
              onClick={() => setOpen(false)}>{item}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
