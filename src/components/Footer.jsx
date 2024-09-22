import React from 'react'

const Footer = () => {
	return (
		<footer className='pt-20 pb-6 bg-black'>
			<div className='w-4/5 m-auto grid md:grid-cols-4 gap-6 px-4'>
				<div>
					<h2 className='text-xl font-bold mb-2 text-white'>
						About Us
					</h2>
					<p className='text-gray-400'>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Similique tempore qui libero, incidunt quae vel?
					</p>
				</div>
				<div>
					<h2 className='text-xl font-bold mb-2 text-white'>
						Customer Service
					</h2>
					<ul>
						<li>
							<a
								href='#'
								className='text-gray-400 hover:text-[#ff8169]'>
								Contact Us
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-gray-400 hover:text-[#ff8169]'>
								FAQs
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-gray-400 hover:text-[#ff8169]'>
								Privacy Policy
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 className='text-xl font-bold mb-2 text-white'>
						Follow Us
					</h2>
					<ul>
						<li>
							<a
								href='#'
								className='text-gray-400 hover:text-[#ff8169]'>
								Facebook
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-gray-400 hover:text-[#ff8169]'>
								YouTube
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-gray-400 hover:text-[#ff8169]'>
								Instagram
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 className='text-xl font-bold mb-2 text-white'>
						News Letter
					</h2>
					<p className='text-gray-400'>
						Enter your email to get the latest news and updates
					</p>
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
