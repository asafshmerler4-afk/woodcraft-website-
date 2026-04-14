import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1.5rem 2rem',
        display: 'flex', justifyContent: 'flex-end',
        background: 'transparent',
      }}>
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
        >
          {open ? <X size={24} color="var(--text-dark)" /> : <Menu size={24} color="var(--text-dark)" />}
        </button>
      </nav>

      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'var(--cream)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <button
            onClick={() => setOpen(false)}
            style={{ position: 'absolute', top: '1.5rem', left: '2rem', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <X size={24} color="var(--text-dark)" />
          </button>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {['מוצרים', 'ערכות DIY', 'סדנאות ושיעורים', 'אודות', 'צור קשר'].map(item => (
              <a key={item} href="#" onClick={() => setOpen(false)} style={{
                fontFamily: 'Georgia, serif',
                fontSize: '2rem', color: 'var(--text-dark)',
                textDecoration: 'none', letterSpacing: '0.05em',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--wood-mid)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-dark)'}
              >{item}</a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
