export default function Hero({ t }) {
  return (
    <section style={{
      minHeight: '92vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '6rem 2rem 4rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background rings */}
      <svg style={{
        position: 'absolute', right: '-60px', top: '50%',
        transform: 'translateY(-50%)', width: '420px', height: '420px', opacity: 0.07,
        pointerEvents: 'none',
      }} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="180" fill="none" stroke="#5C3D2E" strokeWidth="1" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="#5C3D2E" strokeWidth="1" />
        <circle cx="200" cy="200" r="100" fill="none" stroke="#5C3D2E" strokeWidth="1" />
        <circle cx="200" cy="200" r="60" fill="none" stroke="#5C3D2E" strokeWidth="1" />
        <line x1="20" y1="200" x2="380" y2="200" stroke="#5C3D2E" strokeWidth="0.5" />
        <line x1="200" y1="20" x2="200" y2="380" stroke="#5C3D2E" strokeWidth="0.5" />
      </svg>

      <div style={{ maxWidth: '760px', margin: '0 auto', width: '100%' }}>
        {/* Eyebrow */}
        <div style={{
          fontFamily: 'Helvetica Neue, Arial, sans-serif',
          fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--green)',
          marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          <span style={{ display: 'block', width: '32px', height: '1px', background: 'var(--green)' }} />
          {t.hero_eyebrow}
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.01em',
          color: 'var(--text-dark)', marginBottom: '1.5rem',
        }}>
          {t.hero_h1_line1}<br />
          <em style={{ fontStyle: 'italic', color: 'var(--wood-mid)' }}>{t.hero_h1_em}</em><br />
          {t.hero_h1_line3}
        </h1>

        {/* Subheading */}
        <p style={{
          fontFamily: 'Helvetica Neue, Arial, sans-serif',
          fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-mid)',
          maxWidth: '480px', marginBottom: '3rem',
        }}>{t.hero_sub}</p>

        {/* CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <button style={{
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontSize: '0.8rem', letterSpacing: '0.08em',
            background: 'var(--green)', color: 'var(--cream)',
            padding: '14px 32px', borderRadius: '3px', border: 'none', cursor: 'pointer',
          }}>{t.hero_cta1}</button>
          <button style={{
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontSize: '0.8rem', color: 'var(--text-mid)',
            background: 'none', border: 'none', cursor: 'pointer',
          }}>{t.hero_cta2}</button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '3rem', marginTop: '4rem',
          paddingTop: '2.5rem', borderTop: '1px solid var(--border)',
          flexWrap: 'wrap',
        }}>
          {[
            { num: '12+', label: t.stat1_label },
            { num: '340', label: t.stat2_label },
            { num: '100%', label: t.stat3_label },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontSize: '1.6rem', fontWeight: 400, color: 'var(--wood-dark)' }}>{stat.num}</div>
              <div style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--text-muted)', marginTop: '4px',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
