import React from 'react'
import HomeHeader from '../components/HomeHeader'
import MainFooter from '../components/MainFooter'
import '../css/home.css'

class Home extends React.Component {
  render() {
    return (
      <div className="homePage">
        <HomeHeader/>
        <Todo/>
        <Lovetag/>
        <MainFooter/>
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
        <div className="left">
          <div className="face"></div>
          <div className="basicInfo">
            <div className="nickName">小哥哥</div>
            <div className="currentFocus">to: 跳槽</div>
          </div>
        </div>
        <div className="right">
          21313
        </div>
      </div>
    )
  }
}

export default Home
