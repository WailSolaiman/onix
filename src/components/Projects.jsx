import { motion } from 'framer-motion'

import { data } from '../constants'

const Projects = () => {
	const { portfolio } = data

	return (
		<section
			id="projects"
			className="relative w-full max-w-full overflow-x-clip bg-[#0a0404] py-20"
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
						{portfolio.title}
					</h2>
					<p className="mt-4 text-pretty text-base font-medium text-white/75 sm:text-lg">
						{portfolio.description}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
					{portfolio.projects.map((item, index) => (
						<motion.article
							key={item.name || index}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								delay: index * 0.06,
								duration: 0.45,
								ease: [0.22, 1, 0.36, 1],
							}}
							viewport={{ amount: 0.25, once: true }}
							className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1a0a0a]/55 shadow-[inset_0_1px_0_rgba(224,192,64,0.06)] backdrop-blur-sm transition hover:border-[#c34c26]/30 hover:bg-[#1a0a0a]/70"
						>
							<div className="relative">
								<img
									src={item.image}
									alt={item.name}
									className="h-56 w-full object-cover sm:h-60"
									loading="lazy"
								/>
								<div
									className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0404]/85 via-[#0a0404]/15 to-transparent"
									aria-hidden
								/>
								<div
									className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#c34c26]/12 blur-2xl transition group-hover:bg-[#e06020]/18"
									aria-hidden
								/>
							</div>

							<div className="space-y-3 p-5">
								<div className="flex items-start justify-between gap-4">
									<div className="min-w-0">
										<h3 className="truncate text-lg font-semibold text-white">
											{item.name}
										</h3>
										<p className="mt-0.5 text-sm font-semibold text-[#e06020]">
											{item.position}
										</p>
									</div>
									<span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/70 transition group-hover:border-[#c34c26]/30 group-hover:text-white sm:inline-flex">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-4 w-4"
											aria-hidden
										>
											<path d="M7 7h10v10" />
											<path d="M7 17 17 7" />
										</svg>
									</span>
								</div>

								<p className="text-sm leading-relaxed text-white/70 sm:text-base">
									{item.feedback}
								</p>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
