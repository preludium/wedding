import { INFO_CARDS } from '../data'
import Icon from './Icon'
import Reveal from './Reveal'

// "Informacje praktyczne / Dobrze wiedzieć" - six info cards.
export default function PracticalInfo() {
  return (
    <section
      id="informacje"
      className="relative py-[clamp(76px,11vw,150px)] px-[clamp(22px,6vw,80px)] overflow-hidden bg-creamalt"
    >
      <div className="max-w-[1080px] mx-auto">
        <Reveal className="text-center mb-[clamp(36px,6vw,64px)]">
          <p className="font-sans uppercase tracking-[.34em] text-[clamp(11px,1.4vw,13px)] font-medium text-gold m-0 mb-[.7em]">
            Informacje praktyczne
          </p>
          <h2 className="font-serif font-medium text-[clamp(34px,6vw,60px)] leading-[1.05] tracking-[.01em] text-ink m-0">
            Dobrze wiedzieć
          </h2>
        </Reveal>

        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-[clamp(16px,3vw,26px)]">
          {INFO_CARDS.map((c) => (
            <article
              key={c.title}
              className="bg-cream rounded-2xl p-[clamp(24px,3.5vw,32px)]"
              style={{ border: '1px solid rgba(201,168,106,.2)' }}
            >
              <div className="text-sage mb-3.5">
                <Icon name={c.icon} size={26} />
              </div>
              <h3 className="font-serif font-medium text-[clamp(21px,2.6vw,26px)] text-ink mt-0 mb-[.4em]">
                {c.title}
              </h3>
              {c.html ? (
                <p
                  className="m-0 text-body font-light text-[15px]"
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: c.desc comes from the static, site-owner-authored INFO_CARDS data, not user input
                  dangerouslySetInnerHTML={{ __html: c.desc }}
                />
              ) : (
                <p className="m-0 text-body font-light text-[15px]">{c.desc}</p>
              )}
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
