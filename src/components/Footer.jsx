import React from 'react'

import { data } from '../constants'

const Footer = () => {
	const { footer } = data
	return (
		<footer className='pt-20 pb-6 bg-black'>
			<div className='w-4/5 m-auto grid md:grid-cols-4 gap-6 px-4'>
				<div>
					<h2 className='text-xl font-bold mb-2 text-white'>
						{footer.title}
					</h2>
					<p className='text-gray-400'>{footer.description}</p>
				</div>
				<div>
					<h2 className='text-xl font-bold mb-2 text-white'>
						{footer.title2}
					</h2>
					<ul>
						{footer.title2Links.map((item, index) => (
							<li key={index}>
								<a
									href={item.href}
									className='text-gray-400 hover:text-[#ff8169]'>
									{item.text}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className='text-xl font-bold mb-2 text-white'>
						{footer.title3}
					</h2>
					<ul>
						{footer.title3Links.map((item, index) => (
							<li key={index}>
								<a
									href={item.href}
									className='text-gray-400 hover:text-[#ff8169]'>
									{item.text}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className='text-xl font-bold mb-2 text-white'>
						{footer.title4}
					</h2>
					<p className='text-gray-400'>{footer.title4Description}</p>
					<form className='mt-4'>
						<input
							type='email'
							placeholder='your email address'
							className='p-2 w-full rounded-lg text-gray-600 shadow-lg'
						/>
						<button
							className='mt-2 w-full p-2 shadow-md bg-[#ff8169] hover:bg-[#9acdf3] 
						hover:text-black rounded-lg font-semibold text-white'>
							Subscribe
						</button>
					</form>
				</div>
			</div>
			<div>
				<p className='text-center text-gray-500 mt-20 pt-6 text-sm border-t-2'>
					&copy; {new Date().getFullYear()} BetaTech. All rights
					reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
