
import React, { Component } from 'react'
import {  connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../style'
class Recommend extends Component{
    render(){
        const { reImg } = this.props
        return (
            <RecommendWrapper>
                {reImg.map((item) => {
                    return (
                        <RecommendItem imgUrl={item.imgUrl} key={item.id}/>
                    )
                })}
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