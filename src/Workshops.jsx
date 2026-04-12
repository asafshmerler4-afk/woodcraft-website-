const workshops = [
  {
    title: 'מבוא לנגרות',
    desc: 'סדנה מושלמת למתחילים. תלמד את יסודות העבודה עם עץ, כלים בסיסיים, ותצא עם פרויקט מוגמר.',
    duration: '3 שעות',
    price: '₪250',
    spots: '8 מקומות',
    level: 'מתחילים',
  },
  {
    title: 'עיצוב רהיטים',
    desc: 'למי שרוצה להתקדם — עיצוב וייצור שולחן קטן מאפס. כולל תכנון, חיתוך, הרכבה וגימור.',
    duration: '8 שעות',
    price: '₪580',
    spots: '6 מקומות',
    level: 'מתקדמים',
  },
  {
    title: 'גילוף וחריטה',
    desc: 'אמנות הגילוף בעץ — מטכניקות בסיסיות ועד יצירת פסלים קטנים. חוויה מדיטטיבית ומרגיעה.',
    duration: '4 שעות',
    price: '₪320',
    spots: '10 מקומות',
    level: 'כל הרמות',
  },
]

export default function Workshops() {
  return (
    <section id="workshops" style={{ padding: '5rem 2rem', background: 'var(--green)' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--wood-light)', marginBottom: '0.75rem' }}>
            — הסדנאות שלנו
          </p>
          <h2 style={{
            fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 400, color: 'var(--cream)',
          }}>
            למד את אמנות <em style={{ color: 'var(--wood-light)', fontStyle: 'italic' }}>העץ</em>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {workshops.map(w => (
            <div key={w.title} style={{
              background: 'rgba(250,247,242,0.07)',
              border: '1px solid rgba(250,247,242,0.15)',
              borderRadius: '8px', padding: '2rem',
            }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(250,247,242,0.1)',
                color: 'var(--wood-light)',
                padding: '4px 12px', borderRadius: '20px',
                fontSize: '0.75rem', marginBottom: '1rem',
              }}>{w.level}</div>

              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', color: 'var(--cream)', marginBottom: '0.75rem' }}>
                {w.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(250,247,242,0.7)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {w.desc}
              </p>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                {[
                  { icon: '⏱', text: w.duration },
                  { icon: '👥', text: w.spots },
                ].map(item => (
                  <span key={item.text} style={{
                    fontSize: '0.8rem', color: 'rgba(250,247,242,0.6)',
                    display: 'flex', alignItems: 'center', gap: '4px',
                  }}>{item.icon} {item.text}</span>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', color: 'var(--wood-light)' }}>{w.price}</span>
                <button style={{
                  background: 'var(--cream)', color: 'var(--green)',
                  padding: '10px 20px', borderRadius: '4px',
                  border: 'none', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600,
                }}>הרשמה</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
