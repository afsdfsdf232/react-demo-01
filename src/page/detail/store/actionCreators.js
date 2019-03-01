import axios from 'axios'
const getDeatailData =(data) =>({
        type:'get_detail_info',
        title: data.title,
        content: data.content
})
export const getDetailInfo = (id) =>{
    return (dispatch) => {
        axios.get('api/detailInfo.json?id='+id).then((res)=>{
            const data = res.data.data
            dispatch(getDeatailData(data))
        })
    }
}