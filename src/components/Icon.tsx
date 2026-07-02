import type { CSSProperties } from 'react'

type IconProps = {
  name: string
  size?: number
  width?: number
  height?: number
  className?: string
  style?: CSSProperties
}

// Thin wrapper around a sprite <symbol>. `name` is the symbol id without the
// leading '#'. Colour is inherited via currentColor, so set text-* on a parent.
export default function Icon({ name, size = 24, width, height, className = '', style }: IconProps) {
  return (
    <svg
      width={width ?? size}
      height={height ?? size}
      className={className}
      style={style}
      aria-hidden="true"
    >
      <use href={`#${name}`} />
    </svg>
  )
}
