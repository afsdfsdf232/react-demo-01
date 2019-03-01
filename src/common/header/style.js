import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
import fa from '../../statics/fa.png'
import spin from '../../statics/spin.svg'
export const HeaderWrapper = styled.div`
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    min-width: 1168px;
`
 export const Logo = styled.div`
    background: url(${logoPic});
    position: absolute;
    top: 0;
    left: 0;
    height: 56px;
    width:100px;
    background-size: contain
 `
 export const Nav = styled.div`
    height: 100%;
    width:960px;
    margin:0 auto;
    padding: 0 70px;
    box-sizing: border-box;
`
 export const NavItem = styled.div`
    line-height: 56px;
    padding:0 15px;
    font-size:17px;
    color: #333;
    cursor: pointer;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color:#ea6f5a
    }
 `
 export const SearchWrapper = styled.div`
    float: left;
    position:relative;
    .iconfont {
        display:block;
        background:url(${fa});
        width:25px;
        height:25px;
        background-size: contain;
        position:absolute;
        right: 5px;
        line-height:30pz;
        text-align: center;
        bottom: 5px;
        &.focused {
            // background-color:#777;
            // color: #fff
        }

    }
 `
 export const NavSearch = styled.input.attrs({
     placeholder: '搜索'
 })`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius:19px;
    margin-top:9px;
    padding: 0 40px 0 20px;
    box-sizing: border-box;
    background: #eee;
    font-size: 14px;
    color:#777;
    &::placeholder {
        color: #999
    }
    &.focused {
        width: 240px
    }
    &.slide-enter {
        transition: all .8s ease-out
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .8s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
 `
 export const SearchInfo=styled.div`
    position: absolute;
    left:0;
    top: 58px;
    width: 240px;
    padding: 0 20px;
    box-sizing: border-box
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background-color: white
    .iconfont {
        width:18px;
        height:18px;
        background:url(${spin});
        position: absolute;
        right:70px;
        top: 15px
    }
    .spin {
        transition: All 0.6s ease-in-out;
        transform-origin: center center;
        
    }
 `
 export const SearchInfoTitle=styled.div`
    margin-top:15px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color:#969696
 `
 export const SerchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
 `
 export const SearchInfoItem = styled.a`
    display: inline-block;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border:1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    float: left;
    margin: 5px 10px 12px 0;
    cursor: pointer;
 `
 export const Addition=styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height:56px;
 `
 export const Button=styled.div`
    float: right;
    margin-top: 9px;
    line-height:38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    margin-right:20px;
    padding:0 20px;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background-color:#ec6149
    }
 `