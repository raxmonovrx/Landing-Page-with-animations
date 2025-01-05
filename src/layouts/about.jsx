import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const About = () => {
	return (
		<section className='py-12 px-4 sm:px-8 bg-transparent text-gray-300 font-code'>
			<div className='max-w-6xl mt-10 mx-auto flex flex-col gap-8'>
				<div className='p-4 md:p-6 rounded-xl shadow-md border border-gray-600'>
					<SyntaxHighlighter language='javascript' style={dracula}>
						{`/**
 * Personal Information
 * A brief introduction about myself and my role
 */
const developer = {
	name: 'FarruXbek Raxmonov',
	role: 'Front-End Developer',
	skills: [
		'React',
		'JavaScript',
		'CSS',
		'Tailwind CSS'
	],
	passion: 'Building beautiful and functional web applications',
	about: 'I specialize in crafting responsive web interfaces using the latest technologies like React and Tailwind CSS.',
};`}
					</SyntaxHighlighter>
				</div>

				<div className='p-4 md:p-6 rounded-xl shadow-md border border-gray-600'>
					<SyntaxHighlighter language='javascript' style={dracula}>
						{`/**
 * Technical Stack
 * Technologies and tools I work with
 */
const techStack = {
	frontEnd: [
		'HTML',
		'CSS',
		'JavaScript',
		'React'
	],
	tools: [
		'Git',
		'VS Code',
		'Figma'
	],
	backend: [
		'Node.js',
		'Express (Learning)'
	]
};`}
					</SyntaxHighlighter>
				</div>

				<div className='p-4 md:p-6 rounded-xl shadow-md border border-gray-600'>
					<SyntaxHighlighter language='javascript' style={dracula}>
						{`/**
 * Contact Information
 * Ways to connect with me
 */
const socials = {
	email: 'raxmonovrx.uz@gmail.com',
	github: 'https://github.com/raxmonovrx',
	linkedin: 'https://www.linkedin.com/in/raxmonovrx/',
	instagram: 'https://www.instagram.com/raxmonovrx.uz/',
	telegram: 'https://t.me/raxmonovrx'
};`}
					</SyntaxHighlighter>
				</div>
			</div>
		</section>
	)
}
