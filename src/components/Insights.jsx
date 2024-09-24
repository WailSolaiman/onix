import React from 'react'
import { motion } from 'framer-motion'

import bgImage from '../assets/portfolio-left-dec.png'

import { data } from '../constants'

const Insights = () => {
	const { insights } = data

	return (
		<div
			className='w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between 
			space-y-10 md:space-y-0'
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'top 10px right',
			}}>
			<div className='md:w-1/3 space-y-4'>
				<motion.h2
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-2xl font-bold'>
					{insights.title}
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					{insights.quote}
				</motion.p>
				<div className='flex items-center space-x-2'>
					<img
						src={insights.image}
						alt='user'
						className='w-20 h-20 rounded-full border-4 border-[#ff8169]'
					/>
					<div>
						<h1 className='font-bold text-lg'>{insights.name}</h1>
						<p className='text-sm font-bold text-[#ff8169]'>
							{insights.position}
						</p>
					</div>
				</div>
			</div>
			<div className='md:w-1/2 flex flex-col lg:flex-row gap-2 lg:space-x-5 space-y-5 md:space-y-0'>
				{insights.cards.map((item, index) => (
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
						className='w-full p-4 border-4 border-white/50 rounded-xl space-y-4'>
						<div className='flex justify-between'>
							<div className='space-y-2'>
								<img
									src={item.icon}
									alt={item.title}
									width={40}
									height={40}
								/>
								<h1 className='text-xl font-bold'>
									{item.title}
								</h1>
							</div>
							<p>{item.date}</p>
						</div>
						<p className='text-lg leading-loose'>
							{item.description}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default Insights
