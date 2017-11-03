import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
import CameraBtn from '../Components/CameraBtn'
// import HomeHeader from '../Components/HomeHeader'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backImg: ''
    }
  }
  onSelectedImg = (imgs) => {
    if(imgs.length === 1) {
      this.setState({
        backImg: imgs.path
      })
      alert(imgs[0].path)
    }
  }
  render() {
    return (
      <View>
        <Todo/>
        <CameraBtn onSelectedImg={this.onSelectedImg} photos={[]}/>
      </View>
    )
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: 'Useless Placeholder' }
  }
  render() {
    return (
      <View style={styles.homePage}>
        <Image style={styles.bgImg} source={require('../Asset/mmexport1505715388869.jpg')}>
        </Image>
        {/*<Text style={styles.todoTitle}>What is your main focus for today?</Text>
          <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />*/}

      </View>
    )
  }
}

// class Lovetag extends React.Component {
//   render() {
//     return (
//       <div className="lovetag">
//         <div className="left">
//           <div className="face"></div>
//           <div className="basicInfo">
//             <div className="nickName">小哥哥</div>
//             <div className="currentFocus">to: 跳槽</div>
//           </div>
//         </div>
//         <div className="right">
//           21313
//         </div>
//       </div>
//     )
//   }
// }
const styles = {
  homePage: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    position:'relative',
  },
  bgImg: {
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    paddingBottom: 50,
  },
  todoTitle: {
    fontSize: 30, 
    color: "rgba(255, 255, 255, 0.7)", 
    textAlign: "center"
  }
}

export default Home
