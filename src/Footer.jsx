export default function Footer() {
  return (
    <footer style={{ background: 'var(--text-dark)', color: 'var(--cream)', padding: '3rem 2rem' }}>
      <div style={{
        maxWidth: '1080px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2.5rem', paddingBottom: '2.5rem',
        borderBottom: '1px solid rgba(250,247,242,0.1)',
      }}>
        <div>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', marginBottom: '1rem' }}>
            סדנת העץ של כהן
          </div>
          <p style={{ fontSize: '0.85rem', color: 'rgba(250,247,242,0.5)', lineHeight: 1.7 }}>
            מלאכת יד ישראלית מסורתית — ערכות נגרות, סדנאות, ורהיטים בעבודת יד מאז 2009.
          </p>
        </div>

        <div>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(250,247,242,0.4)', marginBottom: '1rem' }}>
            ניווט
          </div>
          {['מוצרים', 'סדנאות', 'אודות', 'צור קשר'].map(item => (
            <a key={item} href="#" style={{
              display: 'block', fontSize: '0.85rem',
              color: 'rgba(250,247,242,0.65)', textDecoration: 'none',
              marginBottom: '0.6rem',
            }}>{item}</a>
          ))}
        </div>

        <div>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(250,247,242,0.4)', marginBottom: '1rem' }}>
            צור קשר
          </div>
          {['cohen.woodcraft@gmail.com', '050-000-0000', 'תל אביב, ישראל'].map(item => (
            <p key={item} style={{
              fontSize: '0.85rem', color: 'rgba(250,247,242,0.65)', marginBottom: '0.6rem',
            }}>{item}</p>
          ))}
        </div>
      </div>

      <div style={{
        maxWidth: '1080px', margin: '2rem auto 0',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
      }}>
        <p style={{ fontSize: '0.75rem', color: 'rgba(250,247,242,0.3)' }}>
          © 2026 סדנת העץ של כהן. כל הזכויות שמורות.
        </p>
        <p style={{ fontSize: '0.75rem', color: 'rgba(250,247,242,0.3)' }}>
          עץ מקומי · מלאכת יד ישראלית
        </p>
      </div>
    </footer>
  )
}
