import { createContext, type ReactNode, useCallback, useContext, useEffect, useState } from 'react'

// Shared store for user-supplied images (couple photo, venues, gallery).
// Persisted to localStorage so drops survive reloads - the React equivalent
// of the original <image-slot> sidecar. The gallery lightbox reads from the
// same store so filled tiles can be viewed full-screen.
const KEY = 'wedding-images-v1'

type ImageMap = Record<string, string>

type ImagesContextValue = {
  images: ImageMap
  setImage: (id: string, url: string) => void
  clearImage: (id: string) => void
}

const ImagesContext = createContext<ImagesContextValue | null>(null)

export function ImagesProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<ImageMap>(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) ?? '{}')
    } catch {
      return {}
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(images))
    } catch {
      /* quota / private mode - ignore */
    }
  }, [images])

  const setImage = useCallback(
    (id: string, url: string) => setImages((prev) => ({ ...prev, [id]: url })),
    [],
  )
  const clearImage = useCallback(
    (id: string) =>
      setImages((prev) => {
        const next = { ...prev }
        delete next[id]
        return next
      }),
    [],
  )

  return (
    <ImagesContext.Provider value={{ images, setImage, clearImage }}>
      {children}
    </ImagesContext.Provider>
  )
}

export function useImages() {
  const ctx = useContext(ImagesContext)
  if (!ctx) throw new Error('useImages must be used within an ImagesProvider')
  return ctx
}
