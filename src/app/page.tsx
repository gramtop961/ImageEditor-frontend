'use client'

import TicTacToe from '../components/TicTacToe'

export default function Home() {
  return (
    <main className="min-h-screen bg-neo-white font-neo">
      {/* Neo-brutal header */}
      <header className="border-b-5 border-neo-black bg-neo-yellow p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-black tracking-tight text-neo-black transform -rotate-1">
            IMAGE EDITOR
          </h1>
          <p className="text-xl font-bold mt-2 text-neo-black transform rotate-1">
            BRUTAL. BOLD. BEAUTIFUL.
          </p>
        </div>
      </header>

      {/* Main content area */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Game */}
          <div className="bg-neo-white border-5 border-neo-black shadow-neo-xl p-8">
            <TicTacToe />
          </div>

          {/* Right side - Info cards */}
          <div className="space-y-6">
            <div className="bg-neo-red border-5 border-neo-black shadow-neo-lg p-6 transform rotate-1">
              <h2 className="text-3xl font-black text-neo-white mb-4">FEATURES</h2>
              <ul className="text-neo-white font-bold space-y-2">
                <li>• BRUTAL DESIGN SYSTEM</li>
                <li>• HIGH CONTRAST COLORS</li>
                <li>• GEOMETRIC SHAPES</li>
                <li>• BOLD TYPOGRAPHY</li>
              </ul>
            </div>

            <div className="bg-neo-blue border-5 border-neo-black shadow-neo-lg p-6 transform -rotate-1">
              <h2 className="text-3xl font-black text-neo-white mb-4">COLORS</h2>
              <div className="grid grid-cols-4 gap-2">
                <div className="w-12 h-12 bg-neo-yellow border-3 border-neo-black"></div>
                <div className="w-12 h-12 bg-neo-red border-3 border-neo-black"></div>
                <div className="w-12 h-12 bg-neo-green border-3 border-neo-black"></div>
                <div className="w-12 h-12 bg-neo-purple border-3 border-neo-black"></div>
              </div>
            </div>

            <div className="bg-neo-green border-5 border-neo-black shadow-neo-lg p-6">
              <h2 className="text-3xl font-black text-neo-black mb-4">STATUS</h2>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-neo-red border-2 border-neo-black rounded-full"></div>
                <span className="font-bold text-neo-black">LIVE & RUNNING</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-5 border-neo-black bg-neo-black p-6 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-neo-white font-bold text-lg">
            MADE WITH ❤️ IN NEO-BRUTAL STYLE
          </p>
        </div>
      </footer>
    </main>
  )
}
