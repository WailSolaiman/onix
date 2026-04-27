import { motion } from 'framer-motion'

import bgImage from '../assets/tables-left-dec.png'

import { data } from '../constants'

const Testimonials = () => {
	const { testimonials } = data

	return (
		<section
			id="testimonials"
			className="relative w-full max-w-full overflow-x-clip bg-[#0a0404] py-20"
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'left',
				backgroundSize: '360px',
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
						{testimonials.title}
					</h2>
					<p className="mt-4 text-pretty text-base font-medium text-white/75 sm:text-lg">
						{testimonials.description}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{testimonials.reviews.map((item, index) => (
						<motion.article
							key={item.name || index}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								delay: index * 0.05,
								duration: 0.45,
								ease: [0.22, 1, 0.36, 1],
							}}
							viewport={{ amount: 0.25, once: true }}
							className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1a0a0a]/55 p-6 shadow-[inset_0_1px_0_rgba(224,192,64,0.06)] backdrop-blur-sm transition hover:border-[#c34c26]/30 hover:bg-[#1a0a0a]/70"
						>
							<div
								className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#c34c26]/12 blur-2xl transition group-hover:bg-[#e06020]/18"
								aria-hidden
							/>

							<div className="flex items-center gap-3">
								<img
									src={item.image}
									alt={item.name}
									className="h-12 w-12 rounded-full border border-[#c34c26]/35 object-cover"
									loading="lazy"
								/>
								<div className="min-w-0">
									<h3 className="truncate text-base font-semibold text-white">
										{item.name}
									</h3>
									<p className="truncate text-sm font-semibold text-[#e06020]">
										{item.position}
									</p>
								</div>
							</div>

							<p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
								{item.feedback}
							</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonials
