import { AGENDA } from '../data'
import Icon from './Icon'
import Reveal from './Reveal'

// "Plan dnia / Od popołudnia do świtu" - the timeline. The section background
// runs cream → blue → navy to read as afternoon into night.
export default function Agenda() {
  return (
    <section
      id="agenda"
      className="relative overflow-hidden px-[clamp(22px,6vw,72px)] pt-[clamp(76px,11vw,150px)] pb-[clamp(96px,13vw,170px)]"
      style={{
        background:
          'linear-gradient(180deg,#FAF6F0 0%,#DCE6EE 22%,#9DB4C8 52%,#4f6378 78%,#2C3E50 100%)',
      }}
    >
      <Reveal className="text-center mb-[clamp(44px,7vw,76px)]">
        <p className="font-sans uppercase tracking-[.34em] text-[clamp(11px,1.4vw,13px)] font-medium text-gold m-0 mb-[.7em]">
          Plan dnia
        </p>
        <h2 className="font-serif font-medium text-[clamp(34px,6vw,60px)] leading-[1.05] tracking-[.01em] text-ink m-0">
          Od popołudnia do świtu
        </h2>
      </Reveal>

      <div className="relative max-w-[760px] mx-auto">
        {/* Vertical timeline line */}
        <span
          aria-hidden="true"
          className="absolute left-[19px] top-3.5 bottom-3.5 w-[2.5px] rounded-xs"
          style={{
            background:
              'linear-gradient(180deg,#B8924E 0%,#C9A86A 26%,#D2B26E 50%,#E0C486 74%,#EDD5A2 100%)',
            boxShadow: '0 0 6px rgba(201,168,106,.35)',
          }}
        />

        {AGENDA.map((item, i) => (
          <Reveal
            as="article"
            key={item.title}
            className="relative flex gap-[clamp(14px,4vw,28px)]"
            style={{ marginBottom: i === AGENDA.length - 1 ? 0 : 'clamp(18px,3vw,30px)' }}
          >
            <div className="flex-none w-10 flex justify-center">
              <span className="w-10 h-10 rounded-full bg-cream border-2 border-gold flex items-center justify-center text-sage">
                <Icon name={item.icon} size={20} />
              </span>
            </div>
            <div
              className="flex-1 text-left bg-white rounded-[15px] p-[clamp(15px,3vw,22px)] w-full"
              style={{
                border: '1px solid rgba(44,62,80,.08)',
                boxShadow: item.finale
                  ? '0 16px 40px rgba(0,0,0,.28)'
                  : '0 12px 30px rgba(44,62,80,.1)',
              }}
            >
              <div className="flex items-start">
                <div>
                  <h3
                    className="font-serif font-medium text-[clamp(20px,3vw,27px)] text-ink leading-[1.15]"
                    style={{ margin: '.1em 0 0' }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="mt-[.5em] mb-0 text-card font-light text-[14px]">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
