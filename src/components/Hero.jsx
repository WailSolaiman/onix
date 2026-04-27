import ResponsiveHeroBanner from './ui/ResponsiveHeroBanner'
import { data } from '../constants'

const SCROLL_OFFSET = 88

function scrollToSection(id) {
	const el = document.getElementById(id)
	if (!el) return
	const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
	window.scrollTo({ top, behavior: 'smooth' })
}

const Hero = () => {
	const h = data.hero

	return (
		<ResponsiveHeroBanner
			sectionId="homepage"
			backgroundImageUrl={h.backgroundImageUrl}
			badgeLabel={h.badgeLabel}
			badgeText={h.badgeText}
			title={h.title}
			titleLine2={h.titleLine2}
			description={h.description}
			primaryButtonText={h.buttonText}
			secondaryButtonText={h.secondaryButtonText}
			onPrimaryClick={() => scrollToSection('contact')}
			onSecondaryClick={() => scrollToSection('projects')}
			partnersTitle={h.partnersTitle}
			partners={h.partners}
		/>
	)
}

export default Hero
