import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default class App extends Component {
	render() {
		let size = 8
		return (
			<>
				<Router>
					<Navbar />
					<Routes>
						<Route exact path='/' element={<News key="general" pageSize={size} country="us" category="general" />}></Route>
						<Route exact path='/business' element={<News key="business" pageSize={size} country="us" category="business" />}></Route>
						<Route exact path='/entertainment' element={<News key="entertainment" pageSize={size} country="us" category="entertainment" />}></Route>
						<Route exact path='/health' element={<News key="health" pageSize={size} country="us" category="health" />}></Route>
						<Route exact path='/science' element={<News key="science" pageSize={size} country="us" category="science" />}></Route>
						<Route exact path='/sports' element={<News key="sports" pageSize={size} country="us" category="sports" />}></Route>
						<Route exact path='/technology' element={<News key="technology" pageSize={size} country="us" category="technology" />}></Route>
					</Routes>
				</Router>
			</>
		)
	}
}

