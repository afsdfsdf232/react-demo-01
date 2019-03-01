import styled from 'styled-components'
import h from '../../statics/h.png'
export const LoginSwrapper = styled.div`
    background: #eee;
    height: 900px;
    
`
export const LoginBox = styled.div`
    
    width: 400px;
    height: 500px;
    margin: 0px auto;
    background: #fff;
    box-shadow: 0 0 8px reba(0,0,0,.1);
    div {
        box-sizing: border-box;
        padding-top: 30px;
        margin-top: 20px
    }
    .login {
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
        font-size: 20px;
        text-align: center;
        width: 56px;
        margin: 0 auto;
    }
`
export const Input = styled.input`
    margin: 0 auto;
    display: block;
    width: 300px;
    height: 50px;
    line-height: 30px;
    padding-left:20px;
    color: #777;
    border: 1px solid #c8c8c8; ;

    border-radius: 4px 4px 0 0
`
export const SelectInput = styled.div`
    margin: 0 auto;
    display: flex;
    width: 326px;
    flex-direction: row;
    flex-wrap: nowrap;
    color: #969696;
    justify-content: space-between;
    a {
        text-decoration: none;
        color: #999
    }
`
export const InputButton = styled.div`
    position relative;
    margin: 20px auto 0;
    background: #3194d0;
    width: 300px;
    height: 43px;
    padding: 9px 18px;
    cursor: pointer;
    outline: none;
    line-height: 43px;
    border-radius: 25px;
    text-align: center;
    clear: both
    span{
        position: absolute;
        top: -1px;
        cursor: pointer;
        font-size: 18px;
        left: 129px;
        color: #fff;
    }
    &:hover{
        background: #42c02e;
    }
   
` 
export const SeCode = styled.div`
    display:flex
    width: 300px;
    margin: 50px auto 0;
    justify-content: space-around;
    label{
        // font-size: 56px;
        background: url(${h});
        width: 56px;
        height: 5px
    }
    span {
        font-size: 12px;
        color: #b5b5b5;
        cursor: pointer;
    }
`