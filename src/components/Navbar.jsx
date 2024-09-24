import React from 'react'
import { motion } from 'framer-motion'

import logo from '../assets/logo.png'

const fadeIn = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { delay: 0.3, staggerChildren: 0.1 },
}

const Navbar = () => {
	const menuItems = [
		{ text: 'Portfolio', targetId: 'projects' },
		{ text: 'Our Team', targetId: 'team' },
		{ text: 'Pricing', targetId: 'pricing' },
		{ text: 'FAQs', targetId: 'faqs' },
		{ text: 'Contact Us', targetId: 'contact' },
	]

	const handleScroll = (event, targetId) => {
		event.preventDefault()
		const targetElement = document.getElementById(targetId)
		if (targetElement || targetElement === 'homepage') {
			const offsetTop = targetElement.offsetTop - 80
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth',
			})
		}
	}

	return (
		<div className='container mx-auto px-auto py-4 w-full flex justify-between items-center'>
			<a href='#homepage' onClick={(e) => handleScroll(e, 'homepage')}>
				<img src={logo} alt='logo' width='94px' height='44px' />
			</a>

			<motion.ul
				{...fadeIn}
				className='hidden md:flex items-center space-x-5'>
				{menuItems.map((item, index) => (
					<motion.a
						key={index}
						whileHover={{ color: '#ff8169' }}
						className='font-bold uppercase'
						href={`#${item.targetId
							.toLowerCase()
							.replace(/\s+/g, '-')}`}
						onClick={(e) => handleScroll(e, item.targetId)}>
						{item.text}
					</motion.a>
				))}
			</motion.ul>
			<button
				className='px-5 py-2 shadow-md text-white font-semibold bg-[#ff8169] 
				hover:bg-[#9acdf3] rounded-full'>
				Client Login
			</button>
		</div>
	)
}

export default Navbar
