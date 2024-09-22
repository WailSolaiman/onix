import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
	const testimonialsData = [
		{
			image: 'https://picsum.photos/id/43/500/500',
			name: 'John Doe',
			position: 'Founder',
			feedback:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
		},
		{
			image: 'https://picsum.photos/id/47/500/500',
			name: 'John Doe',
			position: 'Developer',
			feedback:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
		},
		{
			image: 'https://picsum.photos/id/22/500/500',
			name: 'John Doe',
			position: 'Crative Lead',
			feedback:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
		},
	]

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
		<div className='py-20 bg-white'>
			<div className='w-4/5 m-auto space-y-8'>
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='space-y-5'>
					<h1 className='text-4xl md:text-6xl font-bold text-center text-[#ff8169]'>
						Client Reviews
					</h1>
					<p className='text-sm md:text-xl font-semibold text-center'>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Voluptatibus veritatis excepturi minus.
					</p>
				</motion.div>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-10'>
					{testimonialsData.map((item, index) => (
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
