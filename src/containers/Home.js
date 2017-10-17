import React from 'react'
import HomeHeader from '../components/HomeHeader'
import '../css/home.css'

class Home extends React.Component {
	render() {
		return(
			<div className="homePage">
				<HomeHeader />
			</div>
		)
	}
}

export default Home