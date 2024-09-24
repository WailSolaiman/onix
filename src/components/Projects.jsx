import React from 'react'
import { motion } from 'framer-motion'

import { data } from '../constants'

const Projects = () => {
	const { portfolio } = data

	return (
		<div id='projects' className='py-20'>
			<div className='w-4/5 m-auto space-y-8'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					viewport={{ amount: 0.5, once: true }}
					className='xl:w-1/2 space-y-8 m-auto'>
					<h1 className='text-5xl md:text-7xl font-bold text-center'>
						{portfolio.title}
					</h1>
					<p className='text-lg md:text-xl font-semibold text-center'>
						{portfolio.description}
					</p>
				</motion.div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					{portfolio.projects.map((item, index) => (
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
							className='flex flex-col items-center'>
							<div className='block w-full'>
								<img src={item.image} alt={item.name} />
							</div>
							<div className='text-center bg-white w-full -mt-4 p-6 shadow-lg rounded-lg rounded-tr-none rounded-tl-none'>
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
