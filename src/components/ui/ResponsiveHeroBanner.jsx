/* eslint-disable react/prop-types -- presentational props, no prop-types in project */
/* Hero shell from responsive-hero-banner (prompt): full-bleed image, center stack, partners.
   Site chrome lives in Navbar — not duplicated here. */

const ArrowUpRight = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
		<path d="M7 7h10v10" />
		<path d="M7 17 17 7" />
	</svg>
)

const ArrowRight = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
		<path d="M5 12h14" />
		<path d="m12 5 7 7-7 7" />
	</svg>
)

const Play = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
		<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
	</svg>
)

const ResponsiveHeroBanner = ({
	sectionId = 'homepage',
	backgroundImageUrl,
	badgeLabel,
	badgeText,
	title,
	titleLine2,
	description,
	primaryButtonText,
	secondaryButtonText,
	onPrimaryClick,
	onSecondaryClick,
	partnersTitle,
	partners = [],
	secondaryCtaStyle = 'subtle',
}) => {
	return (
		<section
			id={sectionId}
			className="relative isolate flex w-full min-h-[calc(100dvh-4rem)] max-w-full flex-col overflow-x-clip"
		>
			<img
				src={backgroundImageUrl}
				alt=""
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<div
				className="absolute inset-0 bg-gradient-to-b from-[#0a0404]/70 via-black/45 to-[#0a0404]/85"
				aria-hidden
			/>
			<div className="pointer-events-none absolute inset-0 ring-1 ring-[#c34c26]/20" aria-hidden />

			<div className="relative z-10 flex flex-1 items-center font-sans">
				<div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20">
					<div className="mx-auto max-w-3xl text-center">
						<div className="mb-6 inline-flex max-w-full flex-col items-center gap-1.5 rounded-2xl border border-[#c34c26]/25 bg-[#1a0a0a]/55 px-4 py-2 shadow-[inset_0_1px_0_rgba(224,192,64,0.08)] backdrop-blur-sm animate-fade-slide-in-1 sm:max-w-none sm:flex-row sm:gap-3 sm:rounded-full sm:px-3 sm:py-2">
							<span className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#ffe8a8] via-[#e06020] to-[#c34c26] px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider text-[#0a0404] sm:text-xs">
								{badgeLabel}
							</span>
							<span className="text-center text-xs font-medium leading-snug text-white/85 sm:text-left sm:text-sm sm:leading-normal">
								{badgeText}
							</span>
						</div>

						<h1 className="animate-fade-slide-in-2 text-balance font-instrument text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
							{title}
							<br className="hidden sm:block" />
							{titleLine2}
						</h1>

						<p className="mx-auto mt-6 max-w-2xl animate-fade-slide-in-3 text-pretty text-base text-white/80 sm:text-lg">
							{description}
						</p>

						<div className="mt-10 flex flex-col items-center justify-center gap-3 animate-fade-slide-in-4 sm:flex-row sm:gap-4">
							<button
								type="button"
								onClick={onPrimaryClick}
								className="inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c34c26] via-[#d45528] to-[#e06020] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c34c26]/25 transition hover:from-[#d45528] hover:to-[#e66d2e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e08020] sm:w-auto"
							>
								{primaryButtonText}
								<ArrowUpRight />
							</button>
							<button
								type="button"
								onClick={onSecondaryClick}
								className="inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#c34c26]/25 bg-[#1a0a0a]/35 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:border-[#c34c26]/40 hover:bg-[#1a0a0a]/55 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e08020] sm:w-auto"
							>
								{secondaryButtonText}
								{secondaryCtaStyle === 'play' ? <Play /> : <ArrowRight />}
							</button>
						</div>
					</div>

					<div className="mx-auto mt-16 max-w-5xl sm:mt-20">
						<p className="text-center text-sm text-white/70 animate-fade-slide-in-1">
							{partnersTitle}
						</p>
						<div className="mt-6 grid grid-cols-4 items-center justify-items-center gap-3 text-white/70 animate-fade-slide-in-2 sm:gap-4 md:grid-cols-6 lg:grid-cols-8">
							{partners.map((partner, index) => {
								const key = partner.label || `p-${index}`
								const isPlaceholder = partner.href === '#'
								const rel = partner.href?.startsWith('http') ? 'noreferrer' : undefined
								const target = partner.href?.startsWith('http') ? '_blank' : undefined
								const onClick = (e) => isPlaceholder && e.preventDefault()

								if (partner.icon) {
									const Icon = partner.icon
									return (
										<a
											key={key}
											href={partner.href}
											rel={rel}
											target={target}
											onClick={onClick}
											className="group inline-flex h-10 w-full max-w-[8.5rem] items-center justify-center gap-2 rounded-full border border-white/10 bg-[#1a0a0a]/35 px-4 text-white/70 backdrop-blur-sm transition hover:border-[#c34c26]/30 hover:bg-[#1a0a0a]/55 hover:text-white"
										>
											<Icon className="h-5 w-5" aria-hidden />
											<span className="sr-only">{partner.label || 'Partner'}</span>
										</a>
									)
								}
								if (partner.logoUrl) {
									return (
										<a
											key={key}
											href={partner.href}
											className="inline-flex h-9 w-[120px] items-center justify-center rounded-full bg-white/0 bg-contain bg-center bg-no-repeat opacity-70 transition hover:bg-white/5 hover:opacity-100"
											style={{ backgroundImage: `url(${partner.logoUrl})` }}
											rel={rel}
											target={target}
											onClick={onClick}
										>
											<span className="sr-only">{partner.label || 'Partner'}</span>
										</a>
									)
								}
								return (
									<span
										key={key}
										className="text-xs font-medium uppercase tracking-wider text-white/50"
									>
										{partner.label}
									</span>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ResponsiveHeroBanner
