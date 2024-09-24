import React from 'react'
import { motion } from 'framer-motion'

import bgImage from '../assets/tables-left-dec.png'

import { data } from '../constants'

const Testimonials = () => {
	const { testimonials } = data

	return (
		<div
			className='py-20'
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'left',
			}}>
			<div className='w-4/5 m-auto space-y-8'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					viewport={{ amount: 0.5, once: true }}
					className='lg:w-1/2 space-y-8 m-auto'>
					<h1 className='text-5xl font-bold text-center text-[#ff8169]'>
						{testimonials.title}
					</h1>
					<p className='text-lg md:text-xl font-semibold text-center'>
						{testimonials.description}
					</p>
				</motion.div>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
					{testimonials.reviews.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{
								delay: index * 0.2,
								duration: 0.5,
								ease: 'easeInOut',
							}}
							viewport={{ amount: 0.5, once: true }}
							className='p-5 space-y-5 border shadow-lg rounded-lg flex flex-col items-center'>
							<div className='flex items-center space-x-2'>
								<img
									src={item.image}
									alt={item.name}
									className='w-16 h-16 rounded-full border-2'
								/>
								<div>
									<h1 className='font-bold text-lg'>
										{item.name}
									</h1>
									<p className='text-sm text-[#ff8169] font-bold'>
										{item.position}
									</p>
								</div>
							</div>
							<p className='text-center text-md'>
								{item.feedback}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Testimonials
