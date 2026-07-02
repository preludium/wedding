export function MapLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center gap-2 no-underline font-sans text-[12px] tracking-[.1em] uppercase font-medium text-blue pb-[3px]"
      style={{ borderBottom: '1px solid rgba(127,166,196,.4)' }}
    >
      Pokaż na mapie <span aria-hidden="true">→</span>
    </a>
  )
}
