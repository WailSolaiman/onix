import React from 'react'
import { motion } from 'framer-motion'
import { SiDatabricks, SiFloatplane } from 'react-icons/si'

const Insights = () => {
	const data = [
		{
			title: 'title',
			date: 'July 2023',
			icon: SiDatabricks,
			description: 'bla bla',
		},
		{
			title: 'title2',
			date: 'July 2024',
			icon: SiFloatplane,
			description: 'bla bla bla',
		},
	]

	const cardVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: (i) => ({
			opacity: 1,
			scale: 1,
			transition: {
				delay: i * 0.2,
				duration: 0.5,
				ease: 'easeInOut',
			},
		}),
	}

	return (
		<div
			className='w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between 
			space-y-10 md:space-y-0'>
			<div className='md:w-1/3 space-y-4'>
				<motion.h2
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-2xl font-bold'>
					Lorem, ipsum dolor.
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Asperiores molestiae facilis odit. Lorem ipsum dolor, sit
					amet consectetur adipisicing elit. facilis odit.
				</motion.p>
				<div className='flex items-center space-x-2'>
					<img
						src='https://randomuser.me/api/portraits/women/2.jpg'
						alt='user'
						className='w-12 h-12 rounded-full border-4'
					/>
					<div>
						<h1 className='font-bold text-lg'>Lorem, ipsum.</h1>
						<p className='text-sm text-gray-400'>
							Lorem, ipsum dolor.
						</p>
					</div>
				</div>
			</div>
			<div className='md:w-1/2 flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0'>
				{data.map((item, index) => (
					<motion.div
						key={index}
						initial='hidden'
						whileInView='visible'
						viewport={{ amount: 0.5 }}
						variants={cardVariants}
						className='w-full p-4 border-4 border-white/50 rounded-xl space-y-4'>
						<div className='flex justify-between'>
							<div className='space-y-2'>
								<button className='p-3 rounded-full bg-violet-300 text-violet-800'>
									{item.icon()}
								</button>
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
