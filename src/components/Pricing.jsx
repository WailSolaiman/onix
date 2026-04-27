import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa6'

import bgImage from '../assets/videos-right-dec.png'

import { data } from '../constants'

const Pricing = () => {
	const { pricing } = data

	return (
		<section
			id="pricing"
			className="relative w-full max-w-full overflow-x-clip bg-[#0a0404] py-20"
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: 'repeat',
				backgroundPosition: 'left',
				backgroundSize: '420px',
			}}
		>
			<div
				className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0404] via-[#0a0404]/85 to-[#0a0404]"
				aria-hidden
			/>

			<div className="relative mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
					viewport={{ amount: 0.35, once: true }}
					className="mx-auto max-w-2xl text-center"
				>
					<h2 className="text-balance font-instrument text-3xl font-normal tracking-tight text-white sm:text-4xl">
						{pricing.title}
					</h2>
					<p className="mt-4 text-pretty text-base font-medium text-white/75 sm:text-lg">
						{pricing.description}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
					{pricing.list.map((item, index) => {
						const isFeatured = item.value?.toLowerCase().includes('popular')
						return (
							<motion.article
								key={item.title || index}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									delay: index * 0.06,
									duration: 0.45,
									ease: [0.22, 1, 0.36, 1],
								}}
								viewport={{ amount: 0.25, once: true }}
								className={`group relative overflow-hidden rounded-2xl border bg-[#1a0a0a]/55 shadow-[inset_0_1px_0_rgba(224,192,64,0.06)] backdrop-blur-sm transition ${
									isFeatured
										? 'border-[#c34c26]/45'
										: 'border-white/10 hover:border-[#c34c26]/30'
								}`}
							>
								<div
									className="pointer-events-none absolute inset-0 opacity-30"
									aria-hidden
									style={{
										backgroundImage: `url(${item.bgImage})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
									}}
								/>
								<div
									className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0404]/30 via-[#0a0404]/70 to-[#0a0404]/95"
									aria-hidden
								/>
								<div
									className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#c34c26]/14 blur-2xl transition group-hover:bg-[#e06020]/20"
									aria-hidden
								/>

								<div className="relative space-y-5 p-6">
									<div className="flex items-start justify-between gap-4">
										<div className="min-w-0">
											<p className="text-xs font-semibold uppercase tracking-wider text-white/60">
												{item.value}
											</p>
											<h3 className="mt-2 truncate text-2xl font-semibold text-white">
												{item.title}
											</h3>
										</div>
										{isFeatured && (
											<span className="inline-flex shrink-0 items-center rounded-full bg-gradient-to-r from-[#c34c26] to-[#e06020] px-3 py-1 text-xs font-semibold text-white shadow-sm shadow-[#c34c26]/30">
												Popular
											</span>
										)}
									</div>

									<div className="flex items-end gap-2">
										<p className="text-4xl font-bold text-white">
											${item.price}
										</p>
										<p className="pb-1 text-sm font-medium text-white/60">
											{item.billing}
										</p>
									</div>

									<p className="text-sm leading-relaxed text-white/70">
										{item.description}
									</p>

									<a
										href={item.href}
										onClick={(e) => item.href === '#' && e.preventDefault()}
										className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e08020] ${
											isFeatured
												? 'bg-gradient-to-r from-[#c34c26] via-[#d45528] to-[#e06020] text-white shadow-lg shadow-[#c34c26]/25 hover:from-[#d45528] hover:to-[#e66d2e]'
												: 'border border-[#c34c26]/25 bg-[#1a0a0a]/35 text-white/90 hover:border-[#c34c26]/40 hover:bg-[#1a0a0a]/55 hover:text-white'
										}`}
									>
										{item.buttonText}
									</a>

									<hr className="border-white/10" />

									<ul className="space-y-2">
										{item.benefitList.map((benefit) => (
											<li
												key={benefit}
												className="flex items-start gap-2 text-sm text-white/75"
											>
												<FaCheck className="mt-0.5 shrink-0 text-[#e06020]" />
												<span>{benefit}</span>
											</li>
										))}
									</ul>
								</div>
							</motion.article>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Pricing
