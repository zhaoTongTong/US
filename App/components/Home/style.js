import { Dimensions } from 'react-native';
import pxToDp from '../../utils/pxToDp';
const {docWidth, docHeight} = Dimensions.get('window');

const styles = {
  homePage: {
    flex: 1,
    height: docHeight,
    alignItems: 'stretch',
    justifyContent: 'center',
    position: 'relative',
  },
  bgImg: {
    flex: 1,
    justifyContent: 'flex-end',
    width: docWidth,
    height: docHeight,
    alignItems: 'center',
    paddingBottom: pxToDp(50),
    resizeMode: 'cover'
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
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center"
  },
  todoInput: {
    color: "rgba(255, 255, 255, 0.8)",
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
    bottom: pxToDp(50),
    left: pxToDp(10),
    right: pxToDp(10),
    backgroundColor: "#ffffff",
    borderRadius: pxToDp(15),
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",

  },
  leftTag: {
    margin: pxToDp(10),
    flexDirection: "row",
    alignItems: 'center',
  },
  nickName: {
    color: 'rgb(52,214,206)',
    fontSize: pxToDp(20),
    paddingBottom: pxToDp(10),
  },
  star: {
    color: "#999",
    fontSize: pxToDp(24),
    padding: pxToDp(10),
  },
  currentFocus: {
    fontSize: pxToDp(22),
    paddingLeft: pxToDp(8),
    paddingRight: pxToDp(8),
  },
  face: {
    width: pxToDp(50),
    height: pxToDp(50),
    borderRadius: pxToDp(25),
    margin: pxToDp(8),
  },
  basicInfoReverse: {
    alignItems: 'flex-end',
  },
  rightTag: {
    margin: pxToDp(10),
    flexDirection: "row-reverse",
    alignItems: 'center',
  }
};

export default styles;