import PropTypes from 'prop-types'
import Squares from '../components/bgtheme/squareblocks'
export const Wrapper = ({ children }) => {
	return (
		<div>
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
					<div className='z-30 relative'>{children}</div>
				</div>
			</div>
		</div>
	)
}

Wrapper.propTypes = {
	children: PropTypes.node.isRequired, // `children` bo'lishi kerak va Reactning har qanday valid turini qabul qiladi
}
