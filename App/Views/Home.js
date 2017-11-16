import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions
} from 'react-native';
import pxToDp from '../Utils/pxToDp';
// import HomeHeader from '../Components/HomeHeader'

const {docWidth, docHeight} = Dimensions.get('window')

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
      <View style={styles.homePage}>
        <Image style={styles.bgImg} source={require('../Asset/mmexport1505715388869.jpg')}>
        </Image>
        <Todo/>
        <Lovetag/>
      </View>
    )
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }
  onEnd = (e) => {
    alert(e.nativeEvent.text)
  }
  render() {
    return (
      <View style={styles.todo}>
        <Text style={styles.todoTitle}>What is your main focus for today?</Text>
          <TextInput
            style={styles.todoInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            onEndEditing={this.onEnd}
          />
      </View>
    )
  }
}

class Lovetag extends React.Component {
  render() {
    return (
      <View style={styles.lovetag}>
        <View style={styles.leftTag}>
          <Image style={styles.face} source={require('../Asset/mmexport1505715388869.jpg')}></Image>
          <View style={styles.basicInfo}>
            <Text style={styles.nickName}>小哥哥</Text>
            <Text style={styles.currentFocus}>to: 跳槽</Text>
          </View>
        </View>
        <View style={styles.rightTag}>
        </View>
      </View>
    )
  }
}
const styles = {
  homePage: {
    flex: 1,
    height: docHeight,
    alignItems: 'stretch',
    justifyContent: 'center',
    position:'relative',
  },
  bgImg: {
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    paddingBottom: pxToDp(50),
    resizeMode:'cover'
  },
  todo: {
    flex: 1,
    width: docWidth,
    position: 'absolute',
    backgroundColor: 'transparent',
    top: pxToDp(150),
    left: pxToDp(20)
  },
  todoTitle: {
    fontSize: pxToDp(50), 
    color: "rgba(255, 255, 255, 0.7)", 
    textAlign: "center"
  },
  todoInput: {
    color: "rgba(255, 255, 255, 0.7)", 
    flex: 1,
    lineHeight: pxToDp(80),
    height: pxToDp(80),
    fontSize: pxToDp(50),
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.7)"
  },
  lovetag: {
    position: 'absolute',
    bottom: pxToDp(150),
    left: pxToDp(0),
    right: pxToDp(0),
  },
  leftTag: {
    flex: 1
  },
  face: {
    width: pxToDp(100),
    height: pxToDp(100),
    borderRadius: pxToDp(50)
  },
  rightTag: {
    flex: 1
  }
}

export default Home
