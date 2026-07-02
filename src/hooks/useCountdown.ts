import { useEffect, useState } from 'react'

const pad = (n: number) => String(n).padStart(2, '0')

function compute(dateStr: string) {
  const target = new Date(dateStr).getTime()
  if (Number.isNaN(target)) return { days: '·', hours: '·', mins: '·', secs: '·' }
  let diff = target - Date.now()
  if (diff < 0) diff = 0
  return {
    days: String(Math.floor(diff / 86400000)),
    hours: pad(Math.floor((diff % 86400000) / 3600000)),
    mins: pad(Math.floor((diff % 3600000) / 60000)),
    secs: pad(Math.floor((diff % 60000) / 1000)),
  }
}

// Ticks every second toward `dateStr`. Returns display-ready strings; before
// the first valid tick (or for an invalid date) the fields show a neutral dot,
// matching the original placeholder.
export function useCountdown(dateStr: string) {
  const [time, setTime] = useState(() => compute(dateStr))

  useEffect(() => {
    const id = setInterval(() => setTime(compute(dateStr)), 1000)
    return () => clearInterval(id)
  }, [dateStr])

  return time
}
