import Squares from './components/bgtheme/squareblocks'
import { Header } from './layouts/header'
export const App = () => {
	return (
		<div className='h-screen bg-black relative'>
			<div className='absolute top-0 left-0 h-screen w-full '>
				<Squares
					speed={0.2}
					squareSize={40}
					direction='up' // up, down, left, right, diagonal
					borderColor='#474747'
					hoverFillColor=''
				></Squares>
			</div>
			<div className='relative z-30'>
				<div className='z-30'>
					<Header />
				</div>
			</div>
		</div>
	)
}
