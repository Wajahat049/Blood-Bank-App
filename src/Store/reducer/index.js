const initial_state ={
    logerDonor:""

}


const reducer =(state=initial_state,action)=>{
    switch(action.type){
        case "CHANGE_LOGERDONOR":
            return{
                logerDonor:action.logerDonor
            }

          
    }
    return state

}

export default reducer;