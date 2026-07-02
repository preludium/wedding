import { type CSSProperties, createElement, type JSX, type ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type RevealProps = {
  as?: keyof JSX.IntrinsicElements
  delay?: number
  className?: string
  style?: CSSProperties
  children?: ReactNode
  [prop: string]: unknown
}

// Wraps children in an element that fades + slides into view on first scroll.
// `delay` (ms) staggers grouped reveals, matching the original data-delay.
export default function Reveal({
  as = 'div',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}: RevealProps) {
  const { ref, style: revealStyle } = useReveal(delay)
  return createElement(
    as,
    { ref, className, style: { ...revealStyle, ...style }, ...rest },
    children,
  )
}
