import { Link } from 'react-router-dom'
import Section from '../components/Section'

export default function Home() {
	return (
		<main>
			<Section>
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					<div className="space-y-4 lg:space-y-6">
						<div className="space-y-3 lg:space-y-4">
							<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-green leading-[0.9] tracking-tight">
								AutophaShield™
							</h1>
							<p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Triggered Longevity®</p>
						</div>
						<p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
							The world's first supplement engineered to activate autophagy, heat shock proteins (HSPs), and cold shock proteins (CSPs) — without the need for fasting, extreme cold, or heat stress.
						</p>
						<div className="pt-2 lg:pt-4">
							<Link 
								to="/contact" 
								className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-brand-orange text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-brand-orange/90 transition-all duration-300 transform hover:-translate-y-1"
							>
								Request Sample / Partner with Us
							</Link>
						</div>
					</div>
					<div className="hidden lg:block">
						<img 
							src="/images/autopha-shield.png" 
							alt="AutophaShield Product" 
							className="w-full h-auto rounded-2xl shadow-2xl border-2 border-brand-green/20"
						/>
					</div>
				</div>
			</Section>

<Section title="What is AutophaShield?" background="muted">
  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
    <div className="pt-4 lg:pt-12">
      <ul className="list-disc pl-6 space-y-2 lg:space-y-3 text-base lg:text-lg text-gray-700">
        <li>Trigger deep autophagy (cellular recycling and repair)</li>
        <li>Activate beneficial heat shock proteins (HSP70, HSP27)</li>
        <li>Activate cold shock proteins (RBM3, CIRP) for neuroprotection</li>
      </ul>
      <p className="mt-4 lg:mt-6 text-base lg:text-lg text-gray-700 leading-relaxed">
        This is the first supplement to simulate biological stress (fasting, cold, heat) without physically enduring it.
      </p>
    </div>

    {/* Image on the right */}
    <div className="flex justify-end mt-6 lg:mt-0">
      <img 
        src="/images/autophagy.png" 
        alt="Autophagy Process" 
        className="w-full max-w-xs sm:max-w-sm h-auto rounded-xl shadow-lg"
      />
    </div>
  </div>
</Section>


			<Section title="How It Works">
  <div className="grid lg:grid-cols-2 gap-2 lg:gap-6"> {/* reduced gap */}
    
    {/* Text Section */}
    <div className="lg:col-span-1 flex items-center"> {/* vertically center text */}
      <div className="grid md:grid-cols-2 gap-4 lg:gap-6 w-full">
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg lg:text-xl">
            Pathways Activated
          </h3>
          <ul className="space-y-2 text-gray-700 text-base lg:text-lg">
            <li><span className="inline-block px-2 py-1 rounded bg-green-100 text-green-800 mr-2">↑</span>AMPK</li>
            <li><span className="inline-block px-2 py-1 rounded bg-green-100 text-green-800 mr-2">↑</span>SIRT1</li>
            <li><span className="inline-block px-2 py-1 rounded bg-red-100 text-red-800 mr-2">↓</span>mTOR</li>
            <li><span className="inline-block px-2 py-1 rounded bg-green-100 text-green-800 mr-2">↑</span>Hsp72/Hsp27</li>
            <li><span className="inline-block px-2 py-1 rounded bg-green-100 text-green-800 mr-2">↑</span>RBM3/CIRP</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Image Section */}
    <div className="flex items-center justify-center h-full">
      <img 
        src="/images/autophagy-pathway.png" 
        alt="Autophagy Pathway" 
        className="w-full h-full max-h-[600px] object-contain rounded-xl shadow-lg border border-gray-200"
      />
    </div>
  </div>

  {/* Second Row */}
  <div className="mt-8 lg:mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
    <div className="flex items-center justify-center">
      <img 
        src="/images/phagophore.png" 
        alt="Phagophore Formation" 
        className="w-full max-w-sm h-auto rounded-xl shadow-lg"
      />
    </div>
    <div className="flex items-center justify-center">
      <img 
        src="/images/mood&dopamine-system.png" 
        alt="Mood & Dopamine System" 
        className="w-full max-w-sm h-auto rounded-xl shadow-lg"
      />
    </div>
  </div>
</Section>

		<Section title="Benefits" background="muted">
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					<div className="group p-6 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300 transform hover:-translate-y-1">
						<div className="text-brand-green group-hover:text-brand-orange text-2xl mb-3 transition-colors">🔄</div>
						<h3 className="font-bold text-lg text-gray-900 mb-2">Metabolic Health</h3>
						<p className="text-gray-700">Improves insulin sensitivity & metabolic health</p>
					</div>
					<div className="group p-6 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300 transform hover:-translate-y-1">
						<div className="text-brand-green group-hover:text-brand-orange text-2xl mb-3 transition-colors">🔧</div>
						<h3 className="font-bold text-lg text-gray-900 mb-2">Cellular Repair</h3>
						<p className="text-gray-700">Stimulates cellular repair & detoxification</p>
					</div>
					<div className="group p-6 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300 transform hover:-translate-y-1">
						<div className="text-brand-green group-hover:text-brand-orange text-2xl mb-3 transition-colors">🧠</div>
						<h3 className="font-bold text-lg text-gray-900 mb-2">Brain Resilience</h3>
						<p className="text-gray-700">Enhances neuroplasticity & brain resilience</p>
					</div>
					<div className="group p-6 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300 transform hover:-translate-y-1">
						<div className="text-brand-green group-hover:text-brand-orange text-2xl mb-3 transition-colors">😊</div>
						<h3 className="font-bold text-lg text-gray-900 mb-2">Mood Support</h3>
						<p className="text-gray-700">Supports healthy mood via dopamine regulation</p>
					</div>
					<div className="group p-6 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300 transform hover:-translate-y-1">
						<div className="text-brand-green group-hover:text-brand-orange text-2xl mb-3 transition-colors">🛡️</div>
						<h3 className="font-bold text-lg text-gray-900 mb-2">Age Protection</h3>
						<p className="text-gray-700">Helps protect against age-related degeneration</p>
					</div>
				</div>
			</Section>

			<Section title="Who It’s For">
				<ul className="list-disc pl-6 space-y-2 text-gray-700 max-w-3xl">
					<li>Individuals seeking benefits of intermittent fasting, cold plunges, saunas—without time or discomfort</li>
					<li>Longevity enthusiasts, clinicians, and high-performance individuals</li>
					<li>Patients exploring neuroprotective, metabolic, or regenerative support</li>
				</ul>
			</Section>

			<Section title="Science & Validation" background="muted">
				<ul className="list-disc pl-6 space-y-2 text-gray-700 max-w-3xl">
					<li>Patent-pending formulation</li>
					<li>Lab partnerships in development for real-time biomarker validation</li>
				</ul>
			</Section>

			<Section title="Partner With Us">
				<ul className="list-disc pl-6 space-y-2 text-gray-700">
					<li>Research institutions and clinical labs for biomarker testing</li>
					<li>Manufacturing partners for batch production</li>
					<li>Distributors and supplement platforms for early access rollout</li>
				</ul>
				<Link to="/contact" className="inline-block mt-6 px-6 py-3 rounded-md bg-brand-orange text-white font-semibold shadow-lg hover:shadow-xl hover:bg-brand-orange/90 transition-all transform hover:-translate-y-1">Contact Us</Link>
			</Section>
		</main>
	)
}


