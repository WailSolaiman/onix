import React from 'react'
import { motion } from 'framer-motion'
import { FaChartLine } from 'react-icons/fa'

import service3Image from '../assets/service-icon-03.png'
import service4Image from '../assets/service-icon-04.png'

import statsImage from '../assets/stats.png'

const Stats = () => {
	const imageVariant = {
		hidden: { opacity: 0, x: -80 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				delsay: 0.2,
				duration: 0.8,
				ease: 'easeInOut',
			},
		},
	}

	const cardVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: (i = 1.5) => ({
			opacity: 1,
			scale: 1,
			transition: {
				delay: i * 0.2,
				duration: i * 0.5,
				ease: 'easeInOut',
			},
		}),
	}

	return (
		<div className='py-14 bg-white'>
			<div
				className='w-4/5 max-w-screen-2xl m-auto flex flex-col lg:flex-row 
			item-center justify-between space-y-10 lg:space-y-0'>
				<div className='md:w-[70%] m-auto'>
					<motion.img
						src={statsImage}
						alt='stats'
						initial='hidden'
						whileInView='visible'
						variants={imageVariant}
						viewport={{ amount: 0.5 }}
					/>
				</div>
				<div className='lg:w-[55%] space-y-8'>
					<h1 className='text-4xl md:text-6xl font-bold text-[#ff8169]'>
						Over 30.000
					</h1>
					<p className='md:text-2xl font-bold'> Lorem ipsum dolor.</p>
					<div className='flex flex-col md:flex-row lg:flex-col justify-between gap-4'>
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ amount: 0.5 }}
							variants={cardVariants}
							className='space-y-5 shadow-md p-5 mb-5 md:mb-0 rounded-lg'>
							<div className='flex items-center space-x-2'>
								<span className='p-3'>
									<img
										src={service3Image}
										alt='service'
										width={40}
										height={40}
									/>
								</span>
								<h1 className='font-semibold'>
									Data Validation
								</h1>
							</div>
							<p>
								{' '}
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit.
							</p>
						</motion.div>
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ amount: 0.5 }}
							variants={cardVariants}
							className='space-y-5 shadow-md p-5 mb-5 md:mb-0 rounded-lg'>
							<div className='flex items-center space-x-2'>
								<span className='p-3'>
									<img
										src={service4Image}
										alt='service'
										width={40}
										height={40}
									/>
								</span>
								<h1 className='font-semibold'>
									Data Validation
								</h1>
							</div>
							<p>
								{' '}
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit.
							</p>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Stats
