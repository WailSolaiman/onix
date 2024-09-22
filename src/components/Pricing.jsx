import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa6'

import bgImage from '../assets/videos-right-dec.png'

import { data } from '../constants'

const Pricing = () => {
	const { pricing } = data
	const cardVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: (i = 1.5) => ({
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
			className='py-20 bg-white border-y-2 border-[#ff8169]'
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: 'repeat',
				backgroundPosition: 'center',
			}}>
			<div
				className='w-4/5 m-auto flex flex-col 
		justify-between items-center space-y-10 lg:space-y-0'>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='lg:w-1/2 space-y-8 mb-10'>
					<h1 className='text-4xl md:text-6xl font-bold text-center'>
						{pricing.title}
					</h1>
					<p className='text-sm md:text-xl font-semibold text-center'>
						{pricing.description}
					</p>
				</motion.div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{pricing.list.map((item, index) => (
						<motion.div
							key={index}
							initial='hidden'
							whileInView='visible'
							viewport={{ amount: 0.5 }}
							variants={cardVariants}
							className={`bg-cover bg-center h-full shadow-xl rounded-sm p-8 hover:shadow-2xl 
						transition-shadow duration-300`}
							style={{
								backgroundImage: `url(${item.bgImage})`,
							}}>
							<div className='relative block'>
								<div className='text-center mb-4'>
									<div className='text-sm text-[#9acdf3] font-bold'>
										{item.value}
									</div>
								</div>
								<div className='flex items-center justify-center mb-4'>
									<h2 className='text-3xl md:text-4xl font-bold text-gray-800'>
										{item.title}
									</h2>
								</div>
								<div className='flex justify-center items-baseline space-x-2'>
									<span className='text-4xl font-extrabold text-gray-900'>
										${item.price}
									</span>
									<span className='text-lg text-gray-500'>
										{item.billing}
									</span>
								</div>

								<div className='mt-3 text-center text-gray-600'>
									{item.description}
								</div>
							</div>

							<div className='my-6'>
								<a
									href={item.href}
									className='inline-block w-full text-center bg-[#9acdf3] 
								text-white py-3 rounded-md hover:bg-[#ff8169] transition-colors'>
									{item.buttonText}
								</a>
							</div>

							<hr className='w-3/4 mx-auto mb-6 border-t border-gray-200' />

							<div className='flex justify-center'>
								<div className='space-y-2'>
									{item.benefitList.map((benefit, index) => (
										<span
											key={index}
											className='flex items-center'>
											<FaCheck className='text-[#9acdf3]' />
											<h3 className='ml-2 text-gray-700'>
												{benefit}
											</h3>
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Pricing
