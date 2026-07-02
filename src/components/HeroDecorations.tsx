import type { CSSProperties } from 'react'
import { HERO_DECORATIONS, ICON_META } from '../svg/heroDecorations'

// Renders the static garland/flower ornaments around the hero from the data
// list in heroDecorations.ts. Edit the values there, not the JSX here.
export default function HeroDecorations() {
  return (
    <>
      {HERO_DECORATIONS.map((d) => {
        const meta = ICON_META[d.icon]
        const transform = d.flip
          ? `scaleX(-1) rotate(${d.rotate ?? 0}deg)`
          : d.rotate
            ? `rotate(${d.rotate}deg)`
            : undefined

        const wrapperStyle: CSSProperties = {
          position: 'absolute',
          top: d.top,
          bottom: d.bottom,
          left: d.left,
          right: d.right,
          width: d.width,
          transform,
          transformOrigin: transform ? 'center' : undefined,
          zIndex: meta.zIndex,
          pointerEvents: 'none',
        }

        const iconStyle: CSSProperties = {
          display: 'block',
          width: '100%',
          height: 'auto',
          aspectRatio: meta.aspectRatio,
          color: d.color,
          opacity: d.opacity,
          animation: `${meta.animation} ${d.duration} ease-in-out ${d.delay ? `${d.delay} ` : ''}infinite`,
        }

        return (
          <div key={d.id} aria-hidden="true" style={wrapperStyle}>
            <svg aria-hidden="true" style={iconStyle}>
              <use href={`#${d.icon}`} />
            </svg>
          </div>
        )
      })}
    </>
  )
}
