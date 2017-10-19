import React from 'react'
import HomeHeader from '../components/HomeHeader'
import MainFooter from '../components/MainFooter'
import '../css/home.css'

class Home extends React.Component {
	render() {
		return(
			<div className="homePage">
				<HomeHeader />
				<Todo />
				<Lovetag />
				<MainFooter />
			</div>
		)
	}
}

class Todo extends React.Component {
	render() {
		return (
			<div className="todo">
				<span>What is your main focus for today?</span>
			    <input type="text"/>
			</div>
		)
	}
}

class Lovetag extends React.Component {
	render() {
		return (
			<div className="lovetag">

			</div>
		)
	}
}

export default Home
