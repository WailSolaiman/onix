import React from 'react'
import { motion } from 'framer-motion'

import heroImage from '../assets/hero.png'
import bgImage from '../assets/baner-dec-left.png'

import { data } from '../constants'

const Hero = () => {
	const { hero } = data

	return (
		<div
			id='homepage'
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: 'no-repeat',
			}}>
			<div
				className='w-4/5 m-auto pt-20 flex flex-col lg:flex-row justify-between 
		items-center space-y-10 md:space-y-0'>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.2, ease: 'easeInOut' }}
					viewport={{ amount: 0.1 }}
					className='lg:w-1/2 space-y-6 my-10'>
					<p className='font-bold'>{hero.subHeader}</p>
					<h1 className='text-5xl md:text-7xl font-bold'>
						{hero.header}
					</h1>
					<p className='md:text-lg'>{hero.description}</p>
					<div className='flex space-x-5'>
						<button className='px-5 py-3 rounded-full font-semibold shadow-md bg-[#9acdf3] text-black hover:bg-[#ff8169]'>
							{hero.buttonText}
						</button>
					</div>
				</motion.div>
				<div className='lg:w-1/2'>
					<motion.img
						src={heroImage}
						alt='onix'
						className=''
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.4,
							ease: 'easeInOut',
						}}
						viewport={{ amount: 0.5 }}
					/>
				</div>
			</div>
		</div>
	)
}

export default Hero
