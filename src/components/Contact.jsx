import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import bgImage from '../assets/portfolio-left-dec.png'

function useIsMd() {
	const [isMd, setIsMd] = useState(
		() => (typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : false)
	)
	useEffect(() => {
		const mq = window.matchMedia('(min-width: 768px)')
		const update = () => setIsMd(mq.matches)
		update()
		mq.addEventListener('change', update)
		return () => mq.removeEventListener('change', update)
	}, [])
	return isMd
}

const Contact = () => {
	const isMd = useIsMd()
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
		<section
			id='contact'
			className='relative w-full max-w-full overflow-x-clip bg-[#0a0404] py-20'
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'left top',
				backgroundSize: '360px',
			}}>
			<div
				className='pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0404] via-[#0a0404]/85 to-[#0a0404]'
				aria-hidden
			/>
			<div
				className='relative mx-auto flex w-full min-w-0 max-w-7xl flex-col items-start justify-between gap-10 px-4 sm:px-6 md:flex-row md:gap-0 md:space-x-10 md:px-8 lg:px-8'>
				{/* Left Section - General Info */}
				<motion.div
					className='min-w-0 md:w-[45%] space-y-6'
					variants={containerVariant}
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.5 }}>
					<motion.h2
						className='text-balance font-instrument text-3xl font-normal tracking-tight text-white sm:text-4xl'
						variants={itemVariant}>
						Get In Touch
					</motion.h2>
					<motion.p
						className='text-pretty text-base leading-relaxed text-white/75 sm:text-lg'
						variants={itemVariant}>
						We are here to help you with all your web design, UI/UX,
						SEO, and development needs. Reach out to us with any
						inquiries, and our team will respond promptly.
					</motion.p>
					<motion.div
						className='space-y-4'
						variants={containerVariant2}
						initial='hidden'
						whileInView='visible'>
						<motion.div variants={itemVariant}>
							<h3 className='text-sm font-semibold uppercase tracking-wider text-white/60'>
								Phone
							</h3>
							<p className='text-xl font-semibold text-white sm:text-2xl'>
								+123-456-7890
							</p>
						</motion.div>
						<motion.div variants={itemVariant}>
							<h3 className='text-sm font-semibold uppercase tracking-wider text-white/60'>
								Email
							</h3>
							<p className='text-xl font-semibold text-white sm:text-2xl'>
								info@onixdigital.com
							</p>
						</motion.div>
						<motion.div variants={itemVariant}>
							<h3 className='text-sm font-semibold uppercase tracking-wider text-white/60'>
								Location
							</h3>
							<p className='text-xl font-semibold text-white sm:text-2xl'>
								123 Main St, New York, NY 10001
							</p>
						</motion.div>
					</motion.div>
				</motion.div>

				{/* Right Section - Contact Form */}
				<motion.div
					className='w-full min-w-0 max-w-full box-border rounded-2xl border border-white/10 bg-[#1a0a0a]/55 p-6 shadow-[inset_0_1px_0_rgba(224,192,64,0.06)] backdrop-blur-sm sm:p-8 md:w-[50%]'
					initial={
						isMd
							? { opacity: 0, x: 80 }
							: { opacity: 0, y: 24 }
					}
					whileInView={{ opacity: 1, x: 0, y: 0 }}
					transition={{ duration: 0.25, ease: 'easeInOut' }}
					viewport={{ amount: 0.3, margin: '0px 0px -40px 0px' }}>
					<h2 className='mb-6 text-2xl font-semibold text-white'>
						Send Us a Message
					</h2>
					<form className='space-y-6'>
						<div>
							<label
								className='mb-2 block text-sm font-semibold text-white/75'
								htmlFor='name'>
								Name*
							</label>
							<input
								type='text'
								id='name'
								required
								className='w-full rounded-xl border border-white/10 bg-black/20 p-3 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[#e08020]'
								placeholder='Your Name'
							/>
						</div>
						<div>
							<label
								className='mb-2 block text-sm font-semibold text-white/75'
								htmlFor='email'>
								Email*
							</label>
							<input
								type='email'
								id='email'
								required
								className='w-full rounded-xl border border-white/10 bg-black/20 p-3 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[#e08020]'
								placeholder='Your Email'
							/>
						</div>
						<div>
							<label
								className='mb-2 block text-sm font-semibold text-white/75'
								htmlFor='message'>
								Message*
							</label>
							<textarea
								id='message'
								rows='5'
								required
								className='w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[#e08020]'
								placeholder='Your Message'></textarea>
						</div>
						<motion.button
							type='submit'
							className='w-full rounded-full bg-gradient-to-r from-[#c34c26] via-[#d45528] to-[#e06020] py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[#c34c26]/25 transition hover:from-[#d45528] hover:to-[#e66d2e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e08020]'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							Send Message
						</motion.button>
					</form>
				</motion.div>
			</div>
		</section>
	)
}

export default Contact
