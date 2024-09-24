import React from 'react'
import { motion } from 'framer-motion'

import bgImage from '../assets/portfolio-left-dec.png'

const Contact = () => {
	const containerVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				duration: 0.8,
			},
		},
	}

	const containerVariant2 = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				duration: 0.8,
				delay: 0.5,
			},
		},
	}

	const itemVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.6, ease: 'easeInOut' },
		},
	}

	return (
		<div
			className='py-20 bg-gray-100'
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'left top',
			}}>
			<div
				className='w-4/5 max-w-screen-2xl mx-auto flex flex-col md:flex-row 
            justify-between items-start space-y-10 md:space-y-0 md:space-x-10'>
				{/* Left Section - General Info */}
				<motion.div
					className='md:w-[45%] space-y-6'
					variants={containerVariant}
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.5 }}>
					<motion.h2
						className='text-4xl md:text-6xl font-bold text-red-500'
						variants={itemVariant}>
						Get In Touch
					</motion.h2>
					<motion.p
						className='text-lg text-gray-700'
						variants={itemVariant}>
						We're here to help you with all your web design, UI/UX,
						SEO, and development needs. Reach out to us with any
						inquiries, and our team will respond promptly.
					</motion.p>
					<motion.div
						className='space-y-4'
						variants={containerVariant2}
						initial='hidden'
						whileInView='visible'>
						<motion.div variants={itemVariant}>
							<h3 className='font-bold'>Phone:</h3>
							<p className='text-black text-3xl font-light'>
								+123-456-7890
							</p>
						</motion.div>
						<motion.div variants={itemVariant}>
							<h3 className='font-bold'>Email:</h3>
							<p className='text-black text-3xl font-light'>
								info@onixdigital.com
							</p>
						</motion.div>
						<motion.div variants={itemVariant}>
							<h3 className='font-bold'>Location:</h3>
							<p className='text-black text-3xl font-light'>
								123 Main St, New York, NY 10001
							</p>
						</motion.div>
					</motion.div>
				</motion.div>

				{/* Right Section - Contact Form */}
				<motion.div
					className='w-full md:w-[50%] bg-white p-8 shadow-lg rounded-lg'
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.2, ease: 'easeInOut' }}
					viewport={{ amount: 0.5 }}>
					<h2 className='text-2xl font-bold mb-6 text-gray-800'>
						Send Us a Message
					</h2>
					<form className='space-y-6'>
						<div>
							<label
								className='block mb-2 text-sm font-semibold text-gray-700'
								htmlFor='name'>
								Name*
							</label>
							<input
								type='text'
								id='name'
								required
								className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500'
								placeholder='Your Name'
							/>
						</div>
						<div>
							<label
								className='block mb-2 text-sm font-semibold text-gray-700'
								htmlFor='email'>
								Email*
							</label>
							<input
								type='email'
								id='email'
								required
								className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500'
								placeholder='Your Email'
							/>
						</div>
						<div>
							<label
								className='block mb-2 text-sm font-semibold text-gray-700'
								htmlFor='message'>
								Message*
							</label>
							<textarea
								id='message'
								rows='5'
								required
								className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500'
								placeholder='Your Message'></textarea>
						</div>
						<motion.button
							type='submit'
							className='w-full py-3 text-center bg-[#ff8169] text-white font-semibold
                            rounded-md hover:bg-[#9acdf3] hover:text-black transition duration-300'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							Send Message
						</motion.button>
					</form>
				</motion.div>
			</div>
		</div>
	)
}

export default Contact
