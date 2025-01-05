import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { About } from './layouts/about'
import { Contact } from './layouts/contact'
import { Header } from './layouts/header'
import { MainSection } from './layouts/mainSection'
import { ProjectsSection } from './layouts/projects'
import { Wrapper } from './layouts/wrapper'

export const App = () => {
	const [isCursorActive, setIsCursorActive] = useState(false)
	return (
		<Router basename='/'>
			<Wrapper isCursorActive={isCursorActive}>
				<Header toggleCursor={setIsCursorActive} />
				<Routes>
					<Route path='/' element={<MainSection />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<ProjectsSection />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</Wrapper>
		</Router>
	)
}
