import React from 'react'
import { motion } from 'framer-motion'

const fadeIn = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { delay: 0.3, staggerChildren: 0.1 },
}

const hoverTapEffect = {
	whileHover: {
		textShadow: '0 0 8px rgba(0, 200, 255, 0.8)', // Adds a glow effect on hover
		color: '#00bfff', // Changes text color on hover
	},
	whileTap: {
		textShadow: 'none', // Removes glow on tap
		color: '#1f2937', // Resets to original color
	},
}

const buttonHoverEffect = {
	whileHover: {
		textShadow: '0 0 12px rgba(0, 200, 255, 0.8)', // More pronounced glow on hover
		color: '#ffffff', // Change button text color
	},
	whileTap: {
		textShadow: 'none', // Remove glow on tap
		color: '#1f2937', // Reset color on tap
	},
}

// Reusable Animated List Item component
const AnimatedLi = ({ children, href }) => (
	<motion.li {...hoverTapEffect}>
		<a href={href}>{children}</a>
	</motion.li>
)

const Navbar = () => {
	const menuItems = ['Portfolio', 'Our Team', 'Careers', 'About']

	return (
		<div className='w-4/5 m-auto flex justify-between items-center py-5'>
			<h1 className='text-xl font-bold'>BetaTech</h1>
			<motion.ul
				{...fadeIn}
				className='hidden md:flex items-center space-x-5'>
				{menuItems.map((item, index) => (
					<AnimatedLi
						key={index}
						href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
						{item}
					</AnimatedLi>
				))}
			</motion.ul>
			<motion.button
				{...buttonHoverEffect}
				className='px-5 py-2 border shadow-md text-black 
				hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 rounded-full'>
				Register
			</motion.button>
		</div>
	)
}

export default Navbar
