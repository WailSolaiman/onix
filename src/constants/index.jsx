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
		subHeader: 'Professional Web Design & Development',
		header: 'Elevate Your Digital Presence',
		description:
			'At Onix Digital Agency, we craft cutting-edge websites, intuitive user interfaces, and seamless digital experiences to grow your business.',
		buttonText: 'Start Your Project',
	},
	insights: {
		title: 'Innovative Solutions for Your Business',
		quote: '“Onix Digital Agency will help transform your online presence with our expertise in SEO and design!S”',
		name: 'Lara Lu-Kane',
		position: 'SEO Specialist, Onix Digital',
		image: 'https://randomuser.me/api/portraits/women/2.jpg',
		cards: [
			{
				title: 'UI/UX Design',
				field: 'UI/UX',
				icon: service1Image,
				description:
					'Crafting user-friendly and visually appealing designs that engage and delight your audience.',
			},
			{
				title: 'Web Design',
				field: 'Web Design',
				icon: service2Image,
				description:
					'Creating modern and responsive websites tailored to your brand’s vision and goals.',
			},
		],
	},
	stats: {
		title: 'Results That Matter',
		subtitle: 'Over 3,000 Satisfied Clients',
		cards: [
			{
				title: 'UI/UX Projects',
				icon: service1Image,
				description:
					'Crafting unique user experiences across various industries for digital success.',
			},
			{
				title: 'SEO Success',
				icon: service4Image,
				description:
					'Boosting search rankings and driving targeted traffic to grow your business.',
			},
			{
				title: 'Monetization Strategies',
				icon: service3Image,
				description:
					'Maximizing revenue potential with tailored monetization strategies for your business.',
			},
			{
				title: 'Marketing Growth',
				icon: service2Image,
				description:
					'Building impactful digital marketing strategies that boost brand visibility.',
			},
		],
	},
	portfolio: {
		title: 'Our Work',
		description:
			'Explore a selection of our recent projects, showcasing our expertise in design and development.',
		projects: [
			{
				image: portfolio1Image,
				name: 'Tech Innovators',
				position: 'UI/UX Design',
				feedback:
					'“Onix Digital delivered a design that truly reflects our brand and vision. Highly satisfied!”',
			},
			{
				image: portfolio2Image,
				name: 'PrintHub Solutions',
				position: 'Print Design',
				feedback:
					'“From concept to execution, Onix provided exceptional service and quality results.”',
			},
			{
				image: portfolio3Image,
				name: 'Creative Minds',
				position: 'Web Design',
				feedback:
					'“Our new website is modern, responsive, and exactly what we needed to engage our customers.”',
			},
			{
				image: portfolio4Image,
				name: 'Business Solutions Co.',
				position: 'Project Management',
				feedback:
					'“Onix’s team managed the entire web development project flawlessly, delivering on time and on budget.”',
			},
		],
	},
	team: {
		title: 'Our Team',
		description:
			'Meet the creative minds and technical experts behind our success at Onix Digital.',
		members: [
			{
				image: 'https://xsgames.co/randomusers/assets/avatars/female/10.jpg',
				name: 'Lisa Bullock',
				position: 'Lead UI/UX Designer',
				description:
					'With 10+ years of experience, Lisa leads the UI/UX team, ensuring seamless and modern designs.',
			},
			{
				image: 'https://xsgames.co/randomusers/assets/avatars/female/16.jpg',
				name: 'Emily Roberts',
				position: 'Senior Web Developer',
				description:
					'Emily specializes in front-end development, creating responsive, high-performance websites.',
			},
			{
				image: 'https://xsgames.co/randomusers/assets/avatars/male/44.jpg',
				name: 'Michael Davis',
				position: 'SEO Strategist',
				description:
					'Michael is our SEO expert, driving organic traffic growth with strategic content optimization and data-driven campaigns.',
			},
			{
				image: 'https://xsgames.co/randomusers/assets/avatars/female/69.jpg',
				name: 'Sarah Bonit',
				position: 'UI/UX Designer',
				description:
					'Sarah brings a fresh perspective to the UI/UX team, focusing on creating intuitive designs that enhance user engagement.',
			},
			{
				image: 'https://xsgames.co/randomusers/assets/avatars/female/45.jpg',
				name: 'Olivia Turner',
				position: 'Content Manager',
				description:
					"Olivia is responsible for content strategy and creation, ensuring that our clients' messaging resonates with their audience.",
			},
			{
				image: 'https://xsgames.co/randomusers/assets/avatars/female/20.jpg',
				name: 'Sophia Brown',
				position: 'Junior Web Developer',
				description:
					'Sophia assists in developing dynamic websites, contributing innovative coding techniques and solutions.',
			},
			{
				image: 'https://xsgames.co/randomusers/assets/avatars/male/55.jpg',
				name: 'James Wilson',
				position: 'D. Marketing Specialist',
				description:
					'James leads our digital marketing efforts, crafting successful campaigns that boost brand visibility and drive results.',
			},
			{
				image: 'https://xsgames.co/randomusers/assets/avatars/male/54.jpg',
				name: 'Daniel Harris',
				position: 'Project Manager',
				description:
					'Daniel ensures the smooth execution of projects, managing timelines and keeping the team aligned with client goals.',
			},
		],
	},
	pricing: {
		title: 'Our Pricing Plans',
		description:
			'Flexible plans tailored to meet the needs of your business, from small projects to large-scale enterprise solutions.',
		list: [
			{
				title: 'Starter',
				value: 'Best for Small Projects',
				price: 499,
				description:
					'Perfect for startups and small businesses seeking a professional online presence with essential features.',
				buttonText: 'Get Started',
				benefitList: [
					'1 Project',
					'Up to 5 Pages',
					'Basic UI/UX Design',
					'Standard SEO Setup',
					'Email Support',
				],
				href: '#',
				billing: 'One-Time Payment',
				bgImage: firstPlanBG,
			},
			{
				title: 'Professional',
				value: 'Most Popular',
				price: 1999,
				description:
					'Designed for growing businesses needing more comprehensive design, development, and SEO services.',
				buttonText: 'Buy Now',
				benefitList: [
					'Up to 3 Projects',
					'Up to 10 Pages',
					'Advanced UI/UX Design',
					'Full SEO Setup & Optimization',
					'Priority Support',
					'Monthly Maintenance',
				],
				href: '#',
				billing: 'One-Time Payment',
				bgImage: secondPlanBG,
			},
			{
				title: 'Enterprise',
				value: 'Best for Large Teams',
				price: 4999,
				description:
					'A complete solution for large businesses requiring tailored services, including advanced design, SEO, and ongoing support.',
				buttonText: 'Buy Now',
				benefitList: [
					'Up to 5 Projects',
					'Custom Number of Pages',
					'Custom UI/UX Design & Development',
					'Full SEO, Marketing & Analytics',
					'Dedicated Account Manager',
					'24/7 Premium Support',
					'Ongoing Strategy & Optimization',
				],
				href: '#',
				billing: 'Custom Pricing',
				bgImage: thirdPlanBG,
			},
		],
	},
	testimonials: {
		title: 'What Our Clients Say',
		description: 'Hear from some of our satisfied customers.',
		reviews: [
			{
				image: 'https://randomuser.me/api/portraits/women/14.jpg',
				name: 'Sarah Johnson',
				position: 'Marketing Director',
				feedback:
					'“The team at Onix exceeded our expectations. Their attention to detail and professionalism made the entire process seamless.”',
			},
			{
				image: 'https://randomuser.me/api/portraits/women/3.jpg',
				name: 'Michael Lee',
				position: 'Founder & CEO',
				feedback:
					'“Our new website is fast, intuitive, and beautifully designed. Onix Digital’s work has been invaluable to our success.”',
			},
			{
				image: 'https://randomuser.me/api/portraits/women/9.jpg',
				name: 'Alexandra Martinez',
				position: 'Small Business Owner',
				feedback:
					'“Onix helped us redesign our website, and the results have been phenomenal. Highly recommend their services.”',
			},
			{
				image: 'https://randomuser.me/api/portraits/men/12.jpg',
				name: 'James Smith',
				position: 'Operations Manager',
				feedback:
					'“Onix Digital helped us revamp our old website and optimize it for search engines. The results have been fantastic with increased traffic and conversions.”',
			},
			{
				image: 'https://randomuser.me/api/portraits/women/19.jpg',
				name: 'Emily Green',
				position: 'Creative Director',
				feedback:
					'“Working with Onix Digital was a game-changer for our business. Their expertise in web design and UI/UX resulted in a beautiful, user-friendly website that has impressed all of our clients.”',
			},
			{
				image: 'https://randomuser.me/api/portraits/men/1.jpg',
				name: 'Bill Wright',
				position: 'Tech Startup Founder',
				feedback:
					'“The Onix team delivered our website ahead of schedule, and it exceeded our expectations in both design and functionality. Their attention to detail and responsiveness were outstanding.”',
			},
		],
	},
	faq: {
		title: 'Frequently Asked Questions',
		list: [
			{
				question: 'What services does Onix Digital provide?',
				answer: 'We specialize in web design, UI/UX, SEO, and web development to help businesses grow their online presence.',
			},
			{
				question: 'How long does it take to build a website?',
				answer: 'Timelines vary based on the complexity of the project, but most websites are completed within 4-6 weeks.',
			},
			{
				question: 'Can you help with SEO?',
				answer: 'Yes, we offer comprehensive SEO services to improve your website’s ranking and visibility on search engines.',
			},
			{
				question: 'Do you offer custom web design solutions?',
				answer: 'Yes, we specialize in custom web design tailored to meet the unique needs and branding of each client.',
			},
			{
				question:
					'Can you maintain and update our website after launch?',
				answer: 'Absolutely. We offer ongoing website maintenance and support to ensure your site remains updated and fully functional.',
			},
			{
				question: 'What industries do you work with?',
				answer: 'We work with a wide range of industries including tech, retail, healthcare, finance, and more. Our services are adaptable to any business sector.',
			},
			{
				question: 'Do you offer eCommerce solutions?',
				answer: 'Yes, we provide full eCommerce development services, including secure payment gateways, product management systems, and scalable solutions.',
			},
			{
				question: 'How do I get started with Onix Digital?',
				answer: "Simply contact us through our website, and we'll schedule an initial consultation to discuss your project needs and goals.",
			},
		],
	},
	footer: {
		title: 'About Us',
		description:
			'Onix Digital Agency is a team of creative professionals dedicated to helping businesses achieve success through innovative web design and development solutions.',
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
		title4: 'Newsletter',
		title4Description:
			'Subscribe to our newsletter for the latest updates and exclusive offers.',
	},
}
