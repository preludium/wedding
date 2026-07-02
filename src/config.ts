// ---------------------------------------------------------------------------
// Central, editable site configuration.
// The couple's names and the wedding date are supplied via env vars (see
// .env.example) so real, identifying details never get committed to the repo
// - every section (hero title, countdown, dates, footer) reads from here.
// ---------------------------------------------------------------------------

export const SITE = {
  name1: import.meta.env.VITE_NAME_1 || 'Imię 1',
  name2: import.meta.env.VITE_NAME_2 || 'Imię 2',
  // ISO local datetime the countdown ticks toward and the displayed dates
  // are derived from.
  weddingDate: import.meta.env.VITE_WEDDING_DATE || '2030-01-01T15:00',
  // Locale used to format the human-readable dates.
  locale: 'pl-PL',
}
