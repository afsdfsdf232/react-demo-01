
import React, { Component } from 'react'
import {  connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../style'
class Recommend extends Component{
    render(){
        return (
            <RecommendWrapper>
                <RecommendItem imgUrl="http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"/>
            </RecommendWrapper>
        )
    }
}
const mapStateToProps = (state) =>({
    reImg: state.getIn(['home','reImg'])
})
const mapDisoatchToProps = (dispatch) => ({
    
})
export default connect(mapStateToProps,mapDisoatchToProps)(Recommend) 