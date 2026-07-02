import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data'

// Vertical dot nav that fades in after the hero and highlights the section
// currently in view. On narrow screens CSS (#floatnav media query) docks it to
// the bottom-center as a horizontal row.
export default function FloatingNav() {
  const [showing, setShowing] = useState(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      setShowing(y > window.innerHeight * 0.55)
      let idx = 0
      NAV_LINKS.forEach((l, i) => {
        const s = document.querySelector(l.href)
        if (s && s.getBoundingClientRect().top <= 150) idx = i
      })
      setActive(idx)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      id="floatnav"
      aria-label="Nawigacja po stronie"
      className="fixed top-1/2 right-[clamp(14px,2.5vw,28px)] z-50 flex flex-col gap-[15px] px-[11px] py-[13px] rounded-[30px] border border-gold/30"
      style={{
        transform: 'translateY(-50%)',
        opacity: showing ? 1 : 0,
        pointerEvents: showing ? 'auto' : 'none',
        transition: 'opacity .5s ease',
        background: 'rgba(250,246,240,.72)',
        backdropFilter: 'blur(9px)',
        WebkitBackdropFilter: 'blur(9px)',
        boxShadow: '0 8px 24px rgba(44,62,80,.1)',
      }}
    >
      {NAV_LINKS.map((l, i) => {
        const on = i === active && showing
        return (
          <a
            key={l.href}
            href={l.href}
            title={l.title}
            className="block leading-[0] p-[3px] no-underline"
          >
            <span
              className="block w-[9px] h-[9px] rounded-full"
              style={{
                background: on ? '#C9A86A' : 'rgba(44,62,80,.28)',
                transform: on ? 'scale(1.55)' : 'scale(1)',
                transition: 'transform .3s ease, background .3s ease',
              }}
            />
          </a>
        )
      })}
    </nav>
  )
}
