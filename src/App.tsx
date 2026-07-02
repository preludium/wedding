import { useState } from 'react'
import Agenda from './components/Agenda'
import FloatingNav from './components/FloatingNav'
import Footer from './components/Footer'
// import Gallery from './components/Gallery'
import Hero from './components/Hero'
import IconSprite from './components/IconSprite'
import Lightbox from './components/Lightbox'
import PracticalInfo from './components/PracticalInfo'
import Story from './components/Story'
import Venues from './components/Venues'
import { ImagesProvider } from './context/ImagesContext'

export default function App() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  return (
    <ImagesProvider>
      <IconSprite />
      <div className="relative">
        <FloatingNav />
        <Hero />
        <Story />
        <Venues />
        <Agenda />
        {/*<Gallery onZoom={(i) => setLightbox({ open: true, index: i })} />*/}
        <PracticalInfo />
        <Footer />
        <Lightbox
          open={lightbox.open}
          index={lightbox.index}
          onClose={() => setLightbox((s) => ({ ...s, open: false }))}
          onIndex={(i) => setLightbox((s) => ({ ...s, index: i }))}
        />
      </div>
    </ImagesProvider>
  )
}
