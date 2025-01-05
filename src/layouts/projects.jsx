import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const ProjectsSection = () => {
	const projects = [
		{
			title: 'Project One',
			description:
				'A project built with React and Tailwind CSS. A responsive UI with state management.',
			repo: 'https://github.com/FarruXbek/project-one',
			demo: 'https://project-one-demo.com',
			tech: ['React', 'Tailwind CSS', 'Redux'],
		},
		{
			title: 'Project Two',
			description: 'Node.js and Express backend with JWT authentication.',
			repo: 'https://github.com/FarruXbek/project-two',
			demo: 'https://project-two-demo.com',
			tech: ['Node.js', 'Express', 'JWT'],
		},
		{
			title: 'Project Three',
			description:
				'A simple portfolio website built with HTML, CSS, and JavaScript.',
			repo: 'https://github.com/FarruXbek/project-three',
			demo: 'https://project-three-demo.com',
			tech: ['HTML', 'CSS', 'JavaScript'],
		},
	]

	return (
		<section className='py-16 px-6 md:px-12  text-white font-mono'>
			<div className='max-w-7xl mx-auto mt-10'>
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{projects.map((project, index) => (
						<div
							key={index}
							className='relative group bg-gray-800 rounded-xl overflow-hidden border-2 border-teal-500/30 hover:border-teal-400 transition-all duration-300'
						>
							<div className='p-6'>
								<div className='flex items-center mb-4'>
									<div className='w-3 h-3 rounded-full bg-red-500 mr-2'></div>
									<div className='w-3 h-3 rounded-full bg-yellow-500 mr-2'></div>
									<div className='w-3 h-3 rounded-full bg-green-500'></div>
								</div>

								<h3 className='text-2xl font-bold text-cyan-400 mb-3'>
									{`const ${project.title.replace(/\s+/g, '')}`}
								</h3>
								<p className='text-gray-300 mb-4'>{project.description}</p>

								<div className='flex flex-wrap gap-2 mb-4'>
									{project.tech.map((tech, i) => (
										<span
											key={i}
											className='px-2 py-1 text-sm bg-gray-700 rounded-md text-teal-300'
										>
											{tech}
										</span>
									))}
								</div>

								<div className='flex space-x-4'>
									<a
										href={project.repo}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center text-sm text-teal-400 hover:text-teal-300 transition-colors'
									>
										<span className='mr-2'>&lt;</span>
										GitHub Repo
										<span className='ml-2'>/&gt;</span>
									</a>
									<a
										href={project.demo}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors'
									>
										<span className='mr-2'>&lt;</span>
										Live Demo
										<span className='ml-2'>/&gt;</span>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='mt-16'>
					<h3 className='text-2xl font-semibold mb-6 text-purple-400 text-center'>
						<span className='text-teal-400'>{'//'}</span> Sample Code
					</h3>
					<div className='rounded-xl overflow-hidden shadow-2xl border-2 border-purple-500/30'>
						<SyntaxHighlighter
							language='javascript'
							style={dracula}
							showLineNumbers={true}
							customStyle={{
								padding: '2rem',
								borderRadius: '0.75rem',
								margin: 0,
							}}
						>
							{`const projectStack = {
	frontend: ['React', 'Tailwind CSS', 'Redux'],
	backend: ['Node.js', 'Express', 'MongoDB'],
	tools: ['Git', 'Docker', 'VS Code'],
	
	initialize() {
		console.log('Starting new project... 🚀');
		this.frontend.forEach(tech => console.log(\`Loading \${tech}...\`));
	}
};

projectStack.initialize();`}
						</SyntaxHighlighter>
					</div>
				</div>
			</div>
		</section>
	)
}
