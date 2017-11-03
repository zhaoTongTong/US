/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import FooterTab from './App/Components/FooterTab'
import TabNavigator from 'react-native-tab-navigator'
import Toast from 'react-native-easy-toast'
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './App/Views/Home'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
      super(props);
      this.state = {
          selectedTab: 'home'
      }
  }

  render() {
    return (
        <View style={styles.container}>
          <TabNavigator>
              <TabNavigator.Item
                  //设置选中的位置
                  selected={this.state.selectedTab === 'home'}
                  //标题
                  title="首页"
                  //标题样式
                  titleStyle={styles.tabText}
                  //选中时标题文字样式
                  selectedTitleStyle={styles.selectedTabText}
                  //图标
                  renderIcon={() => <Icon name="md-home" color="#999" size={22}/>}
                  //选中时图标
                  renderSelectedIcon={() => <Icon name="md-home" color="rgb(52,214,206)" size={24}/>}
                  //点击Event
                  onPress={() => this.setState({ selectedTab: 'home' })}>
                  <View style={styles.page}>
                      <Home />
                  </View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'story'}
                  title="故事"
                  titleStyle={styles.tabText}
                  selectedTitleStyle={styles.selectedTabText}
                  renderIcon={() => <Icon name="md-images" color="#999" size={22}/>}
                  renderSelectedIcon={() =>  <Icon name="md-images" color="rgb(52,214,206)" size={24}/>}
                  onPress={() => this.setState({ selectedTab: 'story' })}>
                  <View style={styles.page}>
                      <Text style={{fontSize:18,padding:15,color: '#999',textAlign: 'center'}}>故事</Text>
                  </View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'memory'}
                  title="纪念日"
                  titleStyle={styles.tabText}
                  selectedTitleStyle={styles.selectedTabText}
                  renderIcon={() => <Icon name="md-heart" color="#999" size={22}/>}
                  renderSelectedIcon={() => <Icon name="md-heart" color="rgb(52,214,206)" size={24}/>}
                  onPress={() => this.setState({ selectedTab: 'memory' })}>
                  <View style={styles.page}>
                      <Text style={{fontSize:18,padding:15,color: '#999',textAlign: 'center'}}>纪念日</Text>
                  </View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'message'}
                  title="留言"
                  titleStyle={styles.tabText}
                  selectedTitleStyle={styles.selectedTabText}
                  renderIcon={() => <Icon name="md-chatboxes" color="#999" size={22}/>}
                  renderSelectedIcon={() => <Icon name="md-chatboxes" color="rgb(52,214,206)" size={24}/>}
                  onPress={() => this.setState({ selectedTab: 'message' })}>
                  <View style={styles.page}>
                      <Text style={{fontSize:18,padding:15,color: '#999',textAlign: 'center'}}>留言</Text>
                  </View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'setting'}
                  title="我的"
                  titleStyle={styles.tabText}
                  selectedTitleStyle={styles.selectedTabText}
                  renderIcon={() => <Icon name="ios-person" color="#999" size={22}/>}
                  renderSelectedIcon={() => <Icon name="ios-person" color="rgb(52,214,206)" size={24}/>}
                  onPress={() => this.setState({ selectedTab: 'setting' })}>
                  <View style={styles.page}>
                      <Text style={{fontSize:18,padding:15,color: '#999',textAlign: 'center'}}>我的</Text>
                  </View>
              </TabNavigator.Item>
          </TabNavigator>
          <Toast position={"center"} ref="toast"/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        fontSize: 12,
        color: '#999'
    },
    selectedTabText: {
        fontSize: 12,
        color: 'rgb(52,214,206)'
    },
    icon: {
        width: 22,
        height: 22
    },
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
});
