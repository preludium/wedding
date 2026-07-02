import { SITE } from '../config'
import { formatDates } from '../lib/dates'
import Icon from './Icon'
import Reveal from './Reveal'

// Closing footer on the dark navy - mirrors the hero title treatment.
export default function Footer() {
  const { short } = formatDates(SITE.weddingDate, SITE.locale)

  return (
    <footer className="relative bg-ink text-cream text-center py-[clamp(64px,10vw,110px)] px-5.5 overflow-hidden">
      <svg
        aria-hidden="true"
        className="absolute -top-2.5 -left-1.5 w-[clamp(80px,14vw,150px)] h-auto text-sage pointer-events-none"
        style={{
          opacity: 0.28,
          aspectRatio: '68 / 148',
          transformOrigin: 'center',
          animation: 'sway 9s ease-in-out infinite',
        }}
      >
        <use href="#sprig" />
      </svg>
      <svg
        aria-hidden="true"
        className="absolute -top-2.5 -right-1.5 w-[clamp(80px,14vw,150px)] h-auto text-sage pointer-events-none"
        style={{
          opacity: 0.28,
          aspectRatio: '68 / 148',
          transform: 'scaleX(-1)',
          transformOrigin: 'center',
          animation: 'sway 10s ease-in-out infinite',
        }}
      >
        <use href="#sprig" />
      </svg>

      <Reveal className="relative z-[2] max-w-[640px] mx-auto">
        <p className="font-sans uppercase tracking-[.36em] text-[clamp(11px,1.5vw,13px)] font-medium text-gold m-0 mb-[.6em]">
          Do zobaczenia!
        </p>
        <h2 className="font-serif font-medium text-[clamp(40px,8vw,76px)] leading-none tracking-[.02em] text-cream m-0">
          <span className="font-script font-normal tracking-normal px-[.1em]">{SITE.name1}</span>{' '}
          <span className="text-gold italic">&amp;</span>{' '}
          <span className="font-script font-normal tracking-normal px-[.1em]">{SITE.name2}</span>
        </h2>
        <div className="flex items-center justify-center gap-[18px] text-gold my-[1.1em]">
          <span
            className="h-px w-[60px]"
            style={{
              background: 'linear-gradient(90deg,transparent,#C9A86A)',
            }}
          />
          <Icon name="flower" size={20} style={{ opacity: 0.9, flex: 'none' }} />
          <span
            className="h-px w-[60px]"
            style={{
              background: 'linear-gradient(270deg,transparent,#C9A86A)',
            }}
          />
        </div>
        <p className="font-sans uppercase tracking-[.2em] text-[clamp(12px,1.8vw,15px)] text-skyblue m-0 mb-[1.4em]">
          {short}
        </p>
        <p
          className="font-serif italic text-[clamp(17px,2.4vw,22px)] m-0 leading-normal"
          style={{ color: '#cdd8e2' }}
        >
          Z miłością i wdzięcznością czekamy na Wasze towarzystwo.
        </p>
      </Reveal>
    </footer>
  )
}
