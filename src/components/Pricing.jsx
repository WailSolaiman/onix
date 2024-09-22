import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa6'

const pricingList = [
	{
		title: 'Free',
		popular: 0,
		price: 0,
		description:
			'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
		buttonText: 'Get Started',
		benefitList: [
			'1 Team member',
			'2 GB Storage',
			'Upto 4 pages',
			'Community support',
			'lorem ipsum dolor',
		],
		href: '#',
		billing: '/month',
	},
	{
		title: 'Premium',
		popular: 1,
		price: 10,
		description:
			'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
		buttonText: 'Buy Now',
		benefitList: [
			'4 Team member',
			'4 GB Storage',
			'Upto 6 pages',
			'Priority support',
			'lorem ipsum dolor',
		],
		href: '#',
		billing: '/month',
	},
	{
		title: 'Enterprise',
		popular: 0,
		price: 99,
		description:
			'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
		buttonText: 'Buy Now',
		benefitList: [
			'10 Team member',
			'8 GB Storage',
			'Upto 10 pages',
			'Priority support',
			'lorem ipsum dolor',
		],
		href: '#',
		billing: '/year',
	},
]

const Pricing = () => {
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
			className='py-20 w-4/5 m-auto flex flex-col 
		justify-between items-center space-y-10 lg:space-y-0'>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='lg:w-1/2 space-y-8 mb-10'>
				<h1 className='text-4xl md:text-6xl font-bold text-center'>
					Pricing
				</h1>
				<p className='text-sm md:text-xl font-semibold text-center'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Voluptatibus veritatis excepturi minus.
				</p>
			</motion.div>

			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{pricingList.map((pricing) => (
					<motion.div
						key={pricing.title}
						initial='hidden'
						whileInView='visible'
						viewport={{ amount: 0.5 }}
						variants={cardVariants}
						className='shadow-xl rounded-lg bg-white p-8 hover:shadow-2xl 
						transition-shadow duration-300'>
						<div className='block'>
							<div className='flex items-center justify-between mb-4'>
								<h2 className='text-lg font-semibold text-gray-800'>
									{pricing.title}
								</h2>
								{pricing.popular ? (
									<div
										variant='secondary'
										className='text-sm text-red-500 font-bold underline'>
										most popular
									</div>
								) : (
									''
								)}
							</div>
							<div className='flex items-baseline space-x-2'>
								<span className='text-4xl font-extrabold text-gray-900'>
									${pricing.price}
								</span>
								<span className='text-lg text-gray-500'>
									{pricing.billing}
								</span>
							</div>

							<div className='mt-3 text-gray-600'>
								{pricing.description}
							</div>
						</div>

						<div className='my-6'>
							<a
								href={pricing.href}
								className='inline-block w-full text-center bg-red-500 
								text-white py-3 rounded-md hover:bg-red-600 transition-colors'>
								{pricing.buttonText}
							</a>
						</div>

						<hr className='w-3/4 mx-auto mb-6 border-t border-gray-200' />

						<div className='flex justify-center'>
							<div className='space-y-2'>
								{pricing.benefitList.map((benefit) => (
									<span
										key={benefit}
										className='flex items-center'>
										<FaCheck className='text-red-500' />
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
	)
}

export default Pricing
