import React from 'react'
import { motion } from 'framer-motion'

import service1Image from '../assets/service-icon-01.png'
import service2Image from '../assets/service-icon-02.png'
import bgImage from '../assets/portfolio-left-dec.png'

const Insights = () => {
	const data = [
		{
			title: 'title',
			date: 'July 2023',
			icon: service1Image,
			description: 'bla bla',
		},
		{
			title: 'title2',
			date: 'July 2024',
			icon: service2Image,
			description: 'bla bla bla',
		},
	]

	const cardVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: (i = 1) => ({
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
						className='w-20 h-20 rounded-full border-4 border-[#ff8169]'
					/>
					<div>
						<h1 className='font-bold text-lg'>Lorem, ipsum.</h1>
						<p className='text-sm text-[#ff8169]'>
							Lorem, ipsum dolor.
						</p>
					</div>
				</div>
			</div>
			<div className='md:w-1/2 flex flex-col lg:flex-row gap-2 lg:space-x-5 space-y-5 md:space-y-0'>
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
