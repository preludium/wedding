import { SPRITE } from '../svg/sprite'

// Injects the shared SVG <symbol> sprite once at the top of the tree. Every
// <Icon> and decorative <use href="#…"> references these symbols. Rendered
// verbatim from the original design so complex paths stay pixel-identical.
export default function IconSprite() {
  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: SPRITE is a static, build-time constant, not user input
      dangerouslySetInnerHTML={{ __html: SPRITE }}
    />
  )
}
