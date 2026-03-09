import React ,{useState} from 'react'
import NavBar from './components/NavBar'
import LightRays from './components/LightRays'
import { AnimatePresence } from "framer-motion"
import { motion as Motion } from "framer-motion"

import Profile from './components/Profile'
import LogoRotation from './components/LogoRotation'
import SplashCursor from './components/SplashCursor'
import Experience from './components/Experience'
import RagChat from './components/RagChat'
import Projects from './components/Projects'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  return (
    <div className=" relative min-h-screen bg-black text-white overflow-x-hidden z-10">

      {/* Background Light Rays */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.7}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <NavBar />
      <Profile  onProfileClick={() => setIsChatOpen(true)} />
      <LogoRotation />
      <Experience />
      <Projects/>
      <SplashCursor />

      {/* AI Takeover */}
      <AnimatePresence>
        {isChatOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50"
          >

            <Motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-[80vw] h-[80vh] bg-zinc-900 rounded-3xl shadow-[0_0_60px_rgba(124,58,237,0.5)] relative flex flex-col overflow-hidden border border-purple-500/20"
            >

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20">
                <h3 className="text-lg font-semibold text-purple-400">
                  Anurag AI Assistant
                </h3>

                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-white text-xl hover:text-purple-400 transition"
                >
                  ✕
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-6">
                <RagChat />
              </div>

            </Motion.div>

          </Motion.div>
        )}
      </AnimatePresence>


    </div>
  )
}

export default App
