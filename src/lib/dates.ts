// Human-readable wedding dates derived from the single ISO date in config -
// keeps the hero line and footer in sync with the countdown target.

export function formatDates(dateStr: string, locale = 'pl-PL') {
  const dt = new Date(dateStr)
  if (Number.isNaN(dt.getTime())) return { full: '', short: '' }
  try {
    const full = new Intl.DateTimeFormat(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(dt)
    const short = new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(dt)
    return { full, short }
  } catch {
    return { full: '', short: '' }
  }
}
