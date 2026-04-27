import { useId, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import bgImage from '../assets/videos-left-dec.png'

import { data } from '../constants'

const Faq = () => {
	const baseId = useId()
	const [openFaq, setOpenFaq] = useState(0)
	const { faq } = data

	const toggleFaq = (index) => {
		setOpenFaq(openFaq === index ? null : index)
	}

	return (
		<section
			id="faqs"
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

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
					viewport={{ amount: 0.35, once: true }}
					className="mx-auto max-w-2xl text-center"
				>
					<h2 className="text-balance font-instrument text-3xl font-normal tracking-tight text-white sm:text-4xl">
						{faq.title}
					</h2>
				</motion.div>

				<div className="mx-auto mt-10 max-w-3xl space-y-3">
					{faq.list.map((item, index) => {
						const isOpen = openFaq === index
						const panelId = `${baseId}-faq-panel-${index}`
						const buttonId = `${baseId}-faq-button-${index}`
						return (
							<motion.div
								key={item.question || index}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									delay: index * 0.04,
									duration: 0.4,
									ease: [0.22, 1, 0.36, 1],
								}}
								viewport={{ amount: 0.2, once: true }}
								className="group overflow-hidden rounded-2xl border border-white/10 bg-[#1a0a0a]/55 shadow-[inset_0_1px_0_rgba(224,192,64,0.06)] backdrop-blur-sm transition hover:border-[#c34c26]/30 hover:bg-[#1a0a0a]/70"
							>
								<button
									id={buttonId}
									type="button"
									aria-expanded={isOpen}
									aria-controls={panelId}
									onClick={() => toggleFaq(index)}
									className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e08020]"
								>
									<span className="text-base font-semibold text-white sm:text-lg">
										{item.question}
									</span>
									<span
										className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition ${
											isOpen
												? 'border-[#c34c26]/45 bg-[#c34c26]/15 text-white'
												: 'border-white/10 bg-black/20 text-white/70 group-hover:border-[#c34c26]/25'
										}`}
										aria-hidden
									>
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
											className={`h-4 w-4 transition-transform ${
												isOpen ? 'rotate-45' : 'rotate-0'
											}`}
										>
											<path d="M12 5v14" />
											<path d="M5 12h14" />
										</svg>
									</span>
								</button>

								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											id={panelId}
											role="region"
											aria-labelledby={buttonId}
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: 'auto', opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
											className="overflow-hidden"
										>
											<div className="px-5 pb-5 pt-0">
												<p className="text-sm leading-relaxed text-white/70 sm:text-base">
													{item.answer}
												</p>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Faq
