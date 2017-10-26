import React from 'react'
import MainFooter from '../components/MainFooter'
import '../css/memory.css'

class Memory extends React.Component {
	constructor() {
		super()
		this.state = {
			listArr: []
		}
	}

	componentWillMount = () => {
		this.setState({
			listArr: [{
				title: '小姐姐的生日',
				date: '1994年11月14日',
				type: 0 //type: 0->生日, 1->爱的纪念日, 2->未来某个日子
			}, {
				title: '小哥哥的生日',
				date: '1995年3月2日',
				type: 0
			}, {
				title: '第一次相遇',
				date: '2017年8月9日',
				type: 1
			}]
		})
	}
	
	render() {
		return(
			<div className="memory">
				<MemoryList listArr={this.state.listArr} />
				<MainFooter />
			</div>
		)
	}
}

class MemoryList extends React.Component {
	getBeforeDate = (n) => {
	    var now = new Date();
	    var aftertime = new Date(n);
	    var year = now.getFullYear();
	    var mon= now.getMonth()+1;
	    var day= now.getDate();
	    var year_after = aftertime.getFullYear();
	    var mon_after = aftertime.getMonth()+1;
	    var day_after = aftertime.getDate();
	    var chs = 0;
	    //获取当月的天数
	    function DayNumOfMonth(Year,Month)
	    {
	        return 32 - new Date(Year,Month-1,32).getDate();
	    }
	    if(aftertime.getTime() - now.getTime() < 0){
	        var temp1 = day_after;
	        var temp2 = mon_after;
	        var temp3 = year_after;
	        day_after = day;
	        mon_after = mon;
	        year_after = year;
	        day = temp1;
	        mon = temp2;
	        year = temp3;
	    }
	    if(year === year_after){//不跨年
	        if(mon === mon_after){//不跨年不跨月
	            chs += day_after-day;
	        }else{//不跨年跨月
	            chs += DayNumOfMonth(year,mon)- day+1;//加上第一个不满的
	            for(var i=1;i< mon_after-mon;i++){
	                chs += DayNumOfMonth(year,mon+i);
	            }
	            chs += day_after-1;//加上
	        }    
	    }else{//存在跨年
	        chs += DayNumOfMonth(year,mon)- day+1;//加上开始年份不满的一个月
	        for(var m=1;m<12-mon;m++){
	            chs += DayNumOfMonth(year,mon+m);
	        }
	        for(var j=1;j < year_after-year;j++){
	            if((year+j)%400 === 0 || (year+j)%4 === 0 && (year+j)%100 !== 0){
	                chs += 366;
	            }else{
	                chs += 365;
	            }
	        }
	        for(var k=1;k <= mon_after;k++){
	            chs += DayNumOfMonth(year_after,k);
	        }
	        chs += day_after-1;
	    }
	    if(aftertime.getTime() - now.getTime() < 0){
	        return -++chs;
	    }else{
	         return ++chs;
	    }
	}


	render() {
		return (
			<div className="memoryList">
				<p className="memoryListTitle">我们的纪念日</p>
				<div className="memoryListAdd">
					<i>+</i>
					<span>添加纪念日</span>
				</div>
				<ul>
					{
						this.props.listArr.map((item, index) => {
							return (
								<MemoryItem title={item.title} type={item.type} days={this.getBeforeDate(item.date.match(/\d+/g).join(','))} date={item.date} key={index} />
							)
						})
					}
				</ul>
			</div>
		)
	}
}

class MemoryItem extends React.Component {
	render() {
		return (
			<li className="memoryListItem">
				<i>{this.props.type === 0 ? '🎂' : '❤'}</i>
				<span>{this.props.title}</span>
				<div className="memoryListItemInfo">
					<span>距今 {Math.abs(this.props.days)} 天</span>
					<p>{this.props.date}</p>
				</div>
			</li>
		)
	}
}
export default Memory