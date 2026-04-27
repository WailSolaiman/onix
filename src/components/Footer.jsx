import { data } from '../constants'

const Footer = () => {
	const { footer } = data
	return (
		<footer className='relative w-full max-w-full overflow-x-clip bg-[#0a0404] pt-20 pb-8'>
			<div
				className='pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0404] via-[#0a0404]/85 to-[#0a0404]'
				aria-hidden
			/>
			<div className='relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4 md:gap-8 lg:px-8'>
				<div>
					<h2 className='mb-3 text-lg font-semibold text-white'>
						{footer.title}
					</h2>
					<p className='text-sm leading-relaxed text-white/65'>
						{footer.description}
					</p>
				</div>
				<div>
					<h2 className='mb-3 text-lg font-semibold text-white'>
						{footer.title2}
					</h2>
					<ul className='space-y-2'>
						{footer.title2Links.map((item, index) => (
							<li key={index}>
								<a
									href={item.href}
									onClick={(e) => item.href === '#' && e.preventDefault()}
									className='text-sm font-medium text-white/65 transition hover:text-[#e06020]'>
									{item.text}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className='mb-3 text-lg font-semibold text-white'>
						{footer.title3}
					</h2>
					<ul className='space-y-2'>
						{footer.title3Links.map((item, index) => (
							<li key={index}>
								<a
									href={item.href}
									onClick={(e) => item.href === '#' && e.preventDefault()}
									className='text-sm font-medium text-white/65 transition hover:text-[#e06020]'>
									{item.text}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className='mb-3 text-lg font-semibold text-white'>
						{footer.title4}
					</h2>
					<p className='text-sm leading-relaxed text-white/65'>
						{footer.title4Description}
					</p>
					<form className='mt-4 space-y-3'>
						<input
							type='email'
							placeholder='your email address'
							className='w-full rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[#e08020]'
						/>
						<button
							type='button'
							className='w-full rounded-full bg-gradient-to-r from-[#c34c26] via-[#d45528] to-[#e06020] py-3 text-sm font-semibold text-white shadow-lg shadow-[#c34c26]/25 transition hover:from-[#d45528] hover:to-[#e66d2e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e08020]'>
							Subscribe
						</button>
					</form>
				</div>
			</div>
			<p className='relative mx-auto mt-16 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-sm text-white/50 sm:px-6 lg:px-8'>
				&copy; {new Date().getFullYear()} ONIX. All rights reserved.
			</p>
		</footer>
	)
}

export default Footer
