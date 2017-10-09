const initialState={
stage:0,
first_enter:true,
message: 'first stage',
avatar: '',
el: '',
}
export default function MessageBox(state=initialState, action) {
    switch (action.type) {
        case 'STAGES':
            return{
                ...state,
                first_enter:(action.payload.stages_payload[action.payload.stage].message!=''?true:false)  ,              
                message: action.payload.stages_payload[action.payload.stage].message,
                avatar: action.payload.stages_payload[action.payload.stage].avatar,
                el: action.payload.stages_payload[action.payload.stage].el,
                stage:action.payload.stage+1,
            }
            break;
    
        default:
        return state
            break;
    }
}