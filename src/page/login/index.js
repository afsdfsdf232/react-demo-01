import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginSwrapper, LoginBox, Input, SelectInput, InputButton, SeCode } from './style'
class Login extends Component{
    render(){
        return (
            <LoginSwrapper>
                <LoginBox>
                    <div className='login'>登录</div>
                    <div>
                        <Input placeholder='账号'/>
                        <Input placeholder='密码'/>
                    </div>
                    <SelectInput>
                        <label> <input name=" " type="checkbox" value="记住我" /> 记住我</label>
                        <a href='#'>登录遇到问题?</a>
                    </SelectInput>
                    <InputButton>
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
    }
}
const mapStateToProps = (state) => ({
    login: state.getIn(["login",'login'])
})
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps,mapDispatchToProps)(Login)