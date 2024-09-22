import React from 'react'
import { motion } from 'framer-motion'

import portfolio1Image from '../assets/video-big-thumb-01.png'
import portfolio2Image from '../assets/video-big-thumb-02.png'
import portfolio3Image from '../assets/video-big-thumb-03.png'
import portfolio4Image from '../assets/video-big-thumb-04.png'

const projectsData = [
	{
		image: portfolio1Image,
		name: 'John Doe',
		position: 'Founder',
		feedback:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
	},
	{
		image: portfolio2Image,
		name: 'John Doe',
		position: 'Developer',
		feedback:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
	},
	{
		image: portfolio3Image,
		name: 'John Doe',
		position: 'Crative Lead',
		feedback:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
	},
	{
		image: portfolio4Image,
		name: 'John Doe',
		position: 'Crative Lead',
		feedback:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
	},
]

const Projects = () => {
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
						Portfolio
					</h1>
					<p className='text-sm md:text-xl font-semibold text-center'>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Voluptatibus veritatis excepturi minus.
					</p>
				</motion.div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-10'>
					{projectsData.map((item, index) => (
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
