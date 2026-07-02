import { type CSSProperties, type DragEvent, useRef, useState } from 'react'
import { useImages } from '../context/ImagesContext'

type ImageSlotProps = {
  id: string
  placeholder?: string
  radius?: number
  mask?: string
  className?: string
  style?: CSSProperties
}

// Looks up `VITE_IMG_<ID>` (id upper-cased, dashes to underscores) so real
// photos can be supplied at build time - e.g. S3 object URLs - without ever
// being committed to the repo. See .env.example.
function envImageUrl(id: string): string | undefined {
  const key = `VITE_IMG_${id.toUpperCase().replace(/-/g, '_')}`
  return (import.meta.env as Record<string, string | undefined>)[key]
}

// Drag-and-drop / click-to-browse image placeholder for local preview. Reads
// a dropped file as a data URL and stores it (via ImagesContext) keyed by
// `id`, so it persists and is visible to the gallery lightbox.
//
// If an env-supplied URL exists for `id` (production photos), it's rendered
// as a plain image instead - the drag-and-drop/localStorage flow is dev-only.
//
// Shape: pass `radius` (px, default 12) for rounded corners, or `mask` (any CSS
// clip-path) for an arbitrary outline (overrides radius).
export default function ImageSlot({
  id,
  placeholder = 'Przeciągnij zdjęcie',
  radius = 12,
  mask,
  className = '',
  style,
}: ImageSlotProps) {
  const { images, setImage, clearImage } = useImages()
  const envUrl = envImageUrl(id)
  const editable = !envUrl
  const url = envUrl || images[id]
  const inputRef = useRef<HTMLInputElement>(null)
  const [over, setOver] = useState(false)
  const depth = useRef(0)

  const ingest = (file: File | null | undefined) => {
    if (!file || !/^image\//.test(file.type)) return
    const reader = new FileReader()
    reader.onload = () => setImage(id, reader.result as string)
    reader.readAsDataURL(file)
  }

  const clipStyle: CSSProperties = mask ? { clipPath: mask } : { borderRadius: radius }

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    if (!editable) return
    e.preventDefault()
    depth.current = 0
    setOver(false)
    const f = e.dataTransfer?.files?.[0]
    if (f) ingest(f)
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: drop target only; the actual control is the nested <button>/<input type="file">
    <div
      className={className}
      style={{ position: 'relative', display: 'block', width: '100%', height: '100%', ...style }}
      onDragEnter={(e) => {
        if (!editable) return
        e.preventDefault()
        depth.current++
        setOver(true)
      }}
      onDragOver={(e) => editable && e.preventDefault()}
      onDragLeave={() => {
        if (!editable) return
        if (--depth.current <= 0) {
          depth.current = 0
          setOver(false)
        }
      }}
      onDrop={onDrop}
    >
      {/* Clipped frame */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          background: 'rgba(0,0,0,.04)',
          ...clipStyle,
        }}
      >
        {url ? (
          <img
            src={url}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              textAlign: 'center',
              padding: 12,
              cursor: 'pointer',
              border: 0,
              background: 'transparent',
              color: 'rgba(0,0,0,.55)',
              font: "13px/1.3 'Montserrat', system-ui, sans-serif",
            }}
          >
            <svg
              aria-hidden="true"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: 0.45 }}
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
            <span style={{ maxWidth: '90%', fontWeight: 500, letterSpacing: '.01em' }}>
              {placeholder}
            </span>
            <span style={{ fontSize: 11, opacity: 0.8 }}>
              lub <u style={{ textUnderlineOffset: 2 }}>wybierz plik</u>
            </span>
          </button>
        )}
      </div>

      {/* Dashed hint ring (hidden once filled) */}
      {!url && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            border: `1.5px dashed ${over ? '#C9A86A' : 'rgba(0,0,0,.25)'}`,
            background: over ? 'rgba(201,168,106,.10)' : 'transparent',
            transition: 'border-color .12s',
            ...clipStyle,
          }}
        />
      )}

      {/* Hover controls when filled (dev-only; env-supplied photos aren't editable here) */}
      {url && editable && (
        <div
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            display: 'flex',
            gap: 6,
            zIndex: 4,
          }}
        >
          <button type="button" onClick={() => inputRef.current?.click()} style={ctlBtn}>
            Zmień
          </button>
          <button type="button" onClick={() => clearImage(id)} style={ctlBtn}>
            Usuń
          </button>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/avif"
        hidden
        onChange={(e) => {
          const f = e.target.files?.[0]
          if (f) ingest(f)
          e.target.value = ''
        }}
      />
    </div>
  )
}

const ctlBtn: CSSProperties = {
  appearance: 'none',
  border: 0,
  borderRadius: 6,
  padding: '5px 10px',
  cursor: 'pointer',
  background: 'rgba(0,0,0,.65)',
  color: '#fff',
  font: "11px/1 'Montserrat', system-ui, sans-serif",
  backdropFilter: 'blur(6px)',
}
