import { type CSSProperties, useEffect, useRef, useState } from 'react'

// Mirrors the original scroll-reveal: elements start faded + shifted down,
// then ease into place the first time they enter the viewport. Honors
// prefers-reduced-motion by showing immediately.
export function useReveal(delay = 0) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setShown(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const style: CSSProperties = {
    opacity: shown ? 1 : 0,
    transform: shown ? 'none' : 'translateY(32px)',
    transition:
      `opacity .95s cubic-bezier(.22,.61,.36,1) ${delay}ms, ` +
      `transform .95s cubic-bezier(.22,.61,.36,1) ${delay}ms`,
  }
  return { ref, style }
}
