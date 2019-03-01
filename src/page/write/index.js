import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
class Write extends Component{
    render(){
        if(this.props.login){
            return (
                <div style={{width: '960px',height:'800px',background:'#eee',border:'1px solid gray',margin: '0 auto'}}>
                    <textarea style={{width: '500px',height:'400px',marginLeft: '230px',marginTop:'160px'}}/>
                </div>
            )
        }else{
          return  <Redirect to='/login'/>
        }
    }
}
const mapStateToProps = (state) =>({
    login: state.getIn(["login",'login'])
})
export default connect(mapStateToProps,null)(Write)