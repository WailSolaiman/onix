import React from 'react'
import { motion } from 'framer-motion'

import bgImage from '../assets/contact-dec.png'
import statsImage from '../assets/stats.png'

import { data } from '../constants'

const Stats = () => {
	const { stats } = data

	return (
		<div
			className='py-20 bg-white'
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'right',
			}}>
			<div
				className='w-4/5 max-w-screen-2xl m-auto flex flex-col lg:flex-row 
			item-center justify-between space-y-10 lg:space-y-0'>
				<div className='hidden xl:block xl:w-[50%] m-auto'>
					<motion.img
						src={statsImage}
						alt='stats'
						initial={{ opacity: 0, x: -80 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							delay: 0.5,
							duration: 0.5,
							ease: 'easeInOut',
						}}
						viewport={{ amount: 0.5, once: true }}
					/>
				</div>
				<div className='xl:w-[50%] space-y-8'>
					<h1 className='text-5xl font-bold text-[#ff8169]'>
						{stats.title}
					</h1>
					<p className='md:text-2xl font-bold'>{stats.subtitle}</p>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{stats.cards.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{
									delay: index * 0.2,
									duration: 0.5,
									ease: 'easeInOut',
								}}
								viewport={{ amount: 0.5 }}
								className='space-y-5 shadow-md p-5 mb-5 md:mb-0 rounded-lg'>
								<div className='flex items-center space-x-2'>
									<span className='p-3'>
										<img
											src={item.icon}
											alt='service'
											width={40}
											height={40}
										/>
									</span>
									<h1 className='font-semibold'>
										{item.title}
									</h1>
								</div>
								<p> {item.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Stats
