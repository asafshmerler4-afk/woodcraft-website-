export default function Hero() {
  return (
    <section style={{
      minHeight: '90vh', display: 'flex', alignItems: 'center',
      padding: '4rem 2rem', background: 'var(--cream)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'repeating-linear-gradient(90deg, var(--wood-dark) 0px, var(--wood-dark) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, var(--wood-dark) 0px, var(--wood-dark) 1px, transparent 1px, transparent 60px)',
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        <div style={{
          display: 'inline-block',
          background: 'var(--cream-dark)', color: 'var(--wood-mid)',
          padding: '6px 16px', borderRadius: '20px',
          fontSize: '0.8rem', letterSpacing: '0.1em',
          marginBottom: '2rem',
        }}>
          🪵 מלאכת יד ישראלית מסורתית
        </div>

        <h1 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 400, lineHeight: 1.2,
          color: 'var(--text-dark)', marginBottom: '1.5rem',
        }}>
          עץ שמספר<br />
          <em style={{ color: 'var(--wood-mid)', fontStyle: 'italic' }}>סיפור</em>
        </h1>

        <p style={{
          fontSize: '1.1rem', lineHeight: 1.8,
          color: 'var(--text-mid)', maxWidth: '520px', marginBottom: '2.5rem',
        }}>
          ערכות נגרות בעבודת יד, סדנאות מקצועיות, ורהיטים מותאמים אישית. כל פריט נוצר מאהבה לעץ ולמלאכה.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button style={{
            background: 'var(--wood-dark)', color: 'var(--cream)',
            padding: '14px 32px', borderRadius: '4px',
            border: 'none', fontSize: '0.95rem', cursor: 'pointer',
          }}>גלה את המוצרים</button>
          <button style={{
            background: 'transparent', color: 'var(--wood-dark)',
            padding: '14px 32px', borderRadius: '4px',
            border: '1px solid var(--wood-dark)', fontSize: '0.95rem', cursor: 'pointer',
          }}>הרשמה לסדנה</button>
        </div>

        <div style={{
          display: 'flex', gap: '3rem', marginTop: '4rem',
          paddingTop: '2.5rem', borderTop: '1px solid rgba(90,70,50,0.15)',
          flexWrap: 'wrap',
        }}>
          {[
            { num: '15+', label: 'שנות ניסיון' },
            { num: '500+', label: 'לקוחות מרוצים' },
            { num: '50+', label: 'סדנאות בשנה' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontSize: '1.8rem', color: 'var(--wood-mid)', fontFamily: 'Georgia, serif' }}>{stat.num}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
