import React from 'react'
import { motion } from 'framer-motion'

import heroImage from '../assets/hero.png'

const Hero = () => {
	const textVariant = {
		hidden: { opacity: 0, x: -100 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.2,
				ease: 'easeInOut',
			},
		},
	}

	const imageVariant = {
		hidden: { opacity: 0, x: 50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.4,
				ease: 'easeInOut',
			},
		},
	}

	return (
		<div
			className='w-4/5 m-auto mt-20 flex flex-col lg:flex-row justify-between 
		items-center space-y-10 md:space-y-0'>
			<div className='lg:w-1/2 space-y-6 my-10'>
				<motion.p
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.5 }}
					variants={textVariant}>
					Lorem ipsum dolor
				</motion.p>
				<motion.h1
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.5 }}
					variants={textVariant}
					className='text-5xl md:text-7xl font-bold'>
					Lorem ipsum dolor sit
				</motion.h1>
				<motion.p
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.5 }}
					variants={textVariant}
					className='md:text-lg'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Aliquam magni earum deserunt, repellat cumque officia
				</motion.p>
				<div className='flex space-x-5'>
					<button className='px-5 py-3 rounded-full font-semibold shadow-md bg-[#9acdf3] text-black hover:bg-[#ff8169]'>
						Get Started
					</button>
				</div>
			</div>
			<div className='lg:w-1/2'>
				<motion.img
					src={heroImage}
					alt='beta'
					className=''
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.5 }}
					variants={imageVariant}
				/>
			</div>
		</div>
	)
}

export default Hero
