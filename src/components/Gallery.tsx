import { GALLERY_IDS } from '../data'
import ImageSlot from './ImageSlot'
import Reveal from './Reveal'

type GalleryProps = {
  onZoom: (index: number) => void
}

// "Galeria / Nasze wspomnienia". Each tile is a drag-and-drop slot with a zoom
// button (revealed on hover; always visible on touch) that opens the lightbox.
export default function Gallery({ onZoom }: GalleryProps) {
  return (
    <section
      id="galeria"
      className="relative py-[clamp(76px,11vw,150px)] px-[clamp(22px,6vw,80px)] overflow-hidden"
    >
      <svg
        aria-hidden="true"
        className="absolute top-9 -right-1.5 w-[clamp(70px,10vw,120px)] h-auto text-sage pointer-events-none"
        style={{
          opacity: 0.3,
          aspectRatio: '68 / 148',
          transform: 'scaleX(-1)',
          animation: 'drift 12s ease-in-out infinite',
        }}
      >
        <use href="#sprig" />
      </svg>

      <div className="max-w-[1100px] mx-auto">
        <Reveal className="text-center mb-[clamp(36px,6vw,64px)]">
          <p className="font-sans uppercase tracking-[.34em] text-[clamp(11px,1.4vw,13px)] font-medium text-gold m-0 mb-[.7em]">
            Galeria
          </p>
          <h2 className="font-serif font-medium text-[clamp(34px,6vw,60px)] leading-[1.05] tracking-[.01em] text-ink m-0">
            Nasze wspomnienia
          </h2>
          <p className="text-muted font-light text-[14px] mt-[.8em] mb-0">
            Przeciągnijcie tu swoje ulubione zdjęcia.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-[clamp(12px,2vw,18px)]">
          {GALLERY_IDS.map((gid, i) => (
            <figure
              key={gid}
              className="group relative m-0 aspect-4/5 rounded-xl overflow-hidden"
              style={{
                boxShadow: '0 14px 36px rgba(44,62,80,.12)',
              }}
            >
              <ImageSlot id={gid} placeholder="Wasze zdjęcie" radius={12} />
              <button
                type="button"
                data-gallery-btn
                aria-label="Powiększ zdjęcie"
                onClick={() => onZoom(i)}
                className="absolute top-2.5 right-2.5 z-[3] w-[34px] h-[34px] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-[.25s]"
                style={{
                  border: '1px solid rgba(255,255,255,.6)',
                  background: 'rgba(44,62,80,.45)',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)',
                  color: '#fff',
                  cursor: 'zoom-in',
                }}
              >
                <svg
                  aria-hidden="true"
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <path d="M1 5V1h4M15 11v4h-4M11 1h4v4M5 15H1v-4" />
                </svg>
              </button>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
