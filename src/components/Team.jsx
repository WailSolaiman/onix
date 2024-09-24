import React from 'react'
import { motion } from 'framer-motion'

import bgImage from '../assets/portfolio-left-dec.png'

import { data } from '../constants'

const Team = () => {
	const { team } = data

	return (
		<div
			className='py-20 bg-white'
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'right top',
			}}>
			<div className='w-4/5 m-auto space-y-8'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					viewport={{ amount: 0.5, once: true }}
					className='lg:w-1/2 space-y-8 m-auto'>
					<h1 className='text-5xl md:text-7xl font-bold text-center'>
						{team.title}
					</h1>
					<p className='text-lg md:text-xl font-semibold text-center'>
						{team.description}
					</p>
				</motion.div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
					{team.members.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{
								delay: index * 0.2,
								duration: 0.5,
								ease: 'easeInOut',
							}}
							viewport={{ amount: 0.1, once: true }}
							className='flex flex-col items-center'>
							<div className='block w-full'>
								<img
									src={item.image}
									alt={item.name}
									className='w-full'
								/>
							</div>
							<div className='text-center bg-white w-full -mt-4 p-6 shadow-lg rounded-lg rounded-tr-none rounded-tl-none'>
								<h1 className='font-bold text-lg'>
									{item.name}
								</h1>
								<p className='text-sm font-bold text-[#ff8169] mb-4'>
									{item.position}
								</p>
								<p className='text-sm'>{item.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Team
