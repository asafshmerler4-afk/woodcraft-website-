const products = [
  {
    name: 'אגרטל עץ מגולף',
    desc: 'אגרטל מעוצב בעבודת יד מעץ זית ישראלי. מושלם לעיצוב הבית.',
    price: '₪280',
    tag: 'פופולרי',
    color: '#5C3D2E',
  },
  {
    name: 'שולחן קפה כפרי',
    desc: 'שולחן מעץ אלון מלא עם רגלי ברזל. מידות: 120×60 ס"מ.',
    price: '₪2,400',
    tag: 'בהזמנה אישית',
    color: '#7A5230',
  },
  {
    name: 'ערכת נגרות למתחילים',
    desc: 'כל מה שצריך להתחיל — כלים, חומרים, והוראות שלב אחר שלב.',
    price: '₪320',
    tag: 'מתחילים',
    color: '#3D6456',
  },
  {
    name: 'קופסת תכשיטים',
    desc: 'קופסה מעוצבת מעץ אגוז עם ציפוי פנים בקטיפה. מתנה מושלמת.',
    price: '₪450',
    tag: 'מתנה',
    color: '#6B4226',
  },
  {
    name: 'מדף קיר צף',
    desc: 'מדף עץ מלא בגימור טבעי. מתאים לכל סגנון עיצוב.',
    price: '₪180',
    tag: 'חדש',
    color: '#4A3728',
  },
  {
    name: 'ערכת נגרות מתקדמת',
    desc: 'לאוהבי האתגר — פרויקט שולחן מלא עם כלים מקצועיים.',
    price: '₪680',
    tag: 'מתקדמים',
    color: '#2D4A3E',
  },
]

export default function Products() {
  return (
    <section id="products" style={{ padding: '5rem 2rem', background: 'var(--cream-dark)' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem', textAlign: 'right' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--green)', marginBottom: '0.75rem' }}>
            — הקולקציה שלנו
          </p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400 }}>
            מוצרים ו<em style={{ color: 'var(--wood-mid)', fontStyle: 'italic' }}>ערכות</em>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {products.map(p => (
            <div key={p.name} style={{
              background: 'var(--cream)', borderRadius: '8px',
              overflow: 'hidden', transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                height: '200px', background: p.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
              }}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.2">
                  <rect x="8" y="8" width="48" height="48" rx="4" fill="white" />
                  <line x1="8" y1="28" x2="56" y2="28" stroke="white" strokeWidth="2" />
                  <circle cx="32" cy="18" r="6" fill="none" stroke="white" strokeWidth="2" />
                </svg>
                <div style={{
                  position: 'absolute', top: '12px', right: '12px',
                  background: 'rgba(250,247,242,0.9)', color: p.color,
                  padding: '4px 10px', borderRadius: '20px', fontSize: '0.7rem',
                }}>{p.tag}</div>
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', marginBottom: '8px' }}>{p.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.2rem', color: 'var(--wood-dark)', fontFamily: 'Georgia, serif' }}>{p.price}</span>
                  <button style={{
                    background: 'var(--wood-dark)', color: 'var(--cream)',
                    padding: '8px 16px', borderRadius: '4px',
                    border: 'none', fontSize: '0.8rem', cursor: 'pointer',
                  }}>הוסף לסל</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
