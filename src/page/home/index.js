import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend' 
import { getList } from './store/actionCreateors'
import { connect } from 'react-redux' 
import Writer from './components/Writer'
import {  SHOWSCROLLTRUE, SHOWSCROLLFALSE } from './store/actionType'
import { 
    HomeWrapper, 
    HomeLeft, 
    HomeRight,
    BackTop 
    } 
    from './style'


class Home extends Component{
    handelScrollTop(){
        window.scrollTo(0,0)
    }
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4614/860581df72e818f1c4046b077f6e20ea2069c6ca.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {  this.props.isShow? <BackTop title="回到顶部" onClick={this.handelScrollTop}><span  className='top'></span></BackTop> : null }
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeListData()
        window.addEventListener('scroll', this.props.scrollToTop);
        
    }
}
const mapStateToProps = (state) => ({
    isShow:state.getIn(['home','isShow'])
})
const mapDispatchToProps = (dispatch) =>({
        changeHomeListData(){
            const action = getList()
            dispatch(action)
        },
        scrollToTop(){
            let h = window.screen.height
            let scrollTop  = document.documentElement.scrollTop;  //滚动条滚动高度
            
            if(scrollTop>h/2){
                const action = {
                    type: SHOWSCROLLTRUE
                }
                dispatch(action)
            }else{
                const action = {
                    type: SHOWSCROLLFALSE
                }
                dispatch(action)
            }
        }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)