import React from 'react'
import HomeHeader from '../components/HomeHeader'
import MainFooter from '../components/MainFooter'
import '../css/home.css'

class Home extends React.Component {
	render() {
		return(
			<div className="homePage">
				<HomeHeader />
				<MainFooter />
			</div>
		)
	}
}

export default Home