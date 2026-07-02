import { type ClipboardEvent, type KeyboardEvent, type ReactNode, useRef, useState } from 'react'
import Icon from './Icon'

const PIN_LENGTH = 4
const STORAGE_KEY = 'wedding-pin-unlocked'
const PIN = import.meta.env.VITE_ACCESS_PIN

function isUnlocked() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

// Gates the site behind a 4-digit PIN before rendering `children`. This is a
// soft deterrent (the PIN ships in the client bundle, like everything else on
// a static site) meant to stop casual link-sharing/crawlers from landing
// straight on the page, not real access control - see README.
export default function PinGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(isUnlocked)
  const [digits, setDigits] = useState<string[]>(Array(PIN_LENGTH).fill(''))
  const [error, setError] = useState(false)
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  // No PIN configured (e.g. local dev without .env) - don't gate at all.
  if (!PIN) return <>{children}</>
  if (unlocked) return <>{children}</>

  const submit = (value: string) => {
    if (value === PIN) {
      try {
        localStorage.setItem(STORAGE_KEY, 'true')
      } catch {
        /* private mode - ignore, gate reappears next visit */
      }
      setUnlocked(true)
    } else {
      setError(true)
      setDigits(Array(PIN_LENGTH).fill(''))
      inputsRef.current[0]?.focus()
    }
  }

  const setDigit = (i: number, value: string) => {
    const next = [...digits]
    next[i] = value
    setDigits(next)
    if (next.every((d) => d !== '')) submit(next.join(''))
  }

  const onChange = (i: number, raw: string) => {
    const value = raw.replace(/\D/g, '').slice(-1)
    setError(false)
    setDigit(i, value)
    if (value && i < PIN_LENGTH - 1) inputsRef.current[i + 1]?.focus()
  }

  const onKeyDown = (i: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[i] && i > 0) {
      inputsRef.current[i - 1]?.focus()
    }
  }

  const onPaste = (e: ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, PIN_LENGTH)
    if (!pasted) return
    e.preventDefault()
    setError(false)
    const next = Array(PIN_LENGTH).fill('')
    for (let i = 0; i < pasted.length; i++) next[i] = pasted[i]
    setDigits(next)
    if (pasted.length === PIN_LENGTH) submit(pasted)
    else inputsRef.current[pasted.length]?.focus()
  }

  return (
    <div className="min-h-svh flex items-center justify-center bg-cream px-6">
      <div
        className="text-center max-w-[320px]"
        style={error ? { animation: 'shake .4s' } : undefined}
      >
        <p className="font-sans uppercase tracking-[.34em] text-[12px] font-medium text-gold m-0 mb-[.8em]">
          Zaproszenie
        </p>
        <h1 className="font-serif font-medium text-[32px] text-ink m-0 mb-[.6em]">Podaj kod</h1>
        <div className="flex items-center justify-center gap-3 text-gold mb-[1.4em]">
          <span
            className="h-px w-10"
            style={{ background: 'linear-gradient(90deg,transparent,#C9A86A)' }}
          />
          <Icon name="flower" size={16} style={{ opacity: 0.9, flex: 'none' }} />
          <span
            className="h-px w-10"
            style={{ background: 'linear-gradient(270deg,transparent,#C9A86A)' }}
          />
        </div>
        <p className="text-body font-light text-[15px] m-0 mb-[1.6em]">
          Wpiszcie 4-cyfrowy kod, który od nas dostaliście.
        </p>
        <div className="flex items-center justify-center gap-3">
          {digits.map((d, i) => (
            <input
              // biome-ignore lint/suspicious/noArrayIndexKey: fixed-length PIN boxes, order never changes
              key={i}
              ref={(el) => {
                inputsRef.current[i] = el
              }}
              type="tel"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={1}
              value={d}
              onChange={(e) => onChange(i, e.target.value)}
              onKeyDown={(e) => onKeyDown(i, e)}
              onPaste={onPaste}
              aria-label={`Cyfra ${i + 1} z ${PIN_LENGTH}`}
              className="w-12 h-14 text-center font-serif text-2xl text-ink bg-white rounded-lg border border-gold/40 focus:outline-none focus:border-gold"
            />
          ))}
        </div>
        {error && (
          <p className="text-[13px] font-light m-0 mt-[1.2em]" style={{ color: '#b3554a' }}>
            Nieprawidłowy kod - spróbujcie ponownie.
          </p>
        )}
      </div>
    </div>
  )
}
