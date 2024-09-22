import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
	const footerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: 'easeInOut',
			},
		},
	}

	return (
		<motion.footer
			initial='hidden'
			whileInView='visible'
			variants={footerVariants}
			viewport={{ amount: 0.5 }}
			className='py-20'>
			<div className='w-4/5 m-auto grid md:grid-cols-4 gap-6 px-4'>
				<div>
					<h2 className='text-xl font-bold mb-2'>About Us</h2>
					<p className='text-gray-400'>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Similique tempore qui libero, incidunt quae vel?
					</p>
				</div>
				<div>
					<h2 className='text-xl font-bold mb-2'>Customer Service</h2>
					<ul>
						<li>
							<a
								href='#'
								className='text-gray-400 hover:text-violet-800'>
								Contact Us
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-gray-400 hover:text-violet-800'>
								FAQs
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-gray-400 hover:text-violet-800'>
								Privacy Policy
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 className='text-xl font-bold mb-2'>Follow Us</h2>
					<ul>
						<li>
							<a
								href='#'
								className='text-gray-400 hover:text-violet-800'>
								Facebook
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-gray-400 hover:text-violet-800'>
								YouTube
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-gray-400 hover:text-violet-800'>
								Instagram
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 className='text-xl font-bold mb-2'>News Letter</h2>
					<p>Enter your email to get the latest news and updates</p>
					<form className='mt-4'>
						<input
							type='email'
							placeholder='your email address'
							className='p-2 w-full rounded-md text-gray-600 shadow-lg'
						/>
						<button className='mt-2 w-full p-2 bg-stone-800 rounded-md font-semibold text-white'>
							Subscribe
						</button>
					</form>
				</div>
			</div>
			<div>
				<p className='text-center text-gray-500 mt-20 pt-6 text-sm border-t-2'>
					&copy; {new Date().getFullYear()} BetaTech. All rights
					reserved.
				</p>
			</div>
		</motion.footer>
	)
}

export default Footer
