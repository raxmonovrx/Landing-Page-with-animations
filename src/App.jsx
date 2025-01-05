import { useState } from 'react'
import { Header } from './layouts/header'
import { Main } from './layouts/main'
import { Wrapper } from './layouts/wrapper'

export const App = () => {
	const [isCursorActive, setIsCursorActive] = useState(false)
	return (
		<Wrapper isCursorActive={isCursorActive}>
			<Header toggleCursor={setIsCursorActive} />
			<div className='flex justify-center items-center h-screen'>
				<Main />
			</div>
		</Wrapper>
	)
}
