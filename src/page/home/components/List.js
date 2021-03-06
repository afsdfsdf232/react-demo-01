import React, { Component } from 'react'
import {  connect } from 'react-redux'
import { getMoreList } from '../store/actionCreateors'
import { ListItem, ListInfo, LoadMore } from '../style'
import { Link } from 'react-router-dom'
class List extends Component{
    render(){
        const { lista, handelMoreInfo } = this.props
        
        return (
            <div>
                {
                    lista.map((item,index) => {
                        return (
                            <Link key={index} to={'/detail?id='+item.id}>
                                <ListItem>
                                    <img className='pic' src={item.imgUrl}/>
                                    <ListInfo>
                                        <h3 className='title'>{item.title}</h3>
                                        <p className='desc'>{item.desc}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={handelMoreInfo}>加载更多</LoadMore>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    lista:state.getIn(['home','articeList'])
})
const mapDisoatchToProps = (dispatch) => ({
    handelMoreInfo(){
      dispatch(getMoreList())  
    }
})
export default connect(mapStateToProps,mapDisoatchToProps)(List)