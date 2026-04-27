import { motion } from 'framer-motion'

import bgImage from '../assets/portfolio-left-dec.png'

import { data } from '../constants'

const Insights = () => {
	const { insights } = data

	return (
		<section
			id="insights"
			className="relative w-full max-w-full overflow-x-clip bg-[#0a0404] py-20"
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'right 24px top 16px',
				backgroundSize: '320px',
			}}
		>
			<div
				className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0404]/60 via-[#0a0404]/85 to-[#0a0404]"
				aria-hidden
			/>

			<div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:px-8">
				<div className="w-full lg:max-w-md">
					<motion.h2
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
						viewport={{ amount: 0.4, once: true }}
						className="text-balance font-instrument text-3xl font-normal tracking-tight text-white sm:text-4xl"
					>
						{insights.title}
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
						viewport={{ amount: 0.4, once: true }}
						className="mt-5 text-pretty text-base leading-relaxed text-white/75 sm:text-lg"
					>
						{insights.quote}
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
						viewport={{ amount: 0.4, once: true }}
						className="mt-7 inline-flex w-full items-center gap-3 rounded-2xl border border-[#c34c26]/20 bg-[#1a0a0a]/70 p-3 shadow-[inset_0_1px_0_rgba(224,192,64,0.08)] backdrop-blur-sm sm:rounded-full sm:p-2.5"
					>
						<img
							src={insights.image}
							alt={insights.name}
							className="h-12 w-12 rounded-full border border-[#c34c26]/40 object-cover sm:h-12 sm:w-12"
							loading="lazy"
						/>
						<div className="min-w-0">
							<p className="truncate text-sm font-semibold text-white">
								{insights.name}
							</p>
							<p className="truncate text-sm font-medium text-[#e06020]">
								{insights.position}
							</p>
						</div>
					</motion.div>
				</div>

				<div className="w-full">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						{insights.cards.map((item, index) => (
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
									className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#c34c26]/15 blur-2xl transition group-hover:bg-[#e06020]/20"
									aria-hidden
								/>
								<div className="flex items-start justify-between gap-4">
									<div className="min-w-0">
										<div className="flex items-center gap-3">
											<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20">
												<img
													src={item.icon}
													alt=""
													className="h-6 w-6"
													loading="lazy"
												/>
											</span>
											<div className="min-w-0">
												<p className="text-sm font-semibold text-[#e06020]">
													{item.field}
												</p>
												<h3 className="truncate text-lg font-semibold text-white">
													{item.title}
												</h3>
											</div>
										</div>
									</div>
								</div>

								<p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
									{item.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Insights
