import axios from 'axios'
export const getDetailInfo = () =>{
    return (dispatch) => {
        axios.get('api/detailInfo.json').then((res)=>{
            // console.log(res)
            const data = res.data.data
            // console.log('kk',data)
            const action = {
                type:'get_detail_info',
                title: data.title,
                content: data.content
            }
            dispatch(action)
        })
    }
}