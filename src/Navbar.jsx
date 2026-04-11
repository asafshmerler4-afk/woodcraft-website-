export default function Footer({ t }) {
  return (
    <footer style={{ background: 'var(--text-dark)', color: 'var(--cream)', padding: '3.5rem 2rem' }}>
      <div style={{
        maxWidth: '1080px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem', paddingBottom: '2.5rem',
        borderBottom: '1px solid rgba(245,240,232,0.1)',
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Georgia, serif', fontSize: '1.15rem', color: 'var(--cream)' }}>
            <div style={{ width: '32px', height: '32px', background: 'var(--wood-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--cream)">
                <path d="M3 18 L12 4 L21 18 Z M7 18 L12 10 L17 18" />
              </svg>
            </div>
            {t.brand}
          </div>
          <p style={{
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.5)',
            marginTop: '1rem', maxWidth: '300px',
          }}>{t.footer_desc}</p>
        </div>

        {/* Nav links */}
        <div>
          <div style={{
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontSize: '0.7rem', letterSpacing: '0.15em',
            color: 'rgba(245,240,232,0.4)', marginBottom: '1.2rem',
          }}>{t.footer_nav_title}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {[t.nav_kits, t.nav_workshops, t.nav_about, t.footer_stockists].map(label => (
              <a key={label} href="#" style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontSize: '0.85rem', color: 'rgba(245,240,232,0.65)', textDecoration: 'none',
              }}>{label}</a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontSize: '0.7rem', letterSpacing: '0.15em',
            color: 'rgba(245,240,232,0.4)', marginBottom: '1.2rem',
          }}>{t.footer_contact_title}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {[t.footer_email, t.footer_phone, t.footer_city].map(info => (
              <a key={info} href="#" style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontSize: '0.85rem', color: 'rgba(245,240,232,0.65)', textDecoration: 'none',
              }}>{info}</a>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: '1080px', margin: '2rem auto 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
      }}>
        <div style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '0.75rem', color: 'rgba(245,240,232,0.3)' }}>{t.footer_copy}</div>
        <div style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '0.75rem', color: 'rgba(245,240,232,0.3)' }}>{t.footer_tagline}</div>
      </div>
    </footer>
  )
}
