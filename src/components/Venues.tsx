import { VENUES, type Venue } from '../data'
import ImageSlot from './ImageSlot'
import { MapLink } from './MapLink'
import Reveal from './Reveal'

function VenueText({ v }: { v: Venue }) {
  return (
    <div style={v.reversed ? { order: 2 } : undefined}>
      <p className="font-sans uppercase tracking-[.26em] text-[11px] font-medium text-gold m-0 mb-[.5em]">
        {v.eyebrow}
      </p>
      <h3 className="font-serif font-medium text-[clamp(28px,4vw,42px)] text-ink mt-0 mb-[.4em] leading-[1.1]">
        {v.title}
      </h3>
      <p className="mt-0 mb-[1em] text-body font-light text-[clamp(15px,1.7vw,17px)]">{v.desc}</p>
      <p className="mt-0 mb-[1.2em] text-muted font-light text-[14px]">{v.address}</p>
      <MapLink href={v.map} />
    </div>
  )
}

function VenueImage({ v }: { v: Venue }) {
  return (
    <figure
      className="relative m-0 aspect-5/4 overflow-hidden rounded-2xl"
      style={{
        order: v.reversed ? 1 : undefined,
        boxShadow: '0 22px 56px rgba(44,62,80,.15)',
      }}
    >
      <ImageSlot id={v.id} placeholder={v.placeholder} radius={16} />
    </figure>
  )
}

// "Miejsca / Tam się spotkamy"
export default function Venues() {
  return (
    <section
      id="miejsca"
      className="relative py-[clamp(76px,11vw,150px)] px-[clamp(22px,6vw,80px)] overflow-hidden"
    >
      <svg
        aria-hidden="true"
        className="absolute top-15 -left-2.5 w-[clamp(70px,10vw,120px)] h-auto text-skyblue pointer-events-none"
        style={{
          opacity: 0.3,
          aspectRatio: '68 / 148',
          transform: 'rotate(20deg)',
          animation: 'drift 13s ease-in-out infinite',
        }}
      >
        <use href="#sprig" />
      </svg>

      <div className="max-w-[1080px] mx-auto">
        <Reveal className="text-center mb-[clamp(40px,7vw,72px)]">
          <p className="font-sans uppercase tracking-[.34em] text-[clamp(11px,1.4vw,13px)] font-medium text-gold m-0 mb-[.7em]">
            Miejsca
          </p>
          <h2 className="font-serif font-medium text-[clamp(34px,6vw,60px)] leading-[1.05] tracking-[.01em] text-ink m-0">
            Tam się spotkamy
          </h2>
        </Reveal>

        {VENUES.map((v, i) => (
          <Reveal
            key={v.id}
            className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(28px,5vw,60px)] items-center"
            style={i === 0 ? { marginBottom: 'clamp(48px,8vw,88px)' } : undefined}
          >
            {v.reversed ? (
              <>
                <VenueText v={v} />
                <VenueImage v={v} />
              </>
            ) : (
              <>
                <VenueImage v={v} />
                <VenueText v={v} />
              </>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
