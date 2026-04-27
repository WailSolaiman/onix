import { motion } from 'framer-motion'

import bgImage from '../assets/contact-dec.png'
import statsImage from '../assets/stats.png'

import { data } from '../constants'

const Stats = () => {
	const { stats } = data

	return (
		<section
			id="stats"
			className="relative w-full max-w-full overflow-x-clip bg-[#0a0404] py-20"
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'right',
				backgroundSize: '360px',
			}}
		>
			<div
				className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0404]/60 via-[#0a0404]/85 to-[#0a0404]"
				aria-hidden
			/>

			<div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
				<div className="w-full lg:order-1">
					<motion.h2
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
						viewport={{ amount: 0.4, once: true }}
						className="text-balance font-instrument text-3xl font-normal tracking-tight text-white sm:text-4xl"
					>
						{stats.title}
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
						viewport={{ amount: 0.4, once: true }}
						className="mt-4 text-pretty text-base font-medium text-white/75 sm:text-lg"
					>
						{stats.subtitle}
					</motion.p>

					<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
						{stats.cards.map((item, index) => (
							<motion.div
								key={item.title || index}
								initial={{ opacity: 0, y: 14 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									delay: index * 0.06,
									duration: 0.45,
									ease: [0.22, 1, 0.36, 1],
								}}
								viewport={{ amount: 0.35, once: true }}
								className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1a0a0a]/55 p-5 shadow-[inset_0_1px_0_rgba(224,192,64,0.06)] backdrop-blur-sm transition hover:border-[#c34c26]/30 hover:bg-[#1a0a0a]/70"
							>
								<div
									className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#c34c26]/12 blur-2xl transition group-hover:bg-[#e06020]/18"
									aria-hidden
								/>

								<div className="flex items-center gap-3">
									<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20">
										<img
											src={item.icon}
											alt=""
											className="h-6 w-6"
											loading="lazy"
										/>
									</span>
									<h3 className="text-base font-semibold text-white">
										{item.title}
									</h3>
								</div>

								<p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
									{item.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>

				<div className="w-full lg:order-2">
					<motion.img
						src={statsImage}
						alt="Results illustration"
						initial={{ opacity: 0, y: 14 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.55,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.08,
						}}
						viewport={{ amount: 0.25, once: true }}
						className="mx-auto h-auto w-full max-w-xl select-none object-contain opacity-95 drop-shadow-[0_16px_50px_rgba(0,0,0,0.45)]"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	)
}

export default Stats
