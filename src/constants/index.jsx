import service1Image from '../assets/service-icon-01.png'
import service2Image from '../assets/service-icon-02.png'
import service3Image from '../assets/service-icon-03.png'
import service4Image from '../assets/service-icon-04.png'
import portfolio1Image from '../assets/video-big-thumb-01.png'
import portfolio2Image from '../assets/video-big-thumb-02.png'
import portfolio3Image from '../assets/video-big-thumb-03.png'
import portfolio4Image from '../assets/video-big-thumb-04.png'
import firstPlanBG from '../assets/first-plan-bg.png'
import secondPlanBG from '../assets/second-plan-bg.png'
import thirdPlanBG from '../assets/third-plan-bg.png'

export const data = {
	hero: {
		subHeader: 'Lorem ipsum dolor',
		header: 'Lorem ipsum dolor sit Dolor',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni earum deserunt, repellat cumque officia.',
		buttonText: 'Get Started',
	},
	insights: {
		title: 'Lorem, ipsum dolor.',
		quote: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores molestiae facilis odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. facilis odit.',
		name: 'Lara Croft',
		position: 'Onix SEO',
		image: 'https://randomuser.me/api/portraits/women/2.jpg',
		cards: [
			{
				title: 'feature 1',
				field: 'UI/UX',
				icon: service1Image,
				description: 'bla bla',
			},
			{
				title: 'feature 2',
				field: 'Web Design',
				icon: service2Image,
				description: 'bla bla bla',
			},
		],
	},
	stats: {
		title: 'Over 3.000',
		subtitle: 'Lorem ipsum dolorr.',
		cards: [
			{
				title: 'feature 1',
				icon: service3Image,
				description: 'bla bla',
			},
			{
				title: 'feature 2',
				icon: service4Image,
				description: 'bla bla bla',
			},
		],
	},
	portfolio: {
		title: 'Portfolio',
		description: 'lorem',
		projects: [
			{
				image: portfolio1Image,
				name: 'lorem ipsum',
				position: 'UI/UX',
				feedback:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
			},
			{
				image: portfolio2Image,
				name: 'lorem ipsum',
				position: 'Print Design',
				feedback:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
			},
			{
				image: portfolio3Image,
				name: 'lorem ipsum',
				position: 'Web Design',
				feedback:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
			},
			{
				image: portfolio4Image,
				name: 'lorem ipsum',
				position: 'Management',
				feedback:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
			},
		],
	},
	pricing: {
		title: 'Pricing',
		description: 'lorem ipsum',
		list: [
			{
				title: 'Free',
				value: 'Starter',
				price: 0,
				description:
					'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
				buttonText: 'Get Started',
				benefitList: [
					'1 Team member',
					'2 GB Storage',
					'Upto 4 pages',
					'Community support',
					'lorem ipsum dolor',
				],
				href: '#',
				billing: '/month',
				bgImage: firstPlanBG,
			},
			{
				title: 'Premium',
				value: 'Most Popular',
				price: 10,
				description:
					'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
				buttonText: 'Buy Now',
				benefitList: [
					'4 Team member',
					'4 GB Storage',
					'Upto 6 pages',
					'Priority support',
					'lorem ipsum dolor',
				],
				href: '#',
				billing: '/month',
				bgImage: secondPlanBG,
			},
			{
				title: 'Enterprise',
				value: 'Most Value',
				price: 99,
				description:
					'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
				buttonText: 'Buy Now',
				benefitList: [
					'10 Team member',
					'8 GB Storage',
					'Upto 10 pages',
					'Priority support',
					'lorem ipsum dolor',
				],
				href: '#',
				billing: '/year',
				bgImage: thirdPlanBG,
			},
		],
	},
	testimonials: {
		title: 'Client Reviews',
		description: 'lorem',
		reviews: [
			{
				image: 'https://randomuser.me/api/portraits/women/2.jpg',
				name: 'lorem ipsum',
				position: 'lorem',
				feedback:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
			},
			{
				image: 'https://randomuser.me/api/portraits/women/3.jpg',
				name: 'John Doe',
				position: 'lorem',
				feedback:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
			},
			{
				image: 'https://randomuser.me/api/portraits/women/9.jpg',
				name: 'John Doe',
				position: 'lorem',
				feedback:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
			},
			{
				image: 'https://randomuser.me/api/portraits/women/6.jpg',
				name: 'John Doe',
				position: 'lorem',
				feedback:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
			},
			{
				image: 'https://randomuser.me/api/portraits/women/13.jpg',
				name: 'John Doe',
				position: 'lorem',
				feedback:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
			},
			{
				image: 'https://randomuser.me/api/portraits/women/22.jpg',
				name: 'John Doe',
				position: 'lorem',
				feedback:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est similique eius!',
			},
		],
	},
	faq: {
		title: 'Frequently Asked Question',
		list: [
			{
				question:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
				answer: 'Phasellus nec massa vitae tortor feugiat malesuada.',
			},
			{
				question:
					'Praesent rutrum sapien at massa sagittis, dignissim dictum?',
				answer: 'Vivamus quis arcu quis libero imperdiet tempor id volutpat ligula.',
			},
			{
				question: 'Phasellus at risus a quam condimentum viverra?',
				answer: 'Cras venenatis lectus consequat sem mollis, a rutrum nisl tempus.',
			},
			{
				question:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
				answer: 'Phasellus nec massa vitae tortor feugiat malesuada.',
			},
			{
				question:
					'Praesent rutrum sapien at massa sagittis, dignissim dictum?',
				answer: 'Vivamus quis arcu quis libero imperdiet tempor id volutpat ligula.',
			},
			{
				question: 'Phasellus at risus a quam condimentum viverra?',
				answer: 'Cras venenatis lectus consequat sem mollis, a rutrum nisl tempus.',
			},
		],
	},
	footer: {
		title: 'About Us',
		description: 'lorem',
		title2: 'Customer Service',
		title2Links: [
			{
				text: 'Contact Us',
				href: '#',
			},
			{
				text: 'FAQs',
				href: '#',
			},
			{
				text: 'Privacy Policy',
				href: '#',
			},
		],
		title3: 'Follow Us',
		title3Links: [
			{
				text: 'Facebook',
				href: '#',
			},
			{
				text: 'YouTube',
				href: '#',
			},
			{
				text: 'Instagram',
				href: '#',
			},
		],
		title4: 'News Letter',
		title4Description:
			'Enter your email to get the latest news and updates',
	},
}
