const About = () => {
  return (
    <main className="flex-1 w-full px-4 pb-12 sm:px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="title-animate text-center mb-16">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-zinc-900 tracking-tight mb-4 font-geist font-semibold">
          About Krishna
          </h1>
          <p className="text-2xl sm:text-3xl text-zinc-600 mb-6 font-geist font-medium">
            Capturing the Cosmos, One Frame at a Time
          </p>
          <div className="w-24 h-1 bg-zinc-900 mx-auto"></div>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <div className="prose max-w-none">
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 font-geist">
              Krishna is an astro-visual artist and photographer based in the United States whose work celebrates the profound beauty of the night sky. His imagery reveals celestial wonders — from luminous Milky Way arcs and vibrant auroras to mesmerizing star trails — all captured across America's most breathtaking dark-sky national parks.
            </p>
          </div>
        </section>

        {/* A Journey Written in Starlight */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6 font-geist">A Journey Written in Starlight</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-zinc-600 leading-relaxed mb-6 font-geist">
              Krishna's passion for astrophotography began unexpectedly at the Grand Canyon, where he first witnessed a sky filled with stars unfiltered by city light. That night changed everything. Soon after, he attended his first astrophotography workshop in Death Valley, where he captured his first Milky Way — a moment that transformed curiosity into lifelong dedication.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed font-geist">
              Since then, he has spent countless nights under open skies in places like Yellowstone, Big Bend, and Glacier National Park, chasing rare celestial events. His Yellowstone series features a double aurora and the Perseid meteor shower, blending precision and emotion in a single frame. Each image is a product of patience, curiosity, and sleepless wonder.
            </p>
          </div>
        </section>

        {/* The Art Behind the Lens */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6 font-geist">The Art Behind the Lens</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-zinc-600 leading-relaxed font-geist">
              Krishna's work bridges science and art — combining advanced imaging techniques with storytelling to reveal the delicate interplay between Earth and cosmos. He experiments with long exposures, time-lapse sequences, and star-trail composites, creating imagery that captures both motion and stillness. Soon, he aims to expand into deep-sky astrophotography using star-tracking systems to explore galaxies and nebulae beyond the naked eye.
            </p>
          </div>
        </section>

        {/* Equipment & Techniques */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 font-geist">⚙️ Equipment & Techniques</h2>
          
          {/* Core Gear */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-zinc-200 mb-8">
            <h3 className="text-2xl font-semibold text-zinc-900 mb-6 font-geist">📸 Core Gear</h3>
            <div className="space-y-4 text-zinc-600 font-geist">
              <div>
                <p className="font-semibold text-zinc-900 mb-2">Camera Body:</p>
                <p className="mb-4">Nikon Z6II (24.5 MP full-frame sensor)</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-900 mb-2">Primary Lenses:</p>
                <ul className="space-y-2 ml-4">
                  <li className="list-disc">NIKKOR Z 14-24 mm f/2.8 S — ultra-wide, sharp, and perfect for Milky Way panoramas</li>
                  <li className="list-disc">Tamron 70-300 mm F/4.5-6.3 Di III RXD (Model A047Z) — for detailed telephoto nightscapes and compression shots</li>
                  <li className="list-disc">NIKKOR Z 50 mm f/2.8 MC Macro — for intimate compositions, moon textures, and artistic framing</li>
                </ul>
              </div>
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-zinc-900 mr-2">•</span>
                    <span><strong>Tripod:</strong> Manfrotto carbon-fiber series for exceptional stability during long exposures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-900 mr-2">•</span>
                    <span><strong>Intervalometer / Remote:</strong> For precise time-lapse and star-trail sequencing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-900 mr-2">•</span>
                    <span><strong>Star Tracker (planned):</strong> Sky-Watcher Star Adventurer GTi — for advanced deep-sky and Milky Way detail work</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Shooting Techniques */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-zinc-200">
            <h3 className="text-2xl font-semibold text-zinc-900 mb-6 font-geist">🌠 Shooting Techniques</h3>
            <ul className="space-y-3 text-zinc-600 font-geist">
              <li className="flex items-start">
                <span className="text-zinc-900 mr-2">•</span>
                <span><strong>Long Exposure:</strong> 15–30 seconds at ISO 1600–3200 to capture faint starlight with minimal noise</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-900 mr-2">•</span>
                <span><strong>Time-Lapse Sequences:</strong> Hundreds to thousands of RAW frames showing celestial motion across hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-900 mr-2">•</span>
                <span><strong>Star-Trail Compositing:</strong> Layer-stacking multiple exposures to reveal Earth's rotation in sweeping arcs</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-900 mr-2">•</span>
                <span><strong>Aurora Capture:</strong> Adaptive ISO and white balance tuning for accurate color rendering during dynamic displays</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-900 mr-2">•</span>
                <span><strong>Post-Processing:</strong> Adobe Lightroom & Photoshop for calibrated stacking, color balance, and tonal refinement — preserving the natural authenticity of the night sky</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Vision */}
        <section className="bg-zinc-900 rounded-3xl p-8 shadow-2xl border border-zinc-800">
          <h3 className="text-2xl font-semibold text-white mb-4 font-geist">🌠 Vision</h3>
          <p className="text-zinc-400 leading-relaxed font-geist">
            Through his lens, Krishna invites viewers to rediscover their connection to the universe. Each photograph embodies the stillness, scale, and mystery of the cosmos — reminding us how small yet significant our place in it truly is.
          </p>
        </section>
      </div>
    </main>
  )
}

export default About

