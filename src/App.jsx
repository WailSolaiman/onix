import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Insights from './components/Insights'
import Stats from './components/Stats'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
	return (
		<div className='bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50'>
			<Navbar />
			<Hero />
			<Insights />
			<Stats />
			<Pricing />
			<Testimonials />
			<Faq />
			<Footer />
		</div>
	)
}

export default App
