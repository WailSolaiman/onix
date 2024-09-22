import React from 'react'
import { motion } from 'framer-motion'

import { data } from '../constants'

const Projects = () => {
	const { portfolio } = data
	const cardVariants = {
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
		<div className='py-20'>
			<div className='w-4/5 m-auto space-y-8'>
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='lg:w-1/2 space-y-8 mb-10 m-auto'>
					<h1 className='text-4xl md:text-6xl font-bold text-center'>
						{portfolio.title}
					</h1>
					<p className='text-sm md:text-xl font-semibold text-center'>
						{portfolio.description}
					</p>
				</motion.div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-10'>
					{portfolio.projects.map((item, index) => (
						<motion.div
							initial='hidden'
							whileInView='visible'
							variants={cardVariants}
							key={index}
							className='p-5 flex flex-col items-center'>
							<div className='block'>
								<img src={item.image} alt={item.name} />
							</div>
							<div className='text-center bg-white -mt-4 p-6 shadow-lg rounded-lg rounded-tr-none rounded-tl-none'>
								<h1 className='font-bold text-lg'>
									{item.name}
								</h1>
								<p className='text-sm font-bold text-[#ff8169] mb-4'>
									{item.position}
								</p>
								<p className='text-lg'>{item.feedback}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Projects
