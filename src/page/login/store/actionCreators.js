export const outLogin = () =>{
    return (dispatch) => {
        const action = {
            type: 'chang_out_login'
        }
        dispatch(action)
    }
}