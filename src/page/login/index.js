import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginSwrapper, LoginBox, Input, SelectInput, InputButton, SeCode } from './style'
class Login extends Component{
    render(){
        const { login } = this.props;
        // console.log(login)
        if(!login) {
            return (
                <LoginSwrapper>
                    <LoginBox>
                        <div className='login'>登录{login}</div>
                        <div>
                            <Input placeholder='账号' ref={(input) => {this.account = input}}/>
                            <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
                        </div>
                        <SelectInput>
                            <label> <input name=" " type="checkbox" value="记住我" /> 记住我</label>
                            <a href='#'>登录遇到问题?</a>
                        </SelectInput>
                        <InputButton onClick = {() => this.props.submit(this.account,this.password)}>
                            <span>登录</span>
                        </InputButton>
                        <SeCode>
                            <label></label> 
                            <span>社交账号登录</span>
                            <label></label>
                        </SeCode>
                    </LoginBox>
                </LoginSwrapper>
            )
        }else{
            return <Redirect to='/'/>
        }
        
    }
}
const mapStateToProps = (state) => ({
    login: state.getIn(["login",'login'])
})
const mapDispatchToProps = (dispatch) => ({
    submit(account,passw){
        if(account.value && passw.value){
            const action = {
                type: "change_login"
            }
            dispatch(action)
        }else{
            alert('请输入正确的用户名和用户密码!')
        }
       
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)