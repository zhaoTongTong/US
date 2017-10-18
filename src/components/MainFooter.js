import React from 'react'

class MainFooter extends React.Component {
	render() {
		return(
			<div className="mainFooter">
				<a>
					<span>首页</span>
					<i></i>
				</a>
				<a>
					<span>纪念</span>
					<i></i>
				</a>
				<a className="addStory">
					<span>+</span>
					<i></i>
				</a>
				<a>
					<span>留言</span>
					<i></i>
				</a>
				<a>
					<span>设置</span>
					<i></i>
				</a>
			</div>
		)
	}
}

export default MainFooter