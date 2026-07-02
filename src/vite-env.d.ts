/// <reference types="vite/client" />

// Custom build-time env vars - see .env.example. All optional: the app falls
// back to generic placeholders/drag-and-drop when unset (e.g. local dev).
// VITE_IMG_* keys (one per ImageSlot id) are looked up dynamically in
// ImageSlot.tsx and aren't listed individually here.
interface ImportMetaEnv {
  readonly VITE_NAME_1?: string
  readonly VITE_NAME_2?: string
  readonly VITE_WEDDING_DATE?: string
  readonly VITE_VENUE_1_NAME?: string
  readonly VITE_VENUE_1_ADDRESS?: string
  readonly VITE_VENUE_1_DESC?: string
  readonly VITE_VENUE_2_NAME?: string
  readonly VITE_VENUE_2_ADDRESS?: string
  readonly VITE_VENUE_2_DESC?: string
  readonly VITE_RSVP_DATE?: string
  readonly VITE_CONTACT_1?: string
  readonly VITE_CONTACT_2?: string
}
