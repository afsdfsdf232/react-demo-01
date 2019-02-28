import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'
class Topic extends Component{
    render(){
        const { list } = this.props
        return (
            <TopicWrapper>
                { list.map((item)=>{
                     return(
                        <TopicItem key={item.id}>
                            <img className='topic-pic' src= {item.imgUrl} />
                            {item.title}
                        </TopicItem>
                        
                     )
                 })}
            </TopicWrapper>
        )
    }
}
const mapStateToProps = (state) =>({
    list: state.getIn(['home','topicList'])
})
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps,mapDispatchToProps)(Topic)