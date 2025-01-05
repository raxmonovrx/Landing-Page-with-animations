import Squares from './components/bgtheme/squareblocks'
export const App = () => {
	return (
		<div className='h-screen bg-black relative'>
			<div className='absolute top-0 left-0 h-screen w-full '>
				<Squares
					speed={0.2}
					squareSize={40}
					direction='up' // up, down, left, right, diagonal
					borderColor='#474747'
					hoverFillColor='#121212'
				></Squares>
			</div>
			<div className='relative z-30'>
				<div className='flex justify-center items-center z-30'>
					<h1 className='text-white'>Salom</h1>
				</div>
			</div>
		</div>
	)
}
