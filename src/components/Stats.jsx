import React from 'react'
import { motion } from 'framer-motion'
import { FaChartLine } from 'react-icons/fa'

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
		<div className='py-20 bg-white'>
			<div
				className='w-4/5 m-auto flex flex-col lg:flex-row 
			item-center justify-between space-y-10 lg:space-y-0'>
				<div className='w-full md:w-[40%]'>
					<motion.img
						src='https://picsum.photos/id/64/3000/3000'
						alt='stats'
						initial='hidden'
						whileInView='visible'
						variants={imageVariant}
						viewport={{ amount: 0.5 }}
					/>
				</div>
				<div className='lg:w-[55%] space-y-8'>
					<h1 className='text-4xl md:text-6xl font-bold'>
						Over 30.000
					</h1>
					<p className='md:text-2xl font-bold'>
						{' '}
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laudantium veniam maxime eos suscipit odio.
					</p>
					<div className='flex flex-wrap lg:flex-nowrap justify-between gap-4'>
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ amount: 0.5 }}
							variants={cardVariants}
							className='space-y-5 shadow-md p-5 mb-5 md:mb-0 rounded-lg'>
							<div className='flex items-center space-x-2'>
								<span className='p-3 rounded-full bg-violet-300 text-violet-800'>
									<FaChartLine />
								</span>
								<h1 className='font-semibold'>
									Data Validation
								</h1>
							</div>
							<p>
								{' '}
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Laudantium veniam maxime eos
								suscipit odio.
							</p>
						</motion.div>
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ amount: 0.5 }}
							variants={cardVariants}
							className='space-y-5 shadow-md p-5 mb-5 md:mb-0 rounded-lg'>
							<div className='flex items-center space-x-2'>
								<span className='p-3 rounded-full bg-violet-300 text-violet-800'>
									<FaChartLine />
								</span>
								<h1 className='font-semibold'>
									Data Validation
								</h1>
							</div>
							<p>
								{' '}
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Laudantium veniam maxime eos
								suscipit odio.
							</p>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Stats
