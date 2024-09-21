import React from 'react'
import { motion } from 'framer-motion'

const Pricing = () => {
	const imageVariant = {
		hidden: { opacity: 0, x: 80 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: 'easeInOut',
			},
		},
	}

	return (
		<div
			className='py-20 w-4/5 m-auto flex flex-col lg:flex-row 
		justify-between items-center space-y-10 lg:space-y-0'>
			<motion.div
				initial={{ opacity: 0, x: -80 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				className='lg:w-1/2 space-y-8'>
				<h1 className='text-4xl md:text-6xl font-bold'>
					Maximize Your Efficiency with EPIC Inc.
				</h1>
				<h3 className='text-3xl md:text-4xl font-bold'>$49</h3>
				<p>
					{' '}
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Consequuntur.
				</p>
			</motion.div>
			<div className='w-full lg:w-1/3'>
				<motion.img
					initial='hidden'
					whileInView='visible'
					variants={imageVariant}
					viewport={{ amount: 0.5 }}
					src='https://picsum.photos/id/44/600/650'
					alt=''
					className='w-full'
				/>
			</div>
		</div>
	)
}

export default Pricing
