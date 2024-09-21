import React from 'react'
import { motion } from 'framer-motion'
import { IoPlay } from 'react-icons/io5'

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
			className='w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between 
		items-center space-y-10 md:space-y-0'>
			<div className='md:w-1/2 space-y-6'>
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
					<button className='px-5 py-3 rounded-full font-semibold bg-black text-white'>
						Book
					</button>
					<button className='flex space-x-4 items-center border rounded-full px-4 shadow-md'>
						<span
							className='w-8 h-8 flex justify-center items-center bg-black 
						text-white rounded-full'>
							<IoPlay />
						</span>
						<span>Watch Video</span>
					</button>
				</div>
			</div>
			<div className='w-full md:w-1/3'>
				<motion.img
					src='https://picsum.photos/id/43/900/900'
					alt='beta'
					className='w-full'
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
