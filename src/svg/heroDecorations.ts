export type DecorationIcon = 'eucline' | 'leafbranch' | 'flower'

export type Decoration = {
  id: string
  icon: DecorationIcon
  top?: string
  bottom?: string
  left?: string
  right?: string
  width: string
  rotate?: number
  /** Mirrors the icon horizontally (used for the right-side garlands). */
  flip?: boolean
  color: string
  opacity: number
  duration: string
  delay?: string
}

// Per-icon visuals that never change between decorations in this design:
// the line garlands (eucline/leafbranch) sit behind and gently sway, the
// flower accents sit in front and drift. Kept out of the list below so only
// what actually varies per decoration has to be read/edited.
export const ICON_META: Record<
  DecorationIcon,
  { aspectRatio: string; zIndex: 1 | 2; animation: 'sway' | 'drift' }
> = {
  eucline: { aspectRatio: '68 / 214', zIndex: 1, animation: 'sway' },
  leafbranch: { aspectRatio: '56 / 202', zIndex: 1, animation: 'sway' },
  flower: { aspectRatio: '1 / 1', zIndex: 2, animation: 'drift' },
}

// Hero background ornaments: a line garland + two small flowers in each
// corner, plus a pair of edge flower accents. Rendered by <HeroDecorations>.
// Tweak the numbers below - no HTML/CSS editing required.
export const HERO_DECORATIONS: Decoration[] = [
  // Top-left line garland
  {
    id: 'tl-eucline',
    icon: 'eucline',
    top: '-22px',
    left: '-16px',
    width: 'clamp(94px,16vw,184px)',
    rotate: 128,
    color: '#9CAF88',
    opacity: 0.62,
    duration: '9s',
  },
  {
    id: 'tl-leafbranch',
    icon: 'leafbranch',
    top: '2px',
    left: '8%',
    width: 'clamp(60px,10vw,116px)',
    rotate: 150,
    color: '#7FA6C4',
    opacity: 0.5,
    duration: '12s',
  },
  {
    id: 'tl-eucline-2',
    icon: 'eucline',
    top: '-10px',
    left: '15%',
    width: 'clamp(54px,9vw,100px)',
    rotate: 106,
    color: '#9CAF88',
    opacity: 0.5,
    duration: '11s',
  },
  {
    id: 'tl-flower',
    icon: 'flower',
    top: '9%',
    left: '5%',
    width: 'clamp(24px,3.4vw,38px)',
    color: '#C9A86A',
    opacity: 0.7,
    duration: '10s',
  },
  {
    id: 'tl-flower-2',
    icon: 'flower',
    top: '17%',
    left: '13%',
    width: 'clamp(18px,2.6vw,28px)',
    color: '#7FA6C4',
    opacity: 0.55,
    duration: '12s',
    delay: '.6s',
  },

  // Top-right line garland (mirrored)
  {
    id: 'tr-eucline',
    icon: 'eucline',
    top: '-22px',
    right: '-16px',
    width: 'clamp(94px,16vw,184px)',
    rotate: 128,
    flip: true,
    color: '#9CAF88',
    opacity: 0.62,
    duration: '10s',
  },
  {
    id: 'tr-leafbranch',
    icon: 'leafbranch',
    top: '2px',
    right: '8%',
    width: 'clamp(60px,10vw,116px)',
    rotate: 150,
    flip: true,
    color: '#7FA6C4',
    opacity: 0.5,
    duration: '12s',
    delay: '.3s',
  },
  {
    id: 'tr-eucline-2',
    icon: 'eucline',
    top: '-10px',
    right: '15%',
    width: 'clamp(54px,9vw,100px)',
    rotate: 106,
    flip: true,
    color: '#9CAF88',
    opacity: 0.5,
    duration: '11s',
  },
  {
    id: 'tr-flower',
    icon: 'flower',
    top: '10%',
    right: '5%',
    width: 'clamp(24px,3.4vw,38px)',
    color: '#C9A86A',
    opacity: 0.7,
    duration: '11s',
  },
  {
    id: 'tr-flower-2',
    icon: 'flower',
    top: '18%',
    right: '13%',
    width: 'clamp(18px,2.6vw,28px)',
    color: '#7FA6C4',
    opacity: 0.55,
    duration: '13s',
  },

  // Bottom-left line garland
  {
    id: 'bl-eucline',
    icon: 'eucline',
    bottom: '-22px',
    left: '-16px',
    width: 'clamp(100px,18vw,200px)',
    rotate: -16,
    color: '#9CAF88',
    opacity: 0.62,
    duration: '9s',
  },
  {
    id: 'bl-leafbranch',
    icon: 'leafbranch',
    bottom: '-6px',
    left: '8%',
    width: 'clamp(60px,10vw,116px)',
    rotate: 6,
    color: '#7FA6C4',
    opacity: 0.5,
    duration: '13s',
  },
  {
    id: 'bl-eucline-2',
    icon: 'eucline',
    bottom: '-10px',
    left: '16%',
    width: 'clamp(54px,9vw,100px)',
    rotate: 20,
    color: '#9CAF88',
    opacity: 0.5,
    duration: '12s',
  },
  {
    id: 'bl-flower',
    icon: 'flower',
    bottom: '9%',
    left: '5%',
    width: 'clamp(24px,3.4vw,38px)',
    color: '#C9A86A',
    opacity: 0.7,
    duration: '11s',
  },
  {
    id: 'bl-flower-2',
    icon: 'flower',
    bottom: '16%',
    left: '12%',
    width: 'clamp(18px,2.6vw,28px)',
    color: '#7FA6C4',
    opacity: 0.55,
    duration: '13s',
    delay: '.5s',
  },

  // Bottom-right line garland (mirrored)
  {
    id: 'br-eucline',
    icon: 'eucline',
    bottom: '-22px',
    right: '-16px',
    width: 'clamp(100px,18vw,200px)',
    rotate: -16,
    flip: true,
    color: '#9CAF88',
    opacity: 0.62,
    duration: '10s',
  },
  {
    id: 'br-leafbranch',
    icon: 'leafbranch',
    bottom: '-6px',
    right: '8%',
    width: 'clamp(60px,10vw,116px)',
    rotate: 6,
    flip: true,
    color: '#7FA6C4',
    opacity: 0.5,
    duration: '13s',
    delay: '.4s',
  },
  {
    id: 'br-eucline-2',
    icon: 'eucline',
    bottom: '-10px',
    right: '16%',
    width: 'clamp(54px,9vw,100px)',
    rotate: 20,
    flip: true,
    color: '#9CAF88',
    opacity: 0.5,
    duration: '12s',
  },
  {
    id: 'br-flower',
    icon: 'flower',
    bottom: '10%',
    right: '5%',
    width: 'clamp(24px,3.4vw,38px)',
    color: '#C9A86A',
    opacity: 0.7,
    duration: '12s',
  },
  {
    id: 'br-flower-2',
    icon: 'flower',
    bottom: '17%',
    right: '12%',
    width: 'clamp(18px,2.6vw,28px)',
    color: '#7FA6C4',
    opacity: 0.55,
    duration: '11s',
  },

  // Edge flower accents
  {
    id: 'edge-left',
    icon: 'flower',
    top: '46%',
    left: '3%',
    width: 'clamp(20px,2.6vw,30px)',
    color: '#7FA6C4',
    opacity: 0.5,
    duration: '12s',
  },
  {
    id: 'edge-right',
    icon: 'flower',
    top: '52%',
    right: '3%',
    width: 'clamp(22px,2.8vw,32px)',
    color: '#C9A86A',
    opacity: 0.55,
    duration: '13s',
    delay: '.7s',
  },
]
