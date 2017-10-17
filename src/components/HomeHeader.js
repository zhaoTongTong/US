import React from 'react'

class HomeHeader extends React.Component {
	render() {
		return(
			<div className="homeHeader">
				<p className="priorDay">相遇的日子</p>
				<p className="timeToPriorDay">过了70天</p>
				<i className="mui-icon mui-icon-bars menuBtn"></i>
			</div>
		)
	}
}

export default HomeHeader