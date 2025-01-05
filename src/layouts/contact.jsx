import { useState } from 'react'

export const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [submitted, setSubmitted] = useState(false)

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		setSubmitted(true)
	}

	return (
		<section className='py-16 px-6 md:px-12 font-mono '>
			<div className='max-w-7xl mx-auto mt-10'>
				<h1 className='text-2xl font-bold text-center mb-12'>
					<span className='text-green-400'>import</span>{' '}
					<span className='text-purple-400'>Contact</span>{' '}
					<span className='text-green-400'>from</span>{' '}
					<span className='text-orange-400'>&apos;./Contact&apos;</span>
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
					{/* Contact Form */}
					<div className='group backdrop-blur rounded-xl border-2 border-blue-500/30 hover:border-blue-400 p-6 transition-all hover:shadow-lg hover:shadow-blue-500/20 bg-gray-900/90 '>
						<div className='flex items-center mb-4 border-b border-gray-700 pb-2'>
							<div className='w-3 h-3 rounded-full bg-red-500 mr-2'></div>
							<div className='w-3 h-3 rounded-full bg-yellow-500 mr-2'></div>
							<div className='w-3 h-3 rounded-full bg-green-500'></div>
							<span className='ml-4 text-gray-400'>contact.js</span>
						</div>
						<form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
							<input
								type='text'
								name='name'
								placeholder="const userName = 'Your Name'"
								className='input-field bg-gray-800/90 border border-gray-700 rounded-md p-3 text-cyan-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500 outline-none'
								value={formData.name}
								onChange={handleInputChange}
								required
							/>
							<input
								type='email'
								name='email'
								placeholder="const userEmail = 'your@email.com'"
								className='input-field bg-gray-800/90 border border-gray-700 rounded-md p-3 text-cyan-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500 outline-none'
								value={formData.email}
								onChange={handleInputChange}
								required
							/>
							<textarea
								name='message'
								placeholder='const message = `Your message here...`'
								rows='5'
								className='input-field bg-gray-800/90 border border-gray-700 rounded-md p-3 text-cyan-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500 outline-none'
								value={formData.message}
								onChange={handleInputChange}
								required
							/>
							<button
								type='submit'
								className='submit-button bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center'
							>
								<span className='text-white'>sendMessage()</span>
							</button>
						</form>
					</div>

					{/* Contact Details */}
					<div className='group backdrop-blur rounded-xl border-2 border-purple-500/30 hover:border-purple-400 p-6 transition-all hover:shadow-lg hover:shadow-purple-500/20 bg-gray-900/90'>
						<div className='flex items-center mb-4 border-b border-gray-700 pb-2'>
							<div className='w-3 h-3 rounded-full bg-red-500 mr-2'></div>
							<div className='w-3 h-3 rounded-full bg-yellow-500 mr-2'></div>
							<div className='w-3 h-3 rounded-full bg-green-500'></div>
							<span className='ml-4 text-gray-400'>output.js</span>
						</div>
						<div className='space-y-3 text-gray-300'>
							{submitted ? (
								<>
									<p className='flex items-center opacity-80'>
										<span className='text-purple-400'>const</span>
										{'  '}
										<span className='text-blue-400'>response</span>
										{'  '}
										<span className='text-white'>=</span>
										{'  '}
										<span className='text-orange-400'>{'{'}</span>
									</p>
									<p className='flex items-center opacity-80 ml-4'>
										<span className='text-green-400'>name:</span>{' '}
										<span className='text-yellow-300'>
											&quot;{formData.name}&quot;,
										</span>
									</p>
									<p className='flex items-center opacity-80 ml-4'>
										<span className='text-green-400'>email:</span>{' '}
										<span className='text-yellow-300'>
											&quot;{formData.email}&quot;,
										</span>
									</p>
									<p className='flex items-center opacity-80 ml-4'>
										<span className='text-green-400'>message:</span>{' '}
										<span className='text-yellow-300'>
											&quot;{formData.message}&quot;
										</span>
									</p>
									<p className='text-orange-400'>{'}'}</p>
								</>
							) : (
								<p className='text-gray-500'>
									<span className='text-purple-400'>console</span>.
									<span className='text-yellow-400'>log</span>
									<span className='text-gray-400'>(</span>
									<span className='text-green-400'>
										&apos;Waiting for input...&apos;
									</span>
									<span className='text-gray-400'>)</span>
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
