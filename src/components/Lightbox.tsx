import { type CSSProperties, useEffect, useState } from 'react'
import { useImages } from '../context/ImagesContext'
import { GALLERY_IDS } from '../data'

const navBtn: CSSProperties = {
  position: 'absolute',
  width: 46,
  height: 46,
  borderRadius: '50%',
  border: '1px solid rgba(255,255,255,.3)',
  background: 'rgba(255,255,255,.08)',
  color: '#FAF6F0',
  lineHeight: 1,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

type LightboxProps = {
  open: boolean
  index: number
  onClose: () => void
  onIndex: (index: number) => void
}

// Full-screen gallery viewer. Reads the same image store as the tiles; shows a
// gentle empty state for slots the user hasn't filled yet.
export default function Lightbox({ open, index, onClose, onIndex }: LightboxProps) {
  const { images } = useImages()
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      const r = requestAnimationFrame(() => setShown(true))
      return () => cancelAnimationFrame(r)
    }
    setShown(false)
    document.body.style.overflow = ''
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onIndex(index - 1)
      else if (e.key === 'ArrowRight') onIndex(index + 1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, index, onClose, onIndex])

  if (!open) return null

  const n = GALLERY_IDS.length
  const cur = ((index % n) + n) % n
  const url = images[GALLERY_IDS[cur]]

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: Escape is already handled by the keydown listener above; this onClick only closes on backdrop click
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Podgląd zdjęcia"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(16px,5vw,60px)',
        background: 'rgba(28,38,50,.93)',
        backdropFilter: 'blur(7px)',
        WebkitBackdropFilter: 'blur(7px)',
        opacity: shown ? 1 : 0,
        transition: 'opacity .3s ease',
      }}
    >
      <button
        type="button"
        aria-label="Zamknij"
        onClick={onClose}
        style={{ ...navBtn, top: 16, right: 18, fontSize: 24 }}
      >
        ×
      </button>
      <button
        type="button"
        aria-label="Poprzednie zdjęcie"
        onClick={() => onIndex(index - 1)}
        style={{ ...navBtn, left: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 26 }}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Następne zdjęcie"
        onClick={() => onIndex(index + 1)}
        style={{ ...navBtn, right: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 26 }}
      >
        ›
      </button>

      {url ? (
        <img
          src={url}
          alt="Zdjęcie z galerii"
          style={{
            maxWidth: '90vw',
            maxHeight: '84vh',
            borderRadius: 6,
            display: 'block',
            boxShadow: '0 30px 90px rgba(0,0,0,.55)',
          }}
        />
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 14,
            color: '#FAF6F0',
            textAlign: 'center',
          }}
        >
          <svg width="48" height="48" style={{ color: '#A8C4D8' }} aria-hidden="true">
            <use href="#flower" />
          </svg>
          <p className="font-serif" style={{ fontSize: 'clamp(22px,4vw,28px)', margin: 0 }}>
            To miejsce czeka na Wasze zdjęcie
          </p>
          <p style={{ fontSize: 13, opacity: 0.7, maxWidth: 320, fontWeight: 300 }}>
            Przeciągnijcie fotografię na kafelek w galerii, aby zobaczyć ją tutaj.
          </p>
        </div>
      )}
    </div>
  )
}
