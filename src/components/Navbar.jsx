import React from 'react'
import { motion } from 'framer-motion'

import logo from '../assets/logo.png'

const fadeIn = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { delay: 0.3, staggerChildren: 0.1 },
}

const hoverTapEffect = {
	whileHover: {
		color: '#ff8169',
	},
}

const AnimatedLi = ({ children, href }) => (
	<motion.li {...hoverTapEffect}>
		<a className='font-bold' href={href}>
			{children}
		</a>
	</motion.li>
)

const Navbar = () => {
	const menuItems = ['Portfolio', 'Our Team', 'Careers', 'About']

	return (
		<div className='w-4/5 m-auto flex justify-between items-center py-5'>
			<img src={logo} alt='logo' width='94px' height='44px' />
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
			<button
				className='px-5 py-2 shadow-md text-white font-semibold bg-[#ff8169] 
				hover:bg-[#9acdf3] rounded-full'>
				Register
			</button>
		</div>
	)
}

export default Navbar
