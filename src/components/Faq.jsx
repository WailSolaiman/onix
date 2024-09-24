import React, { useState } from 'react'
import { motion } from 'framer-motion'

import bgImage from '../assets/videos-left-dec.png'

import { data } from '../constants'

const Faq = () => {
	const [openFaq, setOpenFaq] = useState(0)
	const { faq } = data

	const toggleFaq = (index) => {
		setOpenFaq(openFaq === index ? null : index)
	}

	return (
		<div
			id='faqs'
			className='py-14 bg-white'
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'left',
				backgroundSize: '',
			}}>
			<div className='w-4/5 m-auto p-4'>
				<h1 className='text-3xl font-bold mb-6 text-center lg:text-left'>
					{faq.title}
				</h1>
				{faq.list.map((item, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							delay: index * 0.1,
							duration: 0.5,
							ease: 'easeInOut',
						}}
						viewport={{ amount: 0.1 }}
						className='mb-4 shadow-lg'>
						<div
							onClick={() => toggleFaq(index)}
							className='flex justify-between items-center bg-white/50 px-4 py-3 rounded-lg cursor-pointer'>
							<h2 className='text-lg font-medium text-gray-700'>
								{item.question}
							</h2>
							<span className='text-xl text-gray-500'>
								{openFaq === index ? '-' : '+'}
							</span>
						</div>
						<div
							className={`overflow-hidden transition-all duration-300 ${
								openFaq === index ? 'max-h-40' : 'max-h-0'
							}`}>
							<p className='p-4 text-gray-400'>{item.answer}</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default Faq
