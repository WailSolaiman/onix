import React from 'react'
import { motion } from 'framer-motion'

import bgImage from '../assets/tables-left-dec.png'

import { data } from '../constants'

const Testimonials = () => {
	const { testimonials } = data
	const testimonialsVariant = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: 'easeInOut',
			},
		},
	}

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
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='lg:w-1/2 space-y-8 mb-10 m-auto'>
					<h1 className='text-4xl md:text-6xl font-bold text-center text-[#ff8169]'>
						{testimonials.title}
					</h1>
					<p className='text-sm md:text-xl font-semibold text-center'>
						{testimonials.description}
					</p>
				</motion.div>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-10'>
					{testimonials.reviews.map((item, index) => (
						<motion.div
							initial='hidden'
							whileInView='visible'
							variants={testimonialsVariant}
							viewport={{ amount: 0.5 }}
							key={index}
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
									<p className='text-sm text-gray-400'>
										{item.position}
									</p>
								</div>
							</div>
							<p className='text-center text-lg'>
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
