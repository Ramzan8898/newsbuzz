import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			progress: 0,
			apiKey: process.env.REACT_APP_NEWS_API_KEY
		};
	}

	setProgress = async (progress) => {
		this.setState({ progress: progress })
	}
	render() {
		let size = 8;
		return (
			<>
				<Router>
					<LoadingBar
						color='#f11946'
						progress={this.state.progress}
						height="2px"
					// onLoaderFinished={() => setProgress(0)}
					/>
					<Navbar />
					<Routes>
						<Route exact path='/' element={<News setProgress={this.setProgress} key="general" pageSize={size} country="us" category="general" />}></Route>
						<Route exact path='/business' element={<News setProgress={this.setProgress} key="business" pageSize={size} country="us" category="business" />}></Route>
						<Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" pageSize={size} country="us" category="entertainment" />}></Route>
						<Route exact path='/health' element={<News setProgress={this.setProgress} key="health" pageSize={size} country="us" category="health" />}></Route>
						<Route exact path='/science' element={<News setProgress={this.setProgress} key="science" pageSize={size} country="us" category="science" />}></Route>
						<Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" pageSize={size} country="us" category="sports" />}></Route>
						<Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" pageSize={size} country="us" category="technology" />}></Route>
					</Routes>
				</Router>
			</>
		)
	}
}

