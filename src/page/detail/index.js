import React, { Component } from 'react'
import { getDetailInfo } from './store/actionCreators'
import { DetaileWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
class Detail extends Component{
    render(){
        const { title, content } = this.props
       
        return (
            <DetaileWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}}/>
            </DetaileWrapper>
        )
    }
    componentDidMount(){
        let id = this.props.location.search.split('=')[1]
        this.props.getDetaData(id)
    }
}

const mapStateToProps = (state) =>({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
})
const mapDispatchToProps = (dispatch) =>({
    getDetaData(id){
        const action = getDetailInfo(id)
        dispatch(action)
    }
    
})
export default connect(mapStateToProps,mapDispatchToProps)(Detail)