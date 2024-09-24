import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa6'

import bgImage from '../assets/videos-right-dec.png'

import { data } from '../constants'

const Pricing = () => {
	const { pricing } = data

	return (
		<div
			className='py-20 bg-white border-y-2 border-[#ff8169]'
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: 'repeat',
				backgroundPosition: 'left',
			}}>
			<div
				className='w-4/5 m-auto flex flex-col 
		justify-between items-center space-y-10 lg:space-y-0'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					viewport={{ amount: 0.5, once: true }}
					className='lg:w-1/2 space-y-8 m-auto mb-8'>
					<h1 className='text-5xl md:text-7xl font-bold text-center'>
						{pricing.title}
					</h1>
					<p className='text-lg md:text-xl font-semibold text-center'>
						{pricing.description}
					</p>
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
					{pricing.list.map((item, index) => (
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
								<div className='flex flex-col justify-center items-center space-x-2'>
									<span className='text-4xl font-extrabold text-gray-900'>
										${item.price}
									</span>
									<span className='text-sm text-gray-500'>
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
											<h3 className='ml-2 text-gray-700 font-semibold'>
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
