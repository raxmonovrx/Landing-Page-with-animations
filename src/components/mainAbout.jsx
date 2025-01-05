export const MainAbout = () => {
	return (
		<div>
			<div className='text-justify'>
				<span className='text-[16px] md:text-lg text-[#E5E9F0 leading-3'>
					Hi all. I am
				</span>
				<h1 className='lg:text-[62px] md:text-[48px] text-[36px]  text-[#E5E9F0] leading-tight '>
					FarruXbek Raxmonov
				</h1>
				<span className='text-[#4D5BCE] text-2xl md:text-3xl '>
					&gt; Front-end developer
				</span>
			</div>
			<div className='mt-16 flex flex-col gap-2'>
				<p className='text-[#607B96]'>{'//'} complete the game to continue</p>
				<p className='text-[#607B96]'>{'//'} you can also see my Github page</p>
				<p>
					<span className='text-[#4D5BCE]'>const</span>{' '}
					<span className='text-[#43D9AD]'>githubLink</span> =
					<a className='text-[#E99287]' href='https://github.com/raxmonovrx/'>
						“https://github.com/raxmonovrx/”
					</a>
				</p>
			</div>
		</div>
	)
}
