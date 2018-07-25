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
// import FooterTab from './App/components/FooterTab'
import TabNavigator from 'react-native-tab-navigator'
import Toast from 'react-native-easy-toast'
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './App/components/Home/index.js';
import Memory from './App/components/Memory/index.js';
import Message from './App/components/Message/index.js';
import Add from './App/components/AddMemoryDay/index.js';
import Setting from './App/components/Setting/index.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    constructor() {
        super();
        this.state = {
            selectedTab: 'home'
        }
    }

    //导航器函数
    _renderTabarItems(selectedTab, icon, title, Component){
        return (
            <TabNavigator.Item
                //设置选中的位置
                selected={this.state.selectedTab === selectedTab}
                //标题
                title={title}
                //标题样式
                titleStyle={styles.tabText}
                //选中时标题文字样式
                selectedTitleStyle={styles.selectedTabText}
                //图标
                renderIcon={() => <Icon name={icon} color="#999" size={22}/>}
                //选中时图标
                renderSelectedIcon={() => <Icon name={icon} color="rgb(52,214,206)" size={24} />}
                //点击Event
                onPress={() => this.setState({ selectedTab: selectedTab })}
            >
            <Component />
            </TabNavigator.Item>
        )
    }

  render() {
    return (
        <View style={styles.container}>
          <TabNavigator>
              {this._renderTabarItems('home', "md-home", "首页", Home)}
              {this._renderTabarItems('story', "md-images", "故事", Add)}
              {this._renderTabarItems('memory', "md-heart", "纪念日", Memory)}
              {this._renderTabarItems('message', "md-chatboxes", "留言", Message)}
              {this._renderTabarItems('setting', "ios-person", "我的", Setting)}
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
