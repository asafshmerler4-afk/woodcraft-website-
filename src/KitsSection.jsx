const features = [
  {
    titleKey: 'f1_title', descKey: 'f1_desc',
    icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--wood-light)" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  },
  {
    titleKey: 'f2_title', descKey: 'f2_desc',
    icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--wood-light)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    titleKey: 'f3_title', descKey: 'f3_desc',
    icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--wood-light)" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
]

export default function WorkshopsSection({ t }) {
  return (
    <section style={{ background: 'var(--green)', color: 'var(--cream)', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* Text side */}
          <div>
            <div style={{
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--wood-light)',
              marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--wood-light)' }} />
              {t.ws_label}
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 400, lineHeight: 1.25, color: 'var(--cream)' }}>
              {t.ws_title}<em style={{ fontStyle: 'italic', color: 'var(--wood-light)' }}>{t.ws_title_em}</em>
            </h2>
            <p style={{
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', marginTop: '1.5rem',
            }}>{t.ws_desc}</p>

            {/* Features list */}
            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1px' }}>
              {features.map((f) => (
                <div key={f.titleKey} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '1rem',
                  padding: '1.25rem 0', borderBottom: '1px solid rgba(245,240,232,0.1)',
                }}>
                  <div style={{
                    width: '36px', height: '36px', background: 'rgba(245,240,232,0.1)',
                    borderRadius: '4px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{f.icon}</div>
                  <div>
                    <div style={{
                      fontFamily: 'Helvetica Neue, Arial, sans-serif',
                      fontSize: '0.9rem', fontWeight: 500, color: 'var(--cream)', marginBottom: '3px',
                    }}>{t[f.titleKey]}</div>
                    <div style={{
                      fontFamily: 'Helvetica Neue, Arial, sans-serif',
                      fontSize: '0.82rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.5,
                    }}>{t[f.descKey]}</div>
                  </div>
                </div>
              ))}
            </div>

            <button style={{
              display: 'inline-block', marginTop: '2rem',
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontSize: '0.8rem', letterSpacing: '0.08em',
              background: 'var(--cream)', color: 'var(--green)',
              padding: '13px 28px', borderRadius: '3px', border: 'none', cursor: 'pointer',
            }}>{t.ws_cta}</button>
          </div>

          {/* Quote card */}
          <div style={{
            background: 'rgba(245,240,232,0.05)',
            border: '1px solid rgba(245,240,232,0.12)',
            borderRadius: '4px', aspectRatio: '3/4',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: '2rem',
          }}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ opacity: 0.2 }}>
              <rect x="8" y="8" width="48" height="48" rx="4" fill="none" stroke="#F5F0E8" strokeWidth="2" />
              <line x1="8" y1="28" x2="56" y2="28" stroke="#F5F0E8" strokeWidth="1.5" />
              <circle cx="32" cy="18" r="6" fill="#F5F0E8" />
              <rect x="16" y="36" width="32" height="4" rx="2" fill="#F5F0E8" />
              <rect x="22" y="44" width="20" height="4" rx="2" fill="#F5F0E8" />
            </svg>
            <p style={{
              textAlign: 'center', fontSize: '1.1rem', lineHeight: 1.6,
              color: 'rgba(245,240,232,0.5)', fontStyle: 'italic', marginTop: '1.5rem',
            }}>{t.ws_quote}</p>
            <p style={{
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontSize: '0.72rem', letterSpacing: '0.08em',
              color: 'rgba(245,240,232,0.3)', marginTop: '0.75rem',
            }}>{t.ws_quote_attr}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
