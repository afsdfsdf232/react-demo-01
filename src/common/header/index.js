import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { searchFocus, searchBlur, getList, mouseEnter, mouseLeave, changePage } from './store/actionCreators'
import { 
            HeaderWrapper, 
            Logo, 
            Nav, 
            NavItem, 
            NavSearch,
            Addition,
            Button,
            SearchWrapper,
            SearchInfo,
            SearchInfoTitle,
            SerchInfoSwitch,
            SearchInfoItem
        } 
        from './style'
// const getListArea= (show) => {
//     if(show){
//         return (
//             <SearchInfo>
//                 <SearchInfoTitle>
//                     热门搜索
//                 <SerchInfoSwitch>
//                     换一批
//                 </SerchInfoSwitch>
//                 </SearchInfoTitle>
//                 <div>
//                     <SearchInfoItem>区块链</SearchInfoItem>
//                     <SearchInfoItem>简书</SearchInfoItem>
//                     <SearchInfoItem>毕业</SearchInfoItem>
//                     <SearchInfoItem>故事</SearchInfoItem>
//                     <SearchInfoItem>美食</SearchInfoItem>
//                     <SearchInfoItem>投稿</SearchInfoItem>
//                 </div>
//             </SearchInfo>
//         )
//     }else{
//         return null
//     }
// }
//无状态组件，能提升性能
//  const Header = (props)=>{
//     const { focused, handleInputFocus, handleInputBlur } = props
//     return (
//         <HeaderWrapper>
//             <Logo/>
//             <Nav>
//                 <NavItem className='left active'>首页</NavItem>
//                 <NavItem className='left'>下载App</NavItem>
//                 <NavItem className='right'>登录</NavItem>
//                 <NavItem className='right'>Aa</NavItem>
//                 <SearchWrapper>
//                     <CSSTransition
//                         in={focused}
//                         timeout={800}
//                         classNames='slide'>
//                         <NavSearch 
//                             className={focused?'focused':''}
//                             onFocus={handleInputFocus}
//                             onBlur={handleInputBlur}>
//                         </NavSearch>
//                     </CSSTransition>
//                     <i className={focused?'focused iconfont':'iconfont'}></i>
//                     { getListArea(focused)}
//                 </SearchWrapper>
//                 <Addition>
//                     <Button className='writting'>写文章</Button>
//                     <Button className='reg'>注册</Button>
//                 </Addition>
//             </Nav>
//         </HeaderWrapper>
//     )
//  }
 class Header extends Component{
     getListArea(){
        const { focused, list, page, handelEnter, handelLeave, mouseIn,handelChangePage, totalPage }=this.props
        const newList = list.toJS()
        const pageList=[]
        if(newList.length){
            for(let i=(page-1)*10;i<(page*10>newList.length?newList.length:page*10);i++){
                pageList.push( 
                    <SearchInfoItem key={newList[i]}>
                        {newList[i]}
                    </SearchInfoItem> 
                )
            }
        }
        if(focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={handelEnter}
                    onMouseLeave={handelLeave} >
                    <SearchInfoTitle>
                        热门搜索
                    <SerchInfoSwitch 
                        onClick={() => handelChangePage(page,totalPage,this.spinIcon)}>
                        换一批
                    </SerchInfoSwitch>
                    <i className='iconfont spin' ref={(icon)=>{this.spinIcon = icon}}/>
                    </SearchInfoTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfo>
            )
        }else{
            return null
        }
    }
    render(){
        const { focused, handleInputFocus, handleInputBlur, list } = this.props
        return (
            <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>Aa</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={800}
                        classNames='slide'>
                        <NavSearch 
                            className={focused?'focused':''}
                            onFocus={()=>{handleInputFocus(list)}}
                            onBlur={handleInputBlur}>
                        </NavSearch>
                    </CSSTransition>
                    <i className={focused?'focused iconfont':'iconfont'}></i>
                    { this.getListArea()}
                </SearchWrapper>
                <Addition>
                    <Button className='writting'>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </Nav>
        </HeaderWrapper>
        )
    }
 }
const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage'])
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        handleInputFocus(list){
            !list.size && dispatch(getList())
            dispatch(searchFocus())
        },
        handleInputBlur(){
          dispatch(searchBlur())
        },
        handelEnter(){
            dispatch(mouseEnter())
        },
        handelLeave(){
            dispatch(mouseLeave())
        },
        handelChangePage(page,totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'') //返回的是字符串
            originAngle = originAngle? parseInt(originAngle,10): 0
            spin.style.transform=`rotate(${originAngle+360}deg)`
            page == totalPage? page=1: page+=1
            dispatch(changePage(page))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header) 