import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


class HomeHeader extends React.Component {
	render() {
		return(
			<View style={styles.homeHeader}>
				<Text style={styles.priorDay}>相遇的日子</Text>
				<Text className="timeToPriorDay">过了70天</Text>
				<Icon name="md-navicon-round" color="#aaa" size={22} />
			</View>
		)
	}
}

const styles = {
	homeHeader: {
		flex: 1,
    	height: 20,
    	backgroundColor: 'rgba(0,0,0,0.1)',
    	// padding: 10,
    	textAlign: 'center',
	},
	priorDay: {
		fontSize: 12,
    	lineHeight: 12,
    	color: '#fff',
    	marginBottom: 5,
	}
}
export default HomeHeader