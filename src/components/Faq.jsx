import React, { useState } from 'react'

import bgImage from '../assets/videos-left-dec.png'

const faqData = [
	{
		question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
		answer: 'Phasellus nec massa vitae tortor feugiat malesuada.',
	},
	{
		question: 'Praesent rutrum sapien at massa sagittis, dignissim dictum?',
		answer: 'Vivamus quis arcu quis libero imperdiet tempor id volutpat ligula.',
	},
	{
		question: 'Phasellus at risus a quam condimentum viverra?',
		answer: 'Cras venenatis lectus consequat sem mollis, a rutrum nisl tempus.',
	},
	{
		question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
		answer: 'Phasellus nec massa vitae tortor feugiat malesuada.',
	},
	{
		question: 'Praesent rutrum sapien at massa sagittis, dignissim dictum?',
		answer: 'Vivamus quis arcu quis libero imperdiet tempor id volutpat ligula.',
	},
	{
		question: 'Phasellus at risus a quam condimentum viverra?',
		answer: 'Cras venenatis lectus consequat sem mollis, a rutrum nisl tempus.',
	},
]

const Faq = () => {
	const [openFaq, setOpenFaq] = useState(0)

	const toggleFaq = (index) => {
		setOpenFaq(openFaq === index ? null : index)
	}

	return (
		<div
			className='py-14 bg-white'
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'left',
				backgroundSize: '',
			}}>
			<div className='w-4/5 m-auto p-4'>
				<h1 className='text-3xl font-bold mb-6 text-center lg:text-left'>
					Frequently Asked Question
				</h1>
				{faqData.map((item, index) => (
					<div key={index} className='mb-4 shadow-lg'>
						<div
							onClick={() => toggleFaq(index)}
							className='flex justify-between items-center bg-white/50 px-4 py-3 rounded-lg cursor-pointer'>
							<h2 className='text-lg font-medium text-gray-700'>
								{item.question}
							</h2>
							<span className='text-xl text-gray-500'>
								{openFaq === index ? '-' : '+'}
							</span>
						</div>
						<div
							className={`overflow-hidden transition-all duration-300 ${
								openFaq === index ? 'max-h-40' : 'max-h-0'
							}`}>
							<p className='p-4 text-gray-400'>{item.answer}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Faq
