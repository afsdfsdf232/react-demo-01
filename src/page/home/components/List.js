import React, { Component } from 'react'
import {  connect } from 'react-redux'
import { ListItem, ListInfo } from '../style'
class List extends Component{
    render(){
        const { lista } = this.props
        return (
            <div>
                {
                    lista.map((item) => {
                        return (
                            <ListItem key={item.id}>
                                <img className='pic' src={item.imgUrl}/>
                                <ListInfo>
                                    <h3 className='title'>{item.title}</h3>
                                    <p className='desc'>{item.desc}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    lista:state.getIn(['home','articeList'])
})
const mapDisoatchToProps = () => ({})
export default connect(mapStateToProps,mapDisoatchToProps)(List)