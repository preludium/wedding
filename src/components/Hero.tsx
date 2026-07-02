import { useEffect, useRef } from 'react'
import { SITE } from '../config'
import { useCountdown } from '../hooks/useCountdown'
import { formatDates } from '../lib/dates'
import HeroDecorations from './HeroDecorations'
import Icon from './Icon'

const UNITS = [
  { key: 'days', label: 'dni' },
  { key: 'hours', label: 'godz.' },
  { key: 'mins', label: 'min' },
  { key: 'secs', label: 'sek' },
] as const

export default function Hero() {
  const petalsRef = useRef<HTMLDivElement>(null)
  const time = useCountdown(SITE.weddingDate)
  const { full } = formatDates(SITE.weddingDate, SITE.locale)

  // Falling petals - same generative approach as the original.
  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const wrap = petalsRef.current
    if (!wrap) return
    wrap.innerHTML = ''
    const colors = ['#A8C4D8', '#C9D7E4', '#9CAF88', '#E7D9C2', '#7FA6C4']
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('span')
      const size = 7 + Math.random() * 12
      p.style.cssText =
        'position:absolute;top:-14vh;left:' +
        (Math.random() * 100).toFixed(1) +
        '%;' +
        'width:' +
        size.toFixed(1) +
        'px;height:' +
        (size * 1.18).toFixed(1) +
        'px;' +
        'background:' +
        colors[i % colors.length] +
        ';opacity:0;' +
        'border-radius:0 100% 0 100% / 0 100% 0 100%;filter:blur(.2px);' +
        'animation:fall ' +
        (9 + Math.random() * 9).toFixed(1) +
        's linear ' +
        (Math.random() * 11).toFixed(1) +
        's infinite;will-change:transform,opacity'
      wrap.appendChild(p)
    }
  }, [])

  return (
    <header
      id="hero"
      className="relative min-h-svh flex flex-col items-center justify-center text-center px-[22px] py-[clamp(40px,8vw,90px)] overflow-hidden"
    >
      {/* Soft breathing glow */}
      <div
        aria-hidden="true"
        className="absolute top-[47%] left-1/2 w-[min(780px,98vw)] h-[min(640px,82vh)] rounded-full pointer-events-none z-[1] blur-sm"
        style={{
          background:
            'radial-gradient(circle at 50% 48%, rgba(168,196,216,.34), rgba(156,175,136,.13) 44%, rgba(250,246,240,0) 70%)',
          transform: 'translate(-50%,-50%)',
          animation: 'breathe 10s ease-in-out infinite',
        }}
      />

      {/* Decorative garlands + flowers */}
      <HeroDecorations />

      {/* Falling petals layer */}
      <div
        id="petals"
        ref={petalsRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden z-[2]"
      />

      {/* Content */}
      <div className="relative z-[3] max-w-[840px]">
        <p
          className="font-sans uppercase tracking-[.36em] text-[clamp(11px,1.5vw,13px)] font-medium text-gold m-0 mb-[.4em]"
          style={{ animation: 'fadeUp 1s both .1s' }}
        >
          Z radością zapraszamy na nasz ślub
        </p>

        <h1
          className="font-serif font-medium text-ink text-[clamp(64px,17vw,168px)] leading-none tracking-[.01em]"
          style={{ margin: '.02em 0 .06em' }}
        >
          <span
            className="inline-block font-script font-normal tracking-normal leading-[.95] px-[.12em] pb-[.12em]"
            style={{ animation: 'fadeUp 1.1s both .25s' }}
          >
            {SITE.name1}
          </span>
          <span
            className="block text-[.4em] text-gold italic font-normal"
            style={{ margin: '.04em 0 .02em', animation: 'fadeUp 1.1s both .55s' }}
          >
            &amp;
          </span>
          <span
            className="inline-block font-script font-normal tracking-normal leading-[.95] px-[.12em] pb-[.12em]"
            style={{ animation: 'fadeUp 1.1s both .85s' }}
          >
            {SITE.name2}
          </span>
        </h1>

        {/* Flourish */}
        <div
          className="flex items-center justify-center gap-[clamp(14px,3vw,22px)] text-gold mt-[.7em] mb-[.5em]"
          style={{ animation: 'fadeUp 1.1s both 1.1s' }}
        >
          <span
            className="h-px w-[clamp(44px,11vw,96px)]"
            style={{ background: 'linear-gradient(90deg,transparent,#C9A86A)' }}
          />
          <Icon name="flower" size={22} style={{ opacity: 0.9, flex: 'none' }} />
          <span
            className="h-px w-[clamp(44px,11vw,96px)]"
            style={{ background: 'linear-gradient(270deg,transparent,#C9A86A)' }}
          />
        </div>

        <p
          className="font-sans uppercase tracking-[.22em] text-[clamp(13px,2vw,16px)] font-normal text-ink m-0"
          style={{ animation: 'fadeUp 1.1s both 1.25s' }}
        >
          {full}
        </p>

        <p
          className="font-serif italic text-[clamp(18px,3vw,26px)] text-bodysoft max-w-[30ch] mx-auto mt-[1.1em] leading-[1.4]"
          style={{ animation: 'fadeUp 1.1s both 1.4s' }}
        >
          Z całego serca pragniemy dzielić z Wami ten wyjątkowy dzień.
        </p>

        {/* Countdown */}
        <div className="mt-[1.7em]" style={{ animation: 'fadeUp 1.1s both 1.55s' }}>
          <p className="font-sans uppercase tracking-[.3em] text-[clamp(10px,1.4vw,12px)] font-medium text-blue m-0 mb-[1em]">
            Do ceremonii pozostało
          </p>
          <div
            role="timer"
            aria-label="Odliczanie do ceremonii"
            className="flex items-start justify-center gap-[clamp(8px,2.4vw,20px)]"
          >
            {UNITS.map((u, i) => (
              <div key={u.key} className="contents">
                <div className="flex flex-col items-center min-w-[clamp(48px,12vw,64px)]">
                  <span className="font-serif font-medium text-[clamp(38px,8vw,62px)] leading-[.95] text-ink">
                    {time[u.key]}
                  </span>
                  <span className="font-sans uppercase tracking-[.16em] text-[clamp(9px,1.3vw,11px)] font-medium text-mutedcool mt-[.7em]">
                    {u.label}
                  </span>
                </div>
                {i < UNITS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="font-serif font-normal text-[clamp(30px,6vw,50px)] leading-none text-gold opacity-70 pt-[.05em]"
                  >
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#historia"
        aria-label="Przewiń w dół"
        className="absolute bottom-6 left-1/2 z-[4] flex flex-col items-center gap-2 no-underline text-blue"
        style={{ transform: 'translate(-50%,0)', animation: 'bob 2.4s ease-in-out infinite' }}
      >
        <span className="font-sans uppercase tracking-[.28em] text-[10px] font-medium">
          przewiń
        </span>
        <svg
          aria-hidden="true"
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="2 2 10 10 18 2" />
        </svg>
      </a>
    </header>
  )
}
