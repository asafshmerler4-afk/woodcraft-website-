export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'var(--cream)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* כותרת ראשית — בין 30% ל-60% */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        width: '100%',
        padding: '0 2rem',
      }}>
        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize: '0.75rem',
          letterSpacing: '0.3em',
          color: 'var(--wood-mid)',
          marginBottom: '1.5rem',
          textTransform: 'uppercase',
        }}>מלאכת יד ישראלית מסורתית</p>

<h1 style={{
  fontFamily: "'Assistant', sans-serif",
  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
  fontWeight: 700,
  lineHeight: 1.2,
  color: 'var(--text-dark)',
  letterSpacing: '-0.03em',
}}>
  סדנת העץ של כהן
</h1>
        
      {/* כפתור גלילה — בין 80% ל-90% */}
      <div style={{
        position: 'absolute',
        top: '85%',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        cursor: 'pointer',
      }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize: '0.9rem',
          color: 'var(--text-mid)',
          letterSpacing: '0.1em',
        }}>בוא להכיר אותנו</p>

        <svg
          width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="var(--wood-mid)" strokeWidth="1.5"
          style={{ animation: 'bounce 2s infinite' }}
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}
