import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Insights from './components/Insights'
import Stats from './components/Stats'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Team from './components/Team'
import Contact from './components/Contact'

function App() {
	return (
		<div className='bg-gradient-to-r from-red-200 via-pink-200 to-purple-200 min-h-screen'>
			<Navbar />
			<Hero />
			<Insights />
			<Stats />
			<Projects />
			<Team />
			<Pricing />
			<Testimonials />
			<Faq />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
