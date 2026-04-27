import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMenu, IoClose } from 'react-icons/io5'
import { createPortal } from 'react-dom'

const HEADER_OFFSET = 88

/* Planet-derived palette: void #0A0404, surface #1A0A0A, accent #C34C26 → #E06020, highlight #E0C040 */

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const menuItems = [
		{ text: 'Portfolio', targetId: 'projects' },
		{ text: 'Our Team', targetId: 'team' },
		{ text: 'Pricing', targetId: 'pricing' },
		{ text: 'FAQs', targetId: 'faqs' },
		{ text: 'Contact', targetId: 'contact' },
	]

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [menuOpen])

	const handleScroll = (event, targetId) => {
		event.preventDefault()
		setMenuOpen(false)
		const el = document.getElementById(targetId)
		if (!el) return
		const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
		window.scrollTo({ top, behavior: 'smooth' })
	}

	const focusRing =
		'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e08020]'

	return (
		<header className="sticky top-0 z-50 w-full border-b border-[#c34c26]/25 bg-[#0a0404]/85 shadow-[0_1px_0_rgba(195,76,38,0.12)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#0a0404]/70">
			<nav
				aria-label="Main"
				className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
				<a
					href="#homepage"
					aria-label="ONIX — home"
					className={`group relative -ml-1 shrink-0 rounded-md px-1 py-0.5 outline-none transition hover:opacity-100 ${focusRing}`}
					onClick={(e) => handleScroll(e, 'homepage')}>
					<span
						className="flex items-baseline font-sans text-xl font-semibold leading-none tracking-[0.1em] text-white drop-shadow-[0_0_18px_rgba(195,76,38,0.35)] sm:text-2xl sm:tracking-[0.11em] md:text-[1.65rem] md:tracking-[0.12em]"
						aria-hidden>
						<span className="text-white">ONI</span>
						<span className="bg-gradient-to-b from-[#ffe8a8] via-[#e06020] to-[#c34c26] bg-clip-text font-bold text-transparent">
							X
						</span>
					</span>
					<span
						className="pointer-events-none absolute -bottom-px left-1 right-1 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#e06020] to-transparent opacity-0 transition duration-300 group-hover:scale-x-100 group-hover:opacity-100"
						aria-hidden
					/>
				</a>

				<div className="hidden items-center md:flex">
					<div className="flex items-center gap-1 rounded-full border border-[#c34c26]/20 bg-[#1a0a0a]/90 px-1 py-1 shadow-[inset_0_1px_0_rgba(224,192,64,0.06)] backdrop-blur-md">
						<ul className="flex items-center gap-0.5">
							{menuItems.map((item) => (
								<li key={item.targetId}>
									<a
										href={`#${item.targetId}`}
										className="block rounded-full px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-[#c34c26]/20 hover:text-white"
										onClick={(e) => handleScroll(e, item.targetId)}>
										{item.text}
									</a>
								</li>
							))}
						</ul>
						<button
							type="button"
							className={`ml-0.5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#c34c26] to-[#e06020] px-3.5 py-2 text-sm font-semibold text-white shadow-md shadow-[#c34c26]/35 transition hover:from-[#d45528] hover:to-[#e66d2e] ${focusRing}`}>
							Client login
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
								className="h-3.5 w-3.5"
								aria-hidden>
								<path d="M7 7h10v10" />
								<path d="M7 17 17 7" />
							</svg>
						</button>
					</div>
				</div>

				<div className="flex items-center gap-2 md:hidden">
					<button
						type="button"
						className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[#c34c26]/30 bg-[#1a0a0a]/90 text-white/90 backdrop-blur-sm transition hover:border-[#c34c26]/45 hover:bg-[#2a0d09]/90 hover:text-white ${focusRing}`}
						aria-expanded={menuOpen}
						aria-controls="mobile-menu"
						aria-label={menuOpen ? 'Close menu' : 'Open menu'}
						onClick={() => setMenuOpen((o) => !o)}>
						{menuOpen ? <IoClose className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
					</button>
				</div>
			</nav>

			{menuOpen &&
				typeof document !== 'undefined' &&
				createPortal(
					<AnimatePresence initial={false}>
						<motion.div
							key="mobile-menu-overlay"
							id="mobile-menu"
							className="fixed inset-0 z-[9999] pointer-events-none md:hidden"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.15 }}
						>
							<div className="absolute left-0 right-0 top-16 bottom-0 bg-[#0a0404]/85" aria-hidden />
							<button
								type="button"
								aria-label="Close menu"
								className="pointer-events-auto absolute left-0 right-0 top-16 bottom-0 bg-transparent"
								onClick={() => setMenuOpen(false)}
							/>

							<motion.div
								key="mobile-menu-panel"
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
								className="pointer-events-auto absolute left-0 right-0 top-16 bottom-0 z-10 flex min-h-[calc(100dvh-4rem)] flex-col border-t border-[#c34c26]/25 bg-[#0a0404]/98 backdrop-blur-xl"
							>
								<div className="flex flex-1 flex-col justify-center px-6 py-8">
									<div className="mx-auto flex w-full max-w-xs flex-col items-stretch gap-2 text-center">
										{menuItems.map((item) => (
											<a
												key={item.targetId}
												href={`#${item.targetId}`}
												className="block rounded-2xl px-6 py-4 text-lg font-semibold text-white/90 transition hover:bg-[#c34c26]/15 hover:text-white active:bg-[#1a0a0a]"
												onClick={(e) => handleScroll(e, item.targetId)}>
												{item.text}
											</a>
										))}
									</div>
								</div>

								<div className="border-t border-white/10 px-6 pb-8 pt-4">
									<button
										type="button"
										className={`mx-auto block w-full max-w-xs rounded-full bg-gradient-to-r from-[#c34c26] via-[#d45528] to-[#e06020] py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#c34c26]/30 transition hover:from-[#d45528] hover:to-[#e66d2e] ${focusRing}`}>
										Client login
									</button>
								</div>
							</motion.div>
						</motion.div>
					</AnimatePresence>,
					document.body
				)}
		</header>
	)
}

export default Navbar
