import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

class MainFooter extends React.Component {
	render() {
		return(
			<div className="mainFooter">
				<Link to="/">
					<span>首页</span>
					<i></i>
				</Link>
				<Link to="/memory">
					<span>纪念</span>
					<i></i>
				</Link>
				<Link  to="/add" className="addStory">
					<span>+</span>
					<i></i>
				</Link>
				<Link to="/message">
					<span>留言</span>
					<i></i>
				</Link>
				<Link to="/setting">
					<span>设置</span>
					<i></i>
				</Link>
			</div>
		)
	}
}

export default MainFooter